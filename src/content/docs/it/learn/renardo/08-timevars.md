---
title: TimeVars
---


### TimeVar *var()*

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