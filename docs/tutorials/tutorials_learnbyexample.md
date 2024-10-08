

# Learn-by-example
    

## Patterns


### Pattern functions 


**PStep(n,value,default=0)** >> Returns a pattern where every **n**-term is **value**, otherwise **default**.
```python
s1 >> varsaw(PStep(3,[0,2,1,4,2,5],[-2,[-2,-1]]), oct=(4,6), dur=0.25, sus=0.125, lpf=linvar([200,4000], 8))
```

**PSum(n,total,\**kwargs)** >> Returns a pattern of length **n**, the sum of which is **total**. For example: PSum(3,8) -> P[3,3,2] PSum(5,4) -> P[1,0.75,0.75,0.75,0.75].
```python
s1 >> donk(P[:2], oct=[[5,6], 6], dur=PSum(12,8), sus=0.5)
```

**PRange(start,stop=None,step=None)** >> Returns a pattern equivalent to Pattern(range(start,stop,step)).
```python
s1 >> piano([0,2,0,1], oct=4, dur=2, sus=1, amplify=0.7)
s2 >> piano(Pvar([[0,2,4,2],[0,4,2,1],PRange(0,8,var([2,1],4))], [4,4,8]), dur=Pvar([0.5,PDur([3,5],8)], [1,3]))
```

**PTri(start,stop=None,step=None)** >> Returns a pattern equivalent to Pattern(range(start,stop,step)) with the inverted shape appended.
```python
s1 >> piano([0,2,0,1], oct=4, dur=2, sus=1, amplify=0.7)
s2 >> piano(Pvar([[0,2,4,2],[0,4,2,1],PTri(0,8,var([2,1], 4))], [4,4,8]), dur=Pvar([0.5,PDur([3,5], 8)],[1,3]))
```

**PEuclid(n,k)** >> Returns the Euclidean rhythm that distributes **n** pulses as evenly as possible over **k** steps. e.g. PEuclid(3,8) returns P[1,0,0,1,0,0,1,0].
```python
s1 >> blip(Pvar([P[:2],P[:3]], 16), oct=4, dur=0.5, amplify=PEuclid([3,5,5,3],[7,8]))
```

**PSine(n=16)** >> Returns values of one cycle of a sine wave divided into **n** parts.
```python
s1 >> fuzz(PSine(8), dur=0.5, sus=0.25, formant=1, room=0.5, mix=0.33, pan=PSine(32))
```

**PDur(n,k,dur=0.25)** >> Returns the actual duration based on Euclidean rhythms (see PEuclid), where **dur** is the length of each step. e.g. PDur(3,8) returns P[0.75,0.75,0.5].
```python
s1 >> bass(PWalk(3), oct=5, dur=Pvar([PDur(5,7),PDur(5,8)], 16))
s2 >> pulse(Pvar([P[:3],P[:2]], 8), oct=5, dur=PDur(2,3), sus=0.125, lpf=expvar([400,4000], 16), lpr=0.75, amp=P10(16))
```

**PBern(size=16,ratio=0.5)** >> Returns a pattern of ones and zeros based on the **ratio** value (between 0 and 1). This is known as the Bernoulli sequence.
```python
b1 >> play("S", sample=[1,3], amp=PBern(16,0.5))
b2 >> play("S", dur=PBern(24,0.5), delay=[0,0.5], sample=5, amp=1)
```

**PBeat(string,start=0,dur=0.5)** >> Returns a pattern of durations based on an input string, where non-spaces denote a pulse.
```python
s1 >> donk(dur=PBeat(". . . ..", start=0, dur=[1]+[0.5]+[1]+[0.5]*2))
s2 >> bell(dur=PBeat(". . . ..", start=0, dur=0.5), amplify=0.6)
```

**PSq(a=1,b=2,c=3)**
```python
s1 >> piano(PSq(1,2,3)-var([0,P[:2]*2], [4,8]))
print(PSq(1,2,3))
```

---
### Pattern generators


**PRand(lo,hi,seed=None)/PRand([values])** >> Returns a series of random integers between lo and hi, inclusive. If hi is omitted, the range is 0 to lo. A list of values can be provided in place of the range and PRand returns a series of values chosen at random from the list.
```python
var.ch1 = var([PRand([0,2,4,8], seed=PxRand(200))], 4)
var.ch2 = var([PRand([0,1,3,5], seed=PxRand(200))], [8,4,4])
s1 >> piano([var.ch1,var.ch2], dur=0.5, amplify=0.6)
```

