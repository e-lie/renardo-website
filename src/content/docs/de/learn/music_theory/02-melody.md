---
title: Melodie
---


### Akkorde zu Melodie


Eine Möglichkeit besteht darin, eine Akkordfolge zu erstellen und dann die Melodie in den Akkorden zu finden

|  **E3**  |  **D3** | **F3** |  **E3**  |
| -------- | ------- | ------ | -------- |
|    C3    |    B2   |   D3   |    C3    |
|    A2    |    G2   |   A2   |    G2    |



Wie bereits erwähnt, liegt die Oktave in FoxDot 2 Schritte über dem üblichen Wert, das mittlere C beträgt 5 und nicht 3.

Lass uns die Akkorde mit 93 Schlägen pro Minute mit A als Grundton und Moll-Tonleiter spielen

```python
Clock.bpm = 93
Root.default=”A”
Scale.default=Scale.minor

# Chords:
chords = var([(0,2,4),(-1,1,3),(0,3,5),(-2,2,4)])
s1 >> swell(chords, oct=5, dur=4, sus=5)

# Ein Schlagzeugschlag kann dabei helfen, eine gute Melodie zu finden
b1 >> play("<X....X..X..[X.].X..><..o.><---->",sample=0)
```

Der einfachste Weg, um mit einer Melodie zu beginnen, besteht darin, die höchsten Noten der Akkorde zu nehmen

Du möchtest jedoch deinen Akkordnoten einige Nicht-Akkord-Noten hinzufügen:

|  **E4**  |  **F4** | **D4** |  **F4**  |  **D4**  |  **G4**  | **E4** | **D4** |
| -------- | ------- | ------ | -------- | -------- | -------- | ------ | ------ |


```python
seq=[4,5,3,5,3,6,4,3]
s2 >> pulse(seq, oct=6, dur=[3,1,3,3,1,1,2,2])
```

---
### Melodie zu Akkorde


In diesem Beispiel beginnen wir mit einer Melodie, um passende Akkorde daraus zu erhalten, hier die Melodie

|  **A3**  |  **B3** | **C4** |  **B3**  |  **E4**  |  **F4**  | **C4** | **G4** | **E4** | **D4** |
| -------- | ------- | ------ | -------- | -------- | -------- | ------ | ------ | ------ | ------ |


Lass uns das Tempo, den Grundton und die Skala setzen:
```python
Clock.bpm = 93

Root.default=”A”

Scale.default=Scale.minor
```

Die basierende Melodie:

Wenn du dich nicht an die Nummern der Skalenliste erinnern kannst, verwende print(Scale.minor).

```python
seq=[0,1,2,1,4,5,2,6,4,3]
```

Synth:
```python
s1 >> saw(seq, dur=[2,1,1,4,3,1,1,1,1,1], formant=4, amplify=0.4)
```


Die verfügbaren Akkorde (mit 7.) für die in der Melodie gespielten Noten lauten wie folgt:

|  **G4**  |  **A4** | **B4** |  **C5**  |  **D5** | **E5** |  **F5**  |
| -------- | ------- | ------ | -------- | ------- | ------ | -------- |
|    E4    |    F4   |   G4   |    A4    |    B4   |   C5   |    D5    |
|    C4    |    D4   |   E4   |    F4    |    G4   |   A4   |    B4    |
|    A3    |    B3   |   C4   |    D4    |    E4   |   F4   |    G4    |



Hier ein gutes Beispiel für eine Trip-Hop-ähnlichen Track:


|  **E4**  |  **D4** | **E4** |  **E4**  |
| -------- | ------- | ------ | -------- |
|    C4    |    B3   |   C4   |    G4    |
|    A3    |    G3   |   A3   |    C4    |



Fügen wir der Melodie die Akkorde hinzu:
```python
chords = var([(0,2,4),(-1,1,3),(0,2,4),(-1,6,4)])
s2 >> keys(chords, oct=4, dur=4, shape=0.4)
```

Und ein Schlagzeugschlag:
```python
b1 >> play("<X....X..X..[X.].X..><..o.><---->", sample=0)
```


**Füge eine Gegenmelodie hinzu (Arpeggio)**

Halten wir es einfach und verwende die Akkordnoten, um mit den Akkorden zu spielen.
Mit der Gegenmelodie wollen wir dem Track einen Rhythmus hinzufügen.

Als 4. der Sequenz in einem 4-Beat-Takt fügen wir den 2. wie hier gezeigt hinzu:
```python
chords = var([(0,2,4),(-1,1,3),(0,2,4),(-1,4,6)])
```

