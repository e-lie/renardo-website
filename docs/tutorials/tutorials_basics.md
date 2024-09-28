
## Preparation


**Following guidelines will help and protect your ears and your equipment as a beginner with Renardo.** 

---

**Activate "SafetyNet"**

SafetyNet is a SuperCollider quark that protects users from dangerous audio signals. Install the necessary module in SuperCollider with the following command line:

```
Quarks.install("SafetyNet")
```

Go with your cursor over the respective line and press _**Ctrl + Return (Cmd + Enter)**_ to trigger the command

Hint: There is a graphical window version for installing Quark elements. Use the command line below for this:

```
Quarks.gui
```

---

**Always start low**

If you start with a new player, it is advised starting with lower volume. The synths or samples can appear unpredictably loud depend on changes in attributes. Furthermore, it will sound nicer in its entire experience, if an instrument comes in with increasing volume instead to overwhelm other sounds in the mix.

```python
p1 >> pluck(amplify=0.1) ... p1 >> pluck(amplify=0.3)
```

---

**Experiment with care**

Be cautious while using attribute values when experimenting. For example a high octave can lead to nasty sounds, which not only can hurt your equipment of your machine, but can damage your ears while wearing headphones as well.

In traditional music theory, the octave of middle C is 3. However, it is 5 in Renardo.
```python
oct=5
```

Bad example:
```python
oct=60
```

To get all default values of basic attributes of a player use:
```python
print(Player("pluck").info())
```

---

## Introduction


### What is live coding?


*   Interactive programming as an audio and/or visual art performance

_**“Live Coding is a new direction in electronic music and video, and is getting somewhere interesting. Live Coders exposes and rewire the innards of software while it generates improvised music.”**_ \- toplap.org

*   Using code to describe rules for an art piece
*   Live notation/composition as performance
*   Code can be changed and re-executed in real-time, while the program is running (compose music while performing)
*   Takes computer language into a social environment, thus making coding to a social activity


---
### Why using code?


*   Classical music with notation on sheets is already a code to write musical pieces
*   Pitch, duration, loudness in sheet music is a code, that can be read by musicians
*   With Live coding, you can:
*   Flexible describe rules
*   Hack the code without an UI
*   Interact with your composition, while it is playing
*   Operate on the edge of liveness


---
### What is Renardo?


