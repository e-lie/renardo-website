---
title: Skalen
---


### Play through all scales

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
