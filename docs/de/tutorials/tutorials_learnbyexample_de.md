

# Lerne-bei-Beispiel
    

## Muster (Patterns)


### Musterfunktionen


**PStep(n,value,default=0)** >> Gibt ein Muster zurück, wo jedes **n**-term ist **value**, ansonsten **default**.
```python
s1 >> varsaw(PStep(3,[0,2,1,4,2,5],[-2,[-2,-1]]), oct=(4,6), dur=0.25, sus=0.125, lpf=linvar([200,4000], 8))
```

**PSum(n,total,\**kwargs)** >> Gibt ein Längenmuster **n** zurück, dessen Summe **total** ist. Zum Beispiel: PSum(3,8) -> P[3,3,2] PSum(5,4) -> P[1,0.75,0.75,0.75,0.75].
```python
s1 >> donk(P[:2], oct=[[5,6], 6], dur=PSum(12,8), sus=0.5)
```

**PRange(start,stop=None,step=None)** >> Gibt ein Muster zurück, das dem Pattern(range(start,stop,step)) entspricht.
```python
s1 >> piano([0,2,0,1], oct=4, dur=2, sus=1, amplify=0.7)
s2 >> piano(Pvar([[0,2,4,2],[0,4,2,1],PRange(0,8,var([2,1],4))], [4,4,8]), dur=Pvar([0.5,PDur([3,5],8)], [1,3]))
```

**PTri(start,stop=None,step=None)** >> Gibt ein Muster wieder, das dem Pattern(range(start,stop,step)) entspricht, mit der invertierten Form angehängt.
```python
s1 >> piano([0,2,0,1], oct=4, dur=2, sus=1, amplify=0.7)
s2 >> piano(Pvar([[0,2,4,2],[0,4,2,1],PTri(0,8,var([2,1], 4))], [4,4,8]), dur=Pvar([0.5,PDur([3,5], 8)],[1,3]))
```

**PEuclid(n,k)** >> Gibt den Euclidean-Rhythmus zurück, der **n**-Pulse möglichst gleichmäßig über **k**-Stufen verteilt. z.B. PEuclid(3,8) erzeugt P[1,0,0,1,0,0,1,0].
```python
s1 >> blip(Pvar([P[:2],P[:3]], 16), oct=4, dur=0.5, amplify=PEuclid([3,5,5,3],[7,8]))
```

**PSine(n=16)** >> Gibt Werte eines Zyklus einer Sinuswelle in **n** Teile zurück.
```python
s1 >> fuzz(PSine(8), dur=0.5, sus=0.25, formant=1, room=0.5, mix=0.33, pan=PSine(32))
```

**PDur(n,k,dur=0.25)** >> Gibt die tatsächliche Dauer nach Euclidean-Rhythmen zurück (siehe PEuclid), wobei **dur** die Länge jedes Schrittes ist. z.B. PDur(3,8) erzeugt P[0.75,0.75,0.5].
```python
s1 >> bass(PWalk(3), oct=5, dur=Pvar([PDur(5,7),PDur(5,8)], 16))
s2 >> pulse(Pvar([P[:3],P[:2]], 8), oct=5, dur=PDur(2,3), sus=0.125, lpf=expvar([400,4000], 16), lpr=0.75, amp=P10(16))
```

**PBern(size=16,ratio=0.5)** >> Gibt ein Muster von Einsen und Nullen basierend auf dem **ratio**-Wert (zwischen 0 und 1). Dies ist als Bernoulli-Sequenz bekannt.
```python
b1 >> play("S", sample=[1,3], amp=PBern(16,0.5))
b2 >> play("S", dur=PBern(24,0.5), delay=[0,0.5], sample=5, amp=1)
```

**PBeat(string,start=0,dur=0.5)** >> Gibt ein Muster von Dauern (**dur**) basierend auf einer Eingabekette zurück, wobei Nicht-Raum einen Impuls bedeuten.
```python
s1 >> donk(dur=PBeat(". . . ..", start=0, dur=[1]+[0.5]+[1]+[0.5]*2))
s2 >> bell(dur=PBeat(". . . ..", start=0, dur=0.5), amplify=0.6)
```

