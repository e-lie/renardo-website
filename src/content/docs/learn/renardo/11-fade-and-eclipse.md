---
title: New utility player methods - fade and eclipse
---

If you would like to create more dynamic live loops in Renardo and subtle music a common need would be :

1. to silence the loop periodically for example 4 beats every 32 beats to create automatic kinda breaks in the music
2. to start a loop by fading in and stop by fading out to make the music smoother
3. transition from a volume to another gradually

With FoxDot you could do that manually by using timevars and linear timevars with the amplify parameter like this:

```python
b1 >> pluck([0,3,0,4,5], dur=.5, amplify=linvar([0,1], [16,inf], start=Clock.mod(4)))
# fadein will start at the beginning of next 4 beats bar and take 16 beats to rise
# then to fade out and stop
b1.amplify = linvar([1,0], [16,inf], start=Clock.mod(4))

b1.stop()

# to make a periodic pause of the loop (here 4 beat every 32 beat)
b1 >> pluck([0,3,0,4,5], dur=.5, amplify=var([1,0], [28,4]))

```

Renardo has new player methods to ease this while livecoding

```python
b1 >> pluck([0,3,0,4,5], dur=.5).fadein(16)

b1 >> pluck([0,3,0,4,5], dur=.5).fadeout(16)

# fadeout will automatically stop the player when the volume reaches 0
# If you don't want it to stop you can use :

b1 >> pluck([0,3,0,4,5], dur=.5).fadeout(16, autostop=False)

# More generally if you want to gradually change the amplitude/volume of the loop
# from the current value to another you can use the fade method :

b1 >> pluck([0,3,0,4,5], dur=.5, amplify=0).fade(16, fvol=.5) # will fade from 0 to .5 on 16 beats

b1.fade(dur=4, fvol=.8) # will then fade from current .5 to .8 on 4 beats

b1.fade(dur=4, fvol=0, autostop=False) # will then fade to 0 while keeping the player running so you can fadein back later
```

Another cool point of fade, fadein and fadeout is that when the target value is reached the parameter is set back to a simple float value rather than keeping a linvar instance running until the end of time (inf).

For the periodic pause the utility method is called `eclipse` :

```python
b1 >> pluck([0,3,0,4,5], dur=.5).eclipse(4, 32) # will pause the player 4 beats every 32 beats
# the silent period is at the start of the 32 beats cycle
# if you want to rather pause at the end or in the middle of the cycle :
b1 >> pluck([0,3,0,4,5], dur=.5).eclipse(dur=4, total=32, leftshift=16) # eclipse start at the 16th beat of the cycle
b1 >> pluck([0,3,0,4,5], dur=.5).eclipse(4, 32, 28) # eclipse start at the 16th beat of the cycle
```

There more details and similar methods so here is the code if you want and can read the signatures : https://github.com/e-lie/renardo/blob/68ef81a2755d6b608fdc2a18f80d8a1e31550834/renardo_lib/renardo_lib/Players.py#L2092


Otherwise all of this will be further documented soon.