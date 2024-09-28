
## Vorbereitung


**Die folgenden Richtlinien helfen und schützen Deine Ohren und Deine Ausrüstung als Anfänger mit Renardo.** 

---

**Activiere "SafetyNet"**

SafetyNet ist ein SuperCollider Quark, der Benutzer vor gefährlichen Audiosignalen schützt. Installiere das notwendige Modul in SuperCollider mit der folgenden Befehlszeile:

```
Quarks.install("SafetyNet")
```

Gehe mit Deinem Cursor über die jeweilige Zeile und drücke _**Ctrl + Return (Cmd + Enter)**_ um den Befehl auszulösen.

Hinweis: Zur Installation von Quark-Elementen gibt es eine grafische Fensterversion. Verwende dazu die folgende Befehlszeile:

```
Quarks.gui
```

---

**Immer langsam starten**

Wenn Du mit einem neuen Spieler beginnen, wird es empfohlen, beginnend mit niedrigerem Volumen. Die Synths oder Samples können unvorhersehbar laut erscheinen, abhängig von den Änderungen der Attribute. Darüber hinaus wird es in seiner gesamten Erfahrung schöner klingen, wenn ein Instrument mit zunehmendem Volumen kommt, statt andere Geräusche im Mix zu überwältigen.

```python
p1 >> pluck(amplify=0.1) ... p1 >> pluck(amplify=0.3)
```

---

**Experimentiere mit Sorgfalt**

Sei vorsichtig, während Du Attributwerte beim Experimentieren verwendest. Zum Beispiel kann eine hohe Oktave zu schmerzenden Geräuschen führen, die nicht nur Deine Ausrüstung Deiner Maschine beschädigen können, sondern auch Deine Ohren, während Du Kopfhörer trägst.

In der traditionellen Musiktheorie ist die Oktave der Mitte C 3. Es ist jedoch 5 in Renardo.
```python
oct=5
```

Schlechtes Beispiel:
```python
oct=60
```

Um alle Standardwerte der Grundattribute eines Players zu erhalten, verwende:
```python
print(Player("pluck").info())
```

---

## Einleitung


### Was ist Live Coding?


*   Interaktives Programmieren als Kunstperformance wie Musik- oder Videokunst

_**“Live Coding ist eine neue immer interessantere Richtung in der elektronischen Musik und in Videokunst. Live Coders enthüllen und verdrahten die Innereien einer Software, während sie improvisierte Musik erzeugt.”**_ - toplap.org

*   Verwenden von Code zur Beschreibung von Regeln für ein Kunstwerk
    
*   Live-Notation / Komposition als Performance
    
*   Der Code kann in Echtzeit geändert und erneut ausgeführt werden, während das Programm weiterlaeuft (Musik während der Ausführung komponieren).
    
*   Bringt Computersprache in ein soziales Umfeld und macht so das Codieren zu einer sozialen Aktivität


---
### Warum Code für Musik verwenden?


*   Klassische Musik mit Notation auf Blättern ist bereits ein Code zum Schreiben von Musikstücken
    
*   Tonhöhe, Dauer, Lautstärke in Noten ist ein Code, der von Musikern gelesen werden kann
    
*   Mit Live-Codierung kannst du:
    
*   flexible Beschreibungsregeln nutzen
    
*   den Code ohne Benutzeroberfläche hacken
    
*   mit deiner Komposition interagieren, während die Musik spielt
    
*   am Rande der Echtzeit arbeiten


---
### Was ist Renardo?


