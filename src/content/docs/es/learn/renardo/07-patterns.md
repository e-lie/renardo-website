---
title: Patrones
---

### Patrón

Renardo utiliza en sus objetos Player() listas de Python, conocidas más comúnmente como arreglos en otros lenguajes, para secuenciarse a sí mismos. Ya se ha utilizado aquí anteriormente, pero no son exactamente flexibles para la manipulación.

Por ejemplo, intenta multiplicar una lista por dos de esta manera:
```python
print([1,2,3] * 2)
```
_Salida en consola >> [1,2,3,1,2,3]_

*¿El resultado cumple con tus expectativas?*

Renardo utiliza un tipo de contenedor llamado 'Pattern' para ayudar a resolver este problema. Actúan como listas regulares, pero cualquier operación matemática realizada en ellas se realiza en cada elemento de la lista y de manera par si se usa un segundo patrón. Un patrón básico se crea como lo harías con una lista o tupla normal, pero con una 'P' precediéndola.
```python
print(P[1,2,3] * 2)
print(P[1,2,3] + 100)
```

En esta operación, la salida consiste en todas las combinaciones de los dos patrones, es decir, [1+3, 2+4, 3+3, 1+4, 2+3, 3+4]
```python
print(P[1,2,3] + [3,4])
```

Puedes usar la sintaxis de corte de Python para generar una serie de números:
```
print(P[:8])
print(P[0,1,2,3:20])
print(P[2:15:3])
```

Prueba algunos otros operadores matemáticos y observa los resultados.
```python
print(P[1,2,3] * (1,2))
```

Los objetos Pattern también entrelazan automáticamente cualquier lista anidada.
Compara una lista normal:
```python
for n in [0,1,2,[3,4],5]:
    print(n)
```
con Pattern
```python
for n in P[0,1,2,[3,4],5]:
    print(n)
```

Usa PGroups si deseas evitar este comportamiento. Estos pueden especificarse implícitamente como tuplas en Patterns:
```python
for n in P[0,1,2,(3,4)]:
    print(n)
```

Esto es un PGroup:
```python
print(P(0,2,4) + 2)
print(type(P(0,2,4) + 2))
```

En Python, puedes generar un rango de enteros con la sintaxis range(start, stop, step). Por defecto, start es 0 y step es 1.
```python
print(list(range(10))) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Puedes usar PRange(start, stop, step) para crear un objeto Pattern con los valores equivalentes:
```python
print(PRange(10)) # P[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

P[0, 2, 2, 6, 4, 10, 6, 14, 8, 18]
[0*1, 1*2, 2*1, 3*2, 4*1, 5*2, 6*1, 7*2, 8*1...]
```python
print(PRange(10) * [1, 2]) # Comportamiento de la clase Pattern
```

Agregar una lista (o Pattern) a un Pattern sumará los valores de los elementos al otro donde las listas de Python se concatenarían.
```python
print(PRange(10) + [0,10])
```

Para concatenar Patterns, usa el operador de tubería así:
```
print(PRange(10) | [0,10])
```

FoxDot convierte automáticamente cualquier objeto que se esté canalizando a un Pattern a la clase base Pattern, por lo que no tienes que preocuparte por asegurarte de que todo sea del tipo correcto.
Reproduce todos los valores juntos:
```python
p1 >> pluck(P(4,6,8))
p1 >> pluck(P[0,1,2,P(4,6,8),7,8])
```

Distribuye los valores a lo largo del "dur" actual, por ejemplo, si el dur es de 2 tiempos, reproducirá cada valor 2/3 tiempos de diferencia:
```python
p1 >> pluck(P*(0,2,4), dur=1/2)
p1 >> pluck(P*(0,2,4), dur=1)
p1 >> pluck(P*(0,2,4), dur=2)
p1 >> pluck(P[0,1,2,P*(4,6,8),7,8], dur=1)
```