*   Renardo is a rebirth of FoxDot, after it has been depreciated. Big thanks to the developer Ryan Kirkbride from Leeds UK for his distribution to the live coding community!
*   Renardo is a Python package that comes with its own IDE and a plugin for [Pulsar](https://pulsar-edit.dev/) called Pulsardo
*   Renardo plays music by accessing any SynthDefs loaded onto a local SuperCollider server with some custom bits of syntax to boot
*   SuperCollider is a programming language originally released in 1996 by James McCartney for real-time audio synthesis and algorithmic compositions, that runs underneath the Renardo environment
*   Live coding with Python via Renardo offers accessible states through its reactive and dynamic objects
*   Renardo focuses on musical patterns, not the digital signal processing (DSP), which is programmed by [SuperCollider](https://en.wikipedia.org/wiki/SuperCollider) and controlled via [OSC](https://en.wikipedia.org/wiki/Open_Sound_Control)
*   Renardo has a clean syntax, that is easy to read, so the code can be understood by an audience and traditional musicians without knowing Renardo or Programming


---
### Start a little Python


As Renardo uses Python, we start with some Python code. To execute code in Renardo, make sure your text cursor is in the 'block' of code
(sections of text not separated by blank lines) and press `Ctrl+Return`.

Enter the following line in the text part of the editor and press Ctrl+Enter (Cmd+Return) while the cursor is positioned over at the line.
```python
2 + 2
```

The output of an executed code is displayed in the console in the lower window of the program. The console displays the line you entered. Use the Python function **print()** to display the result.
```python
print(2 + 2)
```

Now we're going to wrap the equation in a variable. We will use variables often. Write the 2 lines directly below each other so that it can be completely executed as a block:
```python
a = 2 + 2

print(a)
```

Variables can also be combined:
```python
a = 2
b = 3
c = a + b
print(c)
```

If you only want to execute one line within the block, move the cursor over the line and press **Alt + Enter**. Try some text in quotation marks:
```python
print("Hello lively coder!")
```

The general philosophy of Renardo is to create “Player()”-objects as simply as possible, while taking keyword arguments that mirrors SuperCollider's Pbind-SynthDef relationships and schedules their actions on a globally accessible clock.

If you want to know more about a function or class – just type help followed by the name of that Python object in brackets >> _help(object)_, e.g.:
```python
help(Player())
```

A SynthDef in Renardo is a Player() object. It is essentially your digital instrument you will use in your composition.


---

## Synth Player Object

Renardo has a number of different virtual instruments available that you can use as player objects.

To have a look at the existing selection of Renardo SynthDefs, just execute:
```python
print(SynthDefs)
```

Choose one and create a Renardo player object using the double arrow syntax like in the example below. In Renardo, all two-character variable names, such as `p1`, `zz` or `k7`, are reserved for **Player()** objects. The variable can consist of 2 letters or 1 letter + 1 number (e.g. pp or s1).

The **>>** in Python is usually reserved for a type of operation, like + or -, but it is not the case in Renardo.

In the following example the variable **p1** will create a Player()-Object using **pluck** as synth/instrument. Creating a Player Object with a synthesizer and no arguments will play a single note on middle C, by default, repeatedly until stopped.
```python
p1 >> pluck()
```

To stop an individual player object, simply execute **p1.stop()**. To stop all player objects, you can press **CTRL+.**, which is a shortcut for the command **Clock.clear()**.


---
### Attribute *degree*


If you want to play musical notes, you need to give your player object some arguments. In this unique case of SynthDef you do not need to use an attribute name to change the notes being played back.
```python
s1 >> pluck([0,2,4])
```

The "notes" we give to a player, meaning in this case the numbers *0*, *2*, and *4* are called `degree`. So the example above can be also look like this:
```python
s1 >> pluck(degree=[0,2,4])
```

Use can use a TimeVar-Function to control the trigger of each note player over time. If you do not use any timing, it will be played each beat as default
```python
s1 >> pluck(var([0,2,4]))
```

Just add your beat timing behind your note list, if you want to change timing
```python
s1 >> pluck(var([0,2,4], 4))
```

Following allocation takes place:

**Beat 0 –> Note 0 | Beat 4 –> Note 2 | Beat 8 –> Note 4 | Beat 12 –> Note 0 | Beat 16 –> Note 2 |…**


To check which note is player at the moment, you cann use following code using **degree** within Pythons **print()** function:
```python
print(s1.degree)
```

Create another list with numbers to change the time of each of the notes separately:
```python
s1 >> pluck(var([0,2,4], [2,2,4]))
```

You can group notes and variables by enclosing multiple values of arguments as tuple in round brackets. This is often used to play chords. In the following example we play 2 notes at the same time and expand the stereo effect in the pan attribute:
```python
p2 >> bass([(0,4),(0,2)], dur=4, pan=(-1,1))
```

It is possible to transfer a note played by one SynthDef to another. In this example s2 adds a triad to every bass note played by s1:
```python
s1 >> bass([0,2,3,4], dur=4)

s2 >> pluck(dur=0.5).follow(s1) + (0,2,4)
```

In addition to **.follow()**, you can also use the **.degree** argument (without brackets) to follow other players:
```python
s3 >> pluck(s1.degree + 2)
```

It is also possible to manipulate **degree** by adding an array of numbers to the Player object. 

This raises the 4th note played by 2 degrees:
```
p1 >> pads([0,1,2,3]) + [0,0,0,2]
```

And this raises every third note by 2:
```
p1 >> pads([0,1,2,3]) + [0,0,2]
```

These values can be laced and grouped together
```
p1 >> pads([0,1,2,3]) + [0,1,[0,(0,2)]]
```

This behaviour is particularly useful when using the follow method.
```
b1 >> bass([0,4,5,3], dur=2)
p1 >> pads().follow(b1) + [2,4,7]
```

**Next, you can schedule players to do things!**

This will tell p1 to reverse the notes every 4 beats:
```
p1 >> pads([0,2,4,6])
p1.every(4, "reverse")
```

You can "chain" methods together by appending them to the end of the original line:
```
p1 >> pads([0,2,4,6]).every(4, "reverse")
```

To stop calling "reverse", use 'never':
```
p1.never("reverse")
```

**Here are a few other methods you can use!**

Using **"stutter"** will play the same note **n** number of times with different attributes specified
```
p1.every(4, "stutter", 4, oct=4, pan=[-1,1])
```

Rotate will move all the values over by 1 in their order:
```
p1.every(4, "rotate")
```

To randomise the order of the notes, use **"shuffle"**:
```
p1.every(4, "shuffle")
```


---
### Use other Attributes

Values assigned via named attributes shape the way the instrument sounds and is played. It is possible to use other arguments the same way like the examples above using **degree**. For example **s1.oct**, **s1.dur** and so on.

List all universal attributes:
```python
print(Player.get_attributes())
```

List all attributes of a particular SynthDef:
```python
print(Player("wobblebass").get_extra_attributes())
```

List all default fx attributes of Player() object:
```python
print(Player.get_fxs())
```

You can see what effects are available by evaluating
```python
print(FxList)
```

Let's use the high pass filter for an example. You can see it's described like so:
"<Fx 'highPassFilter' -- args: hpr, hpf>"

Each effect has a "master" argument and then child arguments. Here the master argument is "hpf" (short for high pass filter) and the child argument is "hpr" (short for high pass resonance). The effect is only added when the master argument is non-zero:
```python
d1 >> dirt([0,4,2,1], dur=1/2, hpf=4000)
```

This sets the high pass filter to 4000 Hz so only frequences in the audio signal *above* that are actually heard. Let's change the resonance value. It's default value is 1, so let's make it smaller:
```python
d1 >> dirt([0,4,2,1], dur=1/2, hpf=4000, hpr=0.3)
```

Notice a difference? We can use patterns / vars in our effects to make them change over time:
```python
d1 >> dirt([0,4,2,1], dur=1/2, hpf=linvar([0,4000],8), hpr=P[1,1,0.3].stretch(8))
```

In the following example octave **oct** is increased (Default is 5), the note playing time **dur** (Default is 1) and the volume amp varies (Default is 1).

**Note: The standard octave in Renardo is 5, which in conventional music theory is 3!**

```python
s1 >> pluck([0,2,4], oct=6, dur=[1,0.5,0.5], amp=[1,0.75,0.75])
```

Arguments can be integers, floating points, fractions, lists,
tuples, or a mix

```python
p1 >> pluck([0,0,0], dur=2)
p1 >> pluck([0,0,0], dur=1.743)
p1 >> pluck([0,0,0], dur=[0.25,0.5,0.75])
p1 >> pluck([0,0,0], dur=[1/4,1/2,3/4])
p1 >> pluck([0,0,0], dur=[1/4,0.25,3])
```

You can also assign values to the attributes of player objects directly

```python
p1 >> pluck([0,2], oct=5)

p1.oct = 4
```

Here some more useful attributes you can use in handling your players

Play only this player, muting others
```python
p1.solo() # default value is 1 (solo on)
```

And turn the solo off
```python
p1.solo(0)
```

Stop (not just mute) the other players
```python
p1.only()
```


### Referencing Attributes

You can set variables outside a player
```python
pitches = P[0,1,2,3,4]
harmony = pitches + 2

print(pitches)
print(harmony)

p1 >> pluck(pitches)
p2 >> star(harmony)
```

If you set the duration of the second, it might not have the desired effect
```python
p1 >> pluck(pitches)
p2 >> star(harmony, dur=1/2)
```

It is possible for one player object to play exactly what another player is.
To have one player follow another, just use the follow method:
```python
p1 >> pluck(pitches)
p2 >> star(dur=1/2).follow(p1) + 2
```

You can explicitly reference attributes such as pitch or duration too:
```python
p2 >> star(p1.pitch) + 2  # this is the same as .follow(p1)
```

Works for other attributes too
```python
p1 >> pluck(pitches)
p2 >> star(dur=p1.dur).follow(p1) + 2
```

You can reference, and test for the current value. The == returns a 1 if true and a 0 if false.
```python
print(p1.degree)
print(p1.degree == 2)
```

This allows you to do conditionals like:
```python
p1 >> pluck([0,1,2,3], amp=(p1.degree==1))
p1 >> pluck([0,1,2,3], amp=(p1.degree>1))
```

Or change it to a different amp by multiplying by 4:
```python
p1 >> pluck([0,1,2,3], amp=(p1.degree==1)*4)
```

Chain multiple conditionals
```python
p1 >> pluck([0,1,2,3], amp=(p1.degree==1)*4 + (p1.degree==2)*1)
```

Which is the same as
```python
p1 >> pluck([0,1,2,3], amp=p1.degree.map({1:4, 2:1}))
```

---
### Rests

Rests can be added by using a rest object in the dur array. The rest silences the note that would have been played. Without a rest, 5 notes (yes, a dur=1 would work, but lets be explicit to counterpoint the next example)
```python
p1 >> pads([0,1,2,3,4], dur=[1,1,1,1,1])
```

With a rest ... 4 notes and a rest, note "4" is silenced for 4 beats:
```python
p1 >> pads([0,1,2,3,4], dur=[1,1,1,1,rest(4)])
```

---
### Attributes Reference


---
**amp** - Amplitude (defaults to 1) 

Sets the volume of the note/pattern
```python
d1 >> play("*", dur=1/2, amp=1)
```

Half Volume
```python
d1 >> play("*", dur=1/2, amp=.5)
```

Creating a pattern with amp
```python
d1 >> play("*", dur=1/2, amp=[1,0,1,1,0])
```

---
**amplify** - Changes amp, by multiplying agasint the existing value (instead of overwritting)

Creating a pattern with amp
```python
d1 >> play("*", dur=1/2, amp=[1,0,1,1,0])
d1 >> play("*", dur=1/2, amplify=[.5,1,0])
```

Set up a "drop" in the music (Plays at full volume for 28, then 0 for 4)
```python
p1 >> blip([0,1,2,3], amplify=var([1,0],[28,4]))
```

---
**bend**


---
**benddelay** - See bend

---
**bits** - The bit depth, in number of bits, that the signal is reduced to; this is a value between 1 and 24 where other values are ignored. Use crush to set the amount of reduction to the bitrate (defaults to 8)

---
**bitcrush** - See bits

---
**blur**

---
**bpf** - Band Pass Filter

---
**bpnoise** - See bpf

---
**bpr** - See bpf

---
**bpm**

---
**buf**

---
**channel**

---
**chop** - 'Chops' the signal into chunks using a low frequency pulse wave over the sustain of a note.

---
**coarse**

---
**comb delay** - See echo

---
**crush**

---
**cut** - Cuts a duration
```python
p1 >> pluck(P[:8], dur=1/2, cut=1/8)
p1 >> pluck(P[:8], dur=1/2, cut=1/4)
p1 >> pluck(P[:8], dur=1/2, cut=1/2)
```

---
**cutoff**

---
**decay** - See echo

---
**degree** - The degree of the note, or pitch, can be specified by keyword (also the first positional)
```python
p1 >> blip(degree=[0,1,2,3])
```

Which is the same as:
```python
p1 >> blip([0,1,2,3])
```

Only plays the "root" note of the chord
```python
b1 >> bass(p1.degree[0])
```

---
**delay** - A duration of time to wait before sending the information to SuperCollider (defaults to 0)

Delays every 3 note by .1
```python
p1 >> blip([0,1,2,3], delay=[0,0,0.1])
```

Delays every 3 note by .5
```python
p1 >> blip([0,1,2,3], delay=[0,0,0.5])
```

Plays the note once for each different delays
```python
p1 >> blip([0,1,2,3], delay=(0,0.1))
p1 >> blip([0,1,2,3], delay=(0,0.25))
p1 >> blip([0,1,2,3], delay=(0,.1,.2,.3))
```

---
**dist**

---
**dur** - Durations (defaults to 1 and 1/2 for the Sample Player)

---
**echo** - Title keyword: echo, Attribute keyword(s): decay - Sets the decay time for any echo effect in beats, works best on Sample Player (defaults to 0) - Multiplied against the sustain value
```python
d1 >> play("x-o-", echo=0.1)
d1 >> play("x-o-", echo=0.5)
p1 >> pluck(P[:8], echo=.25)
p1 >> pluck(P[:8], echo=.5)
p1 >> pluck(P[:8], echo=.5, decay=.5)
```

---
**env**

---
**fmod**

---
**formant**

---
**freq**

---
**hpf** - High Pass Filter - Filters out all the frequencies below given value, removing lower freqencies

4000 hertz
```python
p1 >> pluck(P[:8], dur=1/2, hpf=4000)
```

HPF is 0 for 4 beats, then 4000 for 4 beats
```python
p1 >> pluck(P[:8], dur=1/2, hpf=var([0,4000],[4,4]))
```

Linear change on hpf from 0 take 4 beats to get to 4000, 4 beats back to 0
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[4,4]))
```

Linear change on hpf from 0 take 8 beats to get to 4000, then reset back to 0
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]))
```

