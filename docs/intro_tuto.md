
## Learning music with Renardo 

Here are some source to learn the renardo/FoxDot language and understand how to do real music with it:

- Renardo and classic FoxDot tutorials (this page)
- the great tutorial by iShapeNoise here : https://gitlab.com/iShapeNoise/foxdot_codingmusic_part1

And some more to come:

- Some nice sounding code examples
- Renardo classes documentation

# Renardo intro tutorial (WIP)

Here is a recompilation of FoxDot tutorial that will continue to refine and grow.

## 0 - Executing code and making sound

To execute code in FoxDot, make sure your text cursor is in the 'block' of code
(sections of text not separated by blank lines) and press `Ctrl+Return`

for instance try typing `print("Hello livecoding !")` then ensure your cursor is on this code line and press `Ctrl+Return`

To execute just a single line, even in a block, press `Alt+Return`

In FoxDot, all two-character variable names, such as `p1`, `zz` or `k7`, are reserved for **Players** .

Then to start producing sound we need to give it a synthesizer:

```python
p1 >> pluck()

p1.stop()
```

Creating a Player Object with a synthesizer and no arguments will play a single note on middle C, by default, repeatedly until stopped.

We can rather give the player several notes to play with:

```python
p1 >> pluck([0,1,2])

p1.stop()
```

To sum up Python `>>` operator is used to associate a Player (`p1` here,  think of a band human player or a track in a music software) and synthesizer (`pluck` here)

## 1 - Playing Notes

To play a single note execute :

```python
p1 >> pluck(2)
```

Here we play the note E but to play music we don't even need to know anything about theory or the notes. Forget about them for now.

The "notes" we give to a player, meaning the number `2` here are called `degree`.

We could also write :

```python
p1 >> pluck(degree=2)
```

To play several notes we replace the number by a list written in Python like `[0,5,4,0,2]`

```python
p1 >> pluck([0,5,4,0,2])

p1.stop()
```

## 2 - Basic synth parameters

To write basic music you’ll need to specify in the synth function, such as...

### Note durations `dur`

The length of each note creating rhythms. Try:

```python
p1 >> pluck([0,0,0], dur=[1,2,3])
```

### Parameter `amp`, the "volume" of each note

```python
p1 >> pluck([0,0,0], amp=[1,2,3])
```

### Parameter `oct` changing the height/octave

```python
p1 >> pluck([0,0,0], oct=[4,5,6])
```

### Combination of multiple list parameters (Patterns)

If the second list, the amp in this example, is too long, then the first list (the degree) just loops, and are matched with the remaining elements from the second list (the amplitude).

```python
p1 >> pluck([0,2,4], amp=[1,2,3,1,5])
```

More generally, all the lists are traversed regardless of their length.

```python
p1 >> pluck([0,2,4], dur=[1,2], amp=[1,2,3,1,5])
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

## 3 - Patterns intro : combining lists and tuples

Lists of values are iterated over as the Player plays notes and we can combine several

The following duration equates to:  1,2,3,1,4,3

```python
p1 >> pluck([0,0,0], dur=[1,[2,4],3])
```

If you don't understand this yet, don't worry, more about patterns in the pattern tutorial

Values in tuples are used simultaneously i.e. p1 will play 3 individual notes, then a chord of 3 together at the same time.
```python
p1 >> pluck([0,2,4,(0,2,4)])
```

## 4 - Player attributes

You can also assign values to the attributes of player objects directly

```python
p1 >> pluck([0,2], oct=5)

p1.oct = 4
```

To display all the names of player attributes, just execute

```python
print(Player.get_attributes())
```

More about those later in the player attributes tutorial

## 5 - Playing/controlling multiple players

How to play multiple music lines at the same time ? You can't juste copy paste a line like:

```python
p1 >> pluck([0, 2, 3, 4], dur=1/2)

p1 >> bbass([0, 2, 3, 4], dur=1/2, oct=3) # bassline
# doesn't work as intended bassline replaces pluck
```

To play multiple sequences at once, we need to declare things with another Player object (`p2` here):

```python
p1 >> pluck([0, 2, 3, 4], dur=1/2)

p2 >> pads([(0, 2, 4), (3, 5, 7)], dur=8)
```

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

Use Ctrl+. to clear everything for the scheduling clock or run
```python
Clock.clear()
```

# FoxDot tutorial 

## Tutorial 2: Algorithmic Manipulation

```python
# The code below plays the first four notes of the default scale on repeat:
p1 >> pads([0,1,2,3])

# It's possible to manipulate this by adding an array of numbers to the Player object
# This raises the 4th note played by 2 degrees
p1 >> pads([0,1,2,3]) + [0,0,0,2]

# And this raises every third note by 2
p1 >> pads([0,1,2,3]) + [0,0,2]

# These values can be laced and grouped together
p1 >> pads([0,1,2,3]) + [0,1,[0,(0,2)]]

# This behaviour is particularly useful when using the follow method.
b1 >> bass([0,4,5,3], dur=2)
p1 >> pads().follow(b1) + [2,4,7]

# You can schedule players to do things
# This will tell p1 to reverse the notes every 4 beats
p1 >> pads([0,2,4,6])
p1.every(4, "reverse")