**PSq(a=1,b=2,c=3)**
```python
s1 >> piano(PSq(1,2,3)-var([0,P[:2]*2], [4,8]))
print(PSq(1,2,3))
```


---
### Mustergeneratoren


**PRand(lo,hi,seed=None)/PRand([values])** >> Gibt eine Reihe von zufälligen Zahlen zwischen **lo** und **hi**, inklusive. Wenn **hi** weggelassen wird, ist der Bereich *0* bis *lo*. Anstelle des Bereichs kann eine Liste von Werten **values** bereitgestellt werden und **PRand** gibt eine Reihe von zufällig aus der Liste ausgewählten Werten zurück.
```python
var.ch1 = var([PRand([0,2,4,8], seed=PxRand(200))], 4)
var.ch2 = var([PRand([0,1,3,5], seed=PxRand(200))], [8,4,4])
s1 >> piano([var.ch1,var.ch2], dur=0.5, amplify=0.6)
```

**PxRand(lo,hi)/PxRand([values])** >> Identisch zu PRand, aber keine Elemente werden wiederholt.
```python
s1 >> pluck(PWalk(4), dur=PxRand([2,0.66,0.66,0.33,1,1,0.5,0.5,0.75]), oct=6, formant=3, tremolo=3, room=0.6, mix=0.3, amplify=0.65)
```

**PwRand([values], [weights])** >> Verwende eine Liste von Gewichten, um anzuzeigen, wie oft Elemente mit demselben Index aus der Liste der Werte ausgewählt werden.
Ein Gewicht von 2 bedeutet, dass es doppelt so wahrscheinlich als Gegenstand mit einem Gewicht von 1 gewählt wird.
```python
s1 >> sitar(PWalk(4), dur=PwRand([2,0.66,0.33,1,0.5,0.75,0.25], [2,4,5,3,7,6,1]), oct=PwRand([6,6,7,5], [4,3,2,1]), room=0.6, mix=0.5, amplify=0.65)
```

**P10(n)**>> Gibt ein Muster der Länge **n** einer zufällig generierten Serie von Eins und Nullen zurück.
```python
s1 >> pulse(Pvar([[0,1],[0,2]], 16), oct=4, dur=2, sus=1, amplify=0.75)
s2 >> pulse(P[:4], dur=0.5, sus=0.25, amplify=0.75, amp=P10(16))
```

**PAlt(pat1, pat2, *patN)** >> Gibt ein Muster zurück, das durch Wechseln der Werte in den angegebenen Sequenzen erzeugt wird.

0, -2, 0, 8, 2, 1, 0, 9, 4, 3, 7, 0, -2, 0, 5 ...
```python
mtf1 = [0,2,4]
mtf2 = [-2,1,3]
mtf3 = [0,0,2]
s1 >> piano(PAlt(mtf1,mtf2,mtf3,[8,9,7,5]), dur=0.5)
```

**PJoin(patterns)** >> Erstellt eine Liste von Mustern.
```python
mtf1 = [0,2,6,4]
mtf2 = [1,3,7,5]
s1 >> arpy(Pvar([mtf1,mtf2,mtf1,PJoin([mtf1,mtf2])], 8), oct=5, dur=0.5, formant=3, room=0.5, mix=0.3)
```

**PPairs(seq,func=<lambda>)** >> Verlinkt eine Sequenz zu einer zweiten Sequenz, die durch Ausführung einer Funktion auf dem Original erhalten wird. Standardmäßig ist dies Lambda n: 8-n.
```python
s1 >> sitar(PPairs([0,4,2,0,6,4], lambda n: var([n*3,n-1], [12,4])), oct=4, dur=0.5, amplify=0.4)
```