wird zu:
```python
seq2 = [0,2,4,2,-1,1,3,1,0,2,4,2,-1,4,6,4]
```

Fügen wir nun ein weiteres Instrument hinzu, das die Gegenmelodie spielt
```python
s3 >> karp(seq2, dur=1)
```


---
### Akkorde zu Basslinie


Im folgenden Beispiel basiert die Akkordfolge auf A in Moll, während ein Grundton auf eine höhere Oktave angehoben und ein Grundton abgesenkt wird


|  **G3**  |  **G3** |        |          |
| -------- | ------- | ------ | -------- |
|    E3    |    F3   |   G3   |    G3    |
|    C3    |    D3   |   E3   |    E3    |
|    A2    |    B2   |   C3   |    B2    |



Lass uns das Tempo, den Grundton und die Skala setzen:
```python
Clock.bpm = 128
Root.default=”A”
Scale.default=Scale.minor
```

Here chords and synth:
```python
chords = var([(0,2,4,6),(1,1,3,6),(2,4,6),(1,4,6)])
s1 >> prophet(chords, oct=4, dur=4, sus=4)
```

Der sichere Fall besteht darin, Grundtonnoten von Akkorden als Bassnoten zu verwenden und diese Noten in der Oktave zu senken

|  **A1**  |  **G1** | **C2** |  **E2**  |
| -------- | ------- | ------ | -------- |

```python
bassline1 = [0,-1,2,4]
```


Eine andere Möglichkeit, eine Basslinie zu erstellen, ist die Suche nach Noten innerhalb der Akkorde (obwohl die 7. schwierig sein kann).

|  **A1**  |  **B1** | **C2** |  **B1**  |
| -------- | ------- | ------ | -------- |


Du kannst auch die Dauer der Basslinie ändern, um eine rhythmische Komponente zu erhalten:

Benutze _dur=1_, _dur=[0.5,1]_, oder _dur=[1,2,1]_ anstelle von _dur=4_.

Eine andere Möglichkeit besteht darin, den Grundton eines Akkords einen Schritt in die vorherige Akkordleiste zu verschieben.

Mit  dur=1:
```python
bassline2=[0,0,0,-1,-1,-1,-1,2,2,2,2,-3,-3,-3,-3,0]
```

Oder du verwendest Oktavsprünge mit **oct**:
```python
bassline3=[0,0,0,0,-1,-1,-1,-1,2,2,2,2,-3,-3,-3,-3]
```

with _dur=1_ and _oct=[3,3,4,3]_

Zu guter Letzt eine Melodie als Basslinie:

|  **A1**  |  **G1** | **A1** |  **B1**  |  **A1**  |  **G1** | **G1** |  **A1**  |  **C2**  |  **C2** | **A1** |  **G1**  |  **E1**  |  **E1** | **F1** |  **G1**  |
| -------- | ------- | ------ | -------- | -------- | ------- | ------ | -------- | -------- | ------- | ------ | -------- | -------- | ------- | ------ | -------- |

```python
bassline4 = [0,-1,0,1,-1,-1,0,1,3,3,0,-1,-3,-3,-2,-1]
```



---
### Basslinie zu Akkorde


Wir beginnen mit Tempo, Grundton, Tonleiter und einer einfachen Basslinie:
```python
Clock.bpm = 128
Root.default=”A”
Scale.default=Scale.minor
bassline=[0,0,0,0,0,0,0,1]
```

Jetzt bauen wir Akkorde entlang des Moll-Akkords, wie: Am, Bm / A, G / A, Am.
```python
chords = var([(0,2,4),(1,3,5),(0,2,4),(-1,1,3),(0,2,4)])
```

Bm / A und G / A bedeuten "über A", da die Basslinie immer noch A als Grundton des Akkords behält.

Die entsprechenden Synth-Beispiele für Bass und Akkorde sind:
```python
s1 >> jbass(bassline, oct=3, dur=0.5, shape=0.4) # Bass
s2 >> dirt(chords, oct=5, dur=[4,3,1,4,4], amplify=0.4) # Chords
```
Schlagzeug:
```python
b1 >> play("<V....V..><..o.><....k..d>←--[--]>", sample=var([4, 2], 16), amplify=0.5)
b2 >> play(var(["[ss]",".[ss]"]), amplify=0.5)
```

Einige zusätzliche Bemerkungen zu einer Basslinie

**Benutze zeitgemäß nur eine Note im unteren Frequenzbereich!**