# You can "chain" methods together by appending them to the end of
# the original line:
p1 >> pads([0,2,4,6]).every(4, "reverse")

# To stop calling "reverse", use 'never':

p1.never("reverse")

# Here are a few other methods you can use:

# Using "stutter" will play the same note 'n' number of times with different attributes specified

p1.every(4, "stutter", 4, oct=4, pan=[-1,1])

# Rotate will move all the values over by 1 in their order
p1.every(4, "rotate")

# To randomise the order of the notes, use "shuffle"
p1.every(4, "shuffle")

```

## Tutorial 3: Playing Built-In Samples

```python

# FoxDot can also be used to sequence and manipulate audio samples.
# To do this all you need to do is use the special play SynthDef.
# The first argument of the play SynthDef should be a string of characters
# instead of a list of numbers as you would do for any other SynthDef.
# Each character represents a different audio file, which is stored in a buffer in SuperCollider.

# To view which character relates to which audio file, execute
print(Samples)

# You can play audio samples in the FoxDot/snd/ sub-directories by using the
# 'play' Synth and using a string of characters instead of list of notes.
bd >> play("x")

# A character refers to a sound and whitespace is used for silence, so
# you can spread sounds out in time:
bd >> play("x  x  x  ")

hh >> play(" -")

# You can lace patterns using round brackets
# Whick plays like: "x o  xo "
d1 >> play("(x )( x)o ")

# The following is the same as "-------="
hh >> play("---(-=)")

# Putting characters in square brackets will play them all in the space of one beat
# And will be played like one character, not simultaneous, but in quick succession
d1 >> play("x-o[-o]")

d1 >> play("x-o[---]")

d1 >> play("x-o[-----]")

d1 >> play("x-o[--------------]")

# and can be put in round brackets as if they were one character themselves.
d1 >> play("x[--]o(=[-o])")

# You can combine the brackets however you like: the following patterns are identical
d1 >> play("x-o(-[-o])")

d1 >> play("x-o[-(o )]")

# Curly braces select a sample sound at random if you want more variety
d1 >> play("x-o{-=[--][-o]}")

# Angle brackets combine patterns to be play simultaneously
d1 >> play("<X   ><-   ><#   ><V   >")

d1 >> play("<X   >< -  ><  # ><   V>")

# Each character is mapped to a folder of sound files and you can select different
# samples by using the "sample" keyword argument
d1 >> play("(x[--])xu[--]")

d1 >> play("(x[--])xu[--]", sample=1)

d1 >> play("(x[--])xu[--]", sample=2)

# Change the sample for each beat
d1 >> play("(x[--])xu[--]", sample=[1,2,3])

# You can layer two patterns together - note the "P", look at tutorial 4 for more information.
d1 >> play(P["x-o-"] & P[" **"])

# And change effects applied to all the layered patterns at the same time
d1 >> play(P["x-o-"] & P[" **"], room=0.5)

# Example from the player tutorial, but with samples instead
# Conditionals...
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x"))

# Or change it to sample bank 2 by multiplying
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x")*2)

# Chain multiple conditionals
d1 >> play("x[--]xu[--]x", sample=(d1.degree=="x")*2 + (d1.degree=="-")*5)

# Which is the same as
d1 >> play("x[--]xu[--]x", sample=d1.degree.map({"x":2, "-":5}))

```

## Tutorial 4: Using Patterns

```python

# Player Objects use Python lists, known more commonly as arrays in other languages,
# to sequence themselves. You've already used these previously, but they aren't exactly
# flexible for manipulation. For example, try multiplying a list by two like so:

print([1, 2, 3] * 2)

# Is the result what you expected?

# FoxDot uses a container type called a 'Pattern' to help solve this problem.
# They act like regular lists but any mathematical operation performed on it is done to each item
# in the list and done so pair-wise if using a second pattern. A basic pattern is created as
# you would with a normal list or tuple, but with a 'P' preceeding it.

print(P[1,2,3] * 2)

print(P[1,2,3] + 100)

# In this operation, the output consists of all the combinations of the two patterns i.e.
# [1+3, 2+4, 3+3, 1+4, 2+3, 3+4]
print(P[1,2,3] + [3,4])

# You can use Python's slicing syntax to generate a series of numbers

print(P[:8])

print(P[0,1,2,3:20])

print(P[2:15:3])

# Try some other mathematical operators and see what results you get.
print(P[1,2,3] * (1,2))

# Pattern objects also automatically interlace any nested list.
# Compare
# Normal list:
for n in [0,1,2,[3,4],5]:
    print(n)

# with
# Pattern
for n in P[0,1,2,[3,4],5]:
    print(n)

# Use PGroups if you want this behavior to be avoided. These can be implicitly
# specified as tuples in Patterns:
for n in P[0,1,2,(3,4)]:
    print(n)

# This is a PGroup:
print(P(0,2,4) + 2)

print(type(P(0,2,4) + 2))

