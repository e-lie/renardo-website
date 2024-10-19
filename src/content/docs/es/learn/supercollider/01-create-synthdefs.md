---
title: Cómo programar SynthDefs
---

Renardo crea música dando a los objetos reproductores un *instrumento digital* para tocar, llamados **SynthDefs**. Puedes ver la lista de 'Synths' preinstalados ejecutando

```python
print(SynthDefs)
```

Cada uno de estos representa un *objeto* **SynthDef**. Estos objetos luego se asignan a los Reproductores para tocar, como dar un instrumento a alguien en tu orquesta.

---
### Escribiendo tus propias Definiciones de Synth

Esto es un poco más avanzado, pero si ya has escrito SynthDefs en Supercollider, te sentirás como en casa. Si no, el [Libro de SuperCollider](https://github.com/supercollider/scbookcode/) te ayudará a comenzar con SuperCollider.

Renardo puede acceder a cualquier SynthDef almacenado en el servidor de SuperCollider, pero necesita saber que está allí. Si ya has escrito un SynthDef en SuperCollider y lo has nombrado \mySynth, entonces solo necesitas crear una instancia de SynthDef usando Renardo así:
```python
mySynth = SynthDef("mySynth")
```

Usar el mismo nombre de variable en Renardo que en SuperCollider para tu SynthDef es una buena idea para evitar confusiones. Si deseas escribir (o editar) tu propio SynthDef durante el tiempo de ejecución en Renardo, puedes usar una API de SuperCollider importando el módulo SCLang. Todos los objetos SynthDef de Renardo heredan el comportamiento de la clase base, como filtros de paso bajo y alto y vibrato, pero estos pueden ser anulados o actualizados fácilmente. Si deseas saber más sobre el procesamiento de sonido digital y la creación de SynthDef, consulta la [Documentación](https://doc.sccode.org/) de SuperCollider. A continuación, se muestra un ejemplo de cómo crear uno en Renardo:

Importar el módulo para escribir código SCLang desde Python
```python
from SCLang import *
```

Crear un SynthDef llamado 'example' (usar el mismo nombre de variable que el nombre del SynthDef es una buena idea)
```python
example = SynthDef("example")
```

Crear el oscilador (osc) usando una onda sinusoidal
```python
example.osc = SinOsc.ar(ex.freq)
```

Y darle un envolvente de sonido percusivo (env)
```python
example.env = Env.perc()
```

Finalmente, ¡almacénalo!
```python
example.add()
```

Cómo crear un SynthDef
```python
with SynthDef("pads") as pads:
	pads.osc = SinOsc.ar(pads.freq)
	pads.env = Env.perc()
```

Equivalente a:
```python
pads = SynthDef("pads")
pads.osc = SinOsc.ar(pads.freq)
pads.env = Env.perc()
pads.add()
```

