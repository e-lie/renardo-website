---  
title: Beats
---

### Create beats

*   Try to add variations, modulations, and/or swing (e.g. attribute **nugde**) to your beats to keep it alive.
*   Variations are changes in the beat structure from one bar to another.
*   Modulations are effects on the entire drum set, or on single parts of the drum set.
*   Adjust some off notes to get a different dynamic within the beat, give your beat some swing.
*   Be careful not to get to dynamic, thus losing the drive through the bass drum.

Start with the basic pattern made of a kick, a snare, and a HiHat.

```python
k1 >> play(“X...X...”)
s1 >> play(“..o...o.”)
h1 >> play(“-.-.-.-.”)
```

**.** (dot) is used as a placeholder to make it easier to see.

As we will increase our beat in the future, leave 3 player for the drum or drum-like sounds, 3 player for snare and snare-like sounds, and 3 for HiHat, OpenHat s.o.


Now lets add a variation to the HiHat:
```python
h1 >> play(“-.-.-.-.”).every(16,”mirror”).every(8,”stutter”,2)
```

And here another example:
```python
h2 >> play(“--------”, sample=3, amplify=[0.3,0.3,0.6,0.3,0.3,0.6,0.3,0.6])
```

You also can add _ghost_ notes, that are usually quieter 16 offbeat notes before or after the _main_ note. For this, we will use **<>** for layering to adjust the volume to the _ghost_ note:
```python
ks >> play(“<..o...o.><.[.o]......>”, amplify=(0.7, 0.3))
```


**The following examples will help you to experience the concept using familiar rhythms and beats. In addition, use your own arguments.**
   

---
### House


```python
Tempo:
Clock.bpm=128

BassKick:
b1 >> play("X.", rate=0.8, sample=2, amplify=0.6)

Clap:
b4 >> play("..*.", sample=3, amplify=0.4)

Snare:
b5 >> play("......o.", rate=1.4, sample=1, amplify=0.5)

HiHat:
b7 >> play(".-", rate=0.8, sample=3, delay=PRand([0,Pwhite(-0.5,0.5)]), amp=0.6)

Cymbal:
b8 >> play("#", rate=1.2, dur=16, sus=8, amplify=0.8)
```


---
### Drum N Bass


```python
Tempo:
Clock.bpm=170

BassKick:
b1 >> play("V....V..VV...V..", rate=0.8, sample=2, amplify=0.6)
b2 >> play("v......[vvvv]", sample=4, amplify=0.6)

Snare:
b4 >> play(Pvar(["..o.","..o[.o.]"], [12,2]), sample=2, amplify=0.4)
b5 >> play("..i.", amplify=PRand([0.4,PWhite(0.6,0.4)]))

Shaker:
b7 >> play("s", rate=0.8, sample=2, amplify=PRand([0.4,PWhite(0.6,0.4)]))

Closed HiHat:
b8 >> play("-", rate=1.4, pshift=linvar([0,16], 8), sample=2, shape=0.3, amplify=1.2)
```


---
Dubstep


