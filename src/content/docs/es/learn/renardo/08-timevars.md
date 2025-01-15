---
title: TimeVars
---


### TimeVar *var()*

Un TimeVar es una abreviatura de "Variable Dependiente del Tiempo" y es una característica clave de Renardo. Un TimeVar tiene una serie de valores que cambia después de un número predefinido de pulsos y se crea usando un objeto var con la sintaxis var([lista_de_valores], [lista_de_duraciones]).

Genera los valores: 0,0,0,0,3,3,3,3...
```python
a = var([0,3],4)            # La duración puede ser un valor único
print(int(Clock.now()), a)  # 'a' inicialmente tiene un valor de 0
```
Salida de consola - (El primer valor puede diferir):
_0, 0_

```python
print(int(Clock.now()), a)   # Después de 4 pulsos, el valor cambia a 3
```
Salida de consola:
_4, 3_


```python
print(int(Clock.now()), a)   # Después de otros 4 pulsos, el valor cambia a 0
```
Salida de consola:
_8, 0_


La duración también puede ser una lista
```python
a = var([0,3],[4,2])
print(int(Clock.now()), a)
```

Cuando un TimeVar se usa en una operación matemática, los valores que afecta también se convierten en TimeVars que cambian de estado cuando el TimeVar original cambia de estado – esto incluso se puede usar con patrones:
```python
a = var([0,3], 4)
print(int(Clock.now()), a + 5)   # Cuando el pulso es 0, a es 5
```
Salida de consola:
_5_

```python
print(int(Clock.now()), a + 5)   # Cuando el pulso es 4, a es 8
```
Salida de consola:
_8_

```python
b = PRange(4) + a
print(int(Clock.now()), b)   # Después de 8 pulsos, el valor cambia a 0
```
Salida de consola:
_P[0, 1, 2, 3]_


```python
print(int(Clock.now()), b)   # Después de 12 pulsos, el valor cambia a 3
```
Salida de consola:
_P[3, 4, 5, 6]_


Usa 'var' con tus objetos Player para crear progresiones de acordes.
```python
a = var([0,4,5,3], 4)
b1 >> bass(a, dur=PDur(3,8))
p1 >> pads(a + (0,2), dur=PDur(7,16))
```

Puedes añadir un 'var' a un objeto Player o a un var.
```python
b1 >> bass(a, dur=PDur(3,8)) + var([0,1],[3,1])
b = a + var([0,10],8)
print(int(Clock.now()), (a, b))
```

Actualizar los valores de un 'var' actualizará en todas partes
```python
a.update([1,4], 8)
print(int(Clock.now()), (a, b))
```

Los Vars pueden ser nombrados ...
```python
var.chords = var([0,4,5,4],4)
```

Y usados después
```python
b1 >> pluck(var.chords)
```

Cualquier jugador que use el var nombrado será actualizado
```python
var.chords = var([0,1,5,3],4)
```

También puedes usar un 'linvar' que cambia sus valores gradualmente con el tiempo. Cambia el valor de 0 a 1 en 16 pulsos
```python
c = linvar([0,1],16)
```

Ejecuta esto varias veces para ver los cambios
```python
print(int(Clock.now()), c)
```

Cambia el amp basado en ese linvar
```python
p1 >> pads(a, amp=c)
```

un 'Pvar' es un 'var' que puede almacenar patrones (en lugar de, por ejemplo, enteros)
```python
d = Pvar([P[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], P[0, 1, 2, 3, 4, 5, 4, 3, 2, 1]], 8)
print(int(Clock.now()), d)
p1 >> pads(a, amp=c, dur=1/4) + d
```

Cambia la escala cada 16 pulsos
```python
Scale.default = Pvar([Scale.major, Scale.minor],16)
```

Incluso puedes establecer el valor para que dure para siempre una vez que se alcanza usando un valor especial llamado "inf"
```python
x = var([0, 1, 2, 3], [4, 4, 4, inf])
print(x) # Sigue presionando - eventualmente se detendrá en 3
```