With resonance change (default is 1)
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]), hpr=.5)
```

With resonance change as a linvar
```python
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]), hpr=linvar([0.1,1],12))
```

---
**hpr** - See hpf

---
**lpf** - Low Pass Filter - Filters out all the frequencies above given value, removing higher freqencies

4000 hertz
```python
p1 >> pluck(P[:8], dur=1/2, lpf=400)
```

With resonance change as a linvar
```python
p1 >> pluck(P[:8], dur=1/2, lpf=linvar([500,4000],[8,0]), lpr=linvar([0.1,1],12))
```

---
**lpr** - See lpf

---
**midinote**

---
**pan** - Panning, where -1 is far left, 1 is far right (defaults to 0)

---
**pitch** - See degree

----
**pshift**

---
**oct**

---
**rate** - Variable keyword used for misc. changes to a signal. E.g. Playback rate of the Sample Player (defaults to 1)

---
**room** - Title keyword: room, Attribute keyword(s): mix

The room argument specifies the size of the room
```python
d1 >> play("x-o-", room=0.5)
```

Mix is the dry/wet mix of reverb or how much the reverb is mixed with the source.  1 is all reverb, 0 is no reverb at all. (Default 0.1)
```python
d1 >> play("x-o-", room=0.5, mix=.5)
```

---
**reverb** - See Room

---
**sample** - Special keyword for Sample Players; selects another audio file from the bank of samples for a sample character.

---
**scale**

---
**shape**

---
**slide** - Slide To - Slides' the frequency value of a signal to freq * (slide+1) over the duration of a note (defaults to 0)
```python
p1 >> pluck(P[:8], dur=1/2, slide=1)
p1 >> pluck(P[:8], dur=1/2, slide=12)
p1 >> pluck(P[:8], dur=1/2, slide=var([0,-1],[12,4]))
```

---
**slidedelay**

---
**slidefrom**

---
**slider**

---
**spread**

---
**spin**

---
**striate**

---
**stutter**

---
**sus** - Sustain (defaults to `dur`)

---
**swell**

---
**vib** - Vibrato - Title keyword: vib, Attribute keyword(s): Vibrato (defaults to 0)
```python
p1 >> pluck(P[:8], dur=1/2, vib=12)
```

With child attribute, vibdepth (default 0.2)
```python
p1 >> pluck(P[:8], dur=1/2, vib=12, vibdepth=0.5)
```

---
**vibdepth** - See vib


---
### Try this!

1.  *Use _**print(SynthDef)**_ to see all available synthesizers and try them out.*
2.  *Create a small bass line with 1-8 notes, chords with 1-8 chords, and a small melody.*
3.  *Use some of the attributes: the octave variable **oct=**, the duration variable **dur=** and/or the amplitude gain value **amplify=** to get a better result!*

**Note: When you start trying out attribute values, use lower amplitude when using headphones to protect yourself from ear damage, or use speakers instead!**


---

## Sample Player Object

Renardo can also be used to sequence and manipulate audio samples. To do this all you need to do is use the special **play()** Player() object. Unlike synthesizer Player() objects, the first argument to **play** should be a string of characters, not numbers. As a result, more information can be encoded in the character string than the character itself means. Each character relates to a range of audio files such as kicks, hi-hats, snares, and other sounds. Each audio file will be stored in a buffer in SuperCollider.

To view which character relates to which audio file, execute:
```python
print(Samples)
```

There is a sound pack folder in Renardo called _**/samples/0_foxdot_default**_. This folder contains all characters named folders with samples. In order to use or create your own sample pack, you will need to name clone of the folder structure with top folder name like **1_my_samples**, with path /samples/1_my_samples/. You can call samples from your own sample pack with the attribute **spack**:
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


---
## Loop Player Object

You can use your own samples by simply dropping audio files into the existing FoxDot sample directories. These are found in the **snd** directory in the root of the Renardo installation (e.g., '/home/user/.config/renardo/samples/').

You saw earlier how to work with samples using **play()**. The **loop** Player() object is similar to **play**. However, it plays an audio file by a given place given by a string containing "absolute_path/file_name" together, instead of using a sample file of an installed sample pack of Renardo.

You can also play samples with **loop()**.
```python
s1 >> loop('foxdot')
```

You may notice that this is just playing the first part of the sample over and over again. You can tweak the behavior with many of the arguments we've seen thus far for controlling other synths. dur is a good place to start.
```python
s1 >> loop('foxdot', dur=4)
```

If you have a folder full of samples that you would like to use in FoxDot, you can call **loop()** with the full path to the sample.
```python
s1 >> loop('/path/to/samples/quack.wav')
```

If you give loop the path to a folder, it will play the first sample it finds. You can change which sample it plays with the **sample=** arg.

Play the first sample in my collection
```python
s1 >> loop('/path/to/samples')
```

Play the second sample in my collection
```python
s1 >> loop('/path/to/samples', sample=1)
```

If you're going to be using a lot of samples from a folder, you can add it to the sample search path. FoxDot will look under all its search paths for a matching sample when you give it a name.
```python
Samples.addPath('/path/to/samples')
s1 >> loop('quack')
```

Once you have a search path, you can use pattern matching to search for samples. Play the 3rd sample under the 'snare' dir:
```python
s1 >> loop('snare/*', sample=2)
```

You can use * in directory names too:
```python
s1 >> loop('*_120bpm/drum*/kick*')
```

** means "all recursive subdirectories". This will play the first sample nested under 'percussion' (e.g. 'percussion/kicks/classic/808.wav')
```python
s1 >> loop('percussion/**/*')

