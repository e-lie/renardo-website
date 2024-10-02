---
title: Patterns (Muster)
---


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