**PxRand(lo,hi)/PxRand([values])** >> Identical to PRand, but no elements are repeated.
```python
s1 >> pluck(PWalk(4), dur=PxRand([2,0.66,0.66,0.33,1,1,0.5,0.5,0.75]), oct=6, formant=3, tremolo=3, room=0.6, mix=0.3, amplify=0.65)
```

**PwRand([values], [weights])** >> Uses a list of weights to indicate how often items with the same index are selected from the list of values.
A weight of 2 means it is twice as likely to be picked as an item weighing 1.
```python
s1 >> sitar(PWalk(4), dur=PwRand([2,0.66,0.33,1,0.5,0.75,0.25], [2,4,5,3,7,6,1]), oct=PwRand([6,6,7,5], [4,3,2,1]), room=0.6, mix=0.5, amplify=0.65)
```

**P10(n)**>> Returns a pattern of length n of a randomly generated series of ones and zeros.
```python
s1 >> pulse(Pvar([[0,1],[0,2]], 16), oct=4, dur=2, sus=1, amplify=0.75)
s2 >> pulse(P[:4], dur=0.5, sus=0.25, amplify=0.75, amp=P10(16))
```

**PAlt(pat1, pat2, *patN)** >> Returns a pattern generated by alternating the values in the specified sequences.

0, -2, 0, 8, 2, 1, 0, 9, 4, 3, 7, 0, -2, 0, 5 ...
```python
mtf1 = [0,2,4]
mtf2 = [-2,1,3]
mtf3 = [0,0,2]
s1 >> piano(PAlt(mtf1,mtf2,mtf3,[8,9,7,5]), dur=0.5)
```

**PJoin(patterns)** >> Assembles a list of patterns.
```python
mtf1 = [0,2,6,4]
mtf2 = [1,3,7,5]
s1 >> arpy(Pvar([mtf1,mtf2,mtf1,PJoin([mtf1,mtf2])], 8), oct=5, dur=0.5, formant=3, room=0.5, mix=0.3)
```

**PPairs(seq,func=<lambda>)** >> Links a sequence to a second sequence obtained by executing a function on the original. By default, this is lambda n: 8-n.
```python
s1 >> sitar(PPairs([0,4,2,0,6,4], lambda n: var([n*3,n-1], [12,4])), oct=4, dur=0.5, amplify=0.4)
```

**PQuicken(dur=0.5,stepsize=3,steps=6)** >> Returns a group of delay amounts that gradually decrease.
```python
b1 >> play("m", dur=1, delay=[PQuicken(dur=2,stepsize=2,steps=3),PQuicken(dur=2,stepsize=2,steps=6)], sus=0.125, amplify=0.4)
b2 >> play("t", dur=4, delay=PQuicken(dur=1,stepsize=4,steps=3), sample=2, amplify=0.6)
b3 >> play("S", dur=4, delay=2+PQuicken(dur=0.5,stepsize=2,steps=3), amplify=0.65)
```

**PRhythm(durations)** >> Converts all tuples / PGroups into delays, which are calculated with the PDur algorithm.
```python
b1 >> play("V", dur=PRhythm([0,0.5,0,0.25,1,0.75]), delay=0, sample=12, amplify=0.65)
```

**PShuf(seq)** >> Returns a mixed version of seq. This example uses a function to automatically shuffle the list.
```python
def updateShuffle(n=0):
    beats=32
    if n % beats == 0:
         var.mtf = var([PShuf([0,1,3,4,-1])], 1)
    Clock.future(1, updateShuffle, args=(n+1,))
updateShuffle()
s1 >> ambi(var.mtf, oct=(5,6), dur=1, sus=0.25, echo=[0,0.5], echotime=2, room=0.66, mix=0.3, amplify=0.5)
```

**PStretch(seq,size)** >> Returns **seq** as a pattern and is looped until its length is **size**, e.g. PStretch ([0,1,2], 5) returns P [0,1,2,0,1].
```python
var.mtf1 = var([0,1,2,4,[3,5],0,2,4], 0.5)
s1 >> karp(PStretch(var.mtf1,12), oct=6, dur=[0.5,0.66], shape=0.125, formant=0, rate=0.125, amplify=0.66)
```

