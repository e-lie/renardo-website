---
title: Reproductor de Muestras
---

### Objeto Reproductor de Muestras

Renardo también se puede usar para secuenciar y manipular muestras de audio. Para hacer esto, solo necesitas usar el objeto especial **play()** Player(). A diferencia de los objetos Player() de sintetizador, el primer argumento de **play** debe ser una cadena de caracteres, no números. Como resultado, se puede codificar más información en la cadena de caracteres de lo que el carácter en sí significa. Cada carácter se relaciona con un rango de archivos de audio como bombos, hi-hats, cajas y otros sonidos. Cada archivo de audio se almacenará en un búfer en SuperCollider.

Para ver qué carácter se relaciona con qué archivo de audio, ejecuta:
```python
print(Samples)
```

Hay una carpeta de paquetes de sonido en Renardo llamada _**/samples/0_foxdot_default**_. Esta carpeta contiene todas las carpetas nombradas con caracteres con muestras. Para usar o crear tu propio paquete de muestras, necesitarás nombrar una copia de la estructura de carpetas con un nombre de carpeta superior como **1_my_samples**, con la ruta /samples/1_my_samples/. Puedes llamar a muestras de tu propio paquete de muestras con el atributo **spack**:
```python
b1 >> play("x", spack=1)
```

El patrón de batería más simple para disco es:
```python
b1 >> play("x-o-")
```

Un carácter se refiere a un sonido y el espacio en blanco se usa para el silencio, por lo que puedes distribuir los sonidos en el tiempo:
```python
bd >> play("x  x  ")
```

También puedes usar puntos en lugar de espacios en blanco:
```python
bd >> play("x..x..")
```

Diferentes tipos de corchetes añaden más información a una secuencia. Pon dos o más caracteres en paréntesis redondos, el sonido alterna con el nuevo bucle uno tras otro, entrelazando muestras de sonido:

Lo siguiente es lo mismo que "-------=":
```
hh >> play("---(-=)")
```

Ejemplo de patrón simple:
```python
d1 >> play("(x-)(-x)o-")
```

Paréntesis anidados para más variedad:
```python
d1 >> play("(x-)(-(xo))o-")
```

Poner caracteres en corchetes cuadrados los reproducirá todos en el espacio de un compás, y se reproducirán como un solo carácter, no simultáneamente, sino en rápida sucesión:
```python
d1 >> play("x-o[-o]")
d1 >> play("x-o[---]")
d1 >> play("x-o[-----]")
d1 >> play("x-o[--------------]")
```

Reproduce un triplete en el cuarto compás:
```python
d1 >> play("x-o[---]", dur=1)
```

y se pueden poner en paréntesis redondos como si fueran un solo carácter.
```python
d1 >> play("x[--]o(=[-o])")
```

Usa corchetes cuadrados en paréntesis redondos:
```python
d1 >> play("(x-)(-[-x])o-")
```

Usa paréntesis redondos en corchetes cuadrados:
```python
b1 >> play("x-o[-(xo)]")
```

Puedes combinar los corchetes como quieras: los siguientes patrones son idénticos
```python
d1 >> play("x-o(-[-o])")
d1 >> play("x-o[-(o )]")
```

Las llaves seleccionan un sonido de muestra al azar si quieres más variedad:
```python
d1 >> play("x-o{-=[--][-o]}")
```

Los corchetes angulares combinan patrones para reproducirse simultáneamente:
```python
d1 >> play("<X   ><-   ><#   ><V   >")
d1 >> play("<X   >< -  ><  # ><   V>")
```

Cada carácter se asigna a una carpeta de archivos de sonido y puedes seleccionar diferentes muestras usando el argumento de palabra clave "sample":
```
d1 >> play("(x[--])xu[--]")
d1 >> play("(x[--])xu[--]", sample=1)
d1 >> play("(x[--])xu[--]", sample=2)
```

Cambia la muestra para cada compás:
```python
d1 >> play("(x[--])xu[--]", sample=[1,2,3])
```

Puedes superponer dos patrones juntos - nota la "P", mira el tutorial 4 para más información:
```python
d1 >> play(P["x-o-"] & P[" **"])
```

Y cambia los efectos aplicados a todos los patrones superpuestos al mismo tiempo:
```python
d1 >> play(P["x-o-"] & P[" **"], room=0.5)
```

Ejemplo del tutorial del reproductor, pero con muestras en su lugar
Condicionales...
```python
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x"))
```

O cámbialo al banco de muestras 2 multiplicando:
```python
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x")*2)
```

Encadena múltiples condicionales:
```python
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x")*2 + (d1.degree=="-")*5)
```

Lo cual es lo mismo que:
```python
d1 >> play("x[--]xu[--]x", sample=d1.degree.map({"x":2, "-":5}))
```

---
### Atributo *sample*

Cada carácter se refiere a una carpeta con el mismo carácter. Las carpetas con una letra como carácter contienen 2 subcarpetas, a saber, **upper** y **lower**.

Esas carpetas y subcarpetas contienen archivos de audio, que pueden ser llamados por objetos _play_\-Player().

Los archivos de audio están ordenados alfabéticamente. Usa el atributo sample para seleccionar un archivo de audio en esta carpeta. Por defecto es el primer archivo de muestra en cada carpeta, por lo tanto _sample=0_.
```python
b1 >> play("x-o-", sample=1)
```

Como cualquier otro argumento, _sample_ puede ser una lista (uno a la vez) o incluso una tupla (simultáneamente) de valores.
```python
p1 >> play("x-o-", sample=[0,1,2])
```

```python
p1 >> play("x-o-", sample=(0,3))
```

El ejemplo para un solo carácter se puede dar dentro de la cadena de caracteres rodeando el carácter con un "|" + el número de posición:

