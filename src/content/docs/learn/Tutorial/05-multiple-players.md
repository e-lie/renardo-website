---
title:  Controlling multiple players
---

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