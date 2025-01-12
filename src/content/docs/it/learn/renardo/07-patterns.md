---
title: Patterns
---

### Pattern

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
