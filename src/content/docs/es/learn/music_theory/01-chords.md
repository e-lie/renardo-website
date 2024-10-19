---
title: Acordes
---


### Acorde


En música, un acorde es la sonoridad simultánea de al menos tres tonos diferentes que pueden interpretarse armónicamente.

Podemos dividir los acordes en diferentes tipos dependiendo de cuántas notas tengan. Podemos tenerlos en:

* Grupos de dos notas - llamados intervalos o díadas
* Grupos de tres notas - conocidos como acordes tríada
* Grupos de cuatro o más notas - usualmente llamados acordes séptima o acordes extendidos

Una tríada ocupa la raíz o primera nota de la escala, el tercer grado y el quinto grado, con cada intervalo siendo una tercera.

Por ejemplo, la escala de Do menor tiene las notas Do-Re-Mib-Fa-Sol-Lab-Si-Do. Toma las notas 1ª, 3ª y 5ª (Do-Mib-Sol) para formar una tríada menor de Do.

Un acorde séptima usa la raíz, el 3º, 5º y 7º grado, por lo que un acorde Cmin7 añadiría el Sib (Do-Mib-Sol-Sib). Acorde de séptima menor de Do.

Los acordes extendidos añaden el 9º, 11º y 13º grados (las octavas del 2º, 4º y 6º, respectivamente).


### Inversión de Acordes

Si tienes un acorde donde la nota más baja no es la nota que da nombre al acorde, llamamos a esto una inversión de acorde. Una inversión de acorde toma una nota inicial diferente (también llamada nota de bajo) y construye el acorde desde allí. Las inversiones de acordes se utilizan principalmente para permitir una guía de voz más fácil a través de diferentes progresiones de acordes, especialmente en el bajo.

Las características de una inversión de acorde son:

*   La nota raíz no está en el bajo.
    
*   Obtén una dinámica suave reorganizando los acordes cambiando la octava de las notas para alinearlas más cerca del primer acorde, invirtiendo así la nota más alta en la nota de bajo.
    
*   La inversión de una 5ª se convierte en una 4ª y viceversa.
    
*   Una 2ª mayor invertida se convierte en una 7ª menor y una 7ª menor se convierte en una 2ª mayor.
    
*   Una 6ª mayor invertida se convierte en una 3ª menor y una 3ª menor se convierte en una 6ª mayor.
    

---
### Progresión de Acordes


Para crear una melodía agradable e interesante, necesitas elegir cuidadosamente cómo se mueve cada nota a la siguiente nota y cómo cada nota se relaciona con las notas en su vecindad. Las notas no pueden estar demasiado separadas, y generalmente quieres que las notas se mantengan dentro de la tonalidad o tonalidades relacionadas.

El mismo concepto se utiliza para la armonía. Dado que una canción generalmente consiste en más de un acorde, necesitas relacionar cada acorde con el anterior y el siguiente para que el movimiento armónico suene bien e interesante. Aquí es donde entra en juego una progresión de acordes.

Una progresión de acordes es cuando varios acordes diferentes se tocan uno tras otro.

**Dur <<>> Moll**

Mayor y menor forman las dos caras de la moneda proverbial cuando se trata de definir la tonalidad de una canción o composición. Las canciones están en una tonalidad mayor o menor. A veces, las canciones o piezas más complejas contienen modulaciones (cambios de tonalidad), y podemos ver tanto tonalidades mayores como menores representadas en una sola obra. Sin embargo, las tonalidades mayores y menores (y sus modos correlativos) no pueden ocurrir simultáneamente, al menos en la música tonal.

Cada pieza o sección de una pieza debe ser mayor o menor. No puedes ser ambos. Las canciones mayores y menores se basan en sus respectivas escalas (modos). Esto proporciona información sobre tanto el contenido de la melodía como la armonía de una pieza.

En otras palabras, las canciones con una tonalidad mayor se seleccionan de notas encontradas en una escala mayor de siete notas en particular (como Do mayor o Fa mayor, etc.). Las canciones afinadas en menor se seleccionan de escalas menores de siete notas (como Do menor o Fa menor, etc.). En el caso de menor, sin embargo, hay una escala menor superordinada llamada menor natural, así como dos variantes, cada una llamada menor armónica y menor melódica.

Además, las progresiones de acordes mayores y menores generalmente siguen las cadencias primarias (puntos de referencia armónicos) del modo del que se derivan. Las piezas afinadas en mayor casi siempre terminan en un acorde de **base** mayor. Este acorde generalmente se refiere como **I** usando números romanos.

Lo contrario es el caso con las canciones en tonalidad menor. Ocasionalmente, sin embargo, las piezas clásicas en tonalidad menor sorprenden al oyente al terminar repentinamente con una tercera mayor en el acorde de **base** o **I**. Este cambio inesperado le da a la música un impulso repentino. El término clásico para esto es tercera de Picardía.

Crea un menor a partir de un acorde mayor bajando los grados 3º, 6º y 7º en una nota.

Menor:

| **Moll** | **Dim**  | **Dur** | **Moll** | **Moll** | **Dur** | **Dur** |
| -------- | -------- | ------- | -------- | -------- | --------| ------- |


Mayor:

| **Dur**  | **Moll** | **Moll** | **Dur**  |  **Dur** | **Moll** | **Dim** |
| -------- | -------- | -------- | -------- | -------- | ---------| ------- |


Ejemplo en La menor:

|  **Am**  |  **B0** | **C** |  **Dm**  |  **Em**  |  **F**  | **G** |
| -------- | ------- | ----- | -------- | -------- | ------- | ----- |


Ejemplo en Do menor:

|  **Cm**  |  **D0** | **D#** |  **Fm**  |  **Gm**  |  **G#**  | **A#** |
| -------- | ------- | ------ | -------- | -------- | -------- | ------ |


**Una escala menor se puede lograr bajando los tonos 3º, 6º y 7º mayores en una nota**

```python
print(Scale.major)
```
_Salida de consola >> P[0,2,4,5,7,9,11]_


```python
print(Scale.minor)

```
_Salida de consola >> P[0,2,3,5,7,8,10]_


Si solo quieres cambiar un acorde a menor, baja la tercera nota.

Una escala menor melódica se crea subiendo las notas 6ª y 7ª de la escala menor.

```python
print(Scale.minor)

```
_Salida de consola >> P[0,2,3,5,7,8,10]_


```python
print(Scale.melodicMinor)
```
_Salida de consola >> P[0,2,3,5,7,9,11]_


Ejemplos de escala menor séptima de Mi (E3,F#3,G3,A3,B3,C4,D4,E4)

* E3, G3, B3, D4 – m7 (añadir F#4 para m9)
* F#3, A3, C4, E4 – Dim7 (añadir G4 para Dim9) 
* G3, B3, D4, F#4 – Maj7 (añadir A4 para Maj9)
* A3, C4, E4, G4 – m7 (añadir B4 para m9)
* B3, D4, F#4, A4 – m7 (añadir C5 para m9)
* C4, E4, C4, B4 – Maj7 (añadir D5 para Maj9)
* D4, F#4, A4, C5 – Acorde mayor con séptima menor – Dom7 (añadir E5 para Dom9)

