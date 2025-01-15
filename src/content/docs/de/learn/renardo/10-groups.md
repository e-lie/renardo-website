---
title: Gruppen
---

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

