### Start and use Renardo

- Start renardo: `renardo`
- Click "start renardo using FoxDot editor" button
- type `b1 >> blip()` and execute

It should produce some blips \o/

If it doesn't, first try to quit both software and just start SuperCollider first and Renardo afterwards or look at Troubleshooting section.

You can then continue to this [Introduction Tutorial](/intro_tuto.md "Introduction tutorial") !

## Launch Renardo everyday

<!-- #### Windows, Linux or MacOS -->
- _Facultative Linux step_ : if you use JACK server start it before (no need if you use `pipewire-jack`)

- You can simply open a terminal (PowerShell on windows)
- Launch renardo (with FoxDot editor) by launching `renardo` in the terminal (or you can try `python -m renardo` or `python3 -m renardo`)
- Choose the FoxDot editor button (or see below)

## Troubleshooting

 > Disclaimer : Renardo is in the process to propose an integrated, actually simple install process for newcomers. For now it can still be a bumpy road.

### Summary

Renardo is either:
- a **binary application** packaged using **pyinstaller** (_the "easy" install_)
- a **Python library** (actually a set of Python packages) meant to be installed with `pip` the Python package manager. (_the manual install_)

To produce sound, Renardo uses **SuperCollider** (a classical, infinitely programmable synth/composition/experimentation environment).

If `b1 >> blip()` does not produce sound, should try in this order:

1. Close and start renardo again ! It may help to connect to the supercollider backend...
1. Check if programs named `sclang`/`scsynth` are running (using `Task Manager` or `System Monitor` for example). If not **start supercollider manually** with:
    - _Facultative Linux step_ : you need JACK server started (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) or `pipewire` with the `pipewire-jack` module installed.
    - In the editor write `Renardo.start` and activate with **Ctrl+Return** then check for errors in the log pannel.

You can also ask for help on the FoxDot Telegram channel.

## Use another editor ?

Classical FoxDot editor is cool to livecode but miss some features (multiple file editing, versioning, easy visual customization).

You can use Pulsar instead or another editor. see [Use another code editor](/alternative_editors.md "Alternative editors")