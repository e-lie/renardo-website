---
title: Patrones
---


### Funciones de los patrones

**PStep(n,value,default=0)** >> Devuelve un patrón donde cada **n** término es **value**, en caso contrario **default**.
```python
s1 >> varsaw(PStep(3,[0,2,1,4,2,5],[-2,[-2,-1]]), oct=(4,6), dur=0.25, sus=0.125, lpf=linvar([200,4000], 8))
```

**PSum(n,total,\**kwargs)** >> Devuelve un patrón de longitud **n**, cuya suma es **total**. Por ejemplo: PSum(3,8) -> P[3,3,2] PSum(5,4) -> P[1,0.75,0.75,0.75,0.75].
```python
s1 >> donk(P[:2], oct=[[5,6], 6], dur=PSum(12,8), sus=0.5)
```

**PRange(start,stop=None,step=None)** >> Devuelve un patrón equivalente a Pattern(range(start,stop,step)).
```python
s1 >> piano([0,2,0,1], oct=4, dur=2, sus=1, amplify=0.7)
s2 >> piano(Pvar([[0,2,4,2],[0,4,2,1],PRange(0,8,var([2,1],4))], [4,4,8]), dur=Pvar([0.5,PDur([3,5],8)], [1,3]))
```

**PTri(start,stop=None,step=None)** >> Devuelve un patrón equivalente a Patrón(range(start,stop,step)) con la forma invertida añadida.
```python
s1 >> piano([0,2,0,1], oct=4, dur=2, sus=1, amplify=0.7)
s2 >> piano(Pvar([[0,2,4,2],[0,4,2,1],PTri(0,8,var([2,1], 4))], [4,4,8]), dur=Pvar([0.5,PDur([3,5], 8)],[1,3]))
```

**PEuclid(n,k)** >> Devuelve el ritmo euclídeo que distribuye **n** pulsos de la forma más uniforme posible en **k** pasos. Por ejemplo, PEuclid(3,8) devuelve P[1,0,0,1,0,0,1,0].
```python
s1 >> blip(Pvar([P[:2],P[:3]], 16), oct=4, dur=0.5, amplify=PEuclid([3,5,5,3],[7,8]))
```

**PSine(n=16)** >> Devuelve valores de un ciclo de una onda sinusoidal dividida en **n** partes.
```python
s1 >> fuzz(PSine(8), dur=0.5, sus=0.25, formant=1, room=0.5, mix=0.33, pan=PSine(32))
```

**PDur(n,k,dur=0.25)** >> Devuelve la duración real basada en ritmos euclidianos (ver PEuclid), donde **dur** es la longitud de cada paso. p.ej. PDur(3,8) devuelve P[0.75,0.75,0.5].
```python
s1 >> bass(PWalk(3), oct=5, dur=Pvar([PDur(5,7),PDur(5,8)], 16))
s2 >> pulse(Pvar([P[:3],P[:2]], 8), oct=5, dur=PDur(2,3), sus=0.125, lpf=expvar([400,4000], 16), lpr=0.75, amp=P10(16))
```

**PBern(size=16,ratio=0.5)** >> Devuelve un patrón de unos y ceros basado en el valor de **ratio** (entre 0 y 1). Esto se conoce como la secuencia de Bernoulli.
```python
b1 >> play("S", sample=[1,3], amp=PBern(16,0.5))
b2 >> play("S", dur=PBern(24,0.5), delay=[0,0.5], sample=5, amp=1)
```

**PBeat(string,inicio=0,dur=0.5)** >> Devuelve un patrón de duraciones basado en una cadena de entrada, donde los no-espacios denotan un pulso.
```python
s1 >> donk(dur=PBeat(". . . ..", start=0, dur=[1]+[0.5]+[1]+[0.5]*2))
s2 >> bell(dur=PBeat(". . . ..", start=0, dur=0.5), amplify=0.6)
```

**PSq(a=1,b=2,c=3)**
```python
s1 >> piano(PSq(1,2,3)-var([0,P[:2]*2], [4,8]))
print(PSq(1,2,3))
```


---
### Generadores de patrones


