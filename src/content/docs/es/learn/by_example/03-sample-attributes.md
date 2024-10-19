---
title: Atributos de Samples
---


### Atributo *pshift*


Aquí están los que funcionan con samples:

_dur, delay, sample, sus, pan, slide, slidedelay, glide, glidedelay, bend, benddelay, coarse, striate, rate, pshift, hpf, hpr, lpf, lpr, swell, shape, chop, tremolo, echo, echotime, spin, cut, verb, room, mix, formant, shape, drive, blur_

Por ejemplo, si usas _pshift_, puedes cambiar el tono del sample:
```python
b1 >> play("#", dur=2, pshift=linvar([0,8], 16))
```
