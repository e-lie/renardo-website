Here is a recompilation of FoxDot in app tutorial.

# 0 - Executing code and making sound

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

# 1 - Playing Notes

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

# 2 - Basic synth parameters

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

# 3 - Patterns intro : combining lists and tuples

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

## 6 - Next steps

There is a lot more algorithmic music techniques to master with FoxDot...

Tutorial on this website will continue to grow.

For now you can ...

- ...try some code examples (Soon)

- ...continue using in app tutorials (starting with chapter 2) : you can access them by launching renardo with FoxDotEditor visiting "Tutorials" Menu.

- ..there is also the great tutorial by iShapeNoise here : https://gitlab.com/iShapeNoise/foxdot_codingmusic_part1

