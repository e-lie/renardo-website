---
title: Skalen
---

### Tonskalen

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