**PQuicken(dur=0.5,stepsize=3,steps=6)** >> Gibt eine Gruppe von Verzögerungsbeträgen zurück, die allmählich abnehmen.
```python
b1 >> play("m", dur=1, delay=[PQuicken(dur=2,stepsize=2,steps=3),PQuicken(dur=2,stepsize=2,steps=6)], sus=0.125, amplify=0.4)
b2 >> play("t", dur=4, delay=PQuicken(dur=1,stepsize=4,steps=3), sample=2, amplify=0.6)
b3 >> play("S", dur=4, delay=2+PQuicken(dur=0.5,stepsize=2,steps=3), amplify=0.65)
```

**PRhythm(durations)** >> Konvertiert alle Tupel/PGroups in Verzögerungen, die mit dem **PDur**-Algorithmus berechnet werden.
```python
b1 >> play("V", dur=PRhythm([0,0.5,0,0.25,1,0.75]), delay=0, sample=12, amplify=0.65)
```

**PShuf(seq)** >> Gibt eine gemischte Version von **seq**. Dieses Beispiel verwendet eine Funktion, um die Liste automatisch zu schütteln.
```python
def updateShuffle(n=0):
    beats=32
    if n % beats == 0:
         var.mtf = var([PShuf([0,1,3,4,-1])], 1)
    Clock.future(1, updateShuffle, args=(n+1,))
    
updateShuffle()
s1 >> ambi(var.mtf, oct=(5,6), dur=1, sus=0.25, echo=[0,0.5], echotime=2, room=0.66, mix=0.3, amplify=0.5)
```

**PStretch(seq,size)** >> Gibt **seq** als Muster zurück und wird solange wiederholt, bis seine Länge **size*** ist, z.B. PStretch ([0,1,2], 5) gibt P [0,1,2,0,1] zurück.
```python
var.mtf1 = var([0,1,2,4,[3,5],0,2,4], 0.5)
s1 >> karp(PStretch(var.mtf1,12), oct=6, dur=[0.5,0.66], shape=0.125, formant=0, rate=0.125, amplify=0.66)
```

**PStrum(n=4)**
```python
var.mtf1 = var([0,1,2,0,[4,2],3,-2,[-1,4]], 0.5)
s1 >> marimba(var.mtf1, oct=var([5,6], [0.5,1.5]), dur=Pvar([PStrum(5),PStrum(2)], 16), shape=0.25, room=0.5, mix=0.5, amplify=1)
```

**PStutter(seq,n=2)** >> Erzeugt ein Muster, so dass jedes Element im Array **n** mal wiederholt wird (**n** kann ein Muster sein).
```python
var.mtf1 = var([0,6,4,2], 2)
s1 >> quin(PStutter([var.mtf1], 2), oct=4, dur=PStutter([1,0.5], 4), sus=0.25, amplify=0.65)
```

**PZip(pat1, pat2, patN)** >> Erzeugt ein Muster, das 'zips' multiple Muster. PZip([0,1,2], [3,4]) erzeugt das Muster P[(0,3),(1,4),(2,3),(0,4),(1,3),(2,4)].
```python
s1 >> faim(PZip([0,2], [2,-2,4,6]), oct=6, dur=2, atk=0.15, chop=2, lpf=1800, vib=2, amplify=0.5)
```

**PZip2(pat1,pat2,rule=<lambda>)** >> Wie PZip, verwendet aber nur zwei Muster. Verbindet Werte, wenn sie die Regel erfüllen.
```python
s1 >> faim(PZip2([0,2], [2,-2,4,6], rule=<lambda>), oct=6, dur=2, atk=0.15, chop=2, lpf=1800, vib=2, amplify=0.5)
```

**Pvar** >> TimeVar, die Listen statt einzelner Werte speichert (var,sinvar,linvar,expvar).
```python
s1 >> gong(P[Pvar([[0,2],[2,4],[4,6],[2,4]], 2)], dur=0.5, lpf=expvar([800,8000], [4,0]), pan=sinvar([-0.65,0.65], 8), amplify=0.75)
```

