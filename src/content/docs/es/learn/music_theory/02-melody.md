---
title: Melodía
---


### Acordes a Melodía


Una forma es crear una progresión de acordes y luego encontrar la melodía en los acordes.

|  **E3**  |  **D3** | **F3** |  **E3**  |
| -------- | ------- | ------ | -------- |
|    C3    |    B2   |   D3   |    C3    |
|    A2    |    G2   |   A2   |    G2    |



Como se mencionó antes, la octava en Renardo está 2 pasos por encima de lo habitual, el do central es 5 no 3.

Hagamos los acordes con 93 bpm con A como nota raíz y escala menor:

```python
Clock.bpm = 93
Root.default=”A”
Scale.default=Scale.minor

# Acordes:
chords = var([(0,2,4),(-1,1,3),(0,3,5),(-2,2,4)])
s1 >> swell(chords, oct=5, dur=4, sus=5)

# Golpear los tambores puede ayudar a encontrar una buena melodía:
b1 >> play("<X....X..X..[X.].X..><..o.><---->",sample=0)
```

La forma más fácil de comenzar una melodía es tomar las notas más altas de los acordes.
Sin embargo, quieres agregar algunas notas fuera del acorde a tus notas de acorde:

|  **E4**  |  **F4** | **D4** |  **F4**  |  **D4**  |  **G4**  | **E4** | **D4** |
| -------- | ------- | ------ | -------- | -------- | -------- | ------ | ------ |


```python
seq=[4,5,3,5,3,6,4,3]
s2 >> pulse(seq, oct=6, dur=[3,1,3,3,1,1,2,2])
```

---
### Melodía a Acordes


En este ejemplo comenzamos con una melodía para obtener acordes adecuados a partir de ella, aquí la melodía.

|  **A3**  |  **B3** | **C4** |  **B3**  |  **E4**  |  **F4**  | **C4** | **G4** | **E4** | **D4** |
| -------- | ------- | ------ | -------- | -------- | -------- | ------ | ------ | ------ | ------ |


Establezcamos el tempo, la raíz y la escala:
```python
Clock.bpm = 93

Root.default=”A”

Scale.default=Scale.minor
```

La melodía original:

Si no puedes recordar los números en la lista de escalas, usa print(Scale.minor).

```python
seq=[0,1,2,1,4,5,2,6,4,3]
```

Sintetizador:
```python
s1 >> saw(seq, dur=[2,1,1,4,3,1,1,1,1,1], formant=4, amplify=0.4)
```


Los acordes disponibles (con séptima) para las notas tocadas en la melodía son los siguientes:

|  **G4**  |  **A4** | **B4** |  **C5**  |  **D5** | **E5** |  **F5**  |
| -------- | ------- | ------ | -------- | ------- | ------ | -------- |
|    E4    |    F4   |   G4   |    A4    |    B4   |   C5   |    D5    |
|    C4    |    D4   |   E4   |    F4    |    G4   |   A4   |    B4    |
|    A3    |    B3   |   C4   |    D4   |    E4   |   F4   |    G4    |


Aquí hay un buen ejemplo de una pista tipo trip-hop:

|  **E4**  |  **D4** | **E4** |  **E4**  |
| -------- | ------- | ------ | -------- |
|    C4    |    B3   |   C4   |    G4    |
|    A3    |    G3   |   A3   |    C4    |


Agreguemos los acordes a la melodía:
```python
chords = var([(0,2,4),(-1,1,3),(0,2,4),(-1,6,4)])
s2 >> keys(chords, oct=4, dur=4, shape=0.4)
```

Y un golpe de tambor:
```python
b1 >> play("<X....X..X..[X.].X..><..o.><---->", sample=0)
```

**Agregar una contramelodía (arpegio)**

Mantengámoslo simple y usemos las notas del acorde para tocar con los acordes. Con la contramelodía queremos agregar un ritmo a la pista.
Como la 4ª de la secuencia en una medida de 4 tiempos, agregamos la 2ª como se muestra aquí:
```python
chords = var([(0,2,4),(-1,1,3),(0,2,4),(-1,4,6)])
```

