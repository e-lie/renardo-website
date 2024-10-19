---
title: Escalas
---

Por defecto, los objetos Player utilizan la escala de Do Mayor. Estas se pueden cambiar utilizando los argumentos de palabra clave 'scale' y 'root'.
Las escalas se pueden definir como un array de semitonos, de modo que la escala Mayor es [0,2,4,5,7,9,11] o una de las escalas predefinidas del módulo Scale, por ejemplo, Scale.minor.
Root se refiere a la tónica de la escala; 0 es Do, 1 es Do#, 2 es Re y así sucesivamente.

La escala predeterminada se puede cambiar de manera que cualquier Player que no utilice una escala específica se actualizará. Esto se hace utilizando la siguiente sintaxis (cada línea es técnicamente equivalente):
```python
Scale.default.set("major")
Scale.default.set(Scale.major)
Scale.default.set([0,2,4,5,7,9,11])
```

O lo mismo, pero en menor:
```python
Scale.default.set("minor")
Scale.default.set(Scale.minor)
Scale.default.set([0,2,3,5,7,10])
```

Para ahorrar tiempo, también puedes hacer
```python
Scale.default = "minor"
```

Esto es lo mismo para la raíz:
```python
Root.default.set(1)
Root.default.set("C#")
```

O:
```python
Root.default.set(2)
Root.default.set("D")
```

Para ver una lista de todas las escalas, usa:
```python
print(Scale.names())
```

Puedes cambiar la escala utilizada por un player usando la palabra clave 'scale'
```python
p1 >> pads([0,1,2], scale=Scale.minor)
```

De manera similar, puedes cambiar la nota raíz de los players usando la palabra clave root y el objeto Root.default
```python
p1 >> pads([0,1,2], scale=Scale.minor, root=2)
```