```python
Tempo:
Clock.bpm=140

BassKick:
b1 >> play(Pvar(["V...V...", "V[..V.]..[V..V][..V.].[..V.]"], 16), dur=1, rate=1.2, sample=6, amplify=0.6)
b2 >> play(Pvar(["X...X...", "X[..X.]..[X..X][..X.].[..X.]"], 16), dur=1, sample=2, amplify=0.6)
b3 >> play(Pvar(["v...v...", "v[..v.]..[v..v][..v.].[..v.]"], 16), dur=1, sample=4, amplify=0.6)

Snare:
b4 >> play(Pvar(["..o...o.", "..o...oo"], 16), dur=1, rate=0.75, sample=2, amplify=PRand([0.4,PWhite(0.6,0.4)]))
b5 >> play(Pvar(["..i...i.", "..i...ii"], 16), dur=1, sample=4, amplify=0.4)
b6 >> play(Pvar(["..h...h.", "..h...hh"], 16), dur=1, sample=5, amplify=0.4)

Closed HiHat:
b7 >> play("-", dur=0.5, rate=0.4, pshift=linvar([0,8], 8), sample=4, amplify=0.8)
b8 >> play("s", dur=0.5, rate=1, sample=1, amplify=PRand([0.4,PWhite(0.6,0.4)]))

BuildUp:
c1 >> play("V.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), rate=1.2, sample=6, amplify=Pvar([0.6,0], [30,2]))
c2 >> play("X.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), sample=2, amplify=Pvar([0.6,0], [30,2]))
c3 >> play("v.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), sample=4, amplify=Pvar([0.6,0], [30,2]))
c4 >> play("o.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), rate=0.75, sample=2, amplify=Pvar([0.4,0], [30,2]))
c5 >> play("i.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), sample=4, amplify=Pvar([0.4,0], [30,2]))
c6 >> play("h.", dur=Pvar([1,0.5,0.25,0.1], [16,8,4,4]), sample=5, amplify=Pvar([0.4,0], [30,2]))

Create Groups to control a bunch of Player() objects at the same time:
gB = Group(b1,b2,b3,b4,b5,b6,b7,b8)
gC = Group(c1,c2,c3,c4,c5,c6)

Use a TimeVar to swap between Build and Drop:
gB.amp=var([1,0], [64,32])
gC.amp=var([0,1], [64,32])


_Add stretch, pshift, rate or reverse to create different patterns!_
``` Drum N Bass


```python
Tempo:
Clock.bpm=170

BassKick:
b1 >> play("V....V..VV...V..", rate=0.8, sample=2, amplify=0.6)
b2 >> play("v......[vvvv]", sample=4, amplify=0.6)

Snare:
b4 >> play(Pvar(["..o.","..o[.o.]"], [12,2]), sample=2, amplify=0.4)
b5 >> play("..i.", amplify=PRand([0.4,PWhite(0.6,0.4)]))

Shaker:
b7 >> play("s", rate=0.8, sample=2, amplify=PRand([0.4,PWhite(0.6,0.4)]))

Closed HiHat:
b8 >> play("-", rate=1.4, pshift=linvar([0,16], 8), sample=2, shape=0.3, amplify=1.2)
```

---
### Trap


```python
Tempo:
Clock.bpm=140

BassKick:
b1 >> play("[VV]..V[.V]V.[.V].V..V.V.V.", dur=1, rate=1.2, sample=-1, amplify=0.6)
b2 >> play("[XX]..X[.X]X.[.X].X..X.X.X.", dur=1, sample=2, amplify=0.6)

Snare:
b4 >> play("..o.", dur=1, rate=0.75, sample=2, amplify=PRand([0.4,PWhite(0.6,0.4)]))
b5 >> play(".H..", dur=1, rate=1.4, sample=1, pan=(-0.7,0.7), amplify=0.4)

Closed HiHat:
b7 >> play("[--]", dur=PRand([4,2,1,0.5,PDur(3,8)*2,PDur(3,7)*2], 0.25), rate=0.75, sample=3, amplify=0.4)
b8 >> play("[--]", dur=PRand([4,2,1,0.5,0.25]), rate=0.5, sample=-1, amplify=0.4)


Here are a few instruments:
s1 >> dub(PRand([0,2,3], 0.25), oct=(3,4), dur=4, chop=PRand([6,8]), shape=0.6, amplify=0.3)
s2 >> space(s1.degree, oct=(4,5), dur=4, chop=PRand([3,4]), room=0.4, mix=0.5, amplify=1.2).offbeat()
s3 >> pulse([2,3,5,7,9], oct=var([3,4,5]), dur=PRand([0.5,0.25], 6), shape=0.6, formant=var([3,0,2], 0.5), room=0.75, mix=0.5, pan=[-0.6, 0.6], amplify=0.4)
```


---
### HipHop