# In Python, you can generate a range of integers with the syntax range(start, stop, step).
# By default, start is 0 and step is 1.
print(list(range(10))) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# You can use PRange(start, stop, step) to create a Pattern object with the equivalent values:
print(PRange(10)) # P[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# P[0, 2, 2, 6, 4, 10, 6, 14, 8, 18]
# [0*1, 1*2, 2*1, 3*2, 4*1, 5*2, 6*1, 7*2, 8*1...]
print(PRange(10) * [1, 2])           # Pattern class behaviour

# Adding a list (or Pattern) to a Pattern will add the values of the
# elements to the other where Python lists would be concatonated.
print(PRange(10) + [0,10])

# To concatonate Patterns, use the pipe operator like so:
print(PRange(10) | [0,10])
# FoxDot automatically converts any object being piped to a Pattern to the base Pattern class
# so you don't have to worry about making sure everything is the right type.

# Plays all the values together
p1 >> pluck(P(4,6,8))
p1 >> pluck(P[0,1,2,P(4,6,8),7,8])

# Spreads the values across the current "dur" e.g. if the dur is 2 beats then it will play each value 2/3 beats apart
p1 >> pluck(P*(0,2,4), dur=1/2)
p1 >> pluck(P*(0,2,4), dur=1)
p1 >> pluck(P*(0,2,4), dur=2)
p1 >> pluck(P[0,1,2,P*(4,6,8),7,8], dur=1)

# Is the same as P* but every other time the notes are played they are spread over the dur value.
p1 >> pluck(P/(0,2,4), dur=1/2)
p1 >> pluck(P/(0,2,4), dur=1)
p1 >> pluck(P/(0,2,4), dur=2)
p1 >> pluck(P[0,1,2,P/(4,6,8),7,8], dur=1)

# Spreads the values across the current "sus" e.g. if the dur is 2 beats and the sus is 3 beats then it will play each value 1 beat apart.
p1 >> pluck(P+(0,2,4), dur=2, sus=3)
p1 >> pluck(P+(0,2,4), dur=2, sus=1)
p1 >> pluck(P[0,1,2,P+(4,6,8),7,8], dur=1, sus=3)

# Spreads the first (length - 1) values with a gap of the last value between each
# Plays 0,2,4 with a gap of 0.5:
p1 >> pluck(P^(0,2,4,0.5), dur=1/2)

# Patterns come with several methods for manipulating the contents
help(Pattern)

# Standard pattern
print(P[:8])

# Shuffle pattern by randomizing it
print(P[:8].shuffle())

# Append a reversed pattern to the pattern
print(P[:8].palindrome())

# Shift the pattern by n (default 1)
print(P[:8].rotate())
print(P[:8].rotate(3))
print(P[:8].rotate(-3))

# Takes the pattern and appends it as many times as needed to reach n number of elements in the pattern
print(P[:8].stretch(12))
print(P[:8].stretch(20))

# Reverses a pattern
print(P[:8].reverse())

# Loops a pattern n number of times
print(P[:8].loop(2))

# Add an offset
print(P[:8].offadd(5))

# Add a multiplied offset
print(P[:8].offmul(5))

# Stutter - Repeat each element n times
print(P[:8].stutter(5))

# Amen
# Merges and laces the first and last two items such that a
# drum pattern "x-o-" would become "(x[xo])-o([-o]-)" and mimics
# the rhythm of the famous "amen break"
d1 >> play(P["x-o-"].amen())
print(P[:8].amen())

# Bubble
# Merges and laces the first and last two items such that a
# drum pattern "x-o-" would become "(x[xo])-o([-o]-)
d1 >> play(P["x-o-"].bubble())
print(P[:8].bubble())
```

## Tutorial 5: Referencing Player Attributes

```python
# You can set variables outside a player
pitches = P[0,1,2,3,4]
harmony = pitches + 2

print(pitches)
print(harmony)

p1 >> pluck(pitches)
p2 >> star(harmony)

# If you set the duration of the second, it might not have the desired effect
p1 >> pluck(pitches)
p2 >> star(harmony, dur=1/2)

# It is possible for one player object to play exactly what another player is.
# To have one player follow another, just use the follow method:
p1 >> pluck(pitches)

p2 >> star(dur=1/2).follow(p1) + 2

# You can explicitly reference attributes such as pitch or duration too:

p2 >> star(p1.pitch) + 2  # this is the same as .follow(p1)

# Works for other attributes too
p1 >> pluck(pitches)
p2 >> star(dur=p1.dur).follow(p1) + 2

# You can reference, and test for the current value
# The == returns a 1 if true and a 0 if false
print(p1.degree)
print(p1.degree == 2)

# This allows you to do conditionals like
p1 >> pluck([0,1,2,3], amp=(p1.degree==1))

p1 >> pluck([0,1,2,3], amp=(p1.degree>1))

# Or change it to a different amp by multiplying by 4
p1 >> pluck([0,1,2,3], amp=(p1.degree==1)*4)

# Chain multiple conditionals
p1 >> pluck([0,1,2,3], amp=(p1.degree==1)*4 + (p1.degree==2)*1)

# Which is the same as
p1 >> pluck([0,1,2,3], amp=p1.degree.map({1:4, 2:1}))
```

## Tutorial 6: Rests

```python
# Rests can be added by using a rest object in the dur array
# The rest silences the note that would have been played.