---
### Otros tipos de TimeVar


Hay varias subclases de **var** que devuelven valores entre los números especificados. Por ejemplo, un **linvar** cambia gradualmente los valores de manera lineal:
```python
print(linvar([0,1],8)) # sigue ejecutando para ver el valor cambiar entre 0 y 1
```

Aumenta el corte del filtro de paso alto en 32 pulsos
```python
p1 >> play("x-o-", hpf=linvar([0,4000],[32,0]))
```

Otros tipos incluyen **sinvar** y **expvar**
```python
print("Lineal:", linvar([0, 1], 8))
print("Sinusoidal:", sinvar([0, 1], 8))
print("Exponencial:", expvar([0, 1], 8))
```


**Desplazando el tiempo de inicio**

Otro truco útil es desplazar el tiempo de inicio para el var. Por defecto es cuando el tiempo del Clock es 0 pero puedes especificar un valor diferente usando la palabra clave "start"
```python
print(linvar([0, 1], 8))
print(linvar([0, 1], 8, start=2))
```

Esto se puede combinar con Clock.mod() para iniciar una rampa al comienzo del siguiente ciclo de 32 pulsos:
```python
d1 >> play("x-o-", hpf=linvar([0,4000],[32,inf], start=Clock.mod(32)))
```

Cabe señalar que cuando un objeto Player() usa una función TimeVar que cambia gradualmente, el valor almacenado en él se usará en el momento en que se activó la nota. Esto significa que después de tocar una nota no escucharás un cambio en el valor con el tiempo en la nota misma. Prueba estas líneas de código por ti mismo:

Sin cambio gradual en la frecuencia de paso alto:
```python
p1 >> dirt(dur=4, hpf=linvar([0,4000], 4))
```

Cambio gradual aparente en la frecuencia de paso alto:
```python
p2 >> dirt(dur=0.25, hpf=linvar([0,4000], 4))
```

También puedes usar una duración de 0 para saltar inmediatamente el cambio gradual y pasar al siguiente valor. Esto es útil para "restablecer" valores y crear caídas.

Aumenta la frecuencia del filtro de paso alto a 4000Hz, luego vuelve a 0:
```python
p1 >> dirt(dur=0.25, hpf=expvar([0,4000], [8,0]))
```

Como con las funciones normales de TimeVars, los TimeVars se pueden anidar dentro de otros TimeVars a medida que cambian gradualmente para gestionar mejor la aplicación de los valores. Por ejemplo, solo podemos aumentar la frecuencia del filtro de paso alto en los últimos 4 pulsos de un ciclo de 32 pulsos de la siguiente manera.

Usa una función TimeVar normal para establecer el valor en 0 durante 28 pulsos:
```python
p1 >> dirt(dur=0.25, hpf=var([0,expvar([0,4000], [4,0])], [28,4]))
```


---
### TimeVars como Patrones


**Pvar(patterns,dur)** >> Hasta ahora solo hemos guardado valores individuales en un TimeVar, pero a veces tiene sentido guardar un objeto Pattern completo.

No puedes hacer esto con un TimeVar regular porque cada patrón en la lista de valores de entrada se trata como una lista anidada de valores individuales. Para evitar este comportamiento, tienes que usar un Pvar, abreviatura de Pattern-TimeVar (patrón de variable de tiempo).

Se crea como cualquier otro TimeVar, pero los valores pueden ser listas/patrones completos.
```python
a = Pvar([[0,1,2,3],[4,5,6]], 4)
print(Clock.now(), a)
```
_Salida de consola >> 0, P[0,1,2,3]_


Incluso puedes anidar un Pvar dentro de un patrón como lo harías con un patrón normal para tocar valores alternos.

Alterna las notas alternas cada 8 pulsos:
```python
p1 >> pluck([0,1,2,Pvar([[4,5,6,7],[11,9]], 8)], dur=0.25, sus=1)
```