Es lo mismo que P* pero cada vez que se tocan las notas se distribuyen sobre el valor de dur.
```python
p1 >> pluck(P/(0,2,4), dur=1/2)
p1 >> pluck(P/(0,2,4), dur=1)
p1 >> pluck(P/(0,2,4), dur=2)
p1 >> pluck(P[0,1,2,P/(4,6,8),7,8],
p1 >> pluck(P[0,1,2,P/(4,6,8),7,8], dur=1)
```
Distribuye los valores a lo largo del "sus" actual, por ejemplo, si el dur es de 2 tiempos y el sus es de 3 tiempos, reproducirá cada valor con una diferencia de 1 tiempo.
```python
p1 >> pluck(P+(0,2,4), dur=2, sus=3)
p1 >> pluck(P+(0,2,4), dur=2, sus=1)
p1 >> pluck(P[0,1,2,P+(4,6,8),7,8], dur=1, sus=3)
```

Distribuye los primeros (longitud-1) valores con un intervalo del último valor entre cada uno.
Reproduce 0,2,4 con un intervalo de 0.5:
```python
p1 >> pluck(P^(0,2,4,0.5), dur=1/2)
```

Los patrones vienen con varios métodos para manipular los contenidos.
```python
help(Pattern)
```

Patrón estándar
```python
print(P[:8])
```

Barajar el patrón aleatoriamente
```python
print(P[:8].shuffle())
```

Añadir un patrón invertido al patrón
```python
print(P[:8].palindrome())
```

Desplazar el patrón por n (por defecto 1)
```python
print(P[:8].rotate())
print(P[:8].rotate(3))
print(P[:8].rotate(-3))
```

Toma el patrón y lo añade tantas veces como sea necesario para alcanzar n elementos en el patrón:
```python
print(P[:8].stretch(12))
print(P[:8].stretch(20))
```

Invierte un patrón
```python
print(P[:8].reverse())
```

Repite un patrón n veces
```python
print(P[:8].loop(2))
```

Añadir un desplazamiento
```python
print(P[:8].offadd(5))
```

Añadir un desplazamiento multiplicado
```python
print(P[:8].offmul(5))
```

Repetir cada elemento n veces
```python
print(P[:8].stutter(5))
```

---
**Amen** - Fusiona y entrelaza los dos primeros y últimos elementos de tal manera que un patrón de batería "x-o-" se convertiría en "(x[xo])-o([-o]-)" y imita el ritmo del famoso "amen break".
```python
d1 >> play(P["x-o-"].amen())
print(P[:8].amen())
```

---
**Bubble** - Fusiona y entrelaza los dos primeros y últimos elementos de tal manera que un patrón de batería "x-o-" se convertiría en "(x[xo])-o([-o]-)".
```python
d1 >> play(P["x-o-"].bubble())
print(P[:8].bubble())
```

Si quieres editar los valores internos en Python, necesitas usar un bucle for:
```python
l = []
for i in [1,2,3]:
    l.append(i*2)
    print(l)
```

o en la comprensión de listas:
```python
print([i*2 for i in [1,2,3]])
```
_Salida en consola >> [2,4,6]_

Pero, ¿qué pasa si quieres multiplicar los valores en una lista por 2 y 3 alternadamente?

Renardo utiliza un tipo de contenedor llamado "Pattern" para resolver este problema. Se comportan como listas regulares, pero cualquier operación matemática realizada en ellas se realiza en cada elemento de la lista y de manera par si se usa un segundo patrón.

El patrón básico se puede crear de la siguiente manera:
```python
print(P[1,2,3]*2)
```
_Salida en consola >> P[2,4,6]_

```python
print(P[1,2,3]+[3,4])
```
_Salida en consola >> P[4,6,6,5,5,7]_

Observa cómo en la segunda operación la salida es cualquier combinación de los dos patrones >> [1+3,2+4,3+3,1+4,2+3,3+4].

---
### Patrón

_Prueba algunos otros operadores matemáticos y observa los resultados que obtienes._

¿Qué pasa si agrupas números entre paréntesis como P[1,2,3] * (1,2)?
```python
P[P(1,2),P(2,4),P(3,6)]
```