# Without a rest, 5 notes (yes, a dur=1 would work, but lets be explicit to counterpoint the next example)
p1 >> pads([0,1,2,3,4], dur=[1,1,1,1,1])

# With a rest ... 4 notes and a rest, note "4" is silenced for 4 beats
p1 >> pads([0,1,2,3,4], dur=[1,1,1,1,rest(4)])
```

## Tutorial 7: Clock Basics

```python
# To stop all player objects, you can press Ctrl+.  (Hold Ctrl and hit the period)
# Which is a shortcut for the command:
Clock.clear()

# Change the tempo (this takes effect at the next bar) Default is 120.
Clock.bpm = 144

# To see what is scheduled to be played.
print(Clock)

# To see what the latency is
print(Clock.latency)

# Sometimes you want to know when the start of the next X beat cycle. To
# do this we use the 'mod' method. For example if we want to see when
# the start of the next 32 beat cycle is we can do
print(Clock.mod(32))
```

## Tutorial 8: Scales

```python
# By default, Player Objects use the C Major scale.
# These can be changed by using the keyword arguments 'scale' and 'root'.
# Scales can be defined as an array of semitones, such that the Major scale is [0,2,4,5,7,9,11]
# or one of the predefined scales from the Scale module, e.g. Scale.minor.
# Root refers to the tonic of the scale; 0 being C, 1 is C#, 2 is D and so on.

# The default scale can be changed such that any Player not using a specific scale will be updated.
# This is done using the syntax below (each line is technically equivalent):

Scale.default.set("major")
Scale.default.set(Scale.major)
Scale.default.set([0,2,4,5,7,9,11])

# Or the same thing, but minor:
Scale.default.set("minor")
Scale.default.set(Scale.minor)
Scale.default.set([0,2,3,5,7,10])

# To save some time you can also do
Scale.default = "minor"

#This is the same for the root:
Root.default.set(1)
Root.default.set("C#")

# Or:
Root.default.set(2)
Root.default.set("D")

# To see a list of all scales, use
print(Scale.names())

# You can change the scale used by a player using the 'scale' keyword
p1 >> pads([0,1,2], scale=Scale.minor)

# Similarly, you can change the root note players using the root keyword
# and the Root.default object
p1 >> pads([0,1,2], scale=Scale.minor, root=2)

```

## Tutorial 9: Groups

```python
# Attributes of players, such as degree or scale, can also be changed by directly assigning values to it such that
p1 >> pads([0,2,4,2], scale=Scale.majorPentatonic)

# is equivalent to
p1 >> pads()
p1.degree = [0,2,4,2]
p1.scale = Scale.majorPentatonic

# This is useful if you want to assign the same values to multiple Player Object simultaneously, like so:
p1 >> pads([0,2,4,2])
p2 >> pads([2,1,0,4])
p3 >> pads([2,3])
p1.dur=p2.dur=p3.dur=[1,1/2,1/4,1/4]

p1.stop()
p2.stop()
p3.stop()

# You can reference all the members with similar names
p_all.dur = [1/2,1/4] # Run this while p1, p2, etc are playing!

# or
p_all.amplify = 1

# Or...
p_all.stop()

# Or...
p_all.solo()

# To reduce the amount of typing, Player Objects can be grouped together and their attributes modified in a simpler way:
p1 >> pads([0,2,4,2])
p2 >> pads([2,1,0,4])
p3 >> pads([2,3])
g1 = Group(p1, p2, p3)
g1.dur=[1,1/2,1/4,1/4]

# You can group will _all groups
g1 = Group(p_all, d_all, b1, b2)

# Set the volume on for 4 beats, then off for 4
# This overrides existing amplitudes set in the player object
g1.amp=var([1,0],4)

g1.stop()

# You can use functions to group things together. To execute use CTRL+Return, not ALT+Return.
def tune():
    b1 >> bass([0,3], dur=4)
    p1 >> pluck([0,4], dur=1/2)
    d1 >> play("x--x--x-")
tune()

# or schedule the clock to call other grouped functions
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

## Tutorial 10: Using Vars

