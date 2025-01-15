---
title: Synth Player
---

## Synth Player Objekt

Renardo verfügt über eine Reihe verschiedener virtueller Instrumente, die Du als Playerobjekte verwenden kannst.

Um einen Blick auf die bestehende Auswahl von Renardo SynthDefs benutze einfach folgenden Befehl:
```python
print(SynthDefs)
```

Wähle eine *SynthDef* Instrument und erstelle ein Renardo Player-Objekt mit der Doppelpfeil-Syntax wie im Beispiel unten. In Renardo sind alle zweistelligen Variablennamen wie `p1`, `zz` oder `k7` für **Player()**-Objekte reserviert. Die Variable kann aus 2 Buchstaben oder 1 Buchstaben + 1 Nummer (z.B. pp oder s1) bestehen.

Die **>** in Python ist in der Regel für eine Art Operation reserviert, wie + oder -, aber es ist in Renardo nicht der Fall.

Im folgenden Beispiel wird die Variable **p1** einen Player()-Object mit **pluck** als Synth/Instrument erstellen. Erstellen eines Player-Objekts mit einem Synthesizer und keine Argumente werden eine einzige Note auf der Mitte C, standardmäßig, wiederholt, bis gestoppt.
```python
p1 >> pluck()
```

Um ein einzelnes Playerobjekt zu stoppen, führen Sie einfach **p1.stop()** aus. Um alle Player-Objekte zu stoppen, können Sie **CTRL+.** drücken, was eine Verknüpfung für den Befehl ist **Clock.clear()**.


---
### Attribut *degree*


Wenn Du deinem Instrument p1 jetzt eine Zahl gibst, wird es diese Noten spielen. Die Standardnote ist C, welche im vorherigen Beispiel p1 >> pluck() gespielt wurde. Mit einer Liste in eckigen Klammern kannst du nun eine Folge von Noten erzeugen.
```python
s1 >> pluck([0,2,4])
```

Die Noten, die wir einem Spieler geben, welche in diesem Fall die Zahlen *0*, *2* und *4* sind, heißt **degree**. So kann das obige Beispiel auch so aussehen:
```python
s1 >> pluck(degree=[0,2,4])
```

Verwende einen TimeVar-Function, um den Trigger jedes Notenspielers über die Zeit zu steuern. Wenn Sie kein Timing verwenden, wird jeder Beat als Standard gespielt
```python
s1 >> pluck(var([0,2,4]))
```

Um den jeweiligen Noten eine Zeit zuzuordnen, verwende var. Im folgenden Beispiel wird jede Note 4 Takteinheiten gespielt:
```python
s1 >> pluck(var([0,2,4], 4))
```

Folgende Zuweisung erfolgt:

**Beat 0 –> Note 0 | Beat 4 –> Note 2 | Beat 8 –> Note 4 | Beat 12 –> Note 0 | Beat 16 –> Note 2 |…**


Um zu überprüfen, welche Note im Moment Spieler ist, kannst Du folgenden Code mit **degree** innerhalb der Pythons **print()** Funktion verwenden:
```python
print(s1.degree)
```

Benutze eine weitere Liste, um Noten eine explizite Zeit zu geben:
```python
s1 >> pluck(var([0,2,4], [2,2,4]))
```

Du kannst Noten und Variablen gruppieren, indem du mehrere Werte von Argumenten in runden Klammern einfügst. Im folgenden Beispiel spielen wir 2 Noten gleichzeitig und erweitern den Stereoeffekt im Attribut _pan_:
```python
p2 >> bass([(0,4),(0,2)], dur=4, pan=(-1,1))
```

Du kannst sogar ein Spielerobjekt einem anderen Spieler folgen lassen. Im Beispiel fügt s2 eine Triade zu jeder gespielten Bassnote von s1 hinzu:
```python
s1 >> bass([0,2,3,4], dur=4)
s2 >> pluck(dur=0.5).follow(s1) + (0,2,4)
```

Neben **_.follow()_** kannst du auch das Argument **_.degree_** (ohne Klammern) verwenden, um anderen Spielern zu folgen:
```python
s3 >> pluck(s1.degree + 2)
```