**PWhite(lo,hi)** >> Gibt zufällige schwimmende Punktzahlen zwischen **lo** und **hi** zurück.
```python
s1 >> arpy((0, var(PRand([Scale.default]), 8)), oct=var([5,6], [24,8]), dur=PDur(5,8), room=0.5, mix=sinvar(0.3,0.75), pan=PWhite(-1,1), amplify=0.65)
```

**PChain(mapping_dictionary)** >> Basierend auf einer einfachen Markov-Kette mit gleichen Wahrscheinlichkeiten. Nimmt ein Wörterbuch von Elementen, Zustand und möglichen zukünftigen Zustände. Jeder zukünftige Staat hat eine gleiche Chance, ausgewählt zu werden. Wenn ein möglicher zukünftiger Zustand nicht gültig ist, wird ein KeyError erhöht.
```python
s1 >> rave(PChain([0,8,6,3,-2,0,-3]), dur=0.25, sus=0.125, amplify=0.5)
```

**PWalk(max=7,step=1,start=0)** >> Gibt eine Reihe von Ganzzahlen mit jedem Element ein Inkrement **step** auseinander und mit einem Wert im Bereich von +/- das Maximum **max**. Das erste Element kann mit Start **start** ausgewählt werden.
```python
s1 >> dirt(PWalk(6,2), dur=[0.5,PSum(4,3)], oct=6, shape=0.3, lpf=1800, pan=(-0.65,0.65), amplify=0.25)
```

**PFibMod()** >> Gibt die Fibonacci-Sequenz zurück.
```python
s1 >> feel(PFibMod()[:7]+var([0,-3,0], 8), dur=1, shape=0.25, chop=128, room=0.75, mix=0.5)

```

---

## Akkordfolge


### "Billy Jean" (Michael Jackson)

Dieses Beispiel zeigt, wie man "Billy Jeans' Intro" kodiert.

```python
# Tempo:
Clock.bpm=117
# Root E:
Root.default=“E”
# Scale to minor:
Scale.default=Scale.minor
# Chords in a list:
chords=[(0,2,4),(0,1,3,5),(0,2,4,6),(0,1,3,5)]
# Player object:
s1 >> pluck(chords, oct=3, dur=[1.5,5/2], sus=2)
# Drums:
b1 >> play("<V....V..V...[VV]V..><..o.><---->")
```

---

### “Get Lucky” (Daft Punk)

Dieses Beispiel zeigt, wie man Bassline und Akkorde des Titels "Get Lucky" von Daft Punk erstellt.

Bass:

|  **B1**  |  **D2** | **F#2** |  **E2**  |
| -------- | ------- | ------- | -------- |


Akkorde:

|  **Bm**  |  **D**  | **F#m** |  **Em**  |
| -------- | ------- | ------- | -------- |


Im vierten Akkord gibt es eine Notiz von dem Nachbar F#m (Kreis der Fünften):

|  **F#2** |  **A2** | **C#3** |  **B2**  |
| -------- | ------- | ------- | -------- |
|    D2    |    F#2  |   A2    | G#2 (F#m chord key) |
|    B1    |    D2   |   F#2   |    E2    |


Als Extra kannst du versuchen, eine kleine Vielfalt mit TimeVars zu erstellen:

Drop: Duenner ohne Beats - Break: keine Gesang - Buildup: Mix BreakNDrop

Mit 4 Noten/Chors gespielt alle 16 Beats, die Songstruktur ist wie folgt:

| **Intro** | **Break** | **Buildup** | **Drop** | **Break** | **Buildup** | **Drop**  | **Outro** |
| --------- | --------- | ----------- | -------- | --------- | ----------- | --------- | --------- |
|  16 Beats |  32 Beats |  32 Beats   | 64 Beats |  32 Beats |  32 Beats   |  64 Beats | 48 Beats  |




---
## Synths Attribute


### Ein Piano

Im folgenden Beispiel werden 3 Player-Objekte verwendet, um ein volles Klavier zu bilden:

