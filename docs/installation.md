

 > Disclaimer : Renardo is in the process to propose an integrated, actually simple install process for newcomers. For now it can still be a bumpy road.

## Summary

Renardo is either:
- a **binary application** packaged using **pyinstaller** (_the "easy" install_)
- a **Python library** (actually a set of Python packages) meant to be installed with `pip` the Python package manager. (_the manual install_)

To produce sound, Renardo uses **SuperCollider** (a classical, infinitely programmable synth/composition/experimentation environment).

## Install SuperCollider

- Windows : Install SuperCollider with the official installer (https://supercollider.github.io/downloads) 
- MacOS : Install SuperCollider with the official installer (https://supercollider.github.io/downloads) 
- Linux : Install SuperCollider with your prefered package manager (`sudo apt install supercollider`, `sudo pacman -S supercollider`, etc...)

## Launch SuperCollider and make it work !

- _Facultative Linux step_ : you need JACK server started (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) or `pipewire` with the `pipewire-jack` module installed.
- Open SuperCollider IDE (`scide` on linux).
- Type code `s.boot` or `Server.default.boot` and hit Ctrl+Return. Look for errors in the post window
- Type code `{ SinOsc.ar() }.play;` and execute like before. You should ear a simple sound hurra !

If it works you can quit SuperCollider for now.

If it didn't you may need to select the proper sound device by following this doc: https://doc.sccode.org/Reference/AudioDeviceSelection.html

On recent M1/M2 Mac computers you may need to manually switch sound device to use headphones (because Apple engineers like to break things/standards)

You can find help here to debug Supercollider : https://scsynth.org/

## Renardo "Easy" install : download and use renardo binary

Download renardo and uncompress it somewhere:

- Renardo binary release on github : https://github.com/e-lie/renardo/releases/tag/v0.9.3

To launch renardo:
- Windows: just double click the binary
- On MacOS and Linux: open a terminal, navigate to renardo's directory with `cd` and launch `./renardo-0.9.3` or `./renardo`

To do that we use commands `cd`, `ls` and `pwd`: if you don't know about that here are
tutorials to learn the command line basic:
- https://www.davidbaumgold.com/tutorials/command-line/
- https://www.youtube.com/watch?v=QAt_Ej4Dqpc (MacOS but works quite the same way on Linux)

### Renardo initialisation

When launching renardo you should have a special interface with 2 buttons you can click upon:
1. download the (required) default samples (it is not quick, wait until the end)
2. configure SuperCollider to work with renardo (create the class and startup files)

Then **before starting renardo** we need to start SuperCollider again

### Start supercollider

- Open SuperCollider IDE
- Type `Renardo.start;` and hit Ctrl+Return (check for errors in the "post" window ?)
- _Facultative_: start Renardo midi by executing `Renardo.midi;`.

### Start and use Renardo

- Start renardo like before.
- Click "start renardo using FoxDot editor" button
- type `b1 >> blip()` and execute

It should produce some blips \o/

If it doesn't, first try to quit both software and just start SuperCollider first and Renardo afterwards or look at Troubleshooting section.

You can then continue to this [Introduction Tutorial](/intro_tuto.md "Introduction tutorial") !

## Launch Renardo everyday

- _Facultative Linux step_ : if you use JACK server start it before (no need if you use `pipewire-jack`)
1. Launch SuperCollider IDE and execute : `Renardo.start;` and `Renardo.midi;` -->
1. Launch `renardo` binary or `renardo` library (see below) and open FoxDot editor.

## Use another editor ?

Classical FoxDot editor is cool to livecode but miss some features (multiple file editing, versioning, easy visual customization).

You can use Pulsar instead or another editor. see [Use another code editor](/alternative_editors.md "Alternative editors")

## Renardo library/manual installation

### Prerequisites to manual installation : intalling Python

- Windows : Install **Python** with the official installer (https://www.python.org/downloads/windows/) download and use : `Windows installer 64bits`.

> WARNING: don't forget to check ~"add Python to path" checkbox before clicking install.

- Linux : Python is usally already installed. Check by typing `python --version`

- MacOS : Python is already installed but **if you have an old version of MacOS** you should maybe **install a new Python version** using the official installer (https://www.python.org/downloads/macos/)

### Install Renardo library

#### Windows or MacOS

- You can simply open a terminal (PowerShell on windows) and launch `pip install renardo` (or `pip3 install renardo` if the preceding fails)
- Launch renardo (with FoxDot editor) by launching `renardo` in the terminal (or you can try `python -m renardo` or `python3 -m renardo`)

#### Linux

On Linux you should not install pip packages globally anymore but use a virtual environment instead. You can learn how to do that for example here : https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/

Or simpler use pipx:

- Install it with your package manager of choice (`sudo apt install pipx`, `sudo pacman -S python-pipx`, ...)
- `pipx ensurepath` in a terminal
- Then you can simply install renardo by launching `pipx install renardo`.
- Then launch renardo with: `renardo`

## Troubleshooting

If `b1 >> blip()` does not produce sound, should try in this order:

1. Close and start renardo again ! It may help to connect to the supercollider backend...
1. Check if programs named `sclang`/`scsynth` are running (using `Task Manager` or `System Monitor` for example). If not **start supercollider manually** with:
    - _Facultative Linux step_ : you need JACK server started (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) or `pipewire` with the `pipewire-jack` module installed.
    - In the editor write `Renardo.start` and activate with **Ctrl+Return** then check for errors in the log pannel.

You can also ask for help on the FoxDot Telegram channel.