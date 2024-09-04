---
title:  Patterns intro, combining lists and tuples
---

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