**PRand(lo,hi,seed=None)/PRand([valores])** >> Devuelve una serie de enteros aleatorios entre lo y hi, ambos inclusive. Si se omite hi, el rango es de 0 a lo. Se puede proporcionar una lista de valores en lugar del rango y PRand devuelve una serie de valores elegidos al azar de la lista.
```python
var.ch1 = var([PRand([0,2,4,8], seed=PxRand(200))], 4)
var.ch2 = var([PRand([0,1,3,5], seed=PxRand(200))], [8,4,4])
s1 >> piano([var.ch1,var.ch2], dur=0.5, amplify=0.6)
```

**PxRand(lo,hi)/PxRand([valores])** >> Idéntico a PRand, pero no se repite ningún elemento.
```python
s1 >> pluck(PWalk(4), dur=PxRand([2,0.66,0.66,0.33,1,1,0.5,0.5,0.75]), oct=6, formant=3, tremolo=3, room=0.6, mix=0.3, amplify=0.65)
```

**PwRand([valores], [pesos])** >> Utiliza una lista de pesos para indicar con qué frecuencia se seleccionan elementos con el mismo índice de la lista de valores.
Un peso de 2 significa que tiene el doble de probabilidades de ser elegido que un elemento con un peso de 1.
```python
s1 >> sitar(PWalk(4), dur=PwRand([2,0.66,0.33,1,0.5,0.75,0.25], [2,4,5,3,7,6,1]), oct=PwRand([6,6,7,5], [4,3,2,1]), room=0.6, mix=0.5, amplify=0.65)
```

**P10(n)**>> Devuelve un patrón de longitud n de una serie de unos y ceros generada aleatoriamente.
```python
s1 >> pulse(Pvar([[0,1],[0,2]], 16), oct=4, dur=2, sus=1, amplify=0.75)
s2 >> pulse(P[:4], dur=0.5, sus=0.25, amplify=0.75, amp=P10(16))
```

**PAlt(pat1, pat2, *patN)** >> Devuelve un patrón generado alternando los valores de las secuencias especificadas.

0, -2, 0, 8, 2, 1, 0, 9, 4, 3, 7, 0, -2, 0, 5 ...
```python
mtf1 = [0,2,4]
mtf2 = [-2,1,3]
mtf3 = [0,0,2]
s1 >> piano(PAlt(mtf1,mtf2,mtf3,[8,9,7,5]), dur=0.5)
```

**PJoin(patrones)** >> Reúne una lista de patrones.
```python
mtf1 = [0,2,6,4]
mtf2 = [1,3,7,5]
s1 >> arpy(Pvar([mtf1,mtf2,mtf1,PJoin([mtf1,mtf2])], 8), oct=5, dur=0.5, formant=3, room=0.5, mix=0.3)
```

**PPairs(seq,func=<lambda>)** >> Enlaza una secuencia con una segunda secuencia obtenida ejecutando una función sobre la original. Por defecto, es lambda n: 8-n.
```python
s1 >> sitar(PPairs([0,4,2,0,6,4], lambda n: var([n*3,n-1], [12,4])), oct=4, dur=0.5, amplify=0.4)
```

**PQuicken(dur=0.5,stepsize=3,steps=6)** >> Devuelve un grupo de cantidades de retardo que disminuyen gradualmente.
```python
b1 >> play("m", dur=1, delay=[PQuicken(dur=2,stepsize=2,steps=3),PQuicken(dur=2,stepsize=2,steps=6)], sus=0.125, amplify=0.4)
b2 >> play("t", dur=4, delay=PQuicken(dur=1,stepsize=4,steps=3), sample=2, amplify=0.6)
b3 >> play("S", dur=4, delay=2+PQuicken(dur=0.5,stepsize=2,steps=3), amplify=0.65)
```

**PRitmo(duraciones)** >> Convierte todas las tuplas / PGrupos en duraciones, que se calculan con el algoritmo PDur.
```python
b1 >> play("V", dur=PRhythm([0,0.5,0,0.25,1,0.75]), delay=0, sample=12, amplify=0.65)
```

