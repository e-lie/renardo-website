---
title: Synths Attribute
---


### Ein Piano

Im folgenden Beispiel werden 3 Player-Objekte verwendet, um ein volles Klavier zu bilden:

```python
p1 >> piano([0,1,0,-1], oct=4, dur=2, amplify=0.75)
p2 >> piano([(2,4),(0,2),(3,5),(1,3),(2,4),(0,2),(-1,1),(-3,-1)], dur=1, amplify=0.66)
p3 >> piano([0,4,2,4,1,2,1,3,2,3,5,7,-1,3,-3,1], oct=6, dur=0.5).every(32, "reverse")
```

Das ist dasselbe wie:

```python
bassline = [0,1,0,-1]
chords = [(2,4),(0,2),(3,5),(1,3),(2,4),(0,2),(-1,1),(-3,-1)]
melody = [0,4,2,4,1,2,1,3,2,3,5,7,-1,3,-3,1]
p1 >> piano(bassline, oct=4, dur=2, amplify=0.75)
p2 >> piano(chords, dur=1, amplify=0.66)
p3 >> piano(melody, oct=6, dur=0.5).every(32, "reverse")
```

**Ein weiteres Beispiel**

```python
Scale.default="minor"
Root.default.set(var([1, 2], 32))
Clock.bpm=105
a1a = P[2, 6, 4, -2]
a1b = P[var([0, 2, -2, 2], 16), 4, 8]
a1c = P[var([[0, P*(0, 0, 0, 0, var([0, 8, 6, 4], 16))], 0], 16)]
a1d = P[var([[P*(8, 7, 6, 5, 4), P*(4, 6, 8)], 0], 16)]
a1 >> pianovel(
    (a1a, a1b, a1c, a1d),
    amp=(0.4 * var([linvar([1, 0.2], 0.25), 1, PBern(16, 0.9)], 16), var([0.4, 0.6], 4)), dur=(1,2),
    oct=(3,6),
    vib=0.5, vibdepth=0.5,
    lpf=(var([0, 600], 32),linvar([400, 4000], 64)),
    chop=(linvar([0, 4], 64), 0),
    shape=(0.2, 0), formant=(0, var([1, 0], 4)),
    slide=var([0, var([2, -0.5, 0], 3)], [3, 1]),
    pan=(expvar([0, -0.5], 12), expvar([0, 0.5], 16))
)
```
