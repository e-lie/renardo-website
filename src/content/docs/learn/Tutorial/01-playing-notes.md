---
title: Playing Notes
---


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