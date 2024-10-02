---
title: Preparation
---


**Following guidelines will help and protect your ears and your equipment as a beginner with Renardo.** 

---

**Activate "SafetyNet"**

SafetyNet is a SuperCollider quark that protects users from dangerous audio signals. Install the necessary module in SuperCollider with the following command line:

```
Quarks.install("SafetyNet")
```

Go with your cursor over the respective line and press _**Ctrl + Return (Cmd + Enter)**_ to trigger the command

Hint: There is a graphical window version for installing Quark elements. Use the command line below for this:

```
Quarks.gui
```

---

**Always start low**

If you start with a new player, it is advised starting with lower volume. The synths or samples can appear unpredictably loud depend on changes in attributes. Furthermore, it will sound nicer in its entire experience, if an instrument comes in with increasing volume instead to overwhelm other sounds in the mix.

```python
p1 >> pluck(amplify=0.1) ... p1 >> pluck(amplify=0.3)
```

---

**Experiment with care**

Be cautious while using attribute values when experimenting. For example a high octave can lead to nasty sounds, which not only can hurt your equipment of your machine, but can damage your ears while wearing headphones as well.

In traditional music theory, the octave of middle C is 3. However, it is 5 in Renardo.
```python
oct=5
```

Bad example:
```python
oct=60
```

To get all default values of basic attributes of a player use:
```python
print(Player("pluck").info())
```

---