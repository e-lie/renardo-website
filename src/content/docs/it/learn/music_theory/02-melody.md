---
title: Melody
---


### Chords to Melody


One way is to create a chord progression, and than to find the melody in the chords.

|  **E3**  |  **D3** | **F3** |  **E3**  |
| -------- | ------- | ------ | -------- |
|    C3    |    B2   |   D3   |    C3    |
|    A2    |    G2   |   A2   |    G2    |



As mentioned before, the octave in Renardo is 2 steps above the usual, middle C is 5 not 3.

Lets do the chords with 93 bpm with A as Root note and minor scale:

```python
Clock.bpm = 93
Root.default=”A”
Scale.default=Scale.minor

# Chords:
chords = var([(0,2,4),(-1,1,3),(0,3,5),(-2,2,4)])
s1 >> swell(chords, oct=5, dur=4, sus=5)

# Hit the drums can help find a good melody:
b1 >> play("<X....X..X..[X.].X..><..o.><---->",sample=0)
```

The easiest way to start a melody is to take the highest notes of the chords.
However, you want to add some non-chord notes to your chord notes:

|  **E4**  |  **F4** | **D4** |  **F4**  |  **D4**  |  **G4**  | **E4** | **D4** |
| -------- | ------- | ------ | -------- | -------- | -------- | ------ | ------ |


```python
seq=[4,5,3,5,3,6,4,3]
s2 >> pulse(seq, oct=6, dur=[3,1,3,3,1,1,2,2])
```

---
### Melody to Chords


In this example we start with a melody in order to get suitable chords from it, here the melody.

|  **A3**  |  **B3** | **C4** |  **B3**  |  **E4**  |  **F4**  | **C4** | **G4** | **E4** | **D4** |
| -------- | ------- | ------ | -------- | -------- | -------- | ------ | ------ | ------ | ------ |


Let's set the tempo, the root and the scale:
```python
Clock.bpm = 93

Root.default=”A”

Scale.default=Scale.minor
```

The originating Melody:

If you can't remember the numbers on the scale list, use print(Scale.minor).

```python
seq=[0,1,2,1,4,5,2,6,4,3]
```

Synth:
```python
s1 >> saw(seq, dur=[2,1,1,4,3,1,1,1,1,1], formant=4, amplify=0.4)
```


The available chords (with 7th) for the notes played in the melody are as follows:

|  **G4**  |  **A4** | **B4** |  **C5**  |  **D5** | **E5** |  **F5**  |
| -------- | ------- | ------ | -------- | ------- | ------ | -------- |
|    E4    |    F4   |   G4   |    A4    |    B4   |   C5   |    D5    |
|    C4    |    D4   |   E4   |    F4    |    G4   |   A4   |    B4    |
|    A3    |    B3   |   C4   |    D4    |    E4   |   F4   |    G4    |


Here is a good example of a trip-hop-like track:

|  **E4**  |  **D4** | **E4** |  **E4**  |
| -------- | ------- | ------ | -------- |
|    C4    |    B3   |   C4   |    G4    |
|    A3    |    G3   |   A3   |    C4    |


Let's add the chords to the melody:
```python
chords = var([(0,2,4),(-1,1,3),(0,2,4),(-1,6,4)])
s2 >> keys(chords, oct=4, dur=4, shape=0.4)
```

And a drum hit:
```python
b1 >> play("<X....X..X..[X.].X..><..o.><---->", sample=0)
```

**Add a counter melody (arpeggio)**

Let's keep it simple and use the chord notes to play with the chords. With the counter melody we want to add a rhythm to the track.
As the 4th of the sequence in a 4-beat measure, we add the 2nd as shown here:
```python
chords = var([(0,2,4),(-1,1,3),(0,2,4),(-1,4,6)])
```

becomes
```python
seq2 = [0,2,4,2,-1,1,3,1,0,2,4,2,-1,4,6,4]
```

Now let's add another instrument that plays the counter melody:
```python
s3 >> karp(seq2, dur=1)
```

---
### Chords to Bassline

In the example below, the chord progression is based on A minor, while raising a root to a higher octave and lowering a root.

|  **G3**  |  **G3** |        |          |
| -------- | ------- | ------ | -------- |
|    E3    |    F3   |   G3   |    G3    |
|    C3    |    D3   |   E3   |    E3    |
|    A2    |    B2   |   C3   |    B2    |



Let's set the tempo, root and scale:
```python
Clock.bpm = 128
Root.default=”A”
Scale.default=Scale.minor
```

Here chords and synth:
```python
chords = var([(0,2,4,6),(1,1,3,6),(2,4,6),(1,4,6)])
s1 >> prophet(chords, oct=4, dur=4, sus=4)
```

The safe case is to use chord root notes as bass notes and lower those notes in the octave:

|  **A1**  |  **G1** | **C2** |  **E2**  |
| -------- | ------- | ------ | -------- |

```python
bassline1 = [0,-1,2,4]
```


Another way to create a bass line is to find notes within the chords (although the 7th can be tricky).

|  **A1**  |  **B1** | **C2** |  **B1**  |
| -------- | ------- | ------ | -------- |


You can also change the duration of the bass line to get a rhythmic component:

Use _dur=1_, _dur=[0.5,1]_, or _dur=[1,2,1]_ instead of _dur=4_.

Another option is to move the root note of a chord one step up the previous chord row.

With dur=1:
```python
bassline2=[0,0,0,-1,-1,-1,-1,2,2,2,2,-3,-3,-3,-3,0]
```

Or you use octave **oct** jumps:
```python
bassline3=[0,0,0,0,-1,-1,-1,-1,2,2,2,2,-3,-3,-3,-3]
```

with _dur=1_ and _oct=[3,3,4,3]_

Finally, a melody as a bass line:

|  **A1**  |  **G1** | **A1** |  **B1**  |  **A1**  |  **G1** | **G1** |  **A1**  |  **C2**  |  **C2** | **A1** |  **G1**  |  **E1**  |  **E1** | **F1** |  **G1**  |
| -------- | ------- | ------ | -------- | -------- | ------- | ------ | -------- | -------- | ------- | ------ | -------- | -------- | ------- | ------ | -------- |

```python
bassline4 = [0,-1,0,1,-1,-1,0,1,3,3,0,-1,-3,-3,-2,-1]
```

---
### Bassline to Chords

We'll start with tempo, root note, scale, and a simple bass line:
```python
Clock.bpm = 128
Root.default=”A”
Scale.default=Scale.minor
bassline=[0,0,0,0,0,0,0,1]
```

Now let's build chords along the minor chord, like: Am, Bm/A, G/A, Am.
```python
chords = var([(0,2,4),(1,3,5),(0,2,4),(-1,1,3),(0,2,4)])
```


Bm/A and G/A mean "above A" because the bass line still keeps A as the root of the chord.

The corresponding synth examples for bass and chords are:
```python
s1 >> jbass(bassline, oct=3, dur=0.5, shape=0.4) # Bass
s2 >> dirt(chords, oct=5, dur=[4,3,1,4,4], amplify=0.4) # Chords
```
Drums:
```python
b1 >> play("<V....V..><..o.><....k..d>←--[--]>", sample=var([4, 2], 16), amplify=0.5)
b2 >> play(var(["[ss]",".[ss]"]), amplify=0.5)
```

Some additional notes on a bass line:

**Only use one note at the time, as low frequency easy go “muddy”!**