```python
# A TimeVar is an abbreviation of "Time Dependent Variable" and is a key feature of FoxDot.
# A TimeVar has a series of values that it changes between after a pre-defined number of beats
# and is created using a var object with the syntax var([list_of_values],[list_of_durations]).

# Generates the values: 0,0,0,0,3,3,3,3...
a = var([0,3],4)            # Duration can be single value
print(int(Clock.now()), a)  # 'a' initally has a value of 0
# >>> 0, 0                  # The first value may differ...

print(int(Clock.now()), a)   # After 4 beats, the value changes to 3
# >>> 4, 3

print(int(Clock.now()), a)   # After another 4 beats, the value changes to 0
# >>> 8, 0

# Duration can also be a list
a = var([0,3],[4,2])
print(int(Clock.now()), a)

# When a TimeVar is used in a mathematical operation, the values it affects also become TimeVars
# that change state when the original TimeVar changes state – this can even be used with patterns:
a = var([0,3], 4)
print(int(Clock.now()), a + 5)   # When beat is 0, a is 5
# >>> 5

print(int(Clock.now()), a + 5)   # When beat is 4, a is 8
# >>> 8

b = PRange(4) + a
print(int(Clock.now()), b)   # After 8 beats, the value changes to 0
# >>> P[0, 1, 2, 3]

print(int(Clock.now()), b)   # After 12 beats, the value changes to 3
# >>> P[3, 4, 5, 6]

# Use 'var' with your Player objects to create chord progressions.
a = var([0,4,5,3], 4)
b1 >> bass(a, dur=PDur(3,8))
p1 >> pads(a + (0,2), dur=PDur(7,16))

# You can add a 'var' to a Player object or a var.
b1 >> bass(a, dur=PDur(3,8)) + var([0,1],[3,1])

b = a + var([0,10],8)

print(int(Clock.now()), (a, b))

# Updating the values of one 'var' will update it everywhere else
a.update([1,4], 8)

print(int(Clock.now()), (a, b))

# Vars can be named ...
var.chords = var([0,4,5,4],4)

# And used later
b1 >> pluck(var.chords)

# Any players using the named var will be updated
var.chords = var([0,1,5,3],4)

# You can also use a 'linvar' that changes its values gradually over time
# Change the value from 0 to 1 over 16 beats
c = linvar([0,1],16)

# Run this multiple times to see the changes happening
print(int(Clock.now()), c)

# Change the amp based off that linvar
p1 >> pads(a, amp=c)

# a 'Pvar' is a 'var' that can store patterns (as opposed to say, integers)
d = Pvar([P[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], P[0, 1, 2, 3, 4, 5, 4, 3, 2, 1]], 8)

print(int(Clock.now()), d)

p1 >> pads(a, amp=c, dur=1/4) + d

# Change the scale every 16 beats
Scale.default = Pvar([Scale.major, Scale.minor],16)

# You even set the value to last forever once it is reached using a special value called "inf"

x = var([0, 1, 2, 3], [4, 4, 4, inf])

print(x) # Keep pressing - it will eventually stop at 3

######################
# Other types of "var"

# There are several sub-classes of "var" that return values between
# the numbers specified. For example a "linvar" gradually change
# values in a linear fashion:

print(linvar([0,1],8)) # keep running to see the value change between 0 and 1

# Example: increase the high-pass filter cutoff over 32 beats

p1 >> play("x-o-", hpf=linvar([0,4000],[32,0]))

# Other types include "sinvar" and "expvar"

print("Linear:", linvar([0, 1], 8))
print("Sinusoidal:", sinvar([0, 1], 8))
print("Exponential:", expvar([0, 1], 8))

#################
# Pattern TimeVar

# Sometimes we might want to store whole patterns within a var but
# if we try to do so, they are automatically laced:

pattern1 = P[0, 1, 2, 3]
pattern2 = P[4, 5, 6, 7]

print(var([pattern1, pattern2], 4))

# To store whole patterns, you need to use a "Pvar" which does
# not lace the values, but stores the patterns instead

print(Pvar([pattern1, pattern2], 4))

p1 >> pluck(Pvar([pattern1, pattern2], 4), dur=1/4)



###########################
# Offsetting the start time

# Another useful trick is offsetting the start time for the var. By
# default it is when the Clock time is 0 but you can specify a different
# value using the "start" keyword

print(linvar([0, 1], 8))
print(linvar([0, 1], 8, start=2))

# This can be combined with Clock.mod() to start a ramp at the start of the#
# next 32 beat cycle:

d1 >> play("x-o-", hpf=linvar([0,4000],[32,inf], start=Clock.mod(32)))
```

## Tutorial 11: Playing Custom Samples

```python
# You can use your own samples by simply dropping audio files into the existing FoxDot sample directories.
# These are found in the 'snd' directory in the root of the FoxDot installation
# (e.g., 'C:\Python27\Lib\site-packages\FoxDot\snd').

# You saw earlier how to work with samples using play(). You can also play samples with loop().
s1 >> loop('foxdot')

# You may notice that this is just playing the first part of the sample over and over again.
# You can tweak the behavior with many of the arguments we've seen thus far for controlling other synths. dur is a good place to start.
s1 >> loop('foxdot', dur=4)

# If you have a folder full of samples that you would like to use in FoxDot, you can call loop() with the full path to the sample.
s1 >> loop('/path/to/samples/quack.wav')

# If you give loop the path to a folder, it will play the first sample it finds. You can change which sample it plays with the sample= arg.

# Play the first sample in my collection
s1 >> loop('/path/to/samples')

# Play the second sample in my collection
s1 >> loop('/path/to/samples', sample=1)

# If you're going to be using a lot of samples from a folder, you can add it to the sample search path. FoxDot will look under all its search paths for a matching sample when you give it a name.
Samples.addPath('/path/to/samples')
s1 >> loop('quack')

# Once you have a search path, you can use pattern matching to search for samples.

# Play the 3rd sample under the 'snare' dir
s1 >> loop('snare/*', sample=2)

# You can use * in directory names too
s1 >> loop('*_120bpm/drum*/kick*')

# ** means "all recursive subdirectories". This will play the first sample
# nested under 'percussion' (e.g. 'percussion/kicks/classic/808.wav')
s1 >> loop('percussion/**/*')

```