```

You can put files in a special folder located in "/snd/loop" which can be opened by going to “Help & Settings” and then “Open Samples Folder” from the FoxDot editor menu. You don’t need to supply the full path (or extension) for files in this folder:
```python
l1 >> loop("my_file", dur=4)
```

To see all the files in this folder use print(Samples.loops). If you want to play with the playback order, you can supply a “position” argument after the file name that Renardo will iterate through based on the duration.

Play first 4 beats of audio in order:
```python
l1 >> loop("my_file", P[:4], dur=1)
```

Play first beats in random order:
```python
l1 >> loop("my_file", P[:4].shuffle(), dur=1)
```

If you know the bpm of the audio file and wish to play it at the current tempo, you can supply the player with a tempo argument. For example, my_file could be a drum beat at 135 bpm but the current tempo is 120, I can fit the tempo of my_file to the clock like so:

First 4 beats in 1 beat steps:
```python
l1 >> loop("my_file", P[:4], dur=1, tempo=135)
```

First 4 beats in 0.5 beat steps:
```python
l1 >> loop("my_file", P[:8]/2, dur=0.5, tempo=135)
```

---
### Time stretching

Time stretching the audio in this fashion will change the pitch. If the audio is pitched, you may wish the time-stretch it without losing that information. This is possible using the **striate**. This cuts the file into lots of little segments and plays them back spread out over the course of the duration value – this will play the entire audio file. The larger the audio file, the larger the number you will probably want to use. Using the example above, you may want to use a striate value of 100-200 for a smoother playback:

Stretch the file using 100 segments:
```python
l1 >> loop("my_file", dur=4, striate=100)`
```

Stretch it using 10 segments - listen to the difference:
```python
l1 >> loop("my_file", dur=4, striate=10)
```

An extra attribute for **loop** is **beat_stretch=True**, which will stretch the audio file length into its given duration.


---
### Try This!

