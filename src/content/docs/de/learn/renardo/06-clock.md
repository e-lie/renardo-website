---
title: Clock
---

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