```python
p1 >> piano([0,1,0,-1], oct=4, dur=2, amplify=0.75)
p2 >> piano([(2,4),(0,2),(3,5),(1,3),(2,4),(0,2),(-1,1),(-3,-1)], dur=1, amplify=0.66)
p3 >> piano([0,4,2,4,1,2,1,3,2,3,5,7,-1,3,-3,1], oct=6, dur=0.5).every(32, "reverse")
```

Das ist dasselbe wie:

```python
bassline = [0,1,0,-1]
chords = [(2,4),(0,2),(3,5),(1,3),(2,4),(0,2),(-1,1),(-3,-1)]
melody = [0,4,2,4,1,2,1,3,2,3,5,7,-1,3,-3,1]
p1 >> piano(bassline, oct=4, dur=2, amplify=0.75)
p2 >> piano(chords, dur=1, amplify=0.66)
p3 >> piano(melody, oct=6, dur=0.5).every(32, "reverse")
```

**Ein weiteres Beispiel**

```python
Scale.default="minor"
Root.default.set(var([1, 2], 32))
Clock.bpm=105
a1a = P[2, 6, 4, -2]
a1b = P[var([0, 2, -2, 2], 16), 4, 8]
a1c = P[var([[0, P*(0, 0, 0, 0, var([0, 8, 6, 4], 16))], 0], 16)]
a1d = P[var([[P*(8, 7, 6, 5, 4), P*(4, 6, 8)], 0], 16)]
a1 >> pianovel(
    (a1a, a1b, a1c, a1d),
    amp=(0.4 * var([linvar([1, 0.2], 0.25), 1, PBern(16, 0.9)], 16), var([0.4, 0.6], 4)), dur=(1,2),
    oct=(3,6),
    vib=0.5, vibdepth=0.5,
    lpf=(var([0, 600], 32),linvar([400, 4000], 64)),
    chop=(linvar([0, 4], 64), 0),
    shape=(0.2, 0), formant=(0, var([1, 0], 4)),
    slide=var([0, var([2, -0.5, 0], 3)], [3, 1]),
    pan=(expvar([0, -0.5], 12), expvar([0, 0.5], 16))
)
```

---
## Sample Attribute

Hier folgen die, die mit Audiosample funktionieren:

_dur, delay, sample, sus, pan, slide, slidedelay, glide, glidedelay, bend, benddelay, coarse, striate, rate, pshift, hpf, hpr, lpf, lpr, swell, shape, chop, tremolo, echo, echotime, spin, cut, verb, room, mix, formant, shape, drive, blur_

Wenn Du zum Beispiel _pshift_ verwendest, kannst Du die Steigung der Probe ändern:
```python
b1 >> play("#", dur=2, pshift=linvar([0,8], 16))
```


---
## Skalen

_Use den folgenden Code, um durch alle verfügbaren Skalen iterate Renardo bietet._

Zeigt alle verfügbaren Skalen an:
```python
print(Scale.names())
```

Den ausgewählten Maßstab als Standard zuordnen:
```python
Scale.default=Scale.chromatic
```

Variabel, um jeder Note im Maßstab einen Schritt zuzuordnen:
```python
steps=len(Scale.default)
```

Spiele die Noten durch die Skala:
```python
p1 >> pluck(P[:steps])
```


---  
## Beats Beispiele

*   Versuche, Variationen, Modulationen und/oder nen Schwing (z.B. Attribut **nudge**) zu Deinen Beats hinzuzufügen, um es am Leben zu halten.
*   Variationen sind Änderungen in der Beat-Struktur von einer Bar zum anderen.
*   Modulationen sind Auswirkungen auf den gesamten Trommelsatz oder auf einzelne Teile des Trommelsatzes.
*   Fuege einige off-Noten hinzu, um eine andere Dynamik innerhalb des Beat zu bekommen, gebe Deinem Beat etwas Schwung.
*   Achte darauf, nicht zu dynamisch zu werden, dadurch kann man "Den Rhythmus bei dem man mit muss" unterbrechen.


### Erzeuge beats

