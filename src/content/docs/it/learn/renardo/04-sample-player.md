---
title: Sample Player
---

### Sample Player Object

Renardo can also be used to sequence and manipulate audio samples. To do this all you need to do is use the special **play()** Player() object. Unlike synthesizer Player() objects, the first argument to **play** should be a string of characters, not numbers. As a result, more information can be encoded in the character string than the character itself means. Each character relates to a range of audio files such as kicks, hi-hats, snares, and other sounds. Each audio file will be stored in a buffer in SuperCollider.

To view which character relates to which audio file, execute:
```python
print(Samples)
```

There is a sound pack folder in Renardo called _**/samples/0_foxdot_default**_. This folder contains all characters named folders with samples. In order to use or create your own sample pack, you will need to name clone of the folder structure with top folder name like **1_my_samples**, with path /samples/1_my_samples/. You can call samples from your own sample pack with the attribute **spack**:
```python
b1 >> play("x", spack=1)
```

The simplest drum pattern for disco is:
```python
b1 >> play("x-o-")
```

A character refers to a sound and whitespace is used for silence, so
you can spread sounds out in time:
```python
bd >> play("x  x  ")
```

You also can use dots instead of whitespace:
```python
bd >> play("x..x..")
```

Different types of brackets add more information to one sequence. Put two or more characters in round brackets, the sound alternates with the new loop one after the other, thus lacing sound samples:

The following is the same as "-------=":
```
hh >> play("---(-=)")
```

Simple pattern example:
```python
d1 >> play("(x-)(-x)o-")
```

Nested brackets for more variety:
```python
d1 >> play("(x-)(-(xo))o-")
```

Putting characters in square brackets will play them all in the space of one beat,
and will be played like one character, not simultaneous, but in quick succession

```python
d1 >> play("x-o[-o]")
d1 >> play("x-o[---]")
d1 >> play("x-o[-----]")
d1 >> play("x-o[--------------]")
```

Play a triplet in the fourth beat:
```python
d1 >> play("x-o[---]", dur=1)
```

and can be put in round brackets as if they were one character themselves.
```python
d1 >> play("x[--]o(=[-o])")
```

Use square brackets in round brackets:
```python
d1 >> play("(x-)(-[-x])o-")
```

Use round brackets in squared brackets:
```python
b1 >> play("x-o[-(xo)]")
```

You can combine the brackets however you like: the following patterns are identical
```python
d1 >> play("x-o(-[-o])")
d1 >> play("x-o[-(o )]")
```

Curly braces select a sample sound at random if you want more variety:
```python
d1 >> play("x-o{-=[--][-o]}")
```

Angle brackets combine patterns to be play simultaneously:
```python
d1 >> play("<X   ><-   ><#   ><V   >")
d1 >> play("<X   >< -  ><  # ><   V>")
```

Each character is mapped to a folder of sound files and you can select different
samples by using the "sample" keyword argument:
```
d1 >> play("(x[--])xu[--]")
d1 >> play("(x[--])xu[--]", sample=1)
d1 >> play("(x[--])xu[--]", sample=2)
```

Change the sample for each beat:
```python
d1 >> play("(x[--])xu[--]", sample=[1,2,3])
```

You can layer two patterns together - note the "P", look at tutorial 4 for more information:
```python
d1 >> play(P["x-o-"] & P[" **"])
```

And change effects applied to all the layered patterns at the same time:
```python
d1 >> play(P["x-o-"] & P[" **"], room=0.5)
```

Example from the player tutorial, but with samples instead
Conditionals...
```python
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x"))
```

Or change it to sample bank 2 by multiplying:
```python
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x")*2)
```

Chain multiple conditionals:
```python
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x")*2 + (d1.degree=="-")*5)
```

Which is the same as:
```python
d1 >> play("x[--]xu[--]x", sample=d1.degree.map({"x":2, "-":5}))
```

---
### Attribute *sample*


Each character refers to a folder with same character. Folders with a letter as character contains 2 sub-folders namely **upper** and **lower**.

Those folders and sub-folders contain audio files, that can be called by _play_\-Player() objects.

The audio files are arranged in alphabetical order. Use the sample attribute to select an audio file in this folder. Default is the first sample file in each folder, thus _sample=0_.
```python
b1 >> play("x-o-", sample=1)
```

Like any other argument, _sample_ can be a list (one at a time) or even a tuple (simultaneously) of values.
```python
p1 >> play("x-o-", sample=[0,1,2])
```

```python
p1 >> play("x-o-", sample=(0,3))
```

The example for a single character can be given within the character string itself by surrounding the character with a "|" + the position number:

Play _sample=2_ for the letter 'o':
```python
p1 >> play("x-|o2|-")
```

This will overwrite the specified value under _sample_:
```python
p1 >> play("x-|o2|-", sample=3)
```

The syntax can contain any of the parentheses previously used for the character and numbers.

