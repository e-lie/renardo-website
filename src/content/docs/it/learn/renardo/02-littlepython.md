---
title: Start a little Python
---


As Renardo uses Python, we start with some Python code. To execute code in Renardo, make sure your text cursor is in the 'block' of code
(sections of text not separated by blank lines) and press `Ctrl+Return`.

Enter the following line in the text part of the editor and press Ctrl+Enter (Cmd+Return) while the cursor is positioned over at the line.
```python
2 + 2
```

The output of an executed code is displayed in the console in the lower window of the program. The console displays the line you entered. Use the Python function **print()** to display the result.
```python
print(2 + 2)
```

Now we're going to wrap the equation in a variable. We will use variables often. Write the 2 lines directly below each other so that it can be completely executed as a block:
```python
a = 2 + 2

print(a)
```

Variables can also be combined:
```python
a = 2
b = 3
c = a + b
print(c)
```

If you only want to execute one line within the block, move the cursor over the line and press **Alt + Enter**. Try some text in quotation marks:
```python
print("Hello lively coder!")
```

The general philosophy of Renardo is to create “Player()”-objects as simply as possible, while taking keyword arguments that mirrors SuperCollider's Pbind-SynthDef relationships and schedules their actions on a globally accessible clock.

If you want to know more about a function or class – just type help followed by the name of that Python object in brackets >> _help(object)_, e.g.:
```python
help(Player())
```

A SynthDef in Renardo is a Player() object. It is essentially your digital instrument you will use in your composition.

