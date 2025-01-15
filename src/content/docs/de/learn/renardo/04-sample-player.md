---
title: Sample Player
---

### Sample Player Objekt

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