Search under [www.wavsource.com](https://www.wavsource.com/) or [www.findsounds.com](https://www.findsounds.com/) for 2-3 short audio files. Voices, vocals, beat loops, instruments or ambient noise are best.

The loop synth is designed to let you play longer audio files (>1 sec) and manipulate them. To get started, just supply the filename you want to play and the duration you want to play in beats:
```python
l1 >> loop("path/to/my/file.wav", dur=32, sus=32)
```


---
## Clock 


### Basics


To stop all player objects, you can press **Ctrl+.** (Hold Ctrl and hit the period). Which is a shortcut for the command:
```python
Clock.clear()
```

Change the tempo (this takes effect at the next bar) Default is 120.
```python
Clock.bpm = 144
```

To see what is scheduled to be played.
```python
print(Clock)
```

To see what the latency is
```python
print(Clock.latency)
```

Sometimes you want to know when the start of the next X beat cycle. To do this we use the 'mod' method. For example if we want to see when the start of the next 32 beat cycle is we can do
```python
print(Clock.mod(32))
```

### Advanced

The clock can schedule anything with a __call__ method using. It takes an absolute time clue to schedule a functions - Clock.schedule needs to know the beat to call something on.
```python
Clock.schedule()   # raises TypeError
```

Schedule an event after a certain durations - Clock.future needs to know how many beats ahead to call something
```python
Clock.future()     # raises TypeError
```

These are equivalent
```python
Clock.schedule(lambda: print("hello"), Clock.now() + 4)
Clock.future(4, lambda: print("hello"))
```

To schedule something else
```python
Clock.schedule(lambda: print("hello "))
```

We can call something every n beats
```python
Clock.every(4, lambda: print("hello"))
```

Get the current clock and add 2. - Useful for scheduling.
```python
print(Clock.now() + 2)
```

Issue command on the next bar
```python
nextBar(Clock.clear)
```

With a decorator
```python
@nextBar
def change():
    Root.default=4
    Scale.default="minor"
    # etc etc
```

You can create your own function, and decorate it, to be able to use it in an .every on a Player object
```python
@PlayerMethod
def test(self):
    print(self.degree)

p1 >> pluck([0,4]).every(3, "test")
```

And cancel it with
```python
p1.never("test")

```

---
## Patterns

Renardo uses in its Player() objects Python lists, known more commonly as arrays in other languages, to sequence themselves. It has been used here already previously but they aren't exactly flexible for manipulation.

For example, try multiplying a list by two like this:
```python
print([1,2,3] * 2)
```
_Console output >> [1,2,3,1,2,3]_


*Does the result meet your expectations?*

Renardo uses a container type called a 'Pattern' to help solve this problem. They act like regular lists but any mathematical operation performed on it is done to each item in the list and done so pair-wise if using a second pattern. A basic pattern is created as you would with a normal list or tuple, but with a 'P' preceeding it.
```python
print(P[1,2,3] * 2)
print(P[1,2,3] + 100)
```

In this operation, the output consists of all the combinations of the two patterns i.e. [1+3, 2+4, 3+3, 1+4, 2+3, 3+4]
```python
print(P[1,2,3] + [3,4])
```

You can use Python's slicing syntax to generate a series of numbers:
```
print(P[:8])
print(P[0,1,2,3:20])
print(P[2:15:3])
```

Try some other mathematical operators and see what results you get.
```python
print(P[1,2,3] * (1,2))
```

Pattern objects also automatically interlace any nested list.
Compare a normal list:
```python
for n in [0,1,2,[3,4],5]:
    print(n)
```
with Pattern
```python
for n in P[0,1,2,[3,4],5]:
    print(n)
```

Use PGroups if you want this behavior to be avoided. These can be implicitly specified as tuples in Patterns:
```python
for n in P[0,1,2,(3,4)]:
    print(n)
```

This is a PGroup:
```python
print(P(0,2,4) + 2)
print(type(P(0,2,4) + 2))
```

In Python, you can generate a range of integers with the syntax range(start, stop, step). By default, start is 0 and step is 1.
```python
print(list(range(10))) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

You can use PRange(start, stop, step) to create a Pattern object with the equivalent values:
```python
print(PRange(10)) # P[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

P[0, 2, 2, 6, 4, 10, 6, 14, 8, 18]
[0*1, 1*2, 2*1, 3*2, 4*1, 5*2, 6*1, 7*2, 8*1...]
```python
print(PRange(10) * [1, 2]) # Pattern class behaviour
```

Adding a list (or Pattern) to a Pattern will add the values of the elements to the other where Python lists would be concatonated.
```python
print(PRange(10) + [0,10])
```

To concatonate Patterns, use the pipe operator like so:
```
print(PRange(10) | [0,10])
```

FoxDot automatically converts any object being piped to a Pattern to the base Pattern class so you don't have to worry about making sure everything is the right type.
Plays all the values together:
```python
p1 >> pluck(P(4,6,8))
p1 >> pluck(P[0,1,2,P(4,6,8),7,8])
```

Spreads the values across the current "dur" e.g. if the dur is 2 beats then it will play each value 2/3 beats apart:
```python
p1 >> pluck(P*(0,2,4), dur=1/2)
p1 >> pluck(P*(0,2,4), dur=1)
p1 >> pluck(P*(0,2,4), dur=2)
p1 >> pluck(P[0,1,2,P*(4,6,8),7,8], dur=1)
```

Is the same as P* but every other time the notes are played they are spread over the dur value.
```python
p1 >> pluck(P/(0,2,4), dur=1/2)
p1 >> pluck(P/(0,2,4), dur=1)
p1 >> pluck(P/(0,2,4), dur=2)
p1 >> pluck(P[0,1,2,P/(4,6,8),7,8], dur=1)
```

Spreads the values across the current "sus" e.g. if the dur is 2 beats and the sus is 3 beats then it will play each value 1 beat apart.
```python
p1 >> pluck(P+(0,2,4), dur=2, sus=3)
p1 >> pluck(P+(0,2,4), dur=2, sus=1)
p1 >> pluck(P[0,1,2,P+(4,6,8),7,8], dur=1, sus=3)
```

Spreads the first (length-1) values with a gap of the last value between each
Plays 0,2,4 with a gap of 0.5:
```python
p1 >> pluck(P^(0,2,4,0.5), dur=1/2)
```

Patterns come with several methods for manipulating the contents
```python
help(Pattern)
```

Standard pattern
```python
print(P[:8])
```

Shuffle pattern by randomizing it
```python
print(P[:8].shuffle())
```

Append a reversed pattern to the pattern
```python
print(P[:8].palindrome())
```

Shift the pattern by n (default 1)
```python
print(P[:8].rotate())
print(P[:8].rotate(3))
print(P[:8].rotate(-3))
```

Takes the pattern and appends it as many times as needed to reach n number of elements in the pattern:
```python
print(P[:8].stretch(12))
print(P[:8].stretch(20))
```

Reverses a pattern
```python
print(P[:8].reverse())
```

Loops a pattern n number of times
```python
print(P[:8].loop(2))
```

Add an offset
```python
print(P[:8].offadd(5))
```

Add a multiplied offset
```python
print(P[:8].offmul(5))
```

Stutter - Repeat each element n times
```python
print(P[:8].stutter(5))
```

---
**Amen** - Merges and laces the first and last two items such that a drum pattern "x-o-" would become "(x[xo])-o([-o]-)" and mimics the rhythm of the famous "amen break"
```python
d1 >> play(P["x-o-"].amen())
print(P[:8].amen())
```

---
**Bubble** - Merges and laces the first and last two items such that a drum pattern "x-o-" would become "(x[xo])-o([-o]-)
```python
d1 >> play(P["x-o-"].bubble())
print(P[:8].bubble())
```

If you want to edit the internal values in Python you need to use a for loop:
```python
l = []
for i in [1,2,3]:
    l.append(i*2)
    print(l)
```

or in the list understanding:
```python
print([i*2 for i in [1,2,3]])
```
_Console output >> [2,4,6]_


But what if you want to multiply the values in a list by 2 and 3 alternately?

Renardo uses a type of container called "Pattern" to solve this problem. They behave like regular lists, but any math operation performed on them is performed on each item in the list, and paired if a second pattern is used.

The basic pattern can be created as follows:
```python
print(P[1,2,3]*2)
```
_Console output >> P[2,4,6]_


```python
print(P[1,2,3]+[3,4])
```
_Console output >> P[4,6,6,5,5,7]_


Notice how in the second operation the output is any combination of the two patterns >> [1+3,2+4,3+3,1+4,2+3,3+4].


---
### Pattern


_Try some other math operators and see what results you get!_

What if you group numbers in brackets like P[1,2,3] * (1,2)?
```python
P[P(1,2),P(2,4),P(3,6)]
```

There are several other pattern classes in Renardo that you can use to generate arrays of numbers, but they behave just like the base pattern.
```python
print(classes(Patterns.Sequences))
```

```python
print(classes(Patterns))
```

In Python you can use the syntax area (start, stop, step) to generate a range of integers. By default, Start is 0 and Step 1.

With PRange (start,stop,step) you can create a sample object with the appropriate values. The first example shows the equivalent function in Python, the second is the simplified sample function in Renardo PRange:
```python
print(list(range(10)))
```
_Console output >> [0,1,2,3,4,5,6,7,8,9]_


```python
print(PRange(10))
```
_Console output >> P[0,1,2,3,4,5,6,7,8,9]_


```python
print(PRange(10)*[1,2])
```
_Console output >> P[0,2,2,6,4,10,6,14,8,18]_


But what about combining patterns? In Python you can concatenate (append) two lists with the + operator. However, Renardo patterns use this to supplement the data in the list. To connect two Pattern objects together, you can use the pipe symbol, which Linux users may be familiar with. It is used to connect command line programs by sending the output of one process as input to another.


```python
print(PRange(4)|[1,7,6])
```
_Console output >> P[0,1,2,3,1,7,6]_


There are several types of pattern sequences in Renardo (and the list is still growing) that make generating these numbers a little easier. For example, to play the first octave of a pentatonic scale from bottom to top and back again, you can use two PRange objects:
```python
p1 >> pluck(PRange(5)|PRange(5,0,-1), scale=Scale.default.pentatonic)
```

The PTri class does this for you:
```python
p1 >> pluck(PTri(5), scale=Scale.default.pentatonic)
```

---
### Pattern functions


There are several functions that generate a pattern of values for us to do useful things in Renardo, such as: Rhythms and melodies. This section is a list of pattern functions with descriptions and examples.

Used as input arguments for Renardo players, these can themselves be treated as patterns and their methods applied directly, e.g. B. *PDur(3,8).reverse()*. You can also replace each input argument with a pattern or a TimeVar function to create an advanced pattern or a Pvar pattern. Let's look at some examples:


**PStep(n,value,default=0)** >> Returns a pattern where every **n**-term is **value**, otherwise **default**.

Every 4, make it 1, otherwise default to 0
```python
print(PStep(4,1))
```

Every 8, make it 6, otherwise, 4
```python
print(PStep(8,6,4))
```

Every 5, make it 2, otherwise, 1
```python
print(PStep(5,2,1))
```

**PSum(n,total,\**kwargs)** >> Returns a pattern of length **n**, the sum of which is **total**. For example: PSum(3,8) -> P[3,3,2] PSum(5,4) -> P[1,0.75,0.75,0.75,0.75].

Returns a pattern of length 2, with elements summed up to 8
```python
print(PSum(3,8))
```

Returns a pattern of length 5, with elements summed up to 4
```python
print(PSum(5,4))
```

**PRange(start,stop=None,step=None)** >> Returns a pattern equivalent to Pattern(range(start,stop,step)).

**PTri(start,stop=None,step=None)** >> Returns a pattern equivalent to Pattern(range(start,stop,step)) with the inverted shape appended. Think of it like a "Tri"angle.

Up to 5 then down to 1:
```python
print(PTri(5))
```

Up to 8 then down to 1:
```python
print(PTri(8))
```

From 3 to 10, then down to 4:
```python
print(PTri(3,10))
```

From 3 to 30, by 2, then down to 4:
```python
print(PTri(3,20,2))
```

Up to 4, then down to 1, then up to 8, then down to 1:
```python
print(PTri([4,8]))
p1 >> pluck(PTri(5), scale=Scale.default.pentatonic)
```

Same as:
```python
p1 >> pluck(PRange(5) | PRange(5,0,-1), scale=Scale.default.pentatonic)
```

**PEuclid(n,k)** >> Returns the Euclidean rhythm that distributes **n** pulses as evenly as possible over **k** steps. e.g. PEuclid(3,8) returns P[1,0,0,1,0,0,1,0].
3 pulses over 8 steps:
```python
print(PEuclid(3,8))
```

**PSine(n=16)** >> Returns values of one cycle of a sine wave divided into **n** parts.

Split into 5 parts:
```python
print(PSine(5))
```

Split into 10:
```python
print(PSine(10))
```

**PDur(n,k,dur=0.25)** >> Returns the actual duration based on Euclidean rhythms (see PEuclid), where **dur** is the length of each step. e.g. PDur(3,8) returns P[0.75,0.75,0.5].

```python
print(PDur(3,8)) # P[0.75, 0.75, 0.5]
print(PDur(5,8))
```

Gives a list of 3 dur, appened with a list of 5 dur
```python
print(PDur([3,5],8))
d1 >> play("x", dur=PDur(5,8))
```

**PBern(size=16,ratio=0.5)** >> Returns a pattern of ones and zeros based on the **ratio** value (between 0 and 1). This is known as the Bernoulli sequence.

**PBeat(string,start=0,dur=0.5)** >> Returns a pattern of durations based on an input string, where non-spaces denote a pulse.

**PSq(a=1,b=2,c=3)**

**PIndex** >> Returns the index being accessed
```python
print(PIndex())
print(PIndex()*4)
```


---
### Pattern generators

We know that patterns have a fixed length and can be generated based on a function. However, sometimes it is useful to have patterns of infinite length, for example when generating random numbers. This is where pattern generators come into play. Similar to Python generators where not all values are kept in memory at once, except when Python generators usually have an end - Renardo pattern generators don't!

**PRand(lo,hi,seed=None)/PRand([values])** >> Returns a series of random integers between lo and hi, inclusive. If hi is omitted, the range is 0 to lo. A list of values can be provided in place of the range and PRand returns a series of values chosen at random from the list.

Returns a random integer between 0 and start.
```python
print(PRand(8)[:5])
```

Returns a random integer between start and stop.
```python
print(PRand(8,16)[:5])
```

If start is a container-type it returns a random item for that container.
```python
print(PRand([1,2,3])[:5])
```

You can supply a seed
```python
print(PRand([1,2,3], seed=5)[:5])
```

Keeps generating random tune
```python
p1 >> pluck(PRand(8))
```

Creates a random list, and iterates over that same list
```python
p1 >> pluck(PRand(8)[:3])
```

**PxRand(lo, hi) / PxRand([values])** >> Identical to PRand, but no elements are repeated.

**PwRand([values], [weights])** >> Uses a list of weights to indicate how often items with the same index are selected from the list of values.
A weight of 2 means it is twice as likely to be picked as an item weighing 1.

**P10(n)**>> Returns a pattern of length n of a randomly generated series of ones and zeros.

**PAlt(pat1, pat2, \*patN)** >> Returns a pattern generated by alternating the values in the specified sequences.

**PJoin(patterns)** >> Assembles a list of patterns.

**PPairs(seq,func=<lambda>)** >> Links a sequence to a second sequence obtained by executing a function on the original. By default, this is lambda n: 8-n.

**PQuicken(dur=0.5,stepsize=3,steps=6)** >> Returns a group of delay amounts that gradually decrease.

**PRhythm(durations)** >> Converts all tuples / PGroups into delays, which are calculated with the PDur algorithm.

The following plays the hi hat with a Euclidean Rhythm of 3 pulses in 8 steps
```python
d1 >> play("x-o-", dur=PRhythm([2,(3,8)]))
print(PRhythm([2,(3,8)]))
```

**PShuf(seq)** >> Returns a mixed version of seq. This example uses a function to automatically shuffle the list.

**PStretch(seq,size)** >> Returns 'seq' as a pattern and is looped until its length is 'size', e.g. PStretch ([0,1,2], 5) returns P[0,1,2,0,1].

**PStrum(n=4)**

**PStutter(seq,n=2)** >> Creates a pattern so that each element in the array is repeated n times (n can be a pattern).

**PZip(pat1,pat2, patN)** >> Generates a pattern that 'zips' multiple patterns. PZip([0,1,2], [3,4]) creates the pattern P[(0,3),(1,4),(2,3),(0,4),(1,3),(2,4)].

**PZip2(pat1,pat2,rule=<lambda>)** >> Like PZip, but only uses two patterns. Connects values if they meet the rule.

**Pvar** >> TimeVar, which saves lists instead of individual values (var, sinvar, linvar, expvar).

**PWhite(lo,hi)** >> Returns random floating point numbers between lo and hi.

Lo defaults to 0, hi defaults to 1
```python
print(PWhite()[:8])
```

Returns random numbers between 1 and 5
```python
print(PWhite(1,5)[:8])
```

**PChain(mapping_dictionary)** >> Based on a simple Markov chain with equal probabilities. Takes a dictionary of elements, states, and possible future states. Every future state has an equal chance of being selected. If a possible future state is not valid, a KeyError is raised.

**PWalk(max=7,step=1,start=0)** >> Returns a series of integers with each element an increment apart and with a value in the range of +/- the maximum. The first element can be selected with start.

By default, returns a pattern with each element randomly 1 higher or lower than the previous
```python
print(PWalk()[:16])
```

Changing step
```python
print(PWalk(step=2)[:16])
```

With max
```python
print(PWalk(max=2)[:16])
```

Start at a non-zero number
```python
print(PWalk(start=6)[:16])
```

**PFibMod()** >> Returns the Fibonacci sequence.

---
### Custom Pattern Generator

Custom generator patterns can be made by subclassing GeneratorPattern and overriding `GeneratorPattern.func`
```python
class CustomGeneratorPattern(GeneratorPattern):
    def func(self, index):
        return int(index / 4)
print(CustomGeneratorPattern()[:10])
```

This can be done more consisely using `GeneratorPattern.from_func`, passing in a function which takes an index and returns some pattern item.
```python
def some_func(index):
    return int(index / 4)
print(GeneratorPattern.from_func(some_func)[:10])
```

We can use lambdas too
```python
print(GeneratorPattern.from_func(lambda index: int(index / 4))[:10]) 
```



---
## TimeVars


### TimeVar var()

A TimeVar is an abbreviation of "Time Dependent Variable" and is a key feature of Renardo. A TimeVar has a series of values that it changes between after a pre-defined number of beats and is created using a var object with the syntax var([list_of_values], [list_of_durations]).

Generates the values: 0,0,0,0,3,3,3,3...
```python
a = var([0,3],4)            # Duration can be single value
print(int(Clock.now()), a)  # 'a' initally has a value of 0
```
Console Output - (The first value may differ):
_0, 0_

```python
print(int(Clock.now()), a)   # After 4 beats, the value changes to 3
```
Console Output:
_4, 3_


```python
print(int(Clock.now()), a)   # After another 4 beats, the value changes to 0
```
Console Output:
_8, 0_


Duration can also be a list
```python
a = var([0,3],[4,2])
print(int(Clock.now()), a)
```

When a TimeVar is used in a mathematical operation, the values it affects also become TimeVars that change state when the original TimeVar changes state – this can even be used with patterns:
```python
a = var([0,3], 4)
print(int(Clock.now()), a + 5)   # When beat is 0, a is 5
```
Console Output:
_5_

```python
print(int(Clock.now()), a + 5)   # When beat is 4, a is 8
```
Console Output:
_8_

```python
b = PRange(4) + a
print(int(Clock.now()), b)   # After 8 beats, the value changes to 0
```
Console Output:
_P[0, 1, 2, 3]_


```python
print(int(Clock.now()), b)   # After 12 beats, the value changes to 3
```
Console Output:
_P[3, 4, 5, 6]_


Use 'var' with your Player objects to create chord progressions.
```python
a = var([0,4,5,3], 4)
b1 >> bass(a, dur=PDur(3,8))
p1 >> pads(a + (0,2), dur=PDur(7,16))
```

You can add a 'var' to a Player object or a var.
```python
b1 >> bass(a, dur=PDur(3,8)) + var([0,1],[3,1])
b = a + var([0,10],8)
print(int(Clock.now()), (a, b))
```

Updating the values of one 'var' will update it everywhere else
```python
a.update([1,4], 8)
print(int(Clock.now()), (a, b))
```

Vars can be named ...
```python
var.chords = var([0,4,5,4],4)
```

And used later
```python
b1 >> pluck(var.chords)
```

Any players using the named var will be updated
```python
var.chords = var([0,1,5,3],4)
```

You can also use a 'linvar' that changes its values gradually over time. Change the value from 0 to 1 over 16 beats
```python
c = linvar([0,1],16)
```

Run this multiple times to see the changes happening
```python
print(int(Clock.now()), c)
```

Change the amp based off that linvar
```python
p1 >> pads(a, amp=c)
```

a 'Pvar' is a 'var' that can store patterns (as opposed to say, integers)
```python
d = Pvar([P[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], P[0, 1, 2, 3, 4, 5, 4, 3, 2, 1]], 8)
print(int(Clock.now()), d)
p1 >> pads(a, amp=c, dur=1/4) + d
```

Change the scale every 16 beats
```python
Scale.default = Pvar([Scale.major, Scale.minor],16)
```

You even set the value to last forever once it is reached using a special value called "inf"
```python
x = var([0, 1, 2, 3], [4, 4, 4, inf])
print(x) # Keep pressing - it will eventually stop at 3
```

---
### Other types of TimeVar

There are several sub-classes of **var** that return values between the numbers specified. For example a **linvar** gradually change values in a linear fashion:
```python
print(linvar([0,1],8)) # keep running to see the value change between 0 and 1
```

Increase the high-pass filter cutoff over 32 beats
```python
p1 >> play("x-o-", hpf=linvar([0,4000],[32,0]))
```

Other types include **sinvar** and **expvar**
```python
print("Linear:", linvar([0, 1], 8))
print("Sinusoidal:", sinvar([0, 1], 8))
print("Exponential:", expvar([0, 1], 8))
```


**Offsetting the start time**

Another useful trick is offsetting the start time for the var. By default it is when the Clock time is 0 but you can specify a different value using the "start" keyword
```python
print(linvar([0, 1], 8))
print(linvar([0, 1], 8, start=2))
```

This can be combined with Clock.mod() to start a ramp at the start of the next 32 beat cycle:
```python
d1 >> play("x-o-", hpf=linvar([0,4000],[32,inf], start=Clock.mod(32)))
```

It should be noted that when a Player() object uses a gradually changing TimeVar function, the value stored in it will be used at the time the note was triggered. This means that after playing a note you will not hear a change in value over time in the note itself. Try these lines of code for yourself:

No gradual change in high pass frequency:
```python
p1 >> dirt(dur=4, hpf=linvar([0,4000], 4))
```

Apparent gradual change in high pass frequency:
```python
p2 >> dirt(dur=0.25, hpf=linvar([0,4000], 4))
```

You can also use a duration of 0 to immediately skip the gradual change and move on to the next value. This is useful for "resetting" values and creating drops.

Raise the high pass frequency filter to 4000Hz, then back to 0:
```python
p1 >> dirt(dur=0.25, hpf=expvar([0,4000], [8,0]))
```

As with normal TimeVars functions, TimeVars can be nested within other TimeVars as they gradually change to better manage the application of the values. For example, we can only increase the high pass filter frequency on the last 4 beats of a 32 beat cycle as follows.

Use a normal TimeVar function to set the value to 0 for 28 beats:
```python
p1 >> dirt(dur=0.25, hpf=var([0,expvar([0,4000], [4,0])], [28,4]))
```


---
### TimeVars as Patterns


**Pvar(patterns,dur)** >> So far we have only saved individual values in a TimeVar, but sometimes it makes sense to save an entire Pattern object.

You cannot do this with a regular TimeVar because each pattern in the input list of values is treated as a nested list of individual values. To avoid this behavior, you have to use a Pvar, short for Pattern-TimeVar (time variable pattern).

It is created just like any other TimeVar, but values can be entire lists/patterns.
```python
a = Pvar([[0,1,2,3],[4,5,6]], 4)
print(Clock.now(), a)
```
_Console output >> 0, P[0,1,2,3]_


You can even nest a Pvar within a pattern like you would with a normal pattern to play alternate values.

Alternate the alternating notes every 8 beats:
```python
p1 >> pluck([0,1,2,Pvar([[4,5,6,7],[11,9]], 8)], dur=0.25, sus=1)`
```

---
## Scales


By default, Player Objects use the C Major scale. These can be changed by using the keyword arguments 'scale' and 'root'.
Scales can be defined as an array of semitones, such that the Major scale is [0,2,4,5,7,9,11] or one of the predefined scales from the Scale module, e.g. Scale.minor.
Root refers to the tonic of the scale; 0 being C, 1 is C#, 2 is D and so on.

The default scale can be changed such that any Player not using a specific scale will be updated. This is done using the syntax below (each line is technically equivalent):
```python
Scale.default.set("major")
Scale.default.set(Scale.major)
Scale.default.set([0,2,4,5,7,9,11])
```

Or the same thing, but minor:
```python
Scale.default.set("minor")
Scale.default.set(Scale.minor)
Scale.default.set([0,2,3,5,7,10])
```

To save some time you can also do
```python
Scale.default = "minor"
```

This is the same for the root:
```python
Root.default.set(1)
Root.default.set("C#")
```

Or:
```python
Root.default.set(2)
Root.default.set("D")
```

To see a list of all scales, use:
```python
print(Scale.names())
```

You can change the scale used by a player using the 'scale' keyword
```python
p1 >> pads([0,1,2], scale=Scale.minor)
```

Similarly, you can change the root note players using the root keyword and the Root.default object
```python
p1 >> pads([0,1,2], scale=Scale.minor, root=2)
```

---
## Groups

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