Change the sample number:
```python
p1 >> play("x-|o(12)|-")
```

Change the sign:
```python
p1 >> play("x-|(o*)2)|-")
```

Play several different samples in one step:
```python
p1 >> play("x-|o[23]|-")
```

Play a random sample:
```python
b1 >> play("x-|o{1[23]}|-")
```

If you decide to use several Player() objects to create e.g. a drum set, then it is recommended to use _sample_ conventional, thus giving you a different way to change samples in time by using TimeVar() functions.
```python
Clock.bpm=142
brks = [1]*28 + [0]*4
# SAMPLES
k1 >> play("A", sample=var([0,2], 64), dur=2, delay=[0,0.5], amplify=0.75*P[brks], amp=1)
k2 >> play("A", sample=1, dur=4, delay=[0,(0,0.5),0,(0,1.5)], pshift=var([0,1], 32), amplify=0.6*P[brks], amp=1)
k3 >> play("V", sample=[0,1,0,3], dur=2, delay=k1.delay, amplify=0.5*P[brks], amp=1)
s1 >> play("O", sample=var([0,2], [32,16]), dur=2, delay=1, room=0.66, mix=0.5, amplify=0.7*P[brks], amp=1)
s2 >> play("i", sample=var([0,1], 64), dur=2, delay=[1,1,1,(1,[1.5,1+0.75])], room=0.66, mix=0.33, amplify=0.7, amp=1)
h1 >> play(":", sample=var([0,1], 32), dur=1, delay=0.5, amplify=5/6, amp=1)
h2 >> play("-", sample=PRand([0,1,2],32), dur=0.5, rate=linvar([0.75,1], 8), amplify=0.6*P[brks]).every(16,"stutter",3)
h3 >> play("s", sample=1, dur=0.5, room=0.6, mix=0.33, amplify=[0.9,1.2], amp=1)
p1 >> play("y", sample=var([2,1,3], [28,4]), dur=1/2, delay=[0,0.25,0.5,0.75,0,0.5], rate=2, shape=0.6, room=0.5, mix=0.5, amplify=var([1,0.6], [1,3])*P[0.8,1.3], amp=1)
drumset = Group(k1,k2,k3,s1,s2,h1,h2,h3,p1)
drumset.amp=1
```

---
### Layering sequences


You can also use **< >** signs to layer multiple sequences simultaneously. Let’s start with two separate sequences and then put them together in a single line of code.

_**Note: The \***_**dot** is equivalent to **space**. Like **space**, it is a placeholder that helps to better recognize temporal positioning
```python
b1 >> play("x-o-")

b2 >> play("..+.+.[.+]")
```

We can place any sequence between "<>" characters in a single sequence and have them play at the same time:
```python
b1 >> play("<x-o-><..+.+.[.+]>")
```

This is equivalent to:
```python
b1 >> play(P["x-o-"].zip(P["..+.+.[.+]"]))
```

_Zip can be understood as a zipper._

Each _layer_ relates to the index in a group of values given to a Player()-object, each _layer_ is affected only by one of those given values. This is best demonstrated by an example:

Pan each sequence hard on the left and right channels using square brackets in the _pan_ attribute:
```python
b1 >> play("<x-o-><..+.+.[.+]>", pan=[-1,1])
```

Expand the stereo effect by using round brackets:
```python
b1 >> play("<x-o-><..+.+.[.+]>", pan=(-1,1))
```

Change the audio file used in the first layer:
```python
b1 >> play("<x-o-><..+.+.[.+]>", sample=(2,0))
```

Be careful when combining multiple layers with functions like **offadd** as this functions create new layers.

The following code will only affect the second layer, so the first layer is unaffected:
```python
b1 >> play("<x-o-><..+.+.[.+]>", sample=(2,0)).every(4, "sample.offadd", 2)
```

---
### Try this!


_Go through the characters and listen to the different examples available. Use the attribute sample=[:8]. The audio files or samples will be repeated if the character contains fewer than 9 samples (0-8 are 9 numbers) in the dedicated folder!_


| **Name**      | **Letter/Character** |
| ------------- | ---------------------|
| Kick          | A v V x X W          |
| Snare/Rim     | D i I o O t u        |
| Hihat         | : = - a n N          |
| Clap/Snap     | \ * h H              |
| Cymbal/Crash  | / # e E              |
| Tom/Tom-like  | m M p P w            |
| Percussion    | & + d f l r R y      |
| SoundFX       | \\ b F k L Q Y z Z   |
| Voice         | 1 2 3 4 ! < ? c C    |
| Bell          | T                    |
| Various       | $ ; B g G j J K q U  |
| Noise         | @ %                  |
| Shaker        | s S                  |
| Ride          | ~                    |

_Create a 16 beat rhythm with your preferred samples. Use Clock.bpm=120 to change the beat per minutes, or speed of rhythm in time!_