Hay varias otras clases de patrones en Renardo que puedes usar para generar matrices de números, pero se comportan igual que el patrón base.
```python
print(classes(Patterns.Sequences))
```

```python
print(classes(Patterns))
```

En Python puedes usar la sintaxis de rango (start, stop, step) para generar un rango de enteros. Por defecto, Start es 0 y Step 1.

Con PRange (start,stop,step) puedes crear un objeto de muestra con los valores correspondientes. El primer ejemplo muestra la función equivalente en Python, el segundo es la función de muestra simplificada en Renardo PRange:
```python
print(list(range(10)))
```
_Salida en consola >> [0,1,2,3,4,5,6,7,8,9]_

```python
print(PRange(10))
```
_Console output >> P[0,1,2,3,4,5,6,7,8,9]_


```python
print(PRange(10)*[1,2])
```
_Console output >> P[0,2,2,6,4,10,6,14,8,18]_
Pero, ¿qué pasa con la combinación de patrones? En Python, puedes concatenar (agregar) dos listas con el operador +. Sin embargo, los patrones de Renardo usan esto para complementar los datos en la lista. Para conectar dos objetos Pattern juntos, puedes usar el símbolo de tubería, que los usuarios de Linux pueden conocer. Se utiliza para conectar programas de línea de comandos enviando la salida de un proceso como entrada a otro.

```python
print(PRange(4) | [1,7,6])
```
_Salida en consola >> P[0,1,2,3,1,7,6]_

Hay varios tipos de secuencias de patrones en Renardo (y la lista sigue creciendo) que facilitan la generación de estos números. Por ejemplo, para tocar la primera octava de una escala pentatónica de abajo hacia arriba y de regreso, puedes usar dos objetos PRange:
```python
p1 >> pluck(PRange(5) | PRange(5,0,-1), scale=Scale.default.pentatonic)
```

La clase PTri hace esto por ti:
```python
p1 >> pluck(PTri(5), scale=Scale.default.pentatonic)
```

---
### Funciones de Patrones

Hay varias funciones que generan un patrón de valores para que hagamos cosas útiles en Renardo, como ritmos y melodías. Esta sección es una lista de funciones de patrones con descripciones y ejemplos.

Usados como argumentos de entrada para los reproductores de Renardo, estos pueden ser tratados como patrones y sus métodos aplicados directamente, por ejemplo, *PDur(3,8).reverse()*. También puedes reemplazar cada argumento de entrada con un patrón o una función TimeVar para crear un patrón avanzado o un patrón Pvar. Veamos algunos ejemplos:

**PStep(n, valor, default=0)** >> Devuelve un patrón donde cada término **n** es **valor**, de lo contrario **default**.

Cada 4, hazlo 1, de lo contrario por defecto a 0
```python
print(PStep(4,1))
```

Cada 8, hazlo 6, de lo contrario, 4
```python
print(PStep(8,6,4))
```

Cada 5, hazlo 2, de lo contrario, 1
```python
print(PStep(5,2,1))
```

**PSum(n, total, \**kwargs)** >> Devuelve un patrón de longitud **n**, cuya suma es **total**. Por ejemplo: PSum(3,8) -> P[3,3,2] PSum(5,4) -> P[1,0.75,0.75,0.75,0.75].

Devuelve un patrón de longitud 2, con elementos sumados a 8
```python
print(PSum(3,8))
```

Devuelve un patrón de longitud 5, con elementos sumados a 4
```python
print(PSum(5,4))
```

**PRange(start, stop=None, step=None)** >> Devuelve un patrón equivalente a Pattern(range(start, stop, step)).

**PTri(start, stop=None, step=None)** >> Devuelve un patrón equivalente a Pattern(range(start, stop, step)) con la forma invertida añadida. Piénsalo como un "Tri"ángulo.

Hasta 5 y luego hasta 1:
```python
print(PTri(5))
```

Hasta 8 y luego hasta 1:
```python
print(PTri(8))
```