## Tutoral 12: SynthDefs

```python


# FoxDot creates music by giving player objects a 'digital instrument'
# to play, which are called 'SynthDefs'. You can see the list of pre-installed
# 'Synths' by executing

print(SynthDefs)

# Each one of these represents a `SynthDef` *object*. These objects are then
# given to Players to play - like giving an instrument to someone in your
# orchestra.

# Writing your own Synth Definitions

# This is a bit more advanced, but if you have already written SynthDefs in
# Supercollider then you might feel at home.  If not, come back to this section
# later.

# FoxDot can access any SynthDef stored on the SuperCollider server,
# but it needs to know it's there. If you have already written a SynthDef
# in SuperCollider and named it \mySynth then you just create a SynthDef
# instance using FoxDot like so:

mySynth = SynthDef("mySynth")

# Using the same variable name in FoxDot as in SuperCollider for your SynthDef
# is a good idea to avoid confusion. If you want to write (or edit) your own
# SynthDef during run-time in FoxDot you can use a SuperCollider API by
# importing the SCLang module. All FoxDot SynthDef objects inherit the
# base-class behaviour, such as low- and high-pass filters and vibrato,
# but these can be overridden or updated easily. If you want to know more
# about digital sound processing and SynthDef creation, check out the
# SuperCollider documentation. Below is an example of creating one in FoxDot:

# Import module for writing SCLang code from Python
from SCLang import *

# Create a SynthDef named 'example' (using the same variable name as the SynthDef name is a good idea)
example = SynthDef("example")

# Create the oscillator (osc) using a sine wave
example.osc = SinOsc.ar(ex.freq)

# And give it a percussive sound envelope (env)
example.env = Env.perc()

# Finally, store it!
example.add()

# How to create a SynthDef

with SynthDef("pads") as pads:
	pads.osc = SinOsc.ar(pads.freq)
	pads.env = Env.perc()

# Equivalent to

pads = SynthDef("pads")
pads.osc = SinOsc.ar(pads.freq)
pads.env = Env.perc()
pads.add()

```

## Tutorial 13: Advanced Clock

```python
# To see what is scheduled to be played.
print(Clock)

# To see what the latency is
print(Clock.latency)

# The clock can schedule anything with a __call__ method using
# It takes an absolute time clue to schedule a functions
# Clock.schedule needs to know the beat to call something on
Clock.schedule()   # raises TypeError

# Schedule an event after a certain durations
# Clock.future needs to know how many beats ahead to call something
Clock.future()     # raises TypeError

# These are equivalent
Clock.schedule(lambda: print("hello"), Clock.now() + 4)
Clock.future(4, lambda: print("hello"))

# To schedule something else
Clock.schedule(lambda: print("hello "))

# We can call something every n beats
Clock.every(4, lambda: print("hello"))

# Get the current clock and add 2.  Useful for scheduling.
print(Clock.now() + 2)

# Issue command on the next bar
nextBar(Clock.clear)

# With a decorator
@nextBar
def change():
    Root.default=4
    Scale.default="minor"
    # etc etc

# You can create your own function, and decorate it, to be able
# to use it in an .every on a Player object
@PlayerMethod
def test(self):
    print(self.degree)

p1 >> pluck([0,4]).every(3, "test")

# And cancel it with
p1.never("test")

```

## Tutorial 14: Player Attributes Reference

