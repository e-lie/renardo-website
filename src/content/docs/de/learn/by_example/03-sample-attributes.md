---
title: Sample Attributes
---


### Attribut *pshift*

Hier folgen die, die mit Audiosample funktionieren:

_dur, delay, sample, sus, pan, slide, slidedelay, glide, glidedelay, bend, benddelay, coarse, striate, rate, pshift, hpf, hpr, lpf, lpr, swell, shape, chop, tremolo, echo, echotime, spin, cut, verb, room, mix, formant, shape, drive, blur_

Wenn Du zum Beispiel _pshift_ verwendest, kannst Du die Steigung der Probe ändern:
```python
b1 >> play("#", dur=2, pshift=linvar([0,8], 16))
```