De 3 a 10, luego hasta 4:
```python
print(PTri(3,10))
```

De 3 a 30, de 2 en 2, luego hasta 4:
```python
print(PTri(3,20,2))
```

Hasta 4, luego hasta 1, luego hasta 8, luego hasta 1:
```python
print(PTri([4,8]))
p1 >> pluck(PTri(5), scale=Scale.default.pentatonic)
```

Igual que:
```python
p1 >> pluck(PRange(5) | PRange(5,0,-1), scale=Scale.default.pentatonic)
```

**PEuclid(n, k)** >> Devuelve el ritmo euclidiano que distribuye **n** pulsos lo más uniformemente posible en **k** pasos. Por ejemplo, PEuclid(3,8) devuelve P[1,0,0,1,0,0,1,0].
3 pulsos en 8 pasos:
```python
print(PEuclid(3,8))
```

**PSine(n=16)** >> Devuelve valores de un ciclo de una onda sinusoidal dividida en **n** partes.

Dividido en 5 partes:
```python
print(PSine(5))
```

Dividido en 10:
```python
print(PSine(10))
```

**PDur(n, k, dur=0.25)** >> Devuelve la duración real basada en ritmos euclidianos (ver PEuclid), donde **dur** es la longitud de cada paso. Por ejemplo, PDur(3,8) devuelve P[0.75,0.75,0.5].

```python
print(PDur(3,8)) # P[0.75, 0.75, 0.5]
print(PDur(5,8))
```

Devuelve una lista de 3 dur, añadida con una lista de 5 dur
```python
print(PDur([3,5],8))
d1 >> play("x", dur=PDur(5,8))
```

**PBern(size=16, ratio=0.5)** >> Devuelve un patrón de unos y ceros basado en el valor de **ratio** (entre 0 y 1). Esto se conoce como la secuencia de Bernoulli.

**PBeat(string, start=0, dur=0.5)** >> Devuelve un patrón de duraciones basado en una cadena de entrada, donde los no-espacios denotan un pulso.

**PSq(a=1, b=2, c=3)**

**PIndex** >> Devuelve el índice que se está accediendo
```python
print(PIndex())
print(PIndex() * 4)
```

---
### Generadores de Patrones

Sabemos que los patrones tienen una longitud fija y pueden generarse en función de una función. Sin embargo, a veces es útil tener patrones de longitud infinita, por ejemplo, al generar números aleatorios. Aquí es donde entran en juego los generadores de patrones. Similar a los generadores de Python donde no todos los valores se mantienen en memoria a la vez, excepto cuando los generadores de Python generalmente tienen un final - ¡los generadores de patrones de Renardo no!

**PRand(lo, hi, seed=None) / PRand([values])** >> Devuelve una serie de enteros aleatorios entre lo y hi, inclusive. Si hi se omite, el rango es de 0 a lo. Se puede proporcionar una lista de valores en lugar del rango y PRand devuelve una serie de valores elegidos al azar de la lista.

Devuelve un entero aleatorio entre 0 y start.
```python
print(PRand(8)[:5])
```

Devuelve un entero aleatorio entre start y stop.
```python
print(PRand(8,16)[:5])
```

Si start es un tipo de contenedor, devuelve un elemento aleatorio de ese contenedor.
```python
print(PRand([1,2,3])[:5])
```

Puedes proporcionar una semilla
```python
print(PRand([1,2,3], seed=5)[:5])
```

Sigue generando una melodía aleatoria
```python
p1 >> pluck(PRand(8))
```

Crea una lista aleatoria y la recorre
```python
p1 >> pluck(PRand(8)[:3])
```

**PxRand(lo, hi) / PxRand([values])** >> Idéntico a PRand, pero no se repiten elementos.

**PwRand([values], [weights])** >> Utiliza una lista de pesos para indicar con qué frecuencia se seleccionan elementos con el mismo índice de la lista de valores. Un peso de 2 significa que es dos veces más probable que se elija que un elemento que pesa 1.

