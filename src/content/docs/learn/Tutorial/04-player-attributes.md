---
title: Player attributes
---

You can also assign values to the attributes of player objects directly

```python
p1 >> pluck([0,2], oct=5)

p1.oct = 4
```

To display all the names of player attributes, just execute

```python
print(Player.get_attributes())
```

More about those later...