Es ist auch möglich, **degree** zu manipulieren, indem dem Spielerobjekt eine Reihe von Zahlen hinzugefügt werden. Dies erhöht die 4. Note gespielt von 2 Grad:
```
p1 >> pads([0,1,2,3]) + [0,0,0,2]
```

Und das erhöht jede dritte Note um 2:
```
p1 >> pads([0,1,2,3]) + [0,0,2]
```

Diese Werte lassen sich zusammenfügen und schichten
```
p1 >> pads([0,1,2,3]) + [0,1,[0,(0,2)]]
```

Dieses Verhalten ist besonders nützlich bei der Anwendung der Folgemethode.
```
b1 >> bass([0,4,5,3], dur=2)
p1 >> pads().follow(b1) + [2,4,7]
```

**Als nächstes kannst Du den Spieler planen, Dinge zu tun!**

Dies wird p1 sagen, um die Noten alle 4 Schläge umzukehren:
```
p1 >> pads([0,2,4,6])
p1.every(4, "reverse")
```

Du kannst Methoden zusammenketten, indem Du sie am Ende der ursprünglichen Zeile anlegst:
```
p1 >> pads([0,2,4,6]).every(4, "reverse")
```

Um **reverse** zu stoppen, verwende **never**:
```
p1.never("reverse")
```

**Hier sind ein paar andere Methoden, die Du verwenden kannst!**

Mit **"stutter"** wird die gleiche Note **n** Anzahl der Zeiten mit verschiedenen angegebenen Attributen gespielt
```
p1.every(4, "stutter", 4, oct=4, pan=[-1,1])
```

**rotate** bewegt alle Werte um 1 in ihrer Reihenfolge:
```
p1.every(4, "rotate")
```

Um die Reihenfolge der Noten zu randomisieren, verwende **"shuffle"**:
```
p1.every(4, "shuffle")
```


---
### Benutze andere Attribute

Über benannte Attribute vergebene Werte prägen die Art und Weise, wie das Instrument klingt und gespielt wird. Es ist möglich, andere Argumente genauso zu verwenden wie die oben genannten Beispiele mit **degree**. Zum Beispiel **s1.oct**, **s1.dur** und so weiter.

Liste aller universellen Attribute:
```python
print(Player.get_attributes())
```

Liste alle Attribute einer bestimmten SynthDef:
```python
print(Player("wobblebass").get_extra_attributes())
```

Liste aller Standard-fx-Attribute des Player()-Objekts:
```python
print(Player.get_fxs())
```

Du kannst sehen, welche Effekte durch Auswertung zur Verfügung stehen
```python
print(FxList)
```

Nutzen wir zum Beispiel den Hochpassfilter. Du kannst sehen, wie es so beschrieben ist:

"<Fx 'highPassFilter' -- args: hpr, hpf>"

Jeder Effekt hat ein "master" als Hauptargument und dann Subargumente. Hier ist das Hauptargument **hpf** (kurz für Hochpassfilter) und das Subargument **hpr** (kurz für Hochpassresonanz). Der Effekt wird nur addiert, wenn das Hauptargument nicht Null ist:
```python
d1 >> dirt([0,4,2,1], dur=1/2, hpf=4000)
```

Dies setzt den Hochpassfilter auf 4000 Hz, so dass nur Frequenzen im Audiosignal *oben*, die tatsächlich gehört werden. Wir ändern den Resonanzwert. Es ist Standardwert ist 1, also machen wir es kleiner:
```python
d1 >> dirt([0,4,2,1], dur=1/2, hpf=4000, hpr=0.3)
```

Einen Unterschied? Wir können Muster/Vars in unseren Auswirkungen verwenden, um sie im Laufe der Zeit verändern zu lassen:
```python
d1 >> dirt([0,4,2,1], dur=1/2, hpf=linvar([0,4000],8), hpr=P[1,1,0.3].stretch(8))
```

Im folgenden Beispiel wird Octave **oct** erhöht (Default ist 5), die Notenspielzeit **dur** (Standard ist 1) und die Lautstärke variiert (Standard ist 1).