**PStrum(n=4)**
```python
var.mtf1 = var([0,1,2,0,[4,2],3,-2,[-1,4]], 0.5)
s1 >> marimba(var.mtf1, oct=var([5,6], [0.5,1.5]), dur=Pvar([PStrum(5),PStrum(2)], 16), shape=0.25, room=0.5, mix=0.5, amplify=1)
```

**PStutter(seq,n=2)** >> Creates a pattern so that each element in the array is repeated n times (n can be a pattern).
```python
var.mtf1 = var([0,6,4,2], 2)
s1 >> quin(PStutter([var.mtf1], 2), oct=4, dur=PStutter([1,0.5], 4), sus=0.25, amplify=0.65)
```

**PZip(pat1, pat2, patN)** >> Generates a pattern that 'zips' multiple patterns. PZip([0,1,2], [3,4]) creates the pattern P[(0,3),(1,4),(2,3),(0,4),(1,3),(2,4)].
```python
s1 >> faim(PZip([0,2], [2,-2,4,6]), oct=6, dur=2, atk=0.15, chop=2, lpf=1800, vib=2, amplify=0.5)
```

**PZip2(pat1,pat2,rule=<lambda>)** >> Like PZip, but only uses two patterns. Connects values if they meet the rule.
```python
s1 >> faim(PZip2([0,2], [2,-2,4,6], rule=<lambda>), oct=6, dur=2, atk=0.15, chop=2, lpf=1800, vib=2, amplify=0.5)
```

**Pvar** >> TimeVar, which saves lists instead of individual values (var,sinvar,linvar,expvar).
```python
s1 >> gong(P[Pvar([[0,2],[2,4],[4,6],[2,4]], 2)], dur=0.5, lpf=expvar([800,8000], [4,0]), pan=sinvar([-0.65,0.65], 8), amplify=0.75)
```

**PWhite(lo,hi)** >> Returns random floating point numbers between lo and hi.
```python
s1 >> arpy((0, var(PRand([Scale.default]), 8)), oct=var([5,6], [24,8]), dur=PDur(5,8), room=0.5, mix=sinvar(0.3,0.75), pan=PWhite(-1,1), amplify=0.65)
```

**PChain(mapping_dictionary)** >> Based on a simple Markov chain with equal probabilities. Takes a dictionary of elements, states, and possible future states. Every future state has an equal chance of being selected. If a possible future state is not valid, a KeyError is raised.
```python
s1 >> rave(PChain([0,8,6,3,-2,0,-3]), dur=0.25, sus=0.125, amplify=0.5)
```

**PWalk(max=7,step=1,start=0)** >> Returns a series of integers with each element an increment apart and with a value in the range of +/- the maximum. The first element can be selected with start.
```python
s1 >> dirt(PWalk(6,2), dur=[0.5,PSum(4,3)], oct=6, shape=0.3, lpf=1800, pan=(-0.65,0.65), amplify=0.25)
```

**PFibMod()** >> Returns the Fibonacci sequence.
```python
s1 >> feel(PFibMod()[:7]+var([0,-3,0], 8), dur=1, shape=0.25, chop=128, room=0.75, mix=0.5)

```

---

## Chord Progression


### "Billy Jean" (Michael Jackson)

This example will show how to code "Billy Jean"s' Intro.

*   Scale: minor
    
*   Root: E
    
*   Chords:
    

The number after it refers to the octave. In Renardo, the middle C=5, so you always have to add 2 when composing from the sheet music.
```python
# Tempo:
Clock.bpm=117
# Root E:
Root.default=“E”
# Scale to minor:
Scale.default=Scale.minor
# Chords in a list:
chords=[(0,2,4),(0,1,3,5),(0,2,4,6),(0,1,3,5)]
# Player object:
s1 >> pluck(chords, oct=3, dur=[1.5,5/2], sus=2)
# Drums:
b1 >> play("<V....V..V...[VV]V..><..o.><---->")
```

---

### “Get Lucky” (Daft Punk)

This example will show how to create bassline and chords of the track "Get Lucky" by Daft Punk.