Beginne mit dem Grundmuster aus einem Kick, einer Schnare und einem HiHat.

```python
k1 >> play(“X...X...”)
s1 >> play(“..o...o.”)
h1 >> play(“-.-.-.-.”)
```

**.** (Punkt) wird als platzhalter verwendet, um es leichter zu sehen.
Während wir unseren Beat in der Zukunft erhöhen, lasse 3 Player-objekte für die Trommel oder Trommel-ähnliche Klänge, 3 Player-objekte für Snare und Snare-like Klänge und 3 für HiHat, Open Hat s.o.


Jetzt kannst Du eine Variation zum HiHat hinzufügen:
```python
h1 >> play(“-.-.-.-.”).every(16,”mirror”).every(8,”stutter”,2)
```

Und hier ein weiteres Beispiel:
```python
h2 >> play(“--------”, sample=3, amplify=[0.3,0.3,0.6,0.3,0.3,0.6,0.3,0.6])
```

DU kannst auch _ghost_ Notizen hinzufügen, die in der Regel ruhiger sind 16 offbeat Noten vor oder nach der _main_ Note. Dazu verwenden wir **<>** zur Schichtung, um das Volumen an die _ghost_-Note anzupassen:
```python
ks >> play(“<..o...o.><.[.o]......>”, amplify=(0.7, 0.3))
```


**Die folgenden Beispiele helfen Dir, das Konzept mit vertrauten Rhythmen und Beats zu erleben. Darüber hinaus kannst du eigenen Argumente und Instrumente nutzen. **

---
### House

```python
Tempo:
Clock.bpm=128

BassKick:
b1 >> play("X.", rate=0.8, sample=2, amplify=0.6)

Clap:
b4 >> play("..*.", sample=3, amplify=0.4)

Snare:
b5 >> play("......o.", rate=1.4, sample=1, amplify=0.5)

HiHat:
b7 >> play(".-", rate=0.8, sample=3, delay=PRand([0,Pwhite(-0.5,0.5)]), amp=0.6)

Cymbal:
b8 >> play("#", rate=1.2, dur=16, sus=8, amplify=0.8)
```

---
### Drum N Bass

```python
Tempo:
Clock.bpm=170

BassKick:
b1 >> play("V....V..VV...V..", rate=0.8, sample=2, amplify=0.6)
b2 >> play("v......[vvvv]", sample=4, amplify=0.6)

Snare:
b4 >> play(Pvar(["..o.","..o[.o.]"], [12,2]), sample=2, amplify=0.4)
b5 >> play("..i.", amplify=PRand([0.4,PWhite(0.6,0.4)]))

Shaker:
b7 >> play("s", rate=0.8, sample=2, amplify=PRand([0.4,PWhite(0.6,0.4)]))

Closed HiHat:
b8 >> play("-", rate=1.4, pshift=linvar([0,16], 8), sample=2, shape=0.3, amplify=1.2)
```


---
### Dubstep