**P10(n)** >> Devuelve un patrón de longitud n de una serie generada aleatoriamente de unos y ceros.

**PAlt(pat1, pat2, \*patN)** >> Devuelve un patrón generado alternando los valores en las secuencias especificadas.

**PJoin(patterns)** >> Ensambla una lista de patrones.

**PPairs(seq, func=<lambda>)** >> Vincula una secuencia a una segunda secuencia obtenida ejecutando una función en la original. Por defecto, esto es lambda n: 8-n.

**PQuicken(dur=0.5, stepsize=3, steps=6)** >> Devuelve un grupo de cantidades de retraso que disminuyen gradualmente.

**PRhythm(durations)** >> Convierte todos los tuplas / PGroups en retrasos, que se calculan con el algoritmo PDur.

Lo siguiente toca el hi hat con un ritmo euclidiano de 3 pulsos en 8 pasos
```python
d1 >> play("x-o-", dur=PRhythm([2, (3,8)]))
print(PRhythm([2, (3,8)]))
```

**PShuf(seq)** >> Devuelve una versión mezclada de seq. Este ejemplo usa una función para mezclar automáticamente la lista.

**PStretch(seq, size)** >> Devuelve 'seq' como un patrón y se repite hasta que su longitud sea 'size', por ejemplo, PStretch([0,1,2], 5) devuelve P[0,1,2,0,1].

**PStrum(n=4)**

**PStutter(seq, n=2)** >> Crea un patrón para que cada elemento en la matriz se repita n veces (n puede ser un patrón).

**PZip(pat1, pat2, patN)** >> Genera un patrón que 'comprime' múltiples patrones. PZip([0,1,2], [3,4]) crea el patrón P[(0,3),(1,4),(2,3),(0,4),(1,3),(2,4)].

**PZip2(pat1, pat2, rule=<lambda>)** >> Como PZip, pero solo usa dos patrones. Conecta valores si cumplen la regla.

**Pvar** >> TimeVar, que guarda listas en lugar de valores individuales (var, sinvar, linvar, expvar).

**PWhite(lo, hi)** >> Devuelve números de punto flotante aleatorios entre lo y hi.

Lo por defecto es 0, hi por defecto es 1
```python
print(PWhite()[:8])
```
Devuelve números aleatorios entre 1 y 5
```python
print(PWhite(1,5)[:8])
```

**PChain(mapping_dictionary)** >> Basado en una cadena de Markov simple con probabilidades iguales. Toma un diccionario de elementos, estados y posibles estados futuros. Cada estado futuro tiene una probabilidad igual de ser seleccionado. Si un estado futuro posible no es válido, se genera un KeyError.

**PWalk(max=7,step=1,start=0)** >> Devuelve una serie de enteros con cada elemento un incremento aparte y con un valor en el rango de +/- el máximo. El primer elemento puede ser seleccionado con start.

Por defecto, devuelve un patrón con cada elemento aleatoriamente 1 más alto o más bajo que el anterior
```python
print(PWalk()[:16])
```

Cambiando el paso
```python
print(PWalk(step=2)[:16])
```

Con máximo
```python
print(PWalk(max=2)[:16])
```

Comenzar en un número distinto de cero
```python
print(PWalk(start=6)[:16])
```

**PFibMod()** >> Devuelve la secuencia de Fibonacci.

---
### Generador de Patrones Personalizado

Se pueden crear patrones generadores personalizados subclasificando GeneratorPattern y sobrescribiendo `GeneratorPattern.func`
```python
class CustomGeneratorPattern(GeneratorPattern):
    def func(self, index):
        return int(index / 4)
print(CustomGeneratorPattern()[:10])
```

Esto se puede hacer de manera más concisa usando `GeneratorPattern.from_func`, pasando una función que toma un índice y devuelve algún elemento del patrón.
```python
def some_func(index):
    return int(index / 4)
print(GeneratorPattern.from_func(some_func)[:10])
```

También podemos usar lambdas
```python
print(GeneratorPattern.from_func(lambda index: int(index / 4))[:10]) 
```