Reproduce _sample=2_ para la letra 'o':
```python
p1 >> play("x-|o2|-")
```

Esto sobrescribirá el valor especificado bajo _sample_:
```python
p1 >> play("x-|o2|-", sample=3)
```

La sintaxis puede contener cualquiera de los paréntesis utilizados anteriormente para el carácter y los números.

Cambia el número de muestra:
```python
p1 >> play("x-|o(12)|-")
```

Cambia el signo:
```python
p1 >> play("x-|(o*)2)|-")
```

Reproduce varias muestras diferentes en un paso:
```python
p1 >> play("x-|o[23]|-")
```

Reproduce una muestra aleatoria:
```python
b1 >> play("x-|o{1[23]}|-")
```

Si decides usar varios objetos Player() para crear, por ejemplo, un set de batería, entonces se recomienda usar _sample_ convencionalmente, dándote así una forma diferente de cambiar muestras en el tiempo usando funciones TimeVar().
```python
Clock.bpm=142
brks = [1]*28 + [0]*4
# MUESTRAS
k1 >> play("A", sample=var([0,2], 64), dur=2, delay=[0,0.5], amplify=0.75*P[brks], amp=1)
k2 >> play("A", sample=1, dur=4, delay=[0,(0,0.5),0,(0,1.5)], pshift=var([0,1], 32), amplify=0.6*P[brks], amp=1)
k3 >> play("V", sample=[0,1,0,3], dur=2, delay=k1.delay, amplify=0.5*P[brks], amp=1)
s1 >> play("O", sample=var([0,2], [32,16]), dur=2, delay=1, room=0.66, mix=0.5, amplify=0.7*P[brks], amp=1)
s2 >> play("i", sample=var([0,1], 64), dur=2, delay=[1,1,1,(1,[1.5,1+0.75])], room=0.66, mix=0.33, amplify=0.7, amp=1)
h1 >> play(":", sample=var([0,1], 32), dur=1, delay=0.5, amplify=5/6, amp=1)
h2 >> play("-", sample=PRand([0,1,2],32), dur=0.5, rate=linvar([0.75,1], 8), amplify=0.6*P[brks]).every(16,"stutter",3)
h3 >> play("s", sample=1, dur=0.5, room=0.6, mix=0.33, amplify=[0.9,1.2], amp=1)
p1 >> play("y", sample=var([2,1,3], [28,4]), dur=1/2, delay=[0,0.25,0.5,0.75,0,0.5], rate=2, shape=0.6, room=0.5, mix=0.5, amplify=var([1,0.6], [1,3])*P[0.8,1.3], amp=1)
drumset = Group(k1,k2,k3,s1,s2,h1,h2,h3,p1)
drumset.amp=1
```

---
### Superposición de secuencias

También puedes usar signos **< >** para superponer múltiples secuencias simultáneamente. Comencemos con dos secuencias separadas y luego pongámoslas juntas en una sola línea de código.

_**Nota: El \***_**punto** es equivalente a **espacio**. Al igual que **espacio**, es un marcador de posición que ayuda a reconocer mejor la posición temporal
```python
b1 >> play("x-o-")

b2 >> play("..+.+.[.+]")
```

Podemos colocar cualquier secuencia entre los caracteres "<>" en una sola secuencia y hacer que se reproduzcan al mismo tiempo:
```python
b1 >> play("<x-o-><..+.+.[.+]>")
```

Esto es equivalente a:
```python
b1 >> play(P["x-o-"].zip(P["..+.+.[.+]"]))
```

_Zip se puede entender como una cremallera._

Cada _capa_ se relaciona con el índice en un grupo de valores dados a un objeto Player(), cada _capa_ solo se ve afectada por uno de esos valores dados. Esto se demuestra mejor con un ejemplo:

Panorámica de cada secuencia en los canales izquierdo y derecho usando corchetes cuadrados en el atributo _pan_:
```python
b1 >> play("<x-o-><..+.+.[.+]>", pan=[-1,1])
```

Expande el efecto estéreo usando paréntesis redondos:
```python
b1 >> play("<x-o-><..+.+.[.+]>", pan=(-1,1))
```

Cambia el archivo de audio usado en la primera capa:
```python
b1 >> play("<x-o-><..+.+.[.+]>", sample=(2,0))
```

Ten cuidado al combinar múltiples capas con funciones como **offadd** ya que estas funciones crean nuevas capas.

El siguiente código solo afectará a la segunda capa, por lo que la primera capa no se verá afectada:
```python
b1 >> play("<x-o-><..+.+.[.+]>", sample=(2,0)).every(4, "sample.offadd", 2)
```

---
### ¡Intenta esto!

_Revisa los caracteres y escucha los diferentes ejemplos disponibles. Usa el atributo sample=[:8]. Los archivos de audio o muestras se repetirán si el carácter contiene menos de 9 muestras (0-8 son 9 números) en la carpeta dedicada!_

| **Nombre**    | **Letra/Carácter**   |
| ------------- | ---------------------|
| Bombo         | A v V x X W          |
| Caja/Rim      | D i I o O t u        |
| Hihat         | : = - a n N          |
| Aplauso/Chasquido | \ * h H          |
| Platillo/Crash| / # e E              |
| Tom/Tom-like  | m M p P w            |
| Percusión     | & + d f l r R y      |
| Efectos de Sonido | \\ b F k L Q Y z Z |
| Voz           | 1 2 3 4 ! < ? c C    |
| Campana       | T                    |
| Varios        | $ ; B g G j J K q U  |
| Ruido         | @ %                  |
| Shaker        | s S                  |
| Ride          | ~                    |

_Crea un ritmo de 16 compases con tus muestras preferidas. Usa Clock.bpm=120 para cambiar los latidos por minuto, o la velocidad del ritmo en el tiempo!_

