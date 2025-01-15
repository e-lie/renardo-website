---
title: Sample Attributes
---


### Attribute *pshift*


Here the ones, that work with samples are following:

_dur, delay, sample, sus, pan, slide, slidedelay, glide, glidedelay, bend, benddelay, coarse, striate, rate, pshift, hpf, hpr, lpf, lpr, swell, shape, chop, tremolo, echo, echotime, spin, cut, verb, room, mix, formant, shape, drive, blur_

For example, if you use _pshift_, you can change the pitch of the sample:
```python
b1 >> play("#", dur=2, pshift=linvar([0,8], 16))
```
