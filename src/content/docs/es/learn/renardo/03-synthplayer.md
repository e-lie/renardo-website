---
title: Reproductor de Sintetizador
---

### Objeto Reproductor de Sintetizador

Renardo tiene varios instrumentos virtuales diferentes que puedes usar como objetos reproductores.

Para ver la selección existente de SynthDefs de Renardo, simplemente ejecuta:
```python
print(SynthDefs)
```

Elige uno y crea un objeto reproductor de Renardo usando la sintaxis de doble flecha como en el ejemplo a continuación. En Renardo, todos los nombres de variables de dos caracteres, como `p1`, `zz` o `k7`, están reservados para objetos **Player()**. La variable puede consistir en 2 letras o 1 letra + 1 número (por ejemplo, pp o s1).

El **>>** en Python generalmente se reserva para un tipo de operación, como + o -, pero no es el caso en Renardo.

En el siguiente ejemplo, la variable **p1** creará un objeto Player() usando **pluck** como sintetizador/instrumento. Crear un objeto Player con un sintetizador y sin argumentos reproducirá una sola nota en el do central, por defecto, repetidamente hasta que se detenga.
```python
p1 >> pluck()
```

Para detener un objeto reproductor individual, simplemente ejecuta **p1.stop()**. Para detener todos los objetos reproductores, puedes presionar **CTRL+.**, que es un atajo para el comando **Clock.clear()**.


---
### Atributo *degree*

Si deseas reproducir notas musicales, necesitas darle a tu objeto reproductor algunos argumentos. En este caso único de SynthDef no necesitas usar un nombre de atributo para cambiar las notas que se reproducen.
```python
s1 >> pluck([0,2,4])
```

Las "notas" que damos a un reproductor, significando en este caso los números *0*, *2* y *4* se llaman `degree`. Así que el ejemplo anterior también puede verse así:
```python
s1 >> pluck(degree=[0,2,4])
```

Puedes usar una función TimeVar para controlar el disparo de cada nota reproducida a lo largo del tiempo. Si no usas ningún tiempo, se reproducirá cada beat por defecto.
```python
s1 >> pluck(var([0,2,4]))
```

Simplemente agrega tu tiempo de beat detrás de tu lista de notas, si deseas cambiar el tiempo.
```python
s1 >> pluck(var([0,2,4], 4))
```

La asignación siguiente tiene lugar:

**Beat 0 –> Nota 0 | Beat 4 –> Nota 2 | Beat 8 –> Nota 4 | Beat 12 –> Nota 0 | Beat 16 –> Nota 2 |…**

Para verificar qué nota se está reproduciendo en este momento, puedes usar el siguiente código usando **degree** dentro de la función **print()** de Python:
```python
print(s1.degree)
```

Crea otra lista con números para cambiar el tiempo de cada una de las notas por separado:
```python
s1 >> pluck(var([0,2,4], [2,2,4]))
```

Puedes agrupar notas y variables encerrando múltiples valores de argumentos como tuplas en paréntesis redondos. Esto se usa a menudo para tocar acordes. En el siguiente ejemplo, tocamos 2 notas al mismo tiempo y expandimos el efecto estéreo en el atributo pan:
```python
p2 >> bass([(0,4),(0,2)], dur=4, pan=(-1,1))
```

Es posible transferir una nota reproducida por un SynthDef a otro. En este ejemplo, s2 agrega una tríada a cada nota de bajo reproducida por s1:
```python
s1 >> bass([0,2,3,4], dur=4)

s2 >> pluck(dur=0.5).follow(s1) + (0,2,4)
```

Además de **.follow()**, también puedes usar el argumento **.degree** (sin paréntesis) para seguir a otros reproductores:
```python
s3 >> pluck(s1.degree + 2)
```

También es posible manipular **degree** agregando una matriz de números al objeto Player.

Esto eleva la 4ª nota reproducida en 2 grados:
```
p1 >> pads([0,1,2,3]) + [0,0,0,2]
```

Y esto eleva cada tercera nota en 2:
```
p1 >> pads([0,1,2,3]) + [0,0,2]
```

Estos valores pueden entrelazarse y agruparse juntos
```
p1 >> pads([0,1,2,3]) + [0,1,[0,(0,2)]]
```

Este comportamiento es particularmente útil cuando se usa el método follow.
```
b1 >> bass([0,4,5,3], dur=2)
p1 >> pads().follow(b1) + [2,4,7]
```

**¡A continuación, puedes programar a los reproductores para que hagan cosas!**

Esto le dirá a p1 que invierta las notas cada 4 beats:
```
p1 >> pads([0,2,4,6])
p1.every(4, "reverse")
```

