---
title: Reloj 
---


### Conceptos Básicos


Para detener todos los objetos del jugador, puedes presionar **Ctrl+.** (Mantén Ctrl y presiona el punto). Esto es un atajo para el comando:
```python
Clock.clear()
```

Cambiar el tempo (esto tiene efecto en el siguiente compás). El valor predeterminado es 120.
```python
Clock.bpm = 144
```

Para ver lo que está programado para reproducirse.
```python
print(Clock)
```

Para ver cuál es la latencia
```python
print(Clock.latency)
```

A veces quieres saber cuándo comienza el siguiente ciclo de X beats. Para hacer esto usamos el método 'mod'. Por ejemplo, si queremos ver cuándo comienza el siguiente ciclo de 32 beats, podemos hacer
```python
print(Clock.mod(32))
```

### Avanzado

El reloj puede programar cualquier cosa con un método __call__. Necesita una pista de tiempo absoluto para programar funciones - Clock.schedule necesita saber el beat para llamar a algo.
```python
Clock.schedule()   # lanza TypeError
```

Programar un evento después de ciertas duraciones - Clock.future necesita saber cuántos beats adelante llamar a algo
```python
Clock.future()     # lanza TypeError
```

Estos son equivalentes
```python
Clock.schedule(lambda: print("hola"), Clock.now() + 4)
Clock.future(4, lambda: print("hola"))
```

Para programar algo más
```python
Clock.schedule(lambda: print("hola"))
```

Podemos llamar a algo cada n beats
```python
Clock.every(4, lambda: print("hola"))
```

Obtener el reloj actual y sumar 2. - Útil para programar.
```python
print(Clock.now() + 2)
```

Emitir comando en el siguiente compás
```python
nextBar(Clock.clear)
```

Con un decorador
```python
@nextBar
def change():
    Root.default=4
    Scale.default="minor"
    # etc etc
```

Puedes crear tu propia función y decorarla para poder usarla en un .every en un objeto Player
```python
@PlayerMethod
def test(self):
    print(self.degree)

p1 >> pluck([0,4]).every(3, "test")
```

Y cancelarlo con
```python
p1.never("test")
```