**Hinweis: Die Standard-Oktave in Renardo ist 5, die in der klassischen Musiktheorie ist 3!**

```python
s1 >> pluck([0,2,4], oct=6, dur=[1,0.5,0.5], amp=[1,0.75,0.75])
```

Argumente können ganze Zahlen, Floating Punkte, Fraktionen, Listen sein,
Tupel oder Mix
```python
p1 >> pluck([0,0,0], dur=2)
p1 >> pluck([0,0,0], dur=1.743)
p1 >> pluck([0,0,0], dur=[0.25,0.5,0.75])
p1 >> pluck([0,0,0], dur=[1/4,1/2,3/4])
p1 >> pluck([0,0,0], dur=[1/4,0.25,3])
```

Du kannst auch Werte den Attributen von Spielerobjekten direkt zuordnen
```python
p1 >> pluck([0,2], oct=5)

p1.oct = 4
```

Hier einige nützliche Attribute, die Du bei der Handhabung Deiner Spieler verwenden kannst

Spiele nur diesen Spieler, alle anderen sind stumm
```python
p1.solo() # default value is 1 (solo on)
```

Und schalte Solo ab.
```python
p1.solo(0)
```

Stop (not just mute) the other players
```python
p1.only()
```

---
### Attribute referenzieren

Du kannst Variablen außerhalb eines Players einsetzen
```python
pitches = P[0,1,2,3,4]
harmony = pitches + 2

print(pitches)
print(harmony)

p1 >> pluck(pitches)
p2 >> star(harmony)
```

Wenn Sie die Notendauer des zweiten Instrumentes anders ist, könnte es nicht die gewünschte Wirkung haben
```python
p1 >> pluck(pitches)
p2 >> star(harmony, dur=1/2)
```

Es ist möglich, dass ein Player-objekt genau das spielt, was ein anderer Player ist. Um einen anderen Spieler folgen zu lassen, verwende einfach die folgende Methode:
```python
p1 >> pluck(pitches)
p2 >> star(dur=1/2).follow(p1) + 2
```

Du kannst auch explizit Referenzattribute wie **pitch** oder **dur** nutzen:
```python
p2 >> star(p1.pitch) + 2  # this is the same as .follow(p1)
```

Funktioniert auch für andere Attribute
```python
p1 >> pluck(pitches)
p2 >> star(dur=p1.dur).follow(p1) + 2
```

Du kannst auf den aktuellen Wert verweisen und testen. Das == gibt eine **1** zurück, wenn wahr und eine **0** wenn falsch.
```python
print(p1.degree)
print(p1.degree == 2)
```

So kannst Du Konditionen auch nutzen:
```python
p1 >> pluck([0,1,2,3], amp=(p1.degree==1))
p1 >> pluck([0,1,2,3], amp=(p1.degree>1))
```

Oder ändere es auf einen andere **amp** durch Multiplikation mit 4:
```python
p1 >> pluck([0,1,2,3], amp=(p1.degree==1)*4)
```

Kette mehrere Bedingungen zusammen
```python
p1 >> pluck([0,1,2,3], amp=(p1.degree==1)*4 + (p1.degree==2)*1)
```

Das ist dasselbe wie:
```python
p1 >> pluck([0,1,2,3], amp=p1.degree.map({1:4, 2:1}))
```

---
### Rest(Ruhe)

Reste können durch die Verwendung eines Restobjekts in der **dur** Sequenz hinzugefügt werden. Rest verhindert die Note zu spielen, welche gespielt worden wäre. Ohne Rest würden 5 Notizen (ja, ein dur=1 würde funktionieren, lässt sich aber explizit das nächste Beispiel entgegenstellen)
```python
p1 >> pads([0,1,2,3,4], dur=[1,1,1,1,1])
```

Mit einer Ruhe(Rest) ... 4 Noten und eine Ruhe, Note "4" ist für 4 Beats gestillt:
```python
p1 >> pads([0,1,2,3,4], dur=[1,1,1,1,rest(4)])
```

---
### Referenz: Attribute 


---
**amp** - Amplitude (Standard ist 1) 

