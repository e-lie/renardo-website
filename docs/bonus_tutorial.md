


Besides the 2-character variables that are pre-reserved, you can create your
own with your own names

```python
foo = Player()
foo >> pluck()
```

The >> in Python is usually reserved for a type of operation, like + or -, but it is not the case in FoxDot.
If a user re-executes the code, FoxDot will update p1 instead of creating a PlayerObject,
which means you can make changes to your music using just one line of code.

If you now give your player object some arguments, you can change the notes being played back.
The first argument should be the degree of the note to be played
(default is the lowest note of octave 5 of the major scale) and does not need to be specified by name.

Python, like most programming languages, using zero-indexing when accessing values in an array,
which means that 0 refers to the first note of the scale.
Give your player object instructions to make music with their Synth.
The first argument is the note of the scale to play. The following code
plays the first three notes of the default scale (major) on repeat.



 synth functions are called "SynthDef" in the supercollider tradition
 

If you don't understand this yet, don't worry, more about patterns in the pattern tutorial



# You could store several player instances and assign them at different times
proxy_1 = pads([0,1,2,3], dur=1/2)
proxy_2 = pads([4,5,6,7], dur=1)

p1 >> proxy_1 # Assign the first to p1

p1 >> proxy_2 # This replaces the instructions being followed by p1