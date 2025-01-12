---
title: Groups
---

Groups are useful for controlling multiple player objects at the same time. A piano can consist of a bass line, chord line and melody line. Attributes such as volume can then be adjusted more easily. This is also useful if you want to arrange transitions with filter effects (e.g. high pass filters on the entire drum kit).


```python
s1 >> piano(Pvar([[0,3,7,-2,0,5],[3,0,7,3,0]], [12,8]), oct=4, dur=PDur(3,8), sus=var([s1.dur,s1.dur*2], [6,2]), amplify=var([1,0.7], 8), amp=1)
s2 >> piano(Pvar([[2,5],[0,7]], 16), oct=var([5,6], [6,2]), dur=var([1,2], 32), amplify=var([0.8,1], 16), amp=1)
s3 >> piano((s1.degree,note), oct=(4,5), dur=var([PDur(3,8),1], PRand(8)), amplify=0.75, amp=1)
Piano.amp = Group(s1,s2,s3)
```

To turn the amplitude of this piano down, just use:
```python
Piano.amp = 0
```

Or, set the volume on for 4 beats, then off for 4. This overrides existing amplitudes set in the player object:
```python
Piano.amp=var([1,0],4)
```

To stop an entire group, use following command:
```python
Piano.stop()
```

You can use functions to group things together. To execute use **CTRL+Return**, not *ALT+Return*.
```python
def tune():
    b1 >> bass([0,3], dur=4)
    p1 >> pluck([0,4], dur=1/2)
    d1 >> play("x--x--x-")
tune()
```

or schedule the clock to call other grouped functions:
```python
def verse():
    b1 >> bass([0,3], dur=4)
    p1 >> pluck([0,4], dur=1/2)
    d1 >> play("x--x--x-")
    Clock.future(16, chorus)
def chorus():
    b1 >> bass([0,4,5,3], dur=4)
    p1 >> pluck([0,4,7,9], dur=1/4)
    d1 >> play("x-o-")
    Clock.future(16, verse)
verse()
```

Several group objects already exist in Renardo for specific groups of player objects based on variable names ending with the suffix '_all'. So for every character, e.g. **s** there is a group called **s_all**, which contains s1,s2,s3,...,s9. So if you organize your players by variable names, you can easily apply effects or stop them all at once:
```python
s1 >> pads([0,4,-2,3], dur=4)
s2 >> pluck([0,1,3,4], dur=0.25)
```

Use the group to apply the filter attribute to all player objects:
```python
s_all.hpf = 500
```

This is also useful for:
```python
s_all.amp = 0
```

With **.stop()** you can interrupt the entire group of players:
```python
s_all.stop()
```

With **.solo()** all other player objects are muted, i. H. only the player objects of this group can be heard:
```python
s_all.solo()
```

**.only()** stops all players who are not in the group:
```python
s_all.only()
```
