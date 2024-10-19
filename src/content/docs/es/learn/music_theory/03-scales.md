---
title: Escalas y Modos
---


### Escala

Una escala musical, o escala, se define técnicamente como una serie de tonos unitarios ascendentes o descendentes que forman un rango de notas que se pueden usar para formar una melodía. La mayoría de las escalas en la música occidental corresponden a una clave específica. Es decir, una secuencia de notas que es mayor o menor por defecto. Esto no se aplica a la escala cromática, que es una escala de todos los semitonos posibles en la música occidental. La escala de tonos enteros también es una escala que consiste en intervalos de dos semitonos.

Dentro de una clave dada hay 7 notas en una sola octava antes de llegar a la octava nota, que tiene el mismo nombre que la primera nota y es el doble de la frecuencia. Las siete notas tienen diferentes intervalos entre notas adyacentes. A veces es un semitono, a veces es un tono entero (dos semitonos). El patrón de intervalos de tono entero / semitono que determina las notas de una clave, comenzando con la nota mientras se nombra la clave, es tono-tono-semitono-tono-tono-tono-semitono. Dentro de una sola clave, cualquiera de estas siete notas podría usarse como la nota base de una secuencia ascendente. Cualquier secuencia creada al comenzar con una nota diferente en la clave es un modo de esa clave, y cada modo tiene un nombre. Por ejemplo:

*   Jónico - comienza con el "tónico"; la nota para la cual se nombra la clave. En la clave de C, el modo jónico comienza con C. Este modo es el más común y se conoce coloquialmente como la "escala mayor". El patrón es TTSTTTS.
    
*   Dórico - comienza con la siguiente nota más alta en la clave que el tónico (D, en la clave de C). TSTTTST.
    
*   Frigio - comienza con la nota que es una tercera mayor más alta que el tónico (E). STTTSTT.
    
*   Lidio - comienza con la nota que es una cuarta completa más alta que el tónico (F). TTTSTTS.
    
*   Mixolidio - comienza en la nota que es una quinta más alta que el tónico (G). TTSTTST.
    
*   Eólico - comienza con la nota una sexta mayor más alta que el tónico (A). Este modo también es muy importante en la música moderna y se conoce como la "escala menor natural". TSTTSTT.
    
*   Locrio - comienza con la nota una séptima mayor más alta que el tónico (Bb). STTSTTT.
    

---
### Tabla de Escalas

![Renardo Scales](../../../../assets/RenardoScales.svg)

---
### Usando Escalas


*   Una escala es esencialmente un subconjunto de las notas musicales (tonos) entre una nota, por ejemplo, C, y la misma una octava más alta.
    
*   La nota inicial es la clave de la escala.
    
*   Comenzando en C, estas notas son:
    
*   Este conjunto de todas las notas se llama escala cromática.
    
*   Si esto fuera una lista de Python llamada cromática, entonces cromática[0] devolvería C, cromática[1] devolvería C#, cromática[2] devolvería D, y así hasta cromática[11], que devolvería B.
    
*   Debido a que cada escala musical es un subconjunto de estos tonos, podemos pensar en cada escala como una lista de índices para acceder a los tonos en la escala cromática.
    

cromática = [C, C#, D, D#, E, F, F#, G, G#, A, A#, B]

| **C**  | **C#** | **D**  | **D#** | **E**  |  **F** | **F#** | **G**  | **G#** | **A**  | **A#** |**B(H)**|
| ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ |
|   0    |    1   |    2   |    3   |    4   |    5   |    6   |    7   |    8   |    9   |   10   |   11   |


*   Para ver una lista de las escalas disponibles, simplemente ejecute el comando print(Scale.names()).
    
*   Por defecto, cada jugador usa una escala predeterminada accesible globalmente llamada Scale.default
    
*   Esto se puede cambiar de 3 maneras:
    

Simplemente asignando el objeto de escala a Scale.default:
```python
Scale.default = Scale.minor
```

Puedes usar el nombre de la cadena:
```python
Scale.default = "minor"
```

También puedes usar el método "set", que permite más opciones:
```python
Scale.default.set("minor")
```

También es posible cambiar la escala de los jugadores individualmente.

Forzar a un jugador a usar la escala menor:
```python
p1 >> pluck([0,1,2,3], scale=Scale.minor)
```


---
### Modos

W.I.P

---
### Usando Modos

W.I.P