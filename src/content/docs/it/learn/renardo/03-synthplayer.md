---
title: Synth Player
---

### Synth Player Object

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


---
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
