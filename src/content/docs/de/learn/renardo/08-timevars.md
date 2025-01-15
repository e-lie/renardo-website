---
title: TimeVars
---


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

Wechsele die abwechselnden Noten alle 8 Beats
```python
p1 >> pluck([0,1,2,Pvar([[4,5,6,7],[11,9]], 8)], dur=0.25, sus=1)`
```
