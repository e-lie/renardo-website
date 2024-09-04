---
title: Executing code, making and stopping sound
---

To execute code in Renardo/FoxDot, make sure your text cursor is in the 'block' of code
(sections of text not separated by blank lines) and press `Ctrl+Return`

for instance try typing `print("Hello livecoding !")` then ensure your cursor is on this code line and press `Ctrl+Return`

To execute just a single line, even in a block, press `Alt+Return`

All two-character variable names, such as `p1`, `zz` or `k7`, are reserved for **Players** .

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