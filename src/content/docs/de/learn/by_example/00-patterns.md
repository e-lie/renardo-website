---
title: Muster (Patterns)
---


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