---
title: Progresiones de acordes
---


### Ejemplo "Billy Jean" 


Este ejemplo mostrará cómo codificar la introducción de "Billy Jean" de Michael Jackson.

* Scale: minor
    
* Root: E
    
* Chords:
    
El número después de la nota se refiere a la octava. En Renardo, el Do central=5, por lo que siempre debes sumar 2 al componer desde la partitura.

```python
# Tempo:
Clock.bpm=117
# Root E:
Root.default=“E”
# Scale to minor:
Scale.default=Scale.minor
# Chords in a list:
chords=[(0,2,4),(0,1,3,5),(0,2,4,6),(0,1,3,5)]
# Player object:
s1 >> pluck(chords, oct=3, dur=[1.5,5/2], sus=2)
# Drums:
b1 >> play("<V....V..V...[VV]V..><..o.><---->")
```


---
### Ejemplo “Get Lucky"



Este ejemplo mostrará cómo crear la línea de bajo y los acordes de la canción "Get Lucky" de Daft Punk.

Bass:

|  **B1**  |  **D2** | **F#2** |  **E2**  |
| -------- | ------- | ------- | -------- |


Chords:

|  **Bm**  |  **D**  | **F#m** |  **Em**  |
| -------- | ------- | ------- | -------- |


En el cuarto acorde hay una nota tomada prestada del vecino F#m (Círculo de Quintas):

|  **F#2** |  **A2** | **C#3** |  **B2**  |
| -------- | ------- | ------- | -------- |
|    D2    |    F#2  |   A2    | G#2 (F#m chord key) |
|    B1    |    D2   |   F#2   |    E2    |


Como extra, puedes intentar crear un poco de variedad usando TimeVars:

Drop: Sin beats Break: Sin voz Buildup: Mezcla de Break y Drop

Con 4 notas/acordes tocados cada 16 beats, la estructura de la canción es la siguiente:

| **Intro** | **Break** | **Buildup** | **Drop** | **Break** | **Buildup** | **Drop**  | **Outro** |
| --------- | --------- | ----------- | -------- | --------- | ----------- | --------- | --------- |
|  16 Beats |  32 Beats |  32 Beats   | 64 Beats |  32 Beats |  32 Beats   |  64 Beats | 48 Beats  |