```python
Tempo:
Clock.bpm=140

BassKick:
b1 >> play(Pvar(["V...V...", "V[..V.]..[V..V][..V.].[..V.]"], 16), dur=1, rate=1.2, sample=6, amplify=0.6)
b2 >> play(Pvar(["X...X...", "X[..X.]..[X..X][..X.].[..X.]"], 16), dur=1, sample=2, amplify=0.6)
b3 >> play(Pvar(["v...v...", "v[..v.]..[v..v][..v.].[..v.]"], 16), dur=1, sample=4, amplify=0.6)

Snare:
b4 >> play(Pvar(["..o...o.", "..o...oo"], 16), dur=1, rate=0.75, sample=2, amplify=PRand([0.4,PWhite(0.6,0.4)]))
b5 >> play(Pvar(["..i...i.", "..i...ii"], 16), dur=1, sample=4, amplify=0.4)
b6 >> play(Pvar(["..h...h.", "..h...hh"], 16), dur=1, sample=5, amplify=0.4)

Closed HiHat:
b7 >> play("-", dur=0.5, rate=0.4, pshift=linvar([0,8], 8), sample=4, amplify=0.8)
b8 >> play("s", dur=0.5, rate=1, sample=1, amplify=PRand([0.4,PWhite(0.6,0.4)]))

BuildUp:
c1 >> play("V.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), rate=1.2, sample=6, amplify=Pvar([0.6,0], [30,2]))
c2 >> play("X.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), sample=2, amplify=Pvar([0.6,0], [30,2]))
c3 >> play("v.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), sample=4, amplify=Pvar([0.6,0], [30,2]))
c4 >> play("o.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), rate=0.75, sample=2, amplify=Pvar([0.4,0], [30,2]))
c5 >> play("i.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), sample=4, amplify=Pvar([0.4,0], [30,2]))
c6 >> play("h.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), sample=5, amplify=Pvar([0.4,0], [30,2]))

Create Groups to control a bunch of Player() objects at the same time:
gB = Group(b1,b2,b3,b4,b5,b6,b7,b8)
gC = Group(c1,c2,c3,c4,c5,c6)

Use a TimeVar to swap between Build and Drop:
gB.amp=var([1,0], [64,32])
gC.amp=var([0,1], [64,32])


_Add stretch, pshift, rate or reverse to create different patterns!_
```

---
### Trap

```python
Tempo:
Clock.bpm=140

BassKick:
b1 >> play("[VV]..V[.V]V.[.V].V..V.V.V.", dur=1, rate=1.2, sample=-1, amplify=0.6)
b2 >> play("[XX]..X[.X]X.[.X].X..X.X.X.", dur=1, sample=2, amplify=0.6)

Snare:
b4 >> play("..o.", dur=1, rate=0.75, sample=2, amplify=PRand([0.4,PWhite(0.6,0.4)]))
b5 >> play(".H..", dur=1, rate=1.4, sample=1, pan=(-0.7,0.7), amplify=0.4)

Closed HiHat:
b7 >> play("[--]", dur=PRand([4,2,1,0.5,PDur(3,8)*2,PDur(3,7)*2], 0.25), rate=0.75, sample=3, amplify=0.4)
b8 >> play("[--]", dur=PRand([4,2,1,0.5,0.25]), rate=0.5, sample=-1, amplify=0.4)


Here are a few instruments:
s1 >> dub(PRand([0,2,3], 0.25), oct=(3,4), dur=4, chop=PRand([6,8]), shape=0.6, amplify=0.3)
s2 >> space(s1.degree, oct=(4,5), dur=4, chop=PRand([3,4]), room=0.4, mix=0.5, amplify=1.2).offbeat()
s3 >> pulse([2,3,5,7,9], oct=var([3,4,5]), dur=PRand([0.5,0.25], 6), shape=0.6, formant=var([3,0,2], 0.5), room=0.75, mix=0.5, pan=[-0.6, 0.6], amplify=0.4)
```

---
### HipHop

```python
Tempo:
Clock.bpm=80

BassKick:
b1 >> play("X..X....X.XX....", rate=var([0.8,1], 8), formant=2, sample=5, amplify=1.3, amp=1)

Snare:
b4 >> play("..i.", rate=0.75, sample=2, amplify=PRand([0.4, PWhite(0.6,0.4)]))
b5 >> play(".H.......H......", dur=0.5, rate=1.4, sample=1, delay=1/16, pan=(-0.7,0.7), amplify=0.4)

Closed HiHat:
b7 >> play("--.-", rate=0.75, sample=3, amplify=0.4)

Open Hat / Shaker:
b8 >> play(".............#..", rate=1.4, sample=2, amplify=1, amp=1)
b9 >> play("[ss]", rate=0.75, sample=2, hpf=linvar([800,6000], 1), amplify=0.4, amp=1).every(PRand([4,8,12,16]),"stutter",PRand([2,3,4]))
```

---
### Footwork