Puedes "encadenar" métodos juntos agregándolos al final de la línea original:
```python
p1 >> pads([0,2,4,6]).every(4, "reverse")
```

Para dejar de llamar a "reverse", usa 'never':
```python
p1.never("reverse")
```

**¡Aquí hay algunos otros métodos que puedes usar!**

Usar **"stutter"** reproducirá la misma nota **n** veces con diferentes atributos especificados
```python
p1.every(4, "stutter", 4, oct=4, pan=[-1,1])
```

Rotate moverá todos los valores en su orden por 1:
```python
p1.every(4, "rotate")
```

Para aleatorizar el orden de las notas, usa **"shuffle"**:
```python
p1.every(4, "shuffle")
```


---
### Usa otros Atributos

Los valores asignados mediante atributos nombrados moldean la forma en que suena y se toca el instrumento. Es posible usar otros argumentos de la misma manera que los ejemplos anteriores usando **degree**. Por ejemplo **s1.oct**, **s1.dur** y así sucesivamente.

Lista todos los atributos universales:
```python
print(Player.get_attributes())
```

Lista todos los atributos de un SynthDef en particular:
```python
print(Player("wobblebass").get_extra_attributes())
```

Lista todos los atributos fx predeterminados del objeto Player():
```python
print(Player.get_fxs())
```

Puedes ver qué efectos están disponibles evaluando
```python
print(FxList)
```

Usemos el filtro de paso alto como ejemplo. Puedes ver que se describe así:
"<Fx 'highPassFilter' -- args: hpr, hpf>"

Cada efecto tiene un argumento "maestro" y luego argumentos secundarios. Aquí el argumento maestro es "hpf" (abreviatura de filtro de paso alto) y el argumento secundario es "hpr" (abreviatura de resonancia de paso alto). El efecto solo se agrega cuando el argumento maestro es distinto de cero:
```python
d1 >> dirt([0,4,2,1], dur=1/2, hpf=4000)
```

Esto establece el filtro de paso alto a 4000 Hz, por lo que solo se escuchan las frecuencias en la señal de audio *por encima* de eso. Cambiemos el valor de la resonancia. Su valor predeterminado es 1, así que hagámoslo más pequeño:
```python
d1 >> dirt([0,4,2,1], dur=1/2, hpf=4000, hpr=0.3)
```

¿Notas alguna diferencia? Podemos usar patrones / vars en nuestros efectos para hacer que cambien con el tiempo:
```python
d1 >> dirt([0,4,2,1], dur=1/2, hpf=linvar([0,4000],8), hpr=P[1,1,0.3].stretch(8))
```

En el siguiente ejemplo, la octava **oct** se incrementa (el valor predeterminado es 5), el tiempo de reproducción de la nota **dur** (el valor predeterminado es 1) y el volumen amp varía (el valor predeterminado es 1).

**Nota: La octava estándar en Renardo es 5, que en la teoría musical convencional es 3!**

```python
s1 >> pluck([0,2,4], oct=6, dur=[1,0.5,0.5], amp=[1,0.75,0.75])
```

Los argumentos pueden ser enteros, puntos flotantes, fracciones, listas,
tuplas o una mezcla

```python
p1 >> pluck([0,0,0], dur=2)
p1 >> pluck([0,0,0], dur=1.743)
p1 >> pluck([0,0,0], dur=[0.25,0.5,0.75])
p1 >> pluck([0,0,0], dur=[1/4,1/2,3/4])
p1 >> pluck([0,0,0], dur=[1/4,0.25,3])
```

También puedes asignar valores a los atributos de los objetos reproductores directamente

```python
p1 >> pluck([0,2], oct=5)

p1.oct = 4
```

Aquí hay algunos atributos más útiles que puedes usar para manejar tus reproductores

Reproduce solo este reproductor, silenciando a los demás
```python
p1.solo() # el valor predeterminado es 1 (solo activado)
```

Y desactiva el solo
```python
p1.solo(0)
```

Detén (no solo silencia) a los otros reproductores
```python
p1.only()
```
Puedes establecer variables fuera de un reproductor
```python
pitches = P[0,1,2,3,4]
harmony = pitches + 2

print(pitches)
print(harmony)

p1 >> pluck(pitches)
p2 >> star(harmony)
```

Si estableces la duración del segundo, puede que no tenga el efecto deseado
```python
p1 >> pluck(pitches)
p2 >> star(harmony, dur=1/2)
```

Es posible que un objeto reproductor reproduzca exactamente lo que otro reproductor está reproduciendo.
Para que un reproductor siga a otro, simplemente usa el método follow:
```python
p1 >> pluck(pitches)
p2 >> star(dur=1/2).follow(p1) + 2
```

