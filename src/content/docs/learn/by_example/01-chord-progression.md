---
title: Chord Progressions
---


### Example "Billy Jean" 


This example will show how to code "Billy Jean"s' Intro by Michael Jackson.

* Scale: minor
    
* Root: E
    
* Chords:
    

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
### Example “Get Lucky"



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