```python
Tempo:
Clock.bpm=154

BassKick:
b1 >> play("X..X..X.X..X..X.", dur=1, rate=6/5, sample=-1, amplify=0.6)
b2 >> play("V..V..V.V..V..V.", dur=1, sample=1, amplify=0.6)
b3 >> play("{([XX])([X.])([X...])}", dur=1, rate=PRand([0.75,0.4,1,1.4], 0.25), shape=linvar([1.2, 0.4], 16), amplify=0.4, amp=1).every(PRand([2,4,8,16]),"stutter",PRand([2,3,5]))

Snare:
b4 >> play("............H...", dur=1, rate=0.75, sample=2, amplify=PRand([0.4,PWhite(0.6,0.4)])).every(PRand([4,8,12]),"stutter", PRand([2,3]))
b5 >> play("......o.......o[oo.o]",dur=1, rate=7/5, sample=1, pan=(-5/7,5/7), amplify=0.4)
b6 >> play("i",dur=PRand([4,2,1,0.5, PDur(3,8)*2,PDur(3,7)*2], 0.25), rate=0.5, sample=3, amplify=0.4)

HiHat:
b7 >> play("..-.....", rate=0.75, sample=3 , amplify=0.4)
b8 >> play("-", dur=1, sample=3, amplify=0.8)
b9 >> play("{([--])(M)}", dur=1, rate=PRand([0.75,0.4,1,1.4], 0.25), sample=2, shape=linvar([1/7,0.4], 16), amplify=1/5, amp=1).every(PRand([2,4,8,16]),"stutter", PRand([3,5]))
```

---
### Funk

```python
Tempo:
Clock.bpm=118

BassKick:
b1 >> play("VV...[VV]..", dur=0.5, rate=1.2, sample=-1, amplify=0.4)
b2 >> play("VV...[VV]..", dur=0.5, sample=linvar([0,5], 4), amplify=0.4)

Snare:
b4 >> play("..[o.][.o][.o].[o.][.o]", dur=0.5, rate=2, sample=5, amplify=PRand([0.4,PWhite(0.3,0.4)]))
b5 >> play("....i..i.i..i..i", dur=0.25, rate=1, sample=3, pan=(-0.7, 0.7), amplify=0.4)
b6 >> play("..o.", dur=1, rate=2, sample=5, pan=(-0.7, 0.7), amplify=0.4)

HiHat:
b7 >> play("[-.-.][-.--][-...][-.-.][--..][-.-.][-.-.][-...]", dur=1, rate=1, sample=2, amplify=1)
b8 >> play("[-.]", dur=0.5, rate=1, sample=-1, amplify=0.8, amp=1)
b9 >> play("[ll].-.", sample=var([3,4,0], 16), formant=linvar(5,8), amplify=0.8, amp=1).every(PRand([2,4,8,16]),"stutter", PRand([2,3,5]))
b0 >> play("[ss]", rate=1, sample=2, shape=0.6, amplify=0.8, amp=1).every(PRand([2,4,8,16]),"stutter", PRand([2,3,5]))

gBeats = Group(b1,b2,b3,b4,b5,b6,b7,b8,b9,b0)
gBeats.amp=1
```

---
## Übergänge erstellen

* Ramp nach oben, dann Pause, dann wieder Beats (Trommelroll...Ruhe...Beat). Hier können vorzüglich die Gruppenzuordnungen z. B. mit _**gBeats.hpf = linvar([0,5000], [12,0], start = Clock.now())**_, dann ganz plötzlich _**gBeats.amp = var([0,1], [4,inf], start=Clock.now()**_
    
* Um einen Übergang mit der nächsten Bar zu beginnen, verwende **start=nextbar***.
* Ziehe ab bevor Du addierst, wie z.B. nur Schnare und HiHat ohne Bassbeat.
* Rolle und hebe es mit 8. und 16. Noten von z.B. Schnare, HiHat, Shaker oder Basskick.
* Wenn Du einen Übergang von einem Abschnitt zu einem anderen benötigst, sei subtil, wenn du keine große Subtraktion, wie das Schlagzeug zu stoppen, verwendest.
    