**PShuf(seq)** >> Devuelve una versión mezclada de seq. Este ejemplo utiliza una función para barajar automáticamente la lista.
```python
def updateShuffle(n=0):
    beats=32
    if n % beats == 0:
         var.mtf = var([PShuf([0,1,3,4,-1])], 1)
    Clock.future(1, updateShuffle, args=(n+1,))
updateShuffle()
s1 >> ambi(var.mtf, oct=(5,6), dur=1, sus=0.25, echo=[0,0.5], echotime=2, room=0.66, mix=0.3, amplify=0.5)
```

**PStretch(seq,size)** >> Devuelve **seq** como patrón y se repite hasta que su longitud es **size**, por ejemplo PStretch ([0,1,2], 5) devuelve P [0,1,2,0,1].
```python
var.mtf1 = var([0,1,2,4,[3,5],0,2,4], 0.5)
s1 >> karp(PStretch(var.mtf1,12), oct=6, dur=[0.5,0.66], shape=0.125, formant=0, rate=0.125, amplify=0.66)
```

**PStrum(n=4)**
```python
var.mtf1 = var([0,1,2,0,[4,2],3,-2,[-1,4]], 0.5)
s1 >> marimba(var.mtf1, oct=var([5,6], [0.5,1.5]), dur=Pvar([PStrum(5),PStrum(2)], 16), shape=0.25, room=0.5, mix=0.5, amplify=1)
```

**PStutter(seq,n=2)** >> Crea un patrón para que cada elemento de la matriz se repita n veces (n puede ser un patrón).
```python
var.mtf1 = var([0,6,4,2], 2)
s1 >> quin(PStutter([var.mtf1], 2), oct=4, dur=PStutter([1,0.5], 4), sus=0.25, amplify=0.65)
```

**PZip(pat1, pat2, patN)** >> Genera un patrón que 'zipea' múltiples patrones. PZip([0,1,2], [3,4]) crea el patrón P[(0,3),(1,4),(2,3),(0,4),(1,3),(2,4)].
```python
s1 >> faim(PZip([0,2], [2,-2,4,6]), oct=6, dur=2, atk=0.15, chop=2, lpf=1800, vib=2, amplify=0.5)
```

**PZip2(pat1,pat2,rule=<lambda>)** >> Como PZip, pero sólo utiliza dos patrones. Conecta los valores si cumplen la regla.
```python
s1 >> faim(PZip2([0,2], [2,-2,4,6], rule=<lambda>), oct=6, dur=2, atk=0.15, chop=2, lpf=1800, vib=2, amplify=0.5)
```

**Pvar** >> TimeVar, que guarda listas en lugar de valores individuales (var,sinvar,linvar,expvar).
```python
s1 >> gong(P[Pvar([[0,2],[2,4],[4,6],[2,4]], 2)], dur=0.5, lpf=expvar([800,8000], [4,0]), pan=sinvar([-0.65,0.65], 8), amplify=0.75)
```

**PWhite(lo,hi)** >> Devuelve números aleatorios en coma flotante entre lo y hi.
```python
s1 >> arpy((0, var(PRand([Scale.default]), 8)), oct=var([5,6], [24,8]), dur=PDur(5,8), room=0.5, mix=sinvar(0.3,0.75), pan=PWhite(-1,1), amplify=0.65)
```

**PChain(mapping_dictionary)** >> Basado en una cadena de Markov simple con probabilidades iguales. Toma un diccionario de elementos, estados y posibles estados futuros. Cada estado futuro tiene la misma probabilidad de ser seleccionado. Si un posible estado futuro no es válido, se produce un KeyError.
```python
s1 >> rave(PChain([0,8,6,3,-2,0,-3]), dur=0.25, sus=0.125, amplify=0.5)
```

**PWalk(max=7,step=1,start=0)** >> Devuelve una serie de enteros con cada elemento separado por un incremento y con un valor en el rango de +/- el máximo. El primer elemento se puede seleccionar con start.
```python
s1 >> dirt(PWalk(6,2), dur=[0.5,PSum(4,3)], oct=6, shape=0.3, lpf=1800, pan=(-0.65,0.65), amplify=0.25)
```

**PFibMod()** >> Devuelve la secuencia de Fibonacci.
```python
s1 >> feel(PFibMod()[:7]+var([0,-3,0], 8), dur=1, shape=0.25, chop=128, room=0.75, mix=0.5)

```