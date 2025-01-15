---
title: How to code SynthDefs
---


Renardo creates music by giving player objects a *digital instrument* to play, which are called **SynthDefs**. You can see the list of pre-installed 'Synths' by executing

```python
print(SynthDefs)
```

Each one of these represents a **SynthDef** *object*. These objects are then given to Players to play - like giving an instrument to someone in your orchestra.


---
### Writing your own Synth Definitions

This is a bit more advanced, but if you have already written SynthDefs in Supercollider then you might feel at home. If not, the [SuperCollider Book](https://github.com/supercollider/scbookcode/) will help you getting started with SuperCollider. 

Renardo can access any SynthDef stored on the SuperCollider server, but it needs to know it's there. If you have already written a SynthDef in SuperCollider and named it \mySynth then you just create a SynthDef instance using Renardo like so:
```python
mySynth = SynthDef("mySynth")
```

Using the same variable name in Renardo as in SuperCollider for your SynthDef is a good idea to avoid confusion. If you want to write (or edit) your own SynthDef during run-time in Renardo you can use a SuperCollider API by importing the SCLang module. All Renardo SynthDef objects inherit the base-class behaviour, such as low- and high-pass filters and vibrato, but these can be overridden or updated easily. If you want to know more about digital sound processing and SynthDef creation, check out the SuperCollider [Documentation](https://doc.sccode.org/). Below is an example of creating one in Renardo:

Import module for writing SCLang code from Python
```python
from SCLang import *
```

Create a SynthDef named 'example' (using the same variable name as the SynthDef name is a good idea)
```python
example = SynthDef("example")
```

Create the oscillator (osc) using a sine wave
```python
example.osc = SinOsc.ar(ex.freq)
```

And give it a percussive sound envelope (env)
```python
example.env = Env.perc()
```

Finally, store it!
```python
example.add()
```

How to create a SynthDef
```python
with SynthDef("pads") as pads:
	pads.osc = SinOsc.ar(pads.freq)
	pads.env = Env.perc()
```

Equivalent to:
```python
pads = SynthDef("pads")
pads.osc = SinOsc.ar(pads.freq)
pads.env = Env.perc()
pads.add()
```
