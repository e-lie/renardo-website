---
title: Escalas
---

### Recorre todas las escalas

_Usa el siguiente código para iterar a través de todas las escalas disponibles que proporciona Renardo._

Muestra todas las escalas disponibles:
```python
print(Scale.names())
```

Asigna la escala seleccionada como predeterminada:
```python
Scale.default=Scale.chromatic
```

Variable para asignar un paso a cada nota en la escala:
```python
steps=len(Scale.default)
```

Toca las notas a través de la escala:
```python
p1 >> pluck(P[:steps])
```
