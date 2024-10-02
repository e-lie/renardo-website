---
title: Loop Player
---

### Loop Player Object

You can use your own samples by simply dropping audio files into the existing FoxDot sample directories. These are found in the **snd** directory in the root of the Renardo installation (e.g., '/home/user/.config/renardo/samples/').

You saw earlier how to work with samples using **play()**. The **loop** Player() object is similar to **play**. However, it plays an audio file by a given place given by a string containing "absolute_path/file_name" together, instead of using a sample file of an installed sample pack of Renardo.

You can also play samples with **loop()**.
```python
s1 >> loop('foxdot')
```

You may notice that this is just playing the first part of the sample over and over again. You can tweak the behavior with many of the arguments we've seen thus far for controlling other synths. dur is a good place to start.
```python
s1 >> loop('foxdot', dur=4)
```

If you have a folder full of samples that you would like to use in FoxDot, you can call **loop()** with the full path to the sample.
```python
s1 >> loop('/path/to/samples/quack.wav')
```

If you give loop the path to a folder, it will play the first sample it finds. You can change which sample it plays with the **sample=** arg.

Play the first sample in my collection
```python
s1 >> loop('/path/to/samples')
```

Play the second sample in my collection
```python
s1 >> loop('/path/to/samples', sample=1)
```

If you're going to be using a lot of samples from a folder, you can add it to the sample search path. FoxDot will look under all its search paths for a matching sample when you give it a name.
```python
Samples.addPath('/path/to/samples')
s1 >> loop('quack')
```

Once you have a search path, you can use pattern matching to search for samples. Play the 3rd sample under the 'snare' dir:
```python
s1 >> loop('snare/*', sample=2)
```

You can use * in directory names too:
```python
s1 >> loop('*_120bpm/drum*/kick*')
```

** means "all recursive subdirectories". This will play the first sample nested under 'percussion' (e.g. 'percussion/kicks/classic/808.wav')
```python
s1 >> loop('percussion/**/*')

```

You can put files in a special folder located in "/snd/loop" which can be opened by going to “Help & Settings” and then “Open Samples Folder” from the FoxDot editor menu. You don’t need to supply the full path (or extension) for files in this folder:
```python
l1 >> loop("my_file", dur=4)
```

To see all the files in this folder use print(Samples.loops). If you want to play with the playback order, you can supply a “position” argument after the file name that Renardo will iterate through based on the duration.

Play first 4 beats of audio in order:
```python
l1 >> loop("my_file", P[:4], dur=1)
```

Play first beats in random order:
```python
l1 >> loop("my_file", P[:4].shuffle(), dur=1)
```

If you know the bpm of the audio file and wish to play it at the current tempo, you can supply the player with a tempo argument. For example, my_file could be a drum beat at 135 bpm but the current tempo is 120, I can fit the tempo of my_file to the clock like so:

First 4 beats in 1 beat steps:
```python
l1 >> loop("my_file", P[:4], dur=1, tempo=135)
```

First 4 beats in 0.5 beat steps:
```python
l1 >> loop("my_file", P[:8]/2, dur=0.5, tempo=135)
```

---
### Time stretching


Time stretching the audio in this fashion will change the pitch. If the audio is pitched, you may wish the time-stretch it without losing that information. This is possible using the **striate**. This cuts the file into lots of little segments and plays them back spread out over the course of the duration value – this will play the entire audio file. The larger the audio file, the larger the number you will probably want to use. Using the example above, you may want to use a striate value of 100-200 for a smoother playback:

Stretch the file using 100 segments:
```python
l1 >> loop("my_file", dur=4, striate=100)`
```

Stretch it using 10 segments - listen to the difference:
```python
l1 >> loop("my_file", dur=4, striate=10)
```

An extra attribute for **loop** is **beat_stretch=True**, which will stretch the audio file length into its given duration.


---
### Try This!

Search under [www.wavsource.com](https://www.wavsource.com/) or [www.findsounds.com](https://www.findsounds.com/) for 2-3 short audio files. Voices, vocals, beat loops, instruments or ambient noise are best.

The loop synth is designed to let you play longer audio files (>1 sec) and manipulate them. To get started, just supply the filename you want to play and the duration you want to play in beats:
```python
l1 >> loop("path/to/my/file.wav", dur=32, sus=32)
```