```python
# --- TODO: this needs updating

# To see all attributes:
print(Player.get_attributes())

# You can see what effects are available by evaluating
print(FxList)

# Let's use the high pass filter for an example. You can see it's described
# like so:
# "<Fx 'highPassFilter' -- args: hpr, hpf>"

# Each effect has a "master" argument and then child arguments. Here the
# master argument is "hpf" (short for high pass filter) and the child argument
# is "hpr" (short for high pass resonance). The effect is only added when the
# master argument is non-zero:
d1 >> dirt([0,4,2,1], dur=1/2, hpf=4000)

# This sets the high pass filter to 4000 Hz so only frequences in the audio
# signal *above* that are actually heard. Let's change the resonance value. It's
# default value is 1, so let's make it smaller
d1 >> dirt([0,4,2,1], dur=1/2, hpf=4000, hpr=0.3)


# Notice a difference? We can use patterns / vars in our effects to make them
# change over time:
d1 >> dirt([0,4,2,1], dur=1/2, hpf=linvar([0,4000],8), hpr=P[1,1,0.3].stretch(8))

####################
# Reference
####################

####################
# amp - Amplitude (defaults to 1)
# Sets the volume of the note/pattern

d1 >> play("*", dur=1/2, amp=1)

# Half Volume
d1 >> play("*", dur=1/2, amp=.5)

# Creating a pattern with amp
d1 >> play("*", dur=1/2, amp=[1,0,1,1,0])

####################
# amplify - Changes amp, by multiplying agasint the existing value (instead of overwritting)

# Creating a pattern with amp
d1 >> play("*", dur=1/2, amp=[1,0,1,1,0])
d1 >> play("*", dur=1/2, amplify=[.5,1,0])

# Set up a "drop" in the music (Plays at full volume for 28, then 0 for 4)
p1 >> blip([0,1,2,3], amplify=var([1,0],[28,4]))

####################
# bend

####################
# benddelay - See bend

####################
# bits
# The bit depth, in number of bits, that the signal is reduced to;
# this is a value between 1 and 24 where other values are ignored.
# Use crush to set the amount of reduction to the bitrate (defaults to 8)

####################
# bitcrush - See bits

####################
# blur

####################
# bpf - Band Pass Filter

####################
# bpnoise - See bpf

####################
# bpr - See bpf

####################
# bpm

####################
# buf

####################
# channel

####################
# chop
# 'Chops' the signal into chunks using a low frequency pulse wave over the sustain of a note.

####################
# coarse

####################
# comb delay - See echo

####################
# crush

####################
# cut
# Cuts a duration
p1 >> pluck(P[:8], dur=1/2, cut=1/8)
p1 >> pluck(P[:8], dur=1/2, cut=1/4)
p1 >> pluck(P[:8], dur=1/2, cut=1/2)

####################
# cutoff

####################
# decay - See echo

####################
# degree - The degree of the note, or pitch, can be specified by keyword (also the first positional)
p1 >> blip(degree=[0,1,2,3])

# Which is the same as:
p1 >> blip([0,1,2,3])

# Only plays the "root" note of the chord
b1 >> bass(p1.degree[0])

####################
# delay - A duration of time to wait before sending the information to SuperCollider (defaults to 0)

# Delays every 3 note by .1
p1 >> blip([0,1,2,3], delay=[0,0,0.1])

# Delays every 3 note by .5
p1 >> blip([0,1,2,3], delay=[0,0,0.5])

# Plays the note once for each different delays
p1 >> blip([0,1,2,3], delay=(0,0.1))

p1 >> blip([0,1,2,3], delay=(0,0.25))

p1 >> blip([0,1,2,3], delay=(0,.1,.2,.3))

####################
# dist

####################
# dur - Durations (defaults to 1 and 1/2 for the Sample Player)

####################
# echo
# Title keyword: echo, Attribute keyword(s): decay
# Sets the decay time for any echo effect in beats, works best on Sample Player (defaults to 0)
# Multiplied against the sustain value
d1 >> play("x-o-", echo=0.1)

d1 >> play("x-o-", echo=0.5)

p1 >> pluck(P[:8], echo=.25)

p1 >> pluck(P[:8], echo=.5)

p1 >> pluck(P[:8], echo=.5, decay=.5)

####################
# env

####################
# fmod

####################
# formant

####################
# freq

####################
# hpf - High Pass Filter
# Filters out all the frequencies below given value, removing lower freqencies

# 4000 hertz
p1 >> pluck(P[:8], dur=1/2, hpf=4000)

# HPF is 0 for 4 beats, then 4000 for 4 beats
p1 >> pluck(P[:8], dur=1/2, hpf=var([0,4000],[4,4]))

# Linear change on hpf from 0 take 4 beats to get to 4000, 4 beats back to 0
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[4,4]))

# Linear change on hpf from 0 take 8 beats to get to 4000, then reset back to 0
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]))

# With resonance change (default is 1)
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]), hpr=.5)

# With resonance change as a linvar
p1 >> pluck(P[:8], dur=1/2, hpf=linvar([0,4000],[8,0]), hpr=linvar([0.1,1],12))

####################
# hpr - See hpf

####################
# lpf - Low Pass Filter
# Filters out all the frequencies above given value, removing higher freqencies

# 4000 hertz
p1 >> pluck(P[:8], dur=1/2, lpf=400)

# With resonance change as a linvar
p1 >> pluck(P[:8], dur=1/2, lpf=linvar([500,4000],[8,0]), lpr=linvar([0.1,1],12))

####################
# lpr - See lpf

####################
# midinote

####################
# pan
# Panning, where -1 is far left, 1 is far right (defaults to 0)

####################
# pitch - See degree

####################
# pshift

####################
# oct

####################
# rate
# Variable keyword used for misc. changes to a signal. E.g. Playback rate of the Sample Player (defaults to 1)

####################
# room
# Title keyword: room, Attribute keyword(s): mix

# The room argument specifies the size of the room
d1 >> play("x-o-", room=0.5)

# Mix is the dry/wet mix of reverb or how much the reverb is mixed with the source.  1 is all reverb, 0 is no reverb at all. (Default 0.1)
d1 >> play("x-o-", room=0.5, mix=.5)

####################
# Reverb
# See Room

####################
# sample
# Special keyword for Sample Players; selects another audio file from the bank of samples for a sample character.

####################
# scale

####################
# shape

####################
# slide - Slide To
# Slides' the frequency value of a signal to freq * (slide+1) over the duration of a note (defaults to 0)

p1 >> pluck(P[:8], dur=1/2, slide=1)

p1 >> pluck(P[:8], dur=1/2, slide=12)

p1 >> pluck(P[:8], dur=1/2, slide=var([0,-1],[12,4]))

####################
# slidedelay

####################
# slidefrom

####################
# slider

####################
# spread

####################
# spin

####################
# striate

####################
# stutter

####################
# sus - Sustain (defaults to `dur`)

####################
# swell

####################
# vib - Vibrato
# Vibrato - Title keyword: vib, Attribute keyword(s): Vibrato (defaults to 0)

p1 >> pluck(P[:8], dur=1/2, vib=12)

# With child attribute, vibdepth (default 0.2)
p1 >> pluck(P[:8], dur=1/2, vib=12, vibdepth=0.5)

####################
# vibdepth - See vib
```