*   Renardo ist eine Wiedergeburt von FoxDot, nachdem es abgeschrieben wurde. Vielen Dank an den Entwickler Ryan Kirkbride aus Leeds UK für seinen Beitrag zur Live-Coding-Community!
*   Renardo ist ein Python-Paket, das mit einer eigenen IDE und einem Plugin für [Pulsar](https://pulsar-edit.dev/) namens Pulsardo kommt
*   Renardo spielt Musik, indem Du auf alle SynthDefs zugreifest, die auf einen lokalen SuperCollider-Server mit einigen benutzerdefinierten Bits von Syntax geladen werden
*   SuperCollider ist eine Programmiersprache, die ursprünglich 1996 von James McCartney für Echtzeit-Audiosynthese und algorithmische Kompositionen veröffentlicht wurde, die unter der Renardo-Umgebung verläuft
*   Live-Codierung mit Python via Renardo bietet durch seine reaktiven und dynamischen Objekte zugängliche Zustände
*   Renardo konzentriert sich auf musikalische Muster, nicht auf die digitale Signalverarbeitung (DSP), die von [SuperCollider](https://en.wikipedia.org/wiki/SuperCollider) programmiert und über [OSC](https://en.wikipedia.org/wiki/Open_Sound_Control) gesteuert wird
*   Renardo hat eine saubere Syntax, die leicht zu lesen ist, so kann der Code von einem Publikum und traditionellen Musikern verstanden werden, ohne Renardo oder Programmierung zu kennen


---
### Ein wenig Python zu Beginn

Die ersten Schritte lernen die grundlegenden Funktionen des Editors Schritt für Schritt.

**Starte Renardo.**

Da Renardo Python verwendet, beginnen wir mit einem Python-Code:

Gebe im Textteil des Editors die folgende Zeile ein und drücken **Ctrl+Enter** (Cmd+Return), während der Cursor an der Zeile übersteht.
```python
2 + 2
```

Die Ausgabe eines ausgeführten Codes wird in der Konsole im unteren Fenster des Programms angezeigt. Die Konsole zeigt die eingegebene Zeile an. Verwende die Pythonfunktion **_print()_** um das Ergebnis anzuzeigen.
```python
print(2 + 2)
```

Jetzt wickeln wir die Gleichung in eine Variable. Wir verwenden Variablen oft. Schreibe die 2 Zeilen direkt untereinander, so dass sie vollständig als Block ausgeführt werden kann:
```python
a = 2 + 2

print(a)
```

Variablen können auch kombiniert werden:
```python
a = 2
b = 3
c = a + b
print(c)
```

Wenn Du nur eine Zeile innerhalb des Blocks ausführen möchtest, bewege den Cursor über die Linie und drücke **Alt + Enter**.
```python
print("Hello lively coder!")
```

Die allgemeine Philosophie von Renardo ist es, „Player()“-Objekte so einfach wie möglich zu erstellen, während Keyword-Argumente, die die Pbind-SynthDef-Beziehungen von SuperCollider widerspiegeln und ihre Aktionen auf einer global zugänglichen Uhr planen.

Wenn Du mehr über eine Funktion oder Klasse wissen willst – gebe einfach Hilfe, gefolgt vom Namen dieses Python-Objekts in Klammern >> _help(object)_, z.B.:
```python
help(Player())
```

Ein SynthDef in Renardo ist ein Player() Objekt. Es ist im Wesentlichen Dein digitales Instrument, das Du in Deiner Zusammensetzung verwendest.

---

## Synth Player Object

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


---

## Sample Player Object

Renardo kann auch zur Sequenzierung und Manipulation von Audioproben verwendet werden. Um dies zu tun, musst Du nur das spezielle **play()** Player() Objekt verwenden. Im Gegensatz zu Synthesizer Player()-Objekten sollte das erste Argument zu **play** eine Zeichenfolge sein, keine Zahlen. Dadurch können mehr Informationen in der Zeichenkette codiert werden als das Zeichen selbst. Jeder Charakter bezieht sich auf eine Reihe von Audiodateien wie Kicks, Hi-hats, Snares und andere Sounds. Jede Audiodatei wird in einem Puffer in SuperCollider gespeichert.

Zur Ansicht, welche Zeichen sich auf welche Audiodatei beziehen:
```python
print(Samples)
```

Es gibt einen Soundpack-Ordner in Renardo namens _*/samples/0_foxdot_default*_. Dieser Ordner enthält alle Namensordner mit Mustern. Um Dein eigenes Musterpaket zu verwenden oder zu erstellen, musst Du das Klon der Ordnerstruktur mit dem oberen Ordnernamen wie **1_my_samples** mit dem Pfad _*/samples/1_my_samples/*_ benennen. Sie können Proben aus Ihrem eigenen Samplepack mit dem Attribut **spack** anrufen:
```python
b1 >> play("x", spack=1)
```

Das einfachste Trommelmuster für Disco ist:
```python
b1 >> play("x-o-")
```

Ein Charakter bezieht sich auf einen Klang und Leerraum wird für die Stille verwendet, so
Sie können Klänge in der Zeit verbreiten:
```python
bd >> play("x  x  ")
```

Du kannst auch Punkte als Leerraum nutzen
```python
bd >> play("x..x..")
```

Verschiedene Arten von Klammern hinzufügen mehr Informationen zu einer Sequenz. Setzen Sie zwei oder mehr Zeichen in runden Klammern, wechselt der Klang mit der neuen Schleife nacheinander, so spannen Sie Klangproben:

Das folgende ist die gleiche wie "-------=":
```
hh >> play("---(-=)")
```

Einfaches Musterbeispiel:
```python
d1 >> play("(x-)(-x)o-")
```

Eingebettete Klammern für mehr Vielfalt:
```python
d1 >> play("(x-)(-(xo))o-")
```

Setzen von Zeichen in quadratischen Klammern spiele alle im Raum eines Beats, und wird wie ein Zeichen gespielt werden, nicht gleichzeitig, sondern in schneller Folge
```python
d1 >> play("x-o[-o]")
d1 >> play("x-o[---]")
d1 >> play("x-o[-----]")
d1 >> play("x-o[--------------]")
```

Spiele ein Triplett im vierten Beat:
```python
d1 >> play("x-o[---]", dur=1)
```

und kann in runden klammern gesetzt werden, als wären sie ein zeichen selbst.
```python
d1 >> play("x[--]o(=[-o])")
```

Verwende quadratische Klammern in runden Klammern:
```python
d1 >> play("(x-)(-[-x])o-")
```

Verwende runde Klammern in quadratischen Klammern:
```python
b1 >> play("x-o[-(xo)]")
```

Du kannst die Klammern kombinieren, wie Du möchtest: die folgenden Muster sind identisch
```python
d1 >> play("x-o(-[-o])")
d1 >> play("x-o[-(o )]")
```

Wähle zufällig einen Sample-Sound aus, wenn Du mehr Vielfalt wünschst:
```python
d1 >> play("x-o{-=[--][-o]}")
```

<> kombinieren Muster, um diese gleichzeitig spielen zu können:
```python
d1 >> play("<X   ><-   ><#   ><V   >")
d1 >> play("<X   >< -  ><  # ><   V>")
```

Jedes Zeichen wird in einen Ordner von Sounddateien abgebildet und Du kannst verschiedene auswählen, indem du das Keyword Argument **sample** nutzt:
```
d1 >> play("(x[--])xu[--]")
d1 >> play("(x[--])xu[--]", sample=1)
d1 >> play("(x[--])xu[--]", sample=2)
```

Ändere das Audiosample für jeden Beat:
```python
d1 >> play("(x[--])xu[--]", sample=[1,2,3])
```

Du kannst zwei Muster zusammenschichten - beachte das "P", sehe Muster (Pattern) für weitere Informationen:
```python
d1 >> play(P["x-o-"] & P[" **"])
```

Und die Effekte auf alle geschichteten Muster gleichzeitig ändern:
```python
d1 >> play(P["x-o-"] & P[" **"], room=0.5)
```

Beispiel aus dem Player-Tutorial, jedoch mit **sample**
Conditionals...
```python
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x"))
```

Oder sie durch Multiplikation 2 an die Samplebank ändern:
```python
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x")*2)
```

Verbinde mehrere Konditionen:
```python
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x")*2 + (d1.degree=="-")*5)
```

Das ist dasselbe wie:
```python
d1 >> play("x[--]xu[--]x", sample=d1.degree.map({"x":2, "-":5}))
```
  
---
### Attribut *sample*


Jedes Zeichen bezieht sich auf einen Ordner mit demselben Zeichen. Ordner mit einem Buchstaben als Zeichen enthält 2 Unterordner: **upper** und **lower**.
Diese Ordner und Unterordner enthalten Audiodateien, die von **play**-Player() Objekten aufgerufen werden können. Die Audiodateien sind alphabetisch sortiert. Verwenden Sie das Sample-Attribut, um eine Audiodatei in diesem Ordner auszuwählen. Default ist die erste Musterdatei in jedem Ordner, also _**sample=0**_.
```python
b1 >> play("x-o-", sample=1)
```

Wie jedes andere Argument kann **sample** eine Liste (eines zu einer Zeit) oder sogar ein Tupel (einfach) von Werten sein.
```python
p1 >> play("x-o-", sample=[0,1,2])
```

```python
p1 >> play("x-o-", sample=(0,3))
```

Das Beispiel für ein einzelnes Zeichen kann innerhalb der Zeichenkette selbst gegeben werden, indem das Zeichen mit einer "|" + der Positionsnummer umgeben wird:

Play _**sample=2**_ for the letter **o**:
```python
p1 >> play("x-|o2|-")
```

Dies wird den angegebenen Wert unter **sample** überschreiben:
```python
p1 >> play("x-|o2|-", sample=3)
```

Die Syntax kann jede der zuvor für die Zeichen und Zahlen verwendeten Klammern enthalten.

Änderung der **sample** Nummer:
```python
p1 >> play("x-|o(12)|-")
```

Ändere das Zeichen:
```python
p1 >> play("x-|(o*)2)|-")
```

Spiele mehrere verschiedene Audiosample in einem Schritt:
```python
p1 >> play("x-|o[23]|-")
```

```python
b1 >> play("x-|o{1[23]}|-")
```

Wenn Du dich dazu entscheidest, mehrere Player()-Objekte zu verwenden, um z.B. ein Trommelset zu erstellen, dann wird empfohlen, **sample** konventionel zu verwenden, so dass Du eine andere Möglichkeit hast, Muster in der Zeit durch die Nutzung von TimeVar()-Funktionen zu ändern.
```python
Clock.bpm=142
brks = [1]*28 + [0]*4
# SAMPLES
k1 >> play("A", sample=var([0,2], 64), dur=2, delay=[0,0.5], amplify=0.75*P[brks], amp=1)
k2 >> play("A", sample=1, dur=4, delay=[0,(0,0.5),0,(0,1.5)], pshift=var([0,1], 32), amplify=0.6*P[brks], amp=1)
k3 >> play("V", sample=[0,1,0,3], dur=2, delay=k1.delay, amplify=0.5*P[brks], amp=1)
s1 >> play("O", sample=var([0,2], [32,16]), dur=2, delay=1, room=0.66, mix=0.5, amplify=0.7*P[brks], amp=1)
s2 >> play("i", sample=var([0,1], 64), dur=2, delay=[1,1,1,(1,[1.5,1+0.75])], room=0.66, mix=0.33, amplify=0.7, amp=1)
h1 >> play(":", sample=var([0,1], 32), dur=1, delay=0.5, amplify=5/6, amp=1)
h2 >> play("-", sample=PRand([0,1,2],32), dur=0.5, rate=linvar([0.75,1], 8), amplify=0.6*P[brks]).every(16,"stutter",3)
h3 >> play("s", sample=1, dur=0.5, room=0.6, mix=0.33, amplify=[0.9,1.2], amp=1)
p1 >> play("y", sample=var([2,1,3], [28,4]), dur=1/2, delay=[0,0.25,0.5,0.75,0,0.5], rate=2, shape=0.6, room=0.5, mix=0.5, amplify=var([1,0.6], [1,3])*P[0.8,1.3], amp=1)
drumset = Group(k1,k2,k3,s1,s2,h1,h2,h3,p1)
drumset.amp=1
```

---
### Layering Sequenz


Wie im vorherigen Abschnitt genannt, kannst Du **< >** Zeichen verwenden, um mehrere Sequenzen gleichzeitig zu schichten. Beginnen wir mit zwei getrennten Sequenzen und stellen sie dann in einer einzigen Zeile des Codes zusammen.
```python
b1 >> play("x-o-")

b2 >> play("..+.+.[.+]")
```

Wir können jede Sequenz zwischen **<>** Zeichen in einer einzigen Sequenz platzieren und gleichzeitig spielen lassen:
```python
b1 >> play("<x-o-><..+.+.[.+]>")
```

Dies entspricht:
```python
b1 >> play(P["x-o-"].zip(P["..+.+.[.+]"]))
```

_Zip kann als Reißverschluss verstanden werden._

Jeder _layer_ bezieht sich auf den Index in einer Gruppe von Werten, die einem Player()-Objekt gegeben sind, jeder _layer_ wird nur von einem der angegebenen Werte beeinflusst. Dies zeigt sich am besten durch ein Beispiel:

Verteile jede Sequenz auf der linken und rechten Seite mit quadratischen Klammern im **pan** Attribut:
```python
b1 >> play("<x-o-><..+.+.[.+]>", pan=[-1,1])
```

Erweitere den Stereoeffekt durch die Verwendung von runden Klammern:
```python
b1 >> play("<x-o-><..+.+.[.+]>", pan=(-1,1))
```

Ändere die Audiodatei in der ersten Schicht:
```python
b1 >> play("<x-o-><..+.+.[.+]>", sample=(2,0))
```

Sei vorsichtig, wenn Du mehrere Schichten mit Funktionen wie **offadd** kombinieren, da diese Funktionen neue Schichten erstellen.

Der folgende Code wird nur die zweite Schicht beeinflussen, so dass die erste Schicht nicht beeinflusst wird:
```python
b1 >> play("<x-o-><..+.+.[.+]>", sample=(2,0)).every(4, "sample.offadd", 2)
```


---
### Versuch dies!


_Geh durch die Buchstaben und höre auf die verschiedenen verfügbaren Beispiele. Verwende die Attributprobe=[:8]. Die Audiodateien oder Samples werden wiederholt, wenn das Zeichen weniger als 9 Samples (0-8 sind 9 Zahlen) im dedizierten Ordner enthält!_


| **Name**      |**Buchstabe/Zeichen** |
| ------------- | ---------------------|
| Kick          | A v V x X W          |
| Snare/Rim     | D i I o O t u        |
| Hihat         | : = - a n N          |
| Clap/Snap     | \ * h H              |
| Cymbal/Crash  | / # e E              |
| Tom/Tom-like  | m M p P w            |
| Percussion    | & + d f l r R y      |
| SoundFX       | \\ b F k L Q Y z Z   |
| Voice         | 1 2 3 4 ! < ? c C    |
| Bell          | T                    |
| Various       | $ ; B g G j J K q U  |
| Noise         | @ %                  |
| Shaker        | s S                  |
| Ride          | ~                    |

_Erzeuge einen 16 beat Rhythmus mit deinen bevorzugten Audiosamples. Verwende Clock.bpm=120, um den Beat pro Minuten oder Rhythmusgeschwindigkeit in der Zeit zu ändern!_


---
## Loop Player Objekt

Du kannst Deine eigenen Samples verwenden, indem Du einfach Audiodateien in die vorhandenen Renardo Sample Verzeichnis abspeicherst. Diese finden sich im Verzeichnis **samples** der Renardo-Installation (z.B. '/home/user/.config/renardo/samples/').

Das **loop** Player()-Objekt ist ähnlich zu **play***. Es spielt jedoch eine Audiodatei von einem bestimmten Ort, der von einem String mit "/absolute_path/file_name" zusammen gegeben wird, statt eine Sampledatei eines installierten Sample-Paket von Renardo zu verwenden.

Du kannst auch Samples mit **loop()* abspielen.
```python
s1 >> loop('foxdot')
```

Du wirst feststellen, dass dies nur den ersten Teil der Probe immer wieder spielt. Du kannst das Verhalten mit vielen der Argumente, die wir bisher für die Kontrolle anderer Synths gesehen haben, nutzen. **dur** ist ein guter Ausgangspunkt.
```python
s1 >> loop('foxdot', dur=4)
```

Wenn Du einen Ordner voller Audiosamples hast, die Du in Renardo verwenden möchten, kannst Du **loop()** mit dem vollen Pfad zum Audiosample angeben.
```python
s1 >> loop('/path/to/samples/quack.wav')
```

Wenn Du den Pfad zu einem Ordner gibst, wird es die erste Probe spielen, die es findet. Du kannst dies ändern, indem du wieder das **sample=** Argument nutzt.

Spiele die erste Audiodatei in deiner Sammlung
```python
s1 >> loop('/path/to/samples')
```

Spiele die zweite Audiodatei in deiner Sammlung
```python
s1 >> loop('/path/to/samples', sample=1)
```

Wenn Du eine Menge Audiosample aus einem Ordner verwendest, kannst Du den Pfad hinzufügen. Renardo wird unter all seinen Suchpfaden nach einer passenden Sounddatei suchen, wenn Du es einen Namen gibst.
```python
Samples.addPath('/path/to/samples')
s1 >> loop('quack')
```

Sobald Du einen Suchpfad hast, kannst Du Musteranpassung zur Suche nach Mustern verwenden. Spiele das 3. Audiosample unter dem 'snare' Verzeichnis:
```python
s1 >> loop('snare/*', sample=2)
```

Du kannst auch * im Verzeichnisnamen verwenden:
```python
s1 >> loop('*_120bpm/drum*/kick*')
```

** bedeutet "alle rekursiven Unterverzeichnisse". Dies wird die erste Probe unter 'Percussion' (z.B. 'Percussion/Kisse/Klassiker/808.wav') spielen
```python
s1 >> loop('percussion/**/*')

```

Du kannst Dateien in einem speziellen Ordner in "/samples/loop" setzen, der geöffnet werden kann, indem Du "Help & Settings" und dann "Open Samples Folder" aus dem FoxDot Editor Menü von Renardo wählst. Du must nicht den vollen Pfad (oder Erweiterung) für Dateien in diesem Ordner liefern:
```python
l1 >> loop("my_file", dur=4)
```

Um alle Dateien in diesem Ordner zu sehen, verwende **print(Samples.loops)**. Wenn Du mit der Abspielordung spielen möchtest, kannst Du nach dem Dateinamen, den Renardo durch die Dauer iterieren wird, ein “Position” Argument liefern.

Spiele erste 4 Beats von Audioordnung:
```python
l1 >> loop("my_file", P[:4], dur=1)
```

Spiele erste Beats in zufälliger Reihenfolge:
```python
l1 >> loop("my_file", P[:4].shuffle(), dur=1)
```

Wenn Du die **bpm** der Audiodatei kennst und sie im aktuellen Tempo spielen möchtest, kannst Du den Player mit einem Tempo Argument liefern. Zum Beispiel könnte my_file ein Schlagzeug mit 135 bpm sein, aber das aktuelle Tempo ist 120, ich kann das Tempo von my_file auf die Uhr wie so passen:

Erste 4 Schläge in 1 Schlag:
```python
l1 >> loop("my_file", P[:4], dur=1, tempo=135)
```

Erste 4 Schläge in 0,5 Schlagschritten:
```python
l1 >> loop("my_file", P[:8]/2, dur=0.5, tempo=135)
```

---
### Zeitdehnung

Die Zeit, die Audio in dieser Weise zu dehnen, wird die Tonhöhe durch **pitch** geändern wird. Diese Dehnung wird zur Verzerrung des Sounds führen. Benutze **striate** anstelle dessen, ohne den Charakter des Sounds zu verlieren. **striate** schneidet die Datei in viele kleine Segmente und spielt sie im Laufe des Dauerwertes wieder ab – dies wird die gesamte Audiodatei abspielen. Je größer die Audiodatei, desto größer die Anzahl, die Du wahrscheinlich verwenden möchten. Mit dem obigen Beispiel möchtest Du einen Striate-Wert von 100-200 für eine reibungslosere Wiedergabe verwenden:

Dehne die Audiodatei mit 100 Segmenten:
```python
l1 >> loop("my_file", dur=4, striate=100)`
```

Dehne es mit 10 Segmenten - und höre den Unterschied:
```python
l1 >> loop("my_file", dur=4, striate=10)
```

Ein weiteres Attribut für **loop** ist **beat_stretch=True**, das die Audiodateilänge in ihre vorgegebene Dauer streckt.


---
### Versuche Dies!

Suche unter [www.wavsource.com](https://www.wavsource.com/) oder [www.findsounds.com](https://www.findsounds.com/) für 2-3 kurze Audiodateien. Stimmen, Vocals, Beat-Loops, Instrumente oder Umgebungsgeräusche sind am besten.

Die **loop** Synth ist so konzipiert, dass Du längere Audiodateien spielen (>1 sec) und manipulieren kannst. Um zu beginnen, nur gebe den Dateinamen, den Du spielen möchtest, und die Dauer, welche Du in Beats spielen möchten:
```python
l1 >> loop("path/to/my/file.wav", dur=32, sus=32)
```


---
## Clock 


### Basis


Um alle Player-objekte zu stoppen, drücke **Ctrl+.** (Hold Ctrl und drücke Punkt). Das ist eine Tastenkombination für den Befehl:
```python
Clock.clear()
```

Ändere das Tempo, oder **B**eats**p**er**M**inute. Default ist 120.
```python
Clock.bpm = 144
```

Um zu sehen, war gespielt werden soll.
```python
print(Clock)
```

Zeige was die Latenz (Verzoegerung) ist
```python
print(Clock.latency)
```

Manchmal willst Du wissen, wenn der nächsten X Beat-Zyklus beginnt. Dazu verwenden wir die "mod" Methode benutzen. Zum Beispiel, wenn wir sehen wollen, wann der Beginn des nächsten 32 Beat-Zyklus ist, können wir tun:
```python
print(Clock.mod(32))
```

### Fortgeschritten

Die Uhr kann alles mit einer __call_-Methode planen. Es braucht eine absolute Zeit Hinweis, um eine Funktion zu planen - Clock.schedule muss den Beat kennen, um etwas anzusprechen.
```python
Clock.schedule()   # raises TypeError
```

Plane ein Ereignis nach einer bestimmten Dauer - Clock.future muss wissen, wie viele Beats im voraus, um etwas zu nennen
```python
Clock.future()     # raises TypeError
```

Dies entspricht
```python
Clock.schedule(lambda: print("hello"), Clock.now() + 4)
Clock.future(4, lambda: print("hello"))
```

Um etwas anderes zu planen
```python
Clock.schedule(lambda: print("hello "))
```

Wir können etwas in n-Beats auslösen
```python
Clock.every(4, lambda: print("hello"))
```

Rufe die aktuelle Zeit in Beats und füge 2 Beats hinzu. - Nützlich für zeitliche Planung.
```python
print(Clock.now() + 2)
```

Ausgabebefehl auf der nächsten Bar
```python
nextBar(Clock.clear)
```

With a decorator
```python
@nextBar
def change():
    Root.default=4
    Scale.default="minor"
    # etc etc
```

Du kannst Deine eigene Funktion erstellen und dekorieren, indem du .every auf einem Player-Objekt verwendest
```python
@PlayerMethod
def test(self):
    print(self.degree)

p1 >> pluck([0,4]).every(3, "test")
```

Und stoppe es mit
```python
p1.never("test")

```

---
## Muster

Renardo verwendet in seinen Player()-Objekten Python-Listen, die häufiger als Arrays in anderen Sprachen bekannt ist, um sich selbst zu sequenzieren. Es wurde hier schon früher verwendet, aber sie sind für Manipulationen nicht exakt flexibel.

Versuche zum Beispiel, eine Liste von zwei solcher zu multiplizieren:
```python
print([1,2,3] * 2)
```
_Console output >> [1,2,3,1,2,3]_


*Erfüllt das Ergebnis Deine Erwartungen?*

Renardo verwendet einen Containertyp namens "Pattern", um dieses Problem zu lösen. Sie wirken wie regelmäßige Listen, aber jede mathematische Operation, die auf ihnen durchgeführt wird, wird mit jedem Element in der Liste getan und so paarweise gemacht, wenn Sie ein zweites Muster verwenden. Ein Grundmuster wird erstellt, wie Sie mit einer normalen Liste oder einem Tupel, aber mit einem 'P' preceed it.
```python
print(P[1,2,3] * 2)
print(P[1,2,3] + 100)
```

Der Ausgang besteht dabei aus allen Kombinationen der beiden Muster, d.h. [1+3, 2+4, 3+3, 1+4, 2+3, 3+4]
```python
print(P[1,2,3] + [3,4])
```

Du kannst Pythons Slicing Syntax verwenden, um eine Reihe von Zahlen zu generieren:
```
print(P[:8])
print(P[0,1,2,3:20])
print(P[2:15:3])
```

Versuche einige andere mathematische Operatoren und sieh, welche Ergebnisse Du erhälst.
```python
print(P[1,2,3] * (1,2))
```

Musterobjekte interlace auch automatisch jede geschachtelte Liste.
Vergleiche eine normale Liste:
```python
for n in [0,1,2,[3,4],5]:
    print(n)
```
mit Muster
```python
for n in P[0,1,2,[3,4],5]:
    print(n)
```

Verwende PGroups, wenn Du dieses Verhalten vermeiden möchtest. Diese können implizit als Tupel in Mustern angegeben werden:
```python
for n in P[0,1,2,(3,4)]:
    print(n)
```

Dies ist eine PGroup:
```python
print(P(0,2,4) + 2)
print(type(P(0,2,4) + 2))
```

In Python kannst mit dem Syntax-Bereich (Start, Stopp, Schritt) eine Reihe von Ganzzahlen generieren. Start ist standardmäßig 0 und Schritt ist 1.
```python
print(list(range(10))) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Sie können PRange(start, stop, step) verwenden, um ein Musterobjekt mit den entsprechenden Werten zu erstellen:
```python
print(PRange(10)) # P[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

P[0, 2, 2, 6, 4, 10, 6, 14, 8, 18]
[0*1, 1*2, 2*1, 3*2, 4*1, 5*2, 6*1, 7*2, 8*1...]
```python
print(PRange(10) * [1, 2]) # Pattern class behaviour
```

Das Hinzufügen einer Liste (oder Muster) zu einem Muster wird die Werte der Elemente zu dem anderen hinzufügen, dort wo Python-Listen konkatoniert werden.
```python
print(PRange(10) + [0,10])
```

Um Muster zu konkatonieren, verwende das **pipe** Zeichen (vertikale Linie) so:
```
print(PRange(10) | [0,10])
```

Renardo wandelt jedes Objekt automatisch in ein Muster in die Basis-Musterklasse um, so dass Du dir keine Sorgen darüber machen musst, dass alles der richtige Typ ist.
Spielt alle Werte zusammen:
```python
p1 >> pluck(P(4,6,8))
p1 >> pluck(P[0,1,2,P(4,6,8),7,8])
```

Verbreitet die Werte über den aktuellen **dur** z.B., wenn das dur 2 Beats ist, dann spielt es jeden Wert 2/3 Beats auseinander:
```python
p1 >> pluck(P*(0,2,4), dur=1/2)
p1 >> pluck(P*(0,2,4), dur=1)
p1 >> pluck(P*(0,2,4), dur=2)
p1 >> pluck(P[0,1,2,P*(4,6,8),7,8], dur=1)
```

Ist das gleiche wie P*, aber jedes andere Mal, wenn die Noten gespielt werden, werden sie über den **dur**-Wert verteilt.
```python
p1 >> pluck(P/(0,2,4), dur=1/2)
p1 >> pluck(P/(0,2,4), dur=1)
p1 >> pluck(P/(0,2,4), dur=2)
p1 >> pluck(P[0,1,2,P/(4,6,8),7,8], dur=1)
```

Verteilt die Werte über die aktuelle **sus** z.B. wenn der Dur 2 Beats und die sus ist 3 Beats, dann wird es jeden Wert 1 auseinander spielen.
```python
p1 >> pluck(P+(0,2,4), dur=2, sus=3)
p1 >> pluck(P+(0,2,4), dur=2, sus=1)
p1 >> pluck(P[0,1,2,P+(4,6,8),7,8], dur=1, sus=3)
```

Verbreitet die ersten (Länge-1) Werte mit einem Spalt des letzten Wertes zwischen jedem
Spielt 0,2,4 mit einem Spalt von 0,5:
```python
p1 >> pluck(P^(0,2,4,0.5), dur=1/2)
```

Muster kommen mit mehreren Methoden zur Manipulation des Inhalts
```python
help(Pattern)
```

Standardmuster
```python
print(P[:8])
```

Shuffle-Muster durch Zufallsbildung
```python
print(P[:8].shuffle())
```

Anfügen eines umgekehrten Musters an das Muster
```python
print(P[:8].palindrome())
```

Rotiere das Muster um **n** (Standard) 1)
```python
print(P[:8].rotate())
print(P[:8].rotate(3))
print(P[:8].rotate(-3))
```

Nimmt das Muster und schneidet es so oft wie nötig an, um **n** Anzahl von Elementen im Muster zu erreichen:
```python
print(P[:8].stretch(12))
print(P[:8].stretch(20))
```

Reversiert ein Muster
```python
print(P[:8].reverse())
```

Loops ein Muster **n** mal
```python
print(P[:8].loop(2))
```

Hinzufügen eines Offsets
```python
print(P[:8].offadd(5))
```

Hinzufügen eines multiplizierten Offsets
```python
print(P[:8].offmul(5))
```

Stutter - Jedes Element **n** mal wiederholen
```python
print(P[:8].stutter(5))
```

---
**Amen** - Versammelt und schichtet die ersten und letzten zwei Elemente, so dass ein Trommelmuster "x-o-" werden würde "(x[xo])-o([-o]-)" und mihmt den Rhythmus der berühmten "amen break"
```python
d1 >> play(P["x-o-"].amen())
print(P[:8].amen())
```

---
**Bubble** - Versammelt und schichtet die ersten und letzten zwei Elemente, so dass ein Trommelmuster "x-o-" zu "(x[xo])-o([-o]-) wird.
```python
d1 >> play(P["x-o-"].bubble())
print(P[:8].bubble())
```

Wenn Du die internen Werte in Python bearbeiten möchtest, musst Du eine **for** Schleife verwenden:
```python
l = []
for i in [1,2,3]:
    l.append(i*2)
    print(l)
```

oder in der Listen Form:
```python
print([i*2 for i in [1,2,3]])
```
_Console output >> [2,4,6]_


Aber was, wenn Du die Werte in einer Liste um 2 und 3 abwechselnd multiplizieren willst?

Renardo verwendet eine Art von Behälter namens **Pattern** (Muster), um dieses Problem zu lösen. Sie verhalten sich wie regelmäßige Listen, aber jede Mathe Operation auf ihnen durchgeführt wird auf jedem Element in der Liste, und gepaart, wenn ein zweites Muster verwendet wird.

Das Grundmuster kann wie folgt erstellt werden:
```python
print(P[1,2,3]*2)
```
_Console output >> P[2,4,6]_


```python
print(P[1,2,3]+[3,4])
```
_Console output >> P[4,6,6,5,5,7]_


Beachte, wie in der zweiten Operation das Resultat jede Kombination der beiden Muster erzeugt >> [1+3,2+4,3+3,1+4,2+3,3+4].


---
### Pattern (Muster)


_Versuche weitere mathematischen Operatoren und sehe welches Ergebnis Du erzeugst!_

Was ist, wenn Du Zahlen in Klammern wie P[1,2,3] * (1,2) gruppierst?
```python
P[P(1,2),P(2,4),P(3,6)]
```

Es gibt mehrere andere Musterklassen in Renardo, die Du verwenden kannst, um Listen von Zahlen zu erzeugen, aber sie verhalten sich genau wie das Basismuster.
```python
print(classes(Patterns.Sequences))
```

```python
print(classes(Patterns))
```

In Python kannst Du den Syntaxbereich (Start, Stopp, Schritt) verwenden, um eine Reihe von Ganzzahlen zu erzeugen. Start ist standardmäßig 0 und Schritt 1.

Mit PRange (start,stop,step) kannst Du ein Musterobjekt mit den entsprechenden Werten erstellen. Das erste Beispiel zeigt die äquivalente Funktion in Python, das zweite ist die vereinfachte Sample-funktion in Renardo PRange:
```python
print(list(range(10)))
```
_Console output >> [0,1,2,3,4,5,6,7,8,9]_


```python
print(PRange(10))
```
_Console output >> P[0,1,2,3,4,5,6,7,8,9]_


```python
print(PRange(10)*[1,2])
```
_Console output >> P[0,2,2,6,4,10,6,14,8,18]_


Was ist mit der Kombination von Mustern? In Python kannst Du zwei Listen mit dem **+** Operator zusammenfassen (append). Allerdings verwenden Renardo-Muster dies, um die Daten in der Liste zu ergänzen. Um zwei Musterobjekte miteinander zu verbinden, kannst Du das **Pipe**-Symbol (vertikale Linie) verwenden, mit dem Linux-Benutzer vertraut sein sollten. Es wird verwendet, um Befehlszeilenprogramme zu verbinden, indem die Ausgabe eines Prozesses als Eingabe an einen anderen gesendet wird.


```python
print(PRange(4)|[1,7,6])
```
_Console output >> P[0,1,2,3,1,7,6]_


Es gibt verschiedene Arten von Mustersequenzen in Renardo (und die Liste wächst noch), die die Generierung dieser Zahlen ein wenig einfacher machen. Zum Beispiel, um die erste Oktave einer pentatonic Skala von unten nach oben und wieder zurück zu spielen, können Sie zwei PRange-Objekte verwenden:
```python
p1 >> pluck(PRange(5)|PRange(5,0,-1), scale=Scale.default.pentatonic)
```

Die PTri-Klasse macht das für Dich:
```python
p1 >> pluck(PTri(5), scale=Scale.default.pentatonic)
```

---
### Musterfunktionen


Es gibt mehrere Funktionen, die ein Wertemuster für uns generieren, um nützliche Dinge in Renardo zu erreichen, wie z. B. Rhythmen und Melodien. Diese Abschnit ist eine Liste von Pattern-Funktionen mit Beschreibungen und Beispielen.

Als Eingabeargumente für Renardo-Player verwendet, können diese selbst als Muster behandelt und ihre Methoden direkt angewendet werden, z. B. _PDur(3, 8).reverse()_. Du kannst auch jedes Eingabeargument durch ein Muster oder eine TimeVar-Funktion ersetzen, um ein erweitertes Muster oder ein Pvar-Muster zu erstellen. Schauen wir uns einige Beispiele an:

**PStep(n,value,default=0)** >> Gibt ein Muster zurück, bei dem jeder **n**-Term **value** ist, ansonsten **default**.

Jeder 4, machen es 1, sonst standardmäßig 0
```python
print(PStep(4,1))
```

Alle 8, machen es 6, sonst, 4
```python
print(PStep(8,6,4))
```

Alle 5, machen es 2, sonst, 1
```python
print(PStep(5,2,1))
```

**PSum(n,total,\**kwargs)** >> Gibt ein Muster der Länge **n** zurück, dessen Summe **total** ergibt. 

Gibt ein Muster der Länge 2 zurück, mit Elementen bis zu 8 zusammengefasst
```python
print(PSum(3,8))
```

Gibt ein Muster der Länge 5 zurück, mit Elementen bis zu 4 zusammengefasst
```python
print(PSum(5,4))
```

**PRange(start,stop=None,step=None)** >> Gibt ein Pattern zurück, das zu Pattern(range(start, stop, step)) äquivalent ist.

**PTri(start,stop=None,step=None)** >> Gibt ein zu Pattern(range(start, stop, step)) äquivalentes Muster mit angehängter umgekehrter Form zurück.

Bis 5 dann bis 1:
```python
print(PTri(5))
```

Bis zu 8 dann bis 1:
```python
print(PTri(8))
```

Von 3 bis 10, dann bis 4:
```python
print(PTri(3,10))
```

Von 3 bis 30, um 2, dann bis 4:
```python
print(PTri(3,20,2))
```

Bis zu 4, dann bis zu 1, dann bis zu 8, dann bis zu 1:
```python
print(PTri([4,8]))
p1 >> pluck(PTri(5), scale=Scale.default.pentatonic)
```

Wie:
```python
p1 >> pluck(PRange(5) | PRange(5,0,-1), scale=Scale.default.pentatonic)
```

**PEuclid(n,k)** >> Gibt den euklidischen Rhythmus zurück, der **n** Impulse so gleichmäßig wie möglich über **k** Schritte verteilt. z.B. **PEuclid(3, 8)** gibt P[1, 0, 0, 1, 0, 0, 1, 0] zurück.
3 impulse über 8 schritte:
```python
print(PEuclid(3,8))
```

**PSine(n=16)** >> Gibt Werte eines Zyklus einer Sinuswelle zurück, die in **n** Teile aufgeteilt ist.

Spalte es in 5 Teile:
```python
print(PSine(5))
```

Spalte es in 10 Teile:
```python
print(PSine(10))
```

**PDur(n,k,dur=0.25)** >> Gibt die tatsächliche Dauer basierend auf euklidischen Rhythmen (siehe PEuclid) zurück, wobei dur die Länge jedes Schrittes ist. z.B. **PDur(3, 8)** gibt P[0.75, 0.75, 0.5] zurück.

```python
print(PDur(3,8)) # P[0.75, 0.75, 0.5]
print(PDur(5,8))
```

Gibt eine Liste von 3 Dur, appened mit einer Liste von 5 Dur
```python
print(PDur([3,5],8))
d1 >> play("x", dur=PDur(5,8))
```

**PBern(size=16,ratio=0.5)** >> Gibt ein Muster aus Einsen und Nullen basierend auf dem Verhältniswert (zwischen 0 und 1) zurück. Dies wird als Bernoulli-Folge bezeichnet.

**PBeat(string,start=0,dur=0.5)** >> Gibt ein Muster von Dauern basierend auf einer Eingabezeichenfolge zurück, wobei Nicht-Leerzeichen einen Puls bezeichnen.

**PSq(a=1,b=2,c=3)**

**PIndex** >> Gibt den zugegriffenen Index zurück
```python
print(PIndex())
print(PIndex()*4)
```


---
### Mustergeneratoren

Wir wissen, dass Muster eine feste Länge haben und basierend auf einer Funktion erzeugt werden können. Manchmal ist es jedoch sinnvoll, Muster unendlicher Länge zu haben, beispielsweise bei der Generierung von Zufallszahlen. Hier kommen Mustergeneratoren ins Spiel. Ähnlich wie bei Python-Generatoren, bei denen nicht alle Werte auf einmal gespeichert werden, außer wenn Python-Generatoren gewöhnlich ein Ende haben - Renardo-Mustergeneratoren nicht!

**PRand(lo,hi,seed=None)/PRand([values])** >> Gibt eine Reihe von zufälligen Zahlen zwischen **lo** und **hi**, inklusive. Wenn **hi** weggelassen wird, ist der Bereich *0* bis *lo*. Anstelle des Bereichs kann eine Liste von Werten bereitgestellt werden und PRand gibt eine Reihe von zufällig aus der Liste ausgewählten Werten zurück.

Gibt eine zufällige ganze Zahl zwischen 0 und Start zurück.
```python
print(PRand(8)[:5])
```

Gibt eine zufällige ganze Zahl zwischen Start und Stop zurück.
```python
print(PRand(8,16)[:5])
```

Wenn der Start ein Container-Typ ist, kehrt er ein zufälliges Element für diesen Behälter zurück.
```python
print(PRand([1,2,3])[:5])
```

Du kannst einen seed nutzen, um unterschiedliche Zufallszahlenmuster zu erwirken (deterministischer Pseudozufall)
```python
print(PRand([1,2,3], seed=5)[:5])
```

Erzeugt zufällige Melodie
```python
p1 >> pluck(PRand(8))
```

Erstellt eine zufällige Liste, und iteriert über dieselbe Liste
```python
p1 >> pluck(PRand(8)[:3])
```

**PxRand(lo, hi) / PxRand([values])** >> Identisch zu PRand, aber keine Elemente werden wiederholt.

**PwRand([values], [weights])** >> Verwende eine Liste von Gewichten, um anzuzeigen, wie oft Elemente mit demselben Index aus der Liste der Werte ausgewählt werden.
Ein Gewicht von 2 bedeutet, dass es doppelt so wahrscheinlich als Gegenstand mit einem Gewicht von 1 gewählt wird.

**P10(n)**>> Gibt ein Muster der Länge n einer zufällig generierten Serie von Eins und Nullen zurück.

**PAlt(pat1, pat2, \*patN)** >> Gibt ein Muster zurück, das durch Wechseln der Werte in den angegebenen Sequenzen erzeugt wird.

**PJoin(patterns)** >> Erstellt eine Liste von Mustern.

**PPairs(seq,func=<lambda>)** >> Verlinkt eine Sequenz zu einer zweiten Sequenz, die durch Ausführung einer Funktion auf dem Original erhalten wird. Standardmäßig ist dies Lambda n: 8-n.

**PQuicken(dur=0.5,stepsize=3,steps=6)** >> Gibt eine Gruppe von Verzögerungsbeträgen zurück, die allmählich abnehmen.

**PRhythm(durations)** >> Konvertiert alle Tupel / PGroups in **duration**, die mit dem PDur-Algorithmus berechnet werden.

Das folgende spielt den Hi Hat mit einem Euclidean Rhythmus von 3 Pulsen in 8 Schritten
```python
d1 >> play("x-o-", dur=PRhythm([2,(3,8)]))
print(PRhythm([2,(3,8)]))
```

**PShuf(seq)** >> Gibt eine gemischte Version von **seq**. Dieses Beispiel verwendet eine Funktion, um die Liste automatisch zu schütteln.

**PStretch(seq,size)** >> Gibt **seq** als Muster zurück und wird solange geschleift, bis seine Länge **size** ist, z.B. PStretch([0,1,2], 5) wieder P[0,1,2,0,1].

**PStrum(n=4)**

**PStutter(seq,n=2)** >> Erzeugt ein Muster, so dass jedes Element im Array **n** mal wiederholt wird (n kann ein Muster sein).

**PZip(pat1,pat2, patN)** >> Erzeugt ein Muster, das 'zips' multiple Muster. PZip([0,1,2], [3,4]) erzeugt das Muster P[(0,3),(1,4),(2,3),(0,4),(1,3),(2,4)].

**PZip2(pat1,pat2,rule=<lambda>)** >> Wie PZip, verwendet aber nur zwei Muster. Verbindet Werte, wenn sie die Regel erfüllen.

**Pvar** >> TimeVar, die Listen statt einzelner Werte speichert (var, sinvar, linvar, expvar).

**PWhite(lo,hi)** >> Gibt zufällige schwimmende Punktzahlen zwischen **lo** und **hi** zurück.

Lo defaults zu 0, hi defaults zu 1
```python
print(PWhite()[:8])
```

Gibt Zufallszahlen zwischen 1 und 5 zurück
```python
print(PWhite(1,5)[:8])
```

**PChain(mapping_dictionary)** >> Basierend auf einer einfachen Markov-Kette mit gleichen Wahrscheinlichkeiten. Nimmt ein Python-Dictionary von Elementen, Zuständen und möglichen zukünftigen Zuständen. Jeder zukünftige Zustand hat eine gleiche Chance, ausgewählt zu werden. Wenn ein möglicher zukünftiger Zustand nicht gültig ist, wird ein KeyError gezeigt.

**PWalk(max=7,step=1,start=0)** >> Gibt eine Reihe von Ganzzahlen mit jedem Element ein Inkrement auseinander und mit einem Wert im Bereich von +/- das Maximum **max**. Das erste Element kann mit **start** ausgewählt werden.

Standardmäßig gibt ein Muster mit jedem Element zufällig 1 höher oder niedriger als der vorherige
```python
print(PWalk()[:16])
```

Ändere step zu 2
```python
print(PWalk(step=2)[:16])
```

Ändern mit max
```python
print(PWalk(max=2)[:16])
```

Starte mit einer Nicht-Null-Nummer
```python
print(PWalk(start=6)[:16])
```

**PFibMod()** >> Gibt die Fibonacci-Sequenz zurück.

---
### Benutzerdefinierter Mustergenerator

Benutzerdefinierte Generator-Muster können durch Unterklassierung des GeneratorPattern und übergeschriebene `GeneratorPattern.func`
```python
class CustomGeneratorPattern(GeneratorPattern):
    def func(self, index):
        return int(index / 4)
print(CustomGeneratorPattern()[:10])
```

Dies kann mit `GeneratorPattern.from_func` konsequanter gemacht werden, indem eine Funktion, die einen Index nimmt und einige Musterartikel zurückgibt.
```python
def some_func(index):
    return int(index / 4)
print(GeneratorPattern.from_func(some_func)[:10])
```

Wir können auch Lambdas verwenden
```python
print(GeneratorPattern.from_func(lambda index: int(index / 4))[:10]) 
```



---
## TimeVars


### TimeVar var()

Eine TimeVar ist eine Abkürzung von "Zeitabhängige Variable" und ist ein Schlüsselmerkmal von Renardo. Ein TimeVar hat eine Reihe von Werten, die es nach einer vordefinierten Anzahl von Beats zwischen sich ändert und mittels eines var-Objekts mit der Syntax var([Liste_von_Werten], [Liste_von_Zeitdauer]) erstellt wird.

Erzeugt folgende Werte: 0,0,0,0,3,3,3,3...
```python
a = var([0,3],4)            # Dauer kann Einzelwert sein
print(int(Clock.now()), a)  # 'a' initally einen wert von 0
```
 - (Die erste Ziffer kann verschieden sein):
_0, 0_

```python
print(int(Clock.now()), a)   # Nach 4 Schlägen ändert sich der Wert auf 3
```
Resultat:
_4, 3_


```python
print(int(Clock.now()), a)   # Nach weiteren 4 Schlägen ändert sich der Wert auf 0
```
Resultat:
_8, 0_


Dauer kann auch eine Liste sein
```python
a = var([0,3],[4,2])
print(int(Clock.now()), a)
```

Wenn ein TimeVar in einem mathematischen Betrieb verwendet wird, werden die Werte, die er beeinflusst, auch TimeVars, die den Zustand ändern, wenn sich der ursprüngliche TimeVar Zustand ändert – und dies kann sogar mit Mustern verwendet werden:
```python
a = var([0,3], 4)
print(int(Clock.now()), a + 5)   # Wenn Beat 0 ist, ist a 5
```
Resultat:
_5_

```python
print(int(Clock.now()), a + 5)   # Wenn Beat 4 ist, ist a 8
```
Resultat:
_8_

```python
b = PRange(4) + a
print(int(Clock.now()), b)   # Nach 8 Schlägen ändert sich der Wert auf 0
```
Resultat:
_P[0, 1, 2, 3]_


```python
print(int(Clock.now()), b)   # Nach 12 Schlägen ändert sich der Wert auf 3
```
Resultat:
_P[3, 4, 5, 6]_


Verwende 'var' mit Deinem Player Objekt, um Akkordprogression zu erstellen.
```python
a = var([0,4,5,3], 4)
b1 >> bass(a, dur=PDur(3,8))
p1 >> pads(a + (0,2), dur=PDur(7,16))
```

Du kannst ein 'var' zu einem Player-Objekt oder einem var hinzufügen.
```python
b1 >> bass(a, dur=PDur(3,8)) + var([0,1],[3,1])
b = a + var([0,10],8)
print(int(Clock.now()), (a, b))
```

Aktualisierung der Werte eines 'var' wird es überall sonst aktualisieren
```python
a.update([1,4], 8)
print(int(Clock.now()), (a, b))
```

Vars kann benannt werden ...
```python
var.chords = var([0,4,5,4],4)
```

Und später gebraucht werden
```python
b1 >> pluck(var.chords)
```

Alle Spieler mit dem benannten Var werden aktualisiert
```python
var.chords = var([0,1,5,3],4)
```

Du kannst auch einen 'linvar' verwenden, der seine Werte im Laufe der Zeit allmählich ändert. Änderung des Wertes von 0 auf 1 über 16 Beats
```python
c = linvar([0,1],16)
```

Durchlaufe dies mehrmals, um die Änderungen zu sehen
```python
print(int(Clock.now()), c)
```

Ändere **amp** mit diesem linvar
```python
p1 >> pads(a, amp=c)
```

ein 'Pvar' ist ein 'var', das Muster speichern kann (im Gegensatz zu sagen, ganze Zahlen)
```python
d = Pvar([P[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], P[0, 1, 2, 3, 4, 5, 4, 3, 2, 1]], 8)
print(int(Clock.now()), d)
p1 >> pads(a, amp=c, dur=1/4) + d
```

Alle 16 Beats ändern
```python
Scale.default = Pvar([Scale.major, Scale.minor],16)
```

Man kann sogar einen Wert ewig halten, sobald es mit einem besonderen Wert namens "inf" erreicht wird
```python
x = var([0, 1, 2, 3], [4, 4, 4, inf])
print(x) # Keep pressing - it will eventually stop at 3
```

---
### Andere Typen von TimeVar

Es gibt mehrere Unterklassen von **var**, die Werte zwischen den angegebenen Zahlen zurückgeben. So ändern beispielsweise ein **linvar** nach und nach Werte linear:
```python
print(linvar([0,1],8)) # keep running to see the value change between 0 and 1
```

Erhöhen Sie den High-Pass Filter Cutoff über 32 Schläge
```python
p1 >> play("x-o-", hpf=linvar([0,4000],[32,0]))
```

Andere Typen sind: **sinvar** und **expvar**
```python
print("Linear:", linvar([0, 1], 8))
print("Sinusoidal:", sinvar([0, 1], 8))
print("Exponential:", expvar([0, 1], 8))
```


**Offset der Startzeit**

Ein weiterer nützlicher Trick versetzt die Startzeit für die var. Standardmäßig ist es, wenn **Clock** 0 ist, aber Du einen anderen Wert mit dem "start" Keyword angeben kannst
```python
print(linvar([0, 1], 8))
print(linvar([0, 1], 8, start=2))
```

Dies kann mit Clock.mod() kombiniert werden, um eine Rampe zu Beginn des nächsten 32 Beat-zyklus zu starten:
```python
d1 >> play("x-o-", hpf=linvar([0,4000],[32,inf], start=Clock.mod(32)))
```

Es ist zu beachten, dass bei Verwendung eines Player()-Objekts eine sich allmählich ändernde TimeVar-Funktion der in ihm gespeicherte Wert zum Zeitpunkt der Auslösung der Note verwendet wird. Dies bedeutet, dass Du nach dem Abspielen einer Note im Laufe der Zeit keine Wertänderung in der Note selbst hören wirst. Probiere diese Zeilen von Code für dich:

Keine allmähliche Änderung der Hochpassfrequenz:
```python
p1 >> dirt(dur=4, hpf=linvar([0,4000], 4))
```

Offene allmähliche Änderung der Hochpassfrequenz:
```python
p2 >> dirt(dur=0.25, hpf=linvar([0,4000], 4))
```

Du kanst auch eine Dauer von 0 verwenden, um die allmähliche Änderung sofort zu überspringen und sich auf den nächsten Wert zu bewegen. Dies ist nützlich für "Reset"-Werte und Erstellung von EDM Drop.

Erhöhe den Hochfrequenzfilter auf 4000Hz, dann wieder auf 0:
```python
p1 >> dirt(dur=0.25, hpf=expvar([0,4000], [8,0]))
```

Wie bei normalen TimeVars-Funktionen können TimeVars innerhalb anderer TimeVars geschachtelt werden, da sie sich allmählich ändern, um die Anwendung der Werte besser zu verwalten. Beispielsweise können wir die Hochpassfilterfrequenz nur auf den letzten 4 Beats eines 32 Beat-Zyklus wie folgt erhöhen.

Verwende eine normale TimeVar-Funktion, um den Wert auf 0 für 28 Schläge einzustellen:
```python
p1 >> dirt(dur=0.25, hpf=var([0,expvar([0,4000], [4,0])], [28,4]))
```


---
### TimeVars als Muster


**Pvar(patterns,dur)** >>Bisher haben wir nur einzelne Werte in einer TimeVar gespeichert, aber manchmal ist es sinnvoll, ein ganzes Pattern-Objekt zu speichern. Du kannst dies nicht mit einer regulären TimeVar tun, da jedes Muster in der Eingabeliste von Werten als eine verschachtelte Liste von Einzelwerten behandelt wird. Um dieses Verhalten zu vermeiden, musst du eine Pvar, kurz für Pattern-TimeVar (Zeitvariablenmuster) verwenden. 

Es wird genau wie jede andere TimeVar erstellt, aber Werte können ganze Listen/Muster sein.
```python
a = Pvar([[0,1,2,3],[4,5,6]], 4)
print(Clock.now(), a)
```
_Konsolenausgabe >> 0, P[0,1,2,3]_


Du kannst sogar einen Pvar innerhalb eines Musters verschachteln, wie du es bei einem normalen Pattern tun würdest, um abwechselnde Werte abzuspielen.

Alternate the alternating notes every 8 beats
```python
p1 >> pluck([0,1,2,Pvar([[4,5,6,7],[11,9]], 8)], dur=0.25, sus=1)`
```

---
## Skalen


Player Objekte verwenden standardmäßig die C Major-Skala. Diese können durch die Keyword-Argumente **scale** und **root** geändert werden.
Skalen können als eine Reihe von Halbtönen definiert werden, so dass die Major-Skala [0,2,4,5,7,9,11] oder eine der vordefinierten Skalen aus dem Scale-Modul, z.B. Scale.minor. Root bezieht sich auf das Tonikum der Skala; 0 ist C, 1 ist C#, 2 ist D und so weiter.

Die Standard-Skala kann so geändert werden, dass jeder Spieler, der keine bestimmte Skala verwendet, aktualisiert wird. Dies geschieht mit der folgenden Syntax (jede Zeile ist technisch äquivalent):
```python
Scale.default.set("major")
Scale.default.set(Scale.major)
Scale.default.set([0,2,4,5,7,9,11])
```

Oder das Gleiche, aber Moll:
```python
Scale.default.set("minor")
Scale.default.set(Scale.minor)
Scale.default.set([0,2,3,5,7,10])
```

Um einige Zeit zu sparen, kannst Du auch das tun
```python
Scale.default = "minor"
```

Dies ist das gleiche für die Grundnote:
```python
Root.default.set(1)
Root.default.set("C#")
```

Oder:
```python
Root.default.set(2)
Root.default.set("D")
```

Um eine Liste aller Skalen zu sehen, verwende:
```python
print(Scale.names())
```

Du kannst die von einem Spieler verwendete Skala mit dem **scale**-Keyword ändern
```python
p1 >> pads([0,1,2], scale=Scale.minor)
```

Ebenso kannst Du das **root** Attribut nutzen, um die Grundnote zu ändern.
```python
p1 >> pads([0,1,2], scale=Scale.minor, root=2)
```

---
## Gruppen

Gruppen sind nützlich, um mehrere Player-objekte gleichzeitig zu steuern. Ein Klavier kann aus einer Basslinie, Akkordlinie und Melodielinie bestehen. Attribute wie **amplify** können dann leichter eingestellt werden. Dies ist auch nützlich, wenn Du Übergänge mit Filtereffekten (z.B. Hochpassfilter auf dem gesamten Trommelkit) arrangieren möchtest.


```python
s1 >> piano(Pvar([[0,3,7,-2,0,5],[3,0,7,3,0]], [12,8]), oct=4, dur=PDur(3,8), sus=var([s1.dur,s1.dur*2], [6,2]), amplify=var([1,0.7], 8), amp=1)
s2 >> piano(Pvar([[2,5],[0,7]], 16), oct=var([5,6], [6,2]), dur=var([1,2], 32), amplify=var([0.8,1], 16), amp=1)
s3 >> piano((s1.degree,note), oct=(4,5), dur=var([PDur(3,8),1], PRand(8)), amplify=0.75, amp=1)
Piano.amp = Group(s1,s2,s3)
```

Um die Amplitude dieses Klaviers nach unten zu drehen, benutze einfach:
```python
Piano.amp = 0
```

Oder, setze die Lautstärke für 4 Beats voll an, dann für 4 voll aus. Dies überträgt vorhandene Amplituden, die im Playerobjekt eingestellt sind:
```python
Piano.amp=var([1,0],4)
```

Um eine ganze Gruppe zu stoppen, verwende folgenden Befehl:
```python
Piano.stop()
```

Du kannst Funktionen verwenden, um Dinge zusammenzufassen. Zur Ausführung benutze **CTRL+Return**, nicht *ALT+Return*.
```python
def tune():
    b1 >> bass([0,3], dur=4)
    p1 >> pluck([0,4], dur=1/2)
    d1 >> play("x--x--x-")
tune()
```

oder programmieren sie die Zeit, um andere gruppierte Funktionen zu rufen:
```python
def verse():
    b1 >> bass([0,3], dur=4)
    p1 >> pluck([0,4], dur=1/2)
    d1 >> play("x--x--x-")
    Clock.future(16, chorus)
def chorus():
    b1 >> bass([0,4,5,3], dur=4)
    p1 >> pluck([0,4,7,9], dur=1/4)
    d1 >> play("x-o-")
    Clock.future(16, verse)
verse()
```

Mehrere Gruppenobjekte existieren bereits in Renardo für bestimmte Gruppen von Spielerobjekten auf Basis variabler Namen, die mit dem Suffix **_all** enden. Für jeden Charakter gibt es also z.B. **s** eine Gruppe namens **s_all**, die *s1,s2,s3,...,s9* enthält. Also, wenn Du Deine Player-Objekte mit variablen Namen organisierst, kannst du einfach Effekte anwenden oder sie alle auf einmal stoppen:
```python
s1 >> pads([0,4,-2,3], dur=4)
s2 >> pluck([0,1,3,4], dur=0.25)
```

Verwende die Gruppe, um das Filterattribut auf alle Player-Objekte anzuwenden:
```python
s_all.hpf = 500
```

Dies ist auch nützlich für:
```python
s_all.amp = 0
```

Mit **.stop()** kannst Du die gesamte Spielergruppe unterbrechen:
```python
s_all.stop()
```

Mit **.solo()** werden alle anderen Spielerobjekte gemuted, d.h. nur die Spielerobjekte dieser Gruppe können gehört werden:
```python
s_all.solo()
```

**.only()** stoppt alle spieler, die nicht in der Gruppe sind:
```python
s_all.only()
```
