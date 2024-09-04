---
title:  Basic synth parameters
---

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