

 > Disclaimer : Renardo is in the process to propose an integrated, actually simple install process for newcomers. For now it can still be a bumpy road.

## Summary

Renardo is either:
- a **binary application** packaged using **pyinstaller** (_the "easy" install_)
- a **Python library** (actually a set of Python packages) meant to be installed with `pip` (or `pipx`) the Python package manager. (_the manual install_)

To produce sound, Renardo uses **SuperCollider** (a classical, infinitely programmable synth/composition/experimentation environment).

## Install SuperCollider

- Windows : Install SuperCollider with the official installer (https://supercollider.github.io/downloads) 
- MacOS : Install SuperCollider with the official installer (https://supercollider.github.io/downloads) 
- Linux : Install SuperCollider with your prefered package manager (`sudo apt install supercollider`, `sudo pacman -S supercollider`, etc...)

### Launch SuperCollider and make it work !

- _Facultative Linux step_ : you need JACK server started (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) or `pipewire` with the `pipewire-jack` module installed.
- Open SuperCollider IDE (`scide` on linux).
- Type code `s.boot` or `Server.default.boot` and hit Ctrl+Return. Look for errors in the post window
- Type code `{ SinOsc.ar() }.play;` and execute like before. You should ear a simple sound hurra !

If it works you can quit SuperCollider for now.

If it didn't you may need to select the proper sound device by following this doc: https://doc.sccode.org/Reference/AudioDeviceSelection.html

On recent M1/M2 Mac computers you may need to manually switch sound device to use headphones (because Apple engineers like to break things/standards)

You can find help here to debug Supercollider : https://scsynth.org/

### Test if `sclang` program is in PATH (MacOS only)

- Open a terminal and launch `sclang`. If the answer is `not found` you have to understand the following:

By default MacOS install of SuperCollider doesn't add the programs to the PATH environment variable. This prevents renardo from being able to launch SuperCollider backend automatically.

You can either:

- Add `sclang`  to PATH : `sclang` is located somewhere like `/Applications/SuperCollider.app/content/sclang` you can follow this tutorial : https://techpp.com/2021/09/08/set-path-variable-in-macos-guide/
- Manually start the SuperCollider backend : launch SuperCollider application and execute `Renardo.start;` before starting renardo

## Renardo binary install (Windows and Linux only)

Binaries are not up to date for now. Please use the library install instead. This will be fixed soon (automatic build of binaries)

<!-- This method is especially usefull for Windows systems where Python environments are not installed by default and can become messy.

Download renardo and uncompress it somewhere:

- Renardo binary releases on github : https://github.com/e-lie/renardo/releases/

To launch renardo:
- Windows: just double click the binary
- Linux: open a terminal, navigate to renardo's directory with `cd` and launch `./renardo-0.9.3` or `./renardo`

To do that we use commands `cd`, `ls` and `pwd`: if you don't know about that here are
tutorials to learn the command line basic:
- https://www.davidbaumgold.com/tutorials/command-line/
- https://www.youtube.com/watch?v=QAt_Ej4Dqpc (MacOS but works quite the same way on Linux) -->

## Renardo library install

### Windows or MacOS

- You can simply open a terminal (PowerShell on windows) and launch `pip install renardo` (or `pip3 install renardo` if the preceding fails)
- Launch renardo (with FoxDot editor) by launching `renardo` in the terminal (or you can try `python -m renardo` or `python3 -m renardo`)

### Linux

On Linux you should not install pip packages globally anymore but use a virtual environment instead. You can either :

- learn how to manually create a virtualenv : https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/
- install and use `pipx` :
    - Install it with your package manager of choice (`sudo apt install pipx`, `sudo pacman -S python-pipx`, ...)
    - `pipx ensurepath` in a terminal
    - Then you can simply install renardo by launching `pipx install renardo`.
    - Then launch renardo with: `renardo`

## Renardo initialisation

When launching renardo you should have a special interface with 2 buttons you can click upon:
1. download the (required) default samples (it is not quick, wait until the end)
2. configure SuperCollider to work with renardo (create the class and startup files)

## Renardo start automatic or manual

Renardo can autostart the SuperCollider backend and a code editor for you or you can do that on your own:

- _Facultative Linux step_ : if you use JACK server start it before (no need if you use `pipewire-jack`)

- Automatic mode: launch `renardo` in a terminal then click the buttons in the terminal interface to start the backend and editor. If you use Pulsar you still have to install Pulsardo extension and start it manually (see doc)

- Manual mode : launch SuperCollider backend manually : open SuperCollider IDE and execute `Renardo.start;` then either:
    - launch Pulsar manually and start the Pulsardo extension
    - launch FoxDot editor directly with: `renardo --foxdot-editor`

### Test and use Renardo

Once renardo foxdot editor or Pulsardo is launched

- type `b1 >> blip()` and execute

It should produce some blips \o/

If it doesn't, first try to quit both software and just start SuperCollider first and Renardo afterwards or look at Troubleshooting section.

You can then continue to this [Introduction Tutorial](/intro_tuto.md "Introduction tutorial") !

## Troubleshooting

If `b1 >> blip()` does not produce sound, should try in this order:

1. Close and start renardo again ! It may help to connect to the supercollider backend...
1. Check if programs named `sclang`/`scsynth` are running (using `Task Manager` or `System Monitor` for example). If not **start supercollider manually** with:
    - _Facultative Linux step_ : you need JACK server started (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) or `pipewire` with the `pipewire-jack` module installed.
    - In the editor write `Renardo.start` and activate with **Ctrl+Return** then check for errors in the log pannel.

You can also ask for help on the FoxDot Telegram channel.

Some common errors:

#### SuperCollider is not ready

If SuperCollider is installed but renardo says it is not ready that's because it can't find it to launch it automatically: ensure `sclang` is available in PATH (see above)

#### playsound/other library can't be installed (renardo library install fails)

Sometimes upgrading `pip` or `wheel` or `build` python packages solve the installation. For example: https://stackoverflow.com/questions/76078698/how-to-fix-oserror-could-not-get-source-code-error-when-installing-playsound