Setzt das Volumen der Note/Pattern
```python
d1 >> play("*", dur=1/2, amp=1)
```

Halbe Lautstärke
```python
d1 >> play("*", dur=1/2, amp=.5)
```

Erzeuge ein Muster durch Lautstärke **amp**
```python
d1 >> play("*", dur=1/2, amp=[1,0,1,1,0])
```

---
**amplify** - Änderung der Lautstärke durch Multiplikation gegen den vorhandenen Wert (anstatt überschrieben)

Erstellen eines Musters mit **amplify**
```python
d1 >> play("*", dur=1/2, amp=[1,0,1,1,0])
d1 >> play("*", dur=1/2, amplify=[.5,1,0])
```

Eine Pause in der Musik einrichten (Spiel bei voller Lautstärke für 28, dann 0 für 4)
```python
p1 >> blip([0,1,2,3], amplify=var([1,0],[28,4]))
```

---
**bend**


---
**benddelay** - See bend

---
**bits** - Die Bittiefe in der Anzahl der Bits, auf die das Signal reduziert wird; dies ist ein Wert zwischen 1 und 24, wo andere Werte ignoriert werden. Verwende **crush**, um die Menge der Reduktion auf die Bitrate einzustellen (Standards auf 8)

---
**bitcrush** - See bits

---
**blur**

---
**bpf** - Band Pass Filter

---
**bpnoise** - See bpf

---
**bpr** - Sehe unter bpf

---
**bpm**

---
**buf**

---
**channel**

---
**chop** - 'Hackt' das Signal in Stücke mit einer niederfrequenten Impulswelle über dem Sustain **sus** einer Note.

---
**coarse**

---
**comb delay** - Sehe unter echo

---
**crush**

---
**cut** - Schneidet eine Dauer
```python
p1 >> pluck(P[:8], dur=1/2, cut=1/8)
p1 >> pluck(P[:8], dur=1/2, cut=1/4)
p1 >> pluck(P[:8], dur=1/2, cut=1/2)
```

---
**cutoff**

---
**decay** - Sehe echo

---
**degree** - Der Grad der Note oder Tonhöhe kann durch Stichwort **degree** and/or **pitch** (auch die erste Position) angegeben werden
```python
p1 >> blip(degree=[0,1,2,3])
```

Das ist dasselbe wie:
```python
p1 >> blip([0,1,2,3])
```

Nur spielt die **Root** Note des Akkords
```python
b1 >> bass(p1.degree[0])
```

---
**delay** - Eine Zeitdauer zu warten, bevor die Informationen an SuperCollider gesendet wird (Standards auf 0)

Verzögert jede 3 Note um 0.1
```python
p1 >> blip([0,1,2,3], delay=[0,0,0.1])
```

Verzögert jede 3 Note um 0.5
```python
p1 >> blip([0,1,2,3], delay=[0,0,0.5])
```

Spielt die Note einmal für jede unterschiedliche Verzögerung
```python
p1 >> blip([0,1,2,3], delay=(0,0.1))
p1 >> blip([0,1,2,3], delay=(0,0.25))
p1 >> blip([0,1,2,3], delay=(0,.1,.2,.3))
```

---
**dist**

---
**dur** - Dauer (Standards auf 1 und 1/2 für den Sample Player)

---
**echo** - Titel Keyword: echo, Attribut Keyword(s): decay - Setzt die Abklingzeit für jeden Echoeffekt in Beats, arbeitet am besten auf Sample Player (Standards auf 0) - Multipliziert gegen den Sustain-Wert
```python
d1 >> play("x-o-", echo=0.1)
d1 >> play("x-o-", echo=0.5)
p1 >> pluck(P[:8], echo=.25)
p1 >> pluck(P[:8], echo=.5)
p1 >> pluck(P[:8], echo=.5, decay=.5)
```

---
**env**

---
**fmod**

---
**formant**

---
**freq**

---
**hpf** - High Pass Filter - Filtert alle Frequenzen unter dem angegebenen Wert aus, entfernt niedrigere Frequenzen

4000 hertz
```python
p1 >> pluck(P[:8], dur=1/2, hpf=4000)
```