## Tutorial 15: Patterns Generators Reference

```python
# There are several other Pattern classes in FoxDot that help you generate arrays of numbers but also behave
# in the same way as the base Pattern. To see what Patterns exist and have a go at using them, execute
print(classes(Patterns.Sequences))



####################
# PEuclid
# PEuclid(n, k)
# Returns the Euclidean rhythm which spreads 'n' pulses over 'k' steps as evenly as possible.

# 3 pulses over 8 steps
print(PEuclid(3, 8))



####################
# PDur
# PDur(n, k, start=0, dur=0.25)
# Returns the actual durations based on Euclidean rhythms (see PEuclid) where dur is the length of each step.
# Spreads 'n' pulses over 'k' steps as evenly as possible

print(PDur(3,8)) # P[0.75, 0.75, 0.5]

print(PDur(5,8))

# Gives a list of 3 dur, appened with a list of 5 dur
print(PDur([3,5],8))

d1 >> play("x", dur=PDur(5,8))



####################
# PIndex
# Returns the index being accessed

print(PIndex())
print(PIndex()*4)



####################
# PSine
# PSine(n=16)
# Returns values of one cycle of sine wave split into 'n' parts

# Split into 5 parts
print(PSine(5))

# Split into 10
print(PSine(10))



####################
# PTri
# PTri(start, stop=None, step=None)
# Returns a Pattern equivalent to `Pattern(range(start, stop, step)) with its reversed form appended.
# Think of it like a "Tri"angle.

# Up to 5 then down to 1
print(PTri(5))

# Up to 8 then down to 1
print(PTri(8))

# From 3 to 10, then down to 4
print(PTri(3,10))

# From 3 to 30, by 2, then down to 4
print(PTri(3,20,2))

# Up to 4, then down to 1, then up to 8, then down to 1
print(PTri([4,8]))

p1 >> pluck(PTri(5), scale=Scale.default.pentatonic)

# Same as
p1 >> pluck(PRange(5) | PRange(5,0,-1), scale=Scale.default.pentatonic)



####################
# PRand
# PRand(start, stop=None)
# Returns a random integer between start and stop.

# Returns a random integer between 0 and start.
print(PRand(8)[:5])

# Returns a random integer between start and stop.
print(PRand(8,16)[:5])

# If start is a container-type it returns a random item for that container.
print(PRand([1,2,3])[:5])

# You can supply a seed
print(PRand([1,2,3], seed=5)[:5])

# Keeps generating random tune
p1 >> pluck(PRand(8))

# Creates a random list, and iterates over that same list
p1 >> pluck(PRand(8)[:3])



####################
# PRhythm
# PRhythm takes a list of single durations and tuples that contain values that can be supplied to the `PDur`

# The following plays the hi hat with a Euclidean Rhythm of 3 pulses in 8 steps
d1 >> play("x-o-", dur=PRhythm([2,(3,8)]))

print(PRhythm([2,(3,8)]))



####################
# PSum
# PSum(n, total)
# Returns a Pattern of length 'n' that sums to equal 'total'

# Returns a pattern of length 2, with elements summed up to 8
print(PSum(3,8))

# Returns a pattern of length 5, with elements summed up to 4
print(PSum(5,4))



####################
# PStep
# PStep(n, value, default=0)
# Returns a Pattern that every n-term is 'value' otherwise 'default'

# Every 4, make it 1, otherwise default to 0
print(PStep(4,1))

# Every 8, make it 6, otherwise, 4
print(PStep(8,6,4))

# Every 5, make it 2, otherwise, 1
print(PStep(5,2,1))



####################
# PWalk
# PWalk(max=7, step=1, start=0)

# By default, returns a pattern with each element randomly 1 higher or lower than the previous
print(PWalk()[:16])

# Changing step
print(PWalk(step=2)[:16])

# With max
print(PWalk(max=2)[:16])

# Start at a non-zero number
print(PWalk(start=6)[:16])



####################
# PWhite
# PWhite(lo=0, hi=1)
# Returns random floating point values between 'lo' and 'hi'

# Lo defaults to 0, hi defaults to 1
print(PWhite()[:8])

# Returns random numbers between 1 and 5
print(PWhite(1,5)[:8])



####################
# Custom Generator Patterns

# Custom generator patterns can be made by subclassing GeneratorPattern
# and overriding `GeneratorPattern.func`

class CustomGeneratorPattern(GeneratorPattern):
    def func(self, index):
        return int(index / 4)

print(CustomGeneratorPattern()[:10])

# This can be done more consisely using `GeneratorPattern.from_func`,
# passing in a function which takes an index and returns some pattern item.

def some_func(index):
    return int(index / 4)

print(GeneratorPattern.from_func(some_func)[:10])

# We can use lambdas too
print(GeneratorPattern.from_func(lambda index: int(index / 4))[:10])

```