También puedes referenciar explícitamente atributos como el tono o la duración:
```python
p2 >> star(p1.pitch) + 2  # esto es lo mismo que .follow(p1)
```

Funciona para otros atributos también
```python
p1 >> pluck(pitches)
p2 >> star(dur=p1.dur).follow(p1) + 2
```

Puedes referenciar y probar el valor actual. El == devuelve un 1 si es verdadero y un 0 si es falso.
```python
print(p1.degree)
print(p1.degree == 2)
```

Esto te permite hacer condicionales como:
```python
p1 >> pluck([0,1,2,3], amp=(p1.degree==1))
p1 >> pluck([0,1,2,3], amp=(p1.degree>1))
```

O cambiarlo a un amplificador diferente multiplicando por 4:
```python
p1 >> pluck([0,1,2,3], amp=(p1.degree==1)*4)
```

Encadena múltiples condicionales
```python
p1 >> pluck([0,1,2,3], amp=(p1.degree==1)*4 + (p1.degree==2)*1)
```

Lo cual es lo mismo que
```python
p1 >> pluck([0,1,2,3], amp=p1.degree.map({1:4, 2:1}))
```

---
### Silencios

Los silencios se pueden agregar usando un objeto de silencio en la matriz de duraciones. El silencio silencia la nota que se habría tocado. Sin un silencio, 5 notas (sí, una dur=1 funcionaría, pero seamos explícitos para contraponer el siguiente ejemplo)
```python
p1 >> pads([0,1,2,3,4], dur=[1,1,1,1,1])
```

Con un silencio ... 4 notas y un silencio, la nota "4" se silencia durante 4 beats:
```python
p1 >> pads([0,1,2,3,4], dur=[1,1,1,1,rest(4)])
```

---
### Referencia de Atributos


**amp** - Amplitud (por defecto es 1) 

Establece el volumen de la nota/patrón
```python
d1 >> play("*", dur=1/2, amp=1)
```

Medio Volumen
```python
d1 >> play("*", dur=1/2, amp=.5)
```

Creando un patrón con amp
```python
d1 >> play("*", dur=1/2, amp=[1,0,1,1,0])
```

---
**amplify** - Cambia amp, multiplicando contra el valor existente (en lugar de sobrescribir)

Creando un patrón con amp
```python
d1 >> play("*", dur=1/2, amp=[1,0,1,1,0])
d1 >> play("*", dur=1/2, amplify=[.5,1,0])
```

Configura un "drop" en la música (Reproduce a volumen completo durante 28, luego 0 durante 4)
```python
p1 >> blip([0,1,2,3], amplify=var([1,0],[28,4]))
```

---
**bend**


---
**benddelay** - Ver bend

---
**bits** - La profundidad de bits, en número de bits, a la que se reduce la señal; este es un valor entre 1 y 24 donde se ignoran otros valores. Usa crush para establecer la cantidad de reducción a la tasa de bits (por defecto es 8)

---
**bitcrush** - Ver bits

---
**blur**

---
**bpf** - Filtro de Paso de Banda

---
**bpnoise** - Ver bpf

---
**bpr** - Ver bpf

---
**bpm**

---
**buf**

---
**channel**

---
**chop** - 'Corta' la señal en trozos usando una onda de pulso de baja frecuencia sobre la duración de una nota.

---
**coarse**

---
**comb delay** - Ver echo

---
**crush**

---
**cut** - Corta una duración
```python
p1 >> pluck(P[:8], dur=1/2, cut=1/8)
p1 >> pluck(P[:8], dur=1/2, cut=1/4)
p1 >> pluck(P[:8], dur=1/2, cut=1/2)
```

---
**cutoff**

---
**decay** - Ver echo

---
**degree** - El grado de la nota, o tono, puede especificarse por palabra clave (también la primera posicional)
```python
p1 >> blip(degree=[0,1,2,3])
```

Lo cual es lo mismo que:
```python
p1 >> blip([0,1,2,3])
```

Solo reproduce la nota "raíz" del acorde
```python
b1 >> bass(p1.degree[0])
```

---
**delay** - Una duración de tiempo para esperar antes de enviar la información a SuperCollider (por defecto es 0)

Retrasa cada 3 notas por .1
```python
p1 >> blip([0,1,2,3], delay=[0,0,0.1])
```

Retrasa cada 3 notas por .5
```python
p1 >> blip([0,1,2,3], delay=[0,0,0.5])
```

Reproduce la nota una vez por cada retraso diferente
```python
p1 >> blip([0,1,2,3], delay=(0,0.1))
p1 >> blip([0,1,2,3], delay=(0,0.25))
p1 >> blip([0,1,2,3], delay=(0,.1,.2,.3))
```

---
**dist**