HPF ist 0 für 4 Beats, dann 4000 für 4 Beats
```python
p1 >> pluck(P[:8], dur=1/2, hpf=var([0,4000],[4,4]))
```

Lineare Änderung auf hpf von 0 nehmen 4 Schläge zu 4000, 4 Schläge zurück zu 0
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[4,4]))
```

Lineare Änderung auf hpf von 0 nehmen 8 Beats, um auf 4000 zu kommen, dann zurück auf 0
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]))
```

Mit Resonanzwechsel (Standard ist 1)
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]), hpr=.5)
```

Mit Resonanzwechsel als Linvar
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]), hpr=linvar([0.1,1],12))
```

---
**hpr** - Sehe hpf

---
**lpf** - Low Pass Filter - Filtert alle Frequenzen über dem angegebenen Wert aus, entfernt höhere Frequenzen

4000 hertz
```python
p1 >> pluck(P[:8], dur=1/2, lpf=400)
```

Mit Resonanzwechsel als Linvar
```python
p1 >> pluck(P[:8], dur=1/2, lpf=linvar([500,4000],[8,0]), lpr=linvar([0.1,1],12))
```

---
**lpr** - Sehe lpf

---
**midinote**

---
**pan** - Panning, wo -1 ist weit links, 1 ist weit rechts (Standards zu 0)

---
**pitch** - Sehe degree

----
**pshift**

---
**oct**

---
**rate** - Variables Schlüsselwort für misc. Änderungen an einem Signal. Z. Wiedergaberate des Sample Players (Standards zu 1)

---
**room** - Titel Stichwort: Zimmer, Attribute Stichwort(e): mix

Das Raumargument gibt die Größe des Raumes an
```python
d1 >> play("x-o-", room=0.5)
```

Mischen ist die Trocken/Nass-Mischung vom Reverb oder wie viel das Reverb mit der Quelle vermischt wird. 1 ist alles reverb, 0 ist überhaupt kein reverb. (Standard 0,1)
```python
d1 >> play("x-o-", room=0.5, mix=.5)
```

---
**reverb** - Sehe Room

---
**sample** - Spezielles Schlüsselwort für Sample Players; wählt eine andere Audiodatei aus der Datenbank der Samples für ein Sample-Zeichen aus.

---
**scale**

---
**shape**

---
**slide** - Slide To - Slides' den Frequenzwert eines Signals zu freq * (slide+1) über die Dauer einer Note (Standards auf 0)
```python
p1 >> pluck(P[:8], dur=1/2, slide=1)
p1 >> pluck(P[:8], dur=1/2, slide=12)
p1 >> pluck(P[:8], dur=1/2, slide=var([0,-1],[12,4]))
```

---
**slidedelay**

---
**slidefrom**

---
**slider**

---
**spread**

---
**spin**

---
**striate**

---
**stutter**

---
**sus** - Sustain (Standards zu `dur`)

---
**swell**

---
**vib** - Vibrato - Titel Stichwort: vib, Attribute Keyword(s): Vibrato (Standards auf 0)
```python
p1 >> pluck(P[:8], dur=1/2, vib=12)
```

Mit Kind Attribut, vibdepth (Standard 0.2)
```python
p1 >> pluck(P[:8], dur=1/2, vib=12, vibdepth=0.5)
```

---
**vibdepth** - Sehe vib


---
### Try this

1.  _Verwende **print(SynthDef)** um alle verfügbaren Synthesizer zu sehen und auszuprobieren._
2.  _Erstelle eine kleine Basslinie mit 1-8 Noten, Akkorden mit 1-8 Akkorden und eine kleine Melodie._
3.  _Verwende einige der Attribute: die Oktavvariable **oct=**, die Dauervariable **dur=** und / oder der **amplify=** um ein besseres Ergebnis zu erhalten!_

**Hinweis: Wenn Du Attributwerte ausprobierst, verwende niedrigere Amplitude, wenn Du Kopfhörer verwendest, um dich vor Ohrenschädigungen zu schützen, oder verwende Lautsprecher stattdessen!**