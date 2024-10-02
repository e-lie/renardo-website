---
title: Scales
---


### Play through all scales

_Use the following code to iterate through all of the available scales Renardo provides._

Displays all available scales:
```python
print(Scale.names())
```

Assign the selected scale as the default:
```python
Scale.default=Scale.chromatic
```

Variable to assign a step to each note on the scale:
```python
steps=len(Scale.default)
```

Play the notes through the scale:
```python
p1 >> pluck(P[:steps])
```