Bass:

|  **B1**  |  **D2** | **F#2** |  **E2**  |
| -------- | ------- | ------- | -------- |


Chords:

|  **Bm**  |  **D**  | **F#m** |  **Em**  |
| -------- | ------- | ------- | -------- |


In the fourth chord there is a note borrowed from the neighbor F#m (Circle of Fifths):

|  **F#2** |  **A2** | **C#3** |  **B2**  |
| -------- | ------- | ------- | -------- |
|    D2    |    F#2  |   A2    | G#2 (F#m chord key) |
|    B1    |    D2   |   F#2   |    E2    |


As an extra, you can try to create a little variety using TimeVars:

Drop: Thinner no beats Break: No voice Buildup: Mix BreakNDrop

With 4 notes/chords played every 16 beats, the song structure is as follows:

| **Intro** | **Break** | **Buildup** | **Drop** | **Break** | **Buildup** | **Drop**  | **Outro** |
| --------- | --------- | ----------- | -------- | --------- | ----------- | --------- | --------- |
|  16 Beats |  32 Beats |  32 Beats   | 64 Beats |  32 Beats |  32 Beats   |  64 Beats | 48 Beats  |


---
## Synths attributes

### A Piano

In the example below, 3 players are used to create a full piano:

```python
p1 >> piano([0,1,0,-1], oct=4, dur=2, amplify=0.75)
p2 >> piano([(2,4),(0,2),(3,5),(1,3),(2,4),(0,2),(-1,1),(-3,-1)], dur=1, amplify=0.66)
p3 >> piano([0,4,2,4,1,2,1,3,2,3,5,7,-1,3,-3,1], oct=6, dur=0.5).every(32, "reverse")
```

This is the same as:

```python
bassline = [0,1,0,-1]
chords = [(2,4),(0,2),(3,5),(1,3),(2,4),(0,2),(-1,1),(-3,-1)]
melody = [0,4,2,4,1,2,1,3,2,3,5,7,-1,3,-3,1]
p1 >> piano(bassline, oct=4, dur=2, amplify=0.75)
p2 >> piano(chords, dur=1, amplify=0.66)
p3 >> piano(melody, oct=6, dur=0.5).every(32, "reverse")
```

**Another example**

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

---
## Sample attributes

Here the ones, that work with samples are following:

_dur, delay, sample, sus, pan, slide, slidedelay, glide, glidedelay, bend, benddelay, coarse, striate, rate, pshift, hpf, hpr, lpf, lpr, swell, shape, chop, tremolo, echo, echotime, spin, cut, verb, room, mix, formant, shape, drive, blur_

For example, if you use _pshift_, you can change the pitch of the sample:
```python
b1 >> play("#", dur=2, pshift=linvar([0,8], 16))
```


---
## Scales

_Use the following code to iterate through all of the available scales Renardo provides._

Displays all available scales:
```python
print(Scale.names())
```

Assign the selected scale as the default:
```python
Scale.default=Scale.chromatic
```

Variable to assign a step to each note on the scale:
```python
steps=len(Scale.default)
```

Play the notes through the scale:
```python
p1 >> pluck(P[:steps])
```


---  
## Beats Examples

*   Try to add variations, modulations, and/or swing (e.g. attribute **nugde**) to your beats to keep it alive.
*   Variations are changes in the beat structure from one bar to another.
*   Modulations are effects on the entire drum set, or on single parts of the drum set.
*   Adjust some off notes to get a different dynamic within the beat, give your beat some swing.
*   Be careful not to get to dynamic, thus losing the drive through the bass drum.

### Creating beats

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
### Dubstep

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

---
## Creating transitions

* Ramp up, then breath, then beat again (drum roll...silence…beat). Here one can excellently the group assignments z. B. with **gBeats.hpf = linvar([0,5000], [12,0], start = Clock.now())**, then all of a sudden **gBeats.amp = var([0,1], [4 ,inf], start=Clock.now())**
* To start a transition with the next bar just use **start=nextbar** instead.
* Subtract before you add, like no bass beat only snare and HiHat.
* Roll and ramp it up with 8th and 16th notes of e.g. snare, HiHat, Shaker.
* If you need a transition from one section to another, without big subtraction like taking drum beat out, be subtle.
    