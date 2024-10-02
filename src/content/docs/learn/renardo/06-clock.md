---
title: Clock 
---


### Basics


To stop all player objects, you can press **Ctrl+.** (Hold Ctrl and hit the period). Which is a shortcut for the command:
```python
Clock.clear()
```

Change the tempo (this takes effect at the next bar) Default is 120.
```python
Clock.bpm = 144
```

To see what is scheduled to be played.
```python
print(Clock)
```

To see what the latency is
```python
print(Clock.latency)
```

Sometimes you want to know when the start of the next X beat cycle. To do this we use the 'mod' method. For example if we want to see when the start of the next 32 beat cycle is we can do
```python
print(Clock.mod(32))
```

### Advanced

The clock can schedule anything with a __call__ method using. It takes an absolute time clue to schedule a functions - Clock.schedule needs to know the beat to call something on.
```python
Clock.schedule()   # raises TypeError
```

Schedule an event after a certain durations - Clock.future needs to know how many beats ahead to call something
```python
Clock.future()     # raises TypeError
```

These are equivalent
```python
Clock.schedule(lambda: print("hello"), Clock.now() + 4)
Clock.future(4, lambda: print("hello"))
```

To schedule something else
```python
Clock.schedule(lambda: print("hello "))
```

We can call something every n beats
```python
Clock.every(4, lambda: print("hello"))
```

Get the current clock and add 2. - Useful for scheduling.
```python
print(Clock.now() + 2)
```

Issue command on the next bar
```python
nextBar(Clock.clear)
```

With a decorator
```python
@nextBar
def change():
    Root.default=4
    Scale.default="minor"
    # etc etc
```

You can create your own function, and decorate it, to be able to use it in an .every on a Player object
```python
@PlayerMethod
def test(self):
    print(self.degree)

p1 >> pluck([0,4]).every(3, "test")
```

And cancel it with
```python
p1.never("test")

```