se convierte en
```python
seq2 = [0,2,4,2,-1,1,3,1,0,2,4,2,-1,4,6,4]
```

Ahora agreguemos otro instrumento que toque la contramelodía:
```python
s3 >> karp(seq2, dur=1)
```

---
### Acordes a Línea de Bajo

En el ejemplo a continuación, la progresión de acordes se basa en A menor, mientras se eleva una raíz a una octava más alta y se baja una raíz.

|  **G3**  |  **G3** |        |          |
| -------- | ------- | ------ | -------- |
|    E3    |    F3   |   G3   |    G3    |
|    C3    |    D3   |   E3   |    E3    |
|    A2    |    B2   |   C3   |    B2    |



Establezcamos el tempo, la raíz y la escala:
```python
Clock.bpm = 128
Root.default=”A”
Scale.default=Scale.minor
```

Aquí acordes y sintetizador:
```python
chords = var([(0,2,4,6),(1,1,3,6),(2,4,6),(1,4,6)])
s1 >> prophet(chords, oct=4, dur=4, sus=4)
```

El caso seguro es usar las notas raíz del acorde como notas de bajo y bajar esas notas en la octava:

|  **A1**  |  **G1** | **C2** |  **E2**  |
| -------- | ------- | ------ | -------- |

```python
bassline1 = [0,-1,2,4]
```


Otra forma de crear una línea de bajo es encontrar notas dentro de los acordes (aunque la séptima puede ser complicada).

|  **A1**  |  **B1** | **C2** |  **B1**  |
| -------- | ------- | ------ | -------- |


También puedes cambiar la duración de la línea de bajo para obtener un componente rítmico:

Usa _dur=1_, _dur=[0.5,1]_, o _dur=[1,2,1]_ en lugar de _dur=4_.

Otra opción es mover la nota raíz de un acorde un paso hacia arriba en la fila del acorde anterior.

Con dur=1:
```python
bassline2=[0,0,0,-1,-1,-1,-1,2,2,2,2,-3,-3,-3,-3,0]
```

O puedes usar saltos de octava **oct**:
```python
bassline3=[0,0,0,0,-1,-1,-1,-1,2,2,2,2,-3,-3,-3,-3]
```

con _dur=1_ y _oct=[3,3,4,3]_

Finalmente, una melodía como línea de bajo:

|  **A1**  |  **G1** | **A1** |  **B1**  |  **A1**  |  **G1** | **G1** |  **A1**  |  **C2**  |  **C2** | **A1** |  **G1**  |  **E1**  |  **E1** | **F1** |  **G1**  |
| -------- | ------- | ------ | -------- | -------- | ------- | ------ | -------- | -------- | ------- | ------ | -------- | -------- | ------- | ------ | -------- |

```python
bassline4 = [0,-1,0,1,-1,-1,0,1,3,3,0,-1,-3,-3,-2,-1]
```

---
### Línea de Bajo a Acordes

Comenzaremos con tempo, nota raíz, escala y una línea de bajo simple:
```python
Clock.bpm = 128
Root.default=”A”
Scale.default=Scale.minor
bassline=[0,0,0,0,0,0,0,1]
```

Ahora construyamos acordes a lo largo del acorde menor, como: Am, Bm/A, G/A, Am.
```python
chords = var([(0,2,4),(1,3,5),(0,2,4),(-1,1,3),(0,2,4)])
```


Bm/A y G/A significan "sobre A" porque la línea de bajo aún mantiene A como la raíz del acorde.

Los ejemplos correspondientes de sintetizador para bajo y acordes son:
```python
s1 >> jbass(bassline, oct=3, dur=0.5, shape=0.4) # Bajo
s2 >> dirt(chords, oct=5, dur=[4,3,1,4,4], amplify=0.4) # Acordes
```
Tambores:
```python
b1 >> play("<V....V..><..o.><....k..d>←--[--]>", sample=var([4, 2], 16), amplify=0.5)
b2 >> play(var(["[ss]",".[ss]"]), amplify=0.5)
```

Algunas notas adicionales sobre una línea de bajo:

**¡Usa solo una nota a la vez, ya que las frecuencias bajas fácilmente se vuelven "turbias"!**