---
**dur** - Duraciones (por defecto es 1 y 1/2 para el Sample Player)

---
**echo** - Palabra clave del título: echo, Palabra(s) clave del atributo: decay - Establece el tiempo de decaimiento para cualquier efecto de eco en beats, funciona mejor en Sample Player (por defecto es 0) - Multiplicado contra el valor de sustain
```python
d1 >> play("x-o-", echo=0.1)
d1 >> play("x-o-", echo=0.5)
p1 >> pluck(P[:8], echo=.25)
p1 >> pluck(P[:8], echo=.5)
p1 >> pluck(P[:8], echo=.5, decay=.5)
```

---
**env**

---
**fmod**

---
**formant**

---
**freq**

---
**hpf** - Filtro de Paso Alto - Filtra todas las frecuencias por debajo del valor dado, eliminando las frecuencias más bajas

4000 hertz
```python
p1 >> pluck(P[:8], dur=1/2, hpf=4000)
```

HPF es 0 durante 4 beats, luego 4000 durante 4 beats
```python
p1 >> pluck(P[:8], dur=1/2, hpf=var([0,4000],[4,4]))
```

Cambio lineal en hpf de 0 toma 4 beats para llegar a 4000, 4 beats de vuelta a 0
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[4,4]))
```

Cambio lineal en hpf de 0 toma 8 beats para llegar a 4000, luego se reinicia a 0
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]))
```

Con cambio de resonancia (el valor predeterminado es 1)
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]), hpr=.5)
```

Con cambio de resonancia como un linvar
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]), hpr=linvar([0.1,1],12))
```

---
**hpr** - Ver hpf

---
**lpf** - Filtro de Paso Bajo - Filtra todas las frecuencias por encima del valor dado, eliminando las frecuencias más altas

4000 hertz
```python
p1 >> pluck(P[:8], dur=1/2, lpf=400)
```

Con cambio de resonancia como un linvar
```python
p1 >> pluck(P[:8], dur=1/2, lpf=linvar([500,4000],[8,0]), lpr=linvar([0.1,1],12))
```

---
**lpr** - Ver lpf

---
**midinote**

---
**pan** - Paneo, donde -1 es extremo izquierdo, 1 es extremo derecho (el valor predeterminado es 0)

---
**pitch** - Ver degree

----
**pshift**

---
**oct**

---
**rate** - Palabra clave variable utilizada para cambios misceláneos en una señal. Por ejemplo, la tasa de reproducción del Sample Player (el valor predeterminado es 1)

---
**room** - Palabra clave del título: room, Palabra(s) clave del atributo: mix

El argumento room especifica el tamaño de la habitación
```python
d1 >> play("x-o-", room=0.5)
```

Mix es la mezcla seca/húmeda de reverb o cuánto reverb se mezcla con la fuente.  1 es todo reverb, 0 es sin reverb en absoluto. (El valor predeterminado es 0.1)
```python
d1 >> play("x-o-", room=0.5, mix=.5)
```

---
**reverb** - Ver Room

---
**sample** - Palabra clave especial para Sample Players; selecciona otro archivo de audio del banco de muestras para un carácter de muestra.

---
**scale**

---
**shape**

---
**slide** - Deslizar A - Desliza el valor de frecuencia de una señal a freq * (slide+1) durante la duración de una nota (el valor predeterminado es 0)
```python
p1 >> pluck(P[:8], dur=1/2, slide=1)
p1 >> pluck(P[:8], dur=1/2, slide=12)
p1 >> pluck(P[:8], dur=1/2, slide=var([0,-1],[12,4]))
```

---
**slidedelay**

---
**slidefrom**

---
**slider**

---
**spread**

---
**spin**

---
**striate**

---
**stutter**

---
**sus** - Sostenido (el valor predeterminado es `dur`)

---
**swell**

---
**vib** - Vibrato - Palabra clave del título: vib, Palabra(s) clave del atributo: Vibrato (el valor predeterminado es 0)
```python
p1 >> pluck(P[:8], dur=1/2, vib=12)
```

Con atributo hijo, vibdepth (el valor predeterminado es 0.2)
```python
p1 >> pluck(P[:8], dur=1/2, vib=12, vibdepth=0.5)
```

---
**vibdepth** - Ver vib


---
### ¡Intenta esto!

1.  *Usa _**print(SynthDef)**_ para ver todos los sintetizadores disponibles y pruébalos.*
2.  *Crea una pequeña línea de bajo con 1-8 notas, acordes con 1-8 acordes y una pequeña melodía.*
3.  *Usa algunos de los atributos: la variable de octava **oct=**, la variable de duración **dur=** y/o el valor de ganancia de amplitud **amplify=** para obtener un mejor resultado!*
