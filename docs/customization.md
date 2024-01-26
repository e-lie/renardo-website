

## User config directory

Renardo stores configurations and resources in a (traditional) user config directory located:

- On Linux: `/home/<user>/.config/renardo`
- On MacOS: `/home/<user>/.config/renardo`
- On Windows: `C:\Users\<user>\AppData\Roaming\renardo`

## Renardo pipe mode

Renardo can execute code from a terminal (very usefull feature from FoxDot).

When launched like that (`renardo --pipe` or clicking the button in TUI) you get a blank terminal and you for example:

- type `p1 >> pluck()`
- then hit Return twice.
- `p1.stop()` + hit Return twice

You can execute any renardo/python code like that.

This mode is used by renardo pulsar extention (Pulsardo)

## Renardo library mode

The core fo Renardo is in a python package called `renardo_lib` that can be imported in any Python environment (python/ipython/Jupyter/...)

- Try launch `python` interpreter
- execute `from renardo_lib import *`

You can then execute renardo musical code

This mode can be used to livecode renardo using **Vim** + **vim-slime** or with **VSCod(ium)** + **Python extension**.

## Samples !

Samples packs are hosted at https://samples.renardo.org then downloaded inside the user config directory.

### Downloading bonus samples packs

For now there is 2 samples pack:

- **FoxDot default**: containing the pretty good base samples from FoxDot.
- **PitchGlitch samples**: samples gathered and organised by `iShapeNoise` (Big thanks !) (source https://gitlab.com/iShapeNoise/foxdot_sampledb_pitchglitch)

FoxDot default samples are required and downloaded before first renardo startup.

To download a new pack for example extensive PitchGlitch samples pack:

- find the exact samples pack name from https://samples.renardo.org
- Inside renardo python interpreter (or renardo pipe mode) execute the following code
- waaaiiiit for completion:

```python
from renardo_gatherer.samples_download import SPackManager
spackmanager = SPackManager()
spackmanager.download_samples_pack('1_pitchglitch_samples')
```

...Quicker and easier download using the renardo terminal UI to come :) ...


### Submitting new community samples pack

WIP

### Credits for FoxDot default samples pack

FoxDot's audio files have been obtained from a number of sources but I've lost record of which files are attributed to which original author. Here's a list of thanks for the unknowing creators of FoxDot's sample archive.

    Legowelt Sample Kits
    Game Boy Drum Kit
    A number of sounds courtesy of Mike Hodnick's live coded album, Expedition
    Many samples have been obtained from http://freesound.org and have been placed in the public domain via the Creative Commons 0 License: http://creativecommons.org/publicdomain/zero/1.0/ - thank you to the original creators
    Other samples have come from the Dirt Sample Engine which is part of the TidalCycles live coding language created by Yaxu - another huge amount of thanks.

If you feel I've used a sample where I shouldn't have, please get in touch!