```python
Tempo:
Clock.bpm=80

BassKick:
b1 >> play("X..X....X.XX....", rate=var([0.8,1], 8), formant=2, sample=5, amplify=1.3, amp=1)

Snare:
b4 >> play("..i.", rate=0.75, sample=2, amplify=PRand([0.4, PWhite(0.6,0.4)]))
b5 >> play(".H.......H......", dur=0.5, rate=1.4, sample=1, delay=1/16, pan=(-0.7,0.7), amplify=0.4)

Closed HiHat:
b7 >> play("--.-", rate=0.75, sample=3, amplify=0.4)

Open Hat / Shaker:
b8 >> play(".............#..", rate=1.4, sample=2, amplify=1, amp=1)
b9 >> play("[ss]", rate=0.75, sample=2, hpf=linvar([800,6000], 1), amplify=0.4, amp=1).every(PRand([4,8,12,16]),"stutter",PRand([2,3,4]))
```


---
### Footwork


```python
Tempo:
Clock.bpm=154

BassKick:
b1 >> play("X..X..X.X..X..X.", dur=1, rate=6/5, sample=-1, amplify=0.6)
b2 >> play("V..V..V.V..V..V.", dur=1, sample=1, amplify=0.6)
b3 >> play("{([XX])([X.])([X...])}", dur=1, rate=PRand([0.75,0.4,1,1.4], 0.25), shape=linvar([1.2, 0.4], 16), amplify=0.4, amp=1).every(PRand([2,4,8,16]),"stutter",PRand([2,3,5]))

Snare:
b4 >> play("............H...", dur=1, rate=0.75, sample=2, amplify=PRand([0.4,PWhite(0.6,0.4)])).every(PRand([4,8,12]),"stutter", PRand([2,3]))
b5 >> play("......o.......o[oo.o]",dur=1, rate=7/5, sample=1, pan=(-5/7,5/7), amplify=0.4)
b6 >> play("i",dur=PRand([4,2,1,0.5, PDur(3,8)*2,PDur(3,7)*2], 0.25), rate=0.5, sample=3, amplify=0.4)

HiHat:
b7 >> play("..-.....", rate=0.75, sample=3 , amplify=0.4)
b8 >> play("-", dur=1, sample=3, amplify=0.8)
b9 >> play("{([--])(M)}", dur=1, rate=PRand([0.75,0.4,1,1.4], 0.25), sample=2, shape=linvar([1/7,0.4], 16), amplify=1/5, amp=1).every(PRand([2,4,8,16]),"stutter", PRand([3,5]))
```

---
### Funk


```python
Tempo:
Clock.bpm=118

BassKick:
b1 >> play("VV...[VV]..", dur=0.5, rate=1.2, sample=-1, amplify=0.4)
b2 >> play("VV...[VV]..", dur=0.5, sample=linvar([0,5], 4), amplify=0.4)

Snare:
b4 >> play("..[o.][.o][.o].[o.][.o]", dur=0.5, rate=2, sample=5, amplify=PRand([0.4,PWhite(0.3,0.4)]))
b5 >> play("....i..i.i..i..i", dur=0.25, rate=1, sample=3, pan=(-0.7, 0.7), amplify=0.4)
b6 >> play("..o.", dur=1, rate=2, sample=5, pan=(-0.7, 0.7), amplify=0.4)

HiHat:
b7 >> play("[-.-.][-.--][-...][-.-.][--..][-.-.][-.-.][-...]", dur=1, rate=1, sample=2, amplify=1)
b8 >> play("[-.]", dur=0.5, rate=1, sample=-1, amplify=0.8, amp=1)
b9 >> play("[ll].-.", sample=var([3,4,0], 16), formant=linvar(5,8), amplify=0.8, amp=1).every(PRand([2,4,8,16]),"stutter", PRand([2,3,5]))
b0 >> play("[ss]", rate=1, sample=2, shape=0.6, amplify=0.8, amp=1).every(PRand([2,4,8,16]),"stutter", PRand([2,3,5]))

gBeats = Group(b1,b2,b3,b4,b5,b6,b7,b8,b9,b0)
gBeats.amp=1
```