

 > Disclaimer : Renardo (as was FoxDot) is not simple to install for now... But you'll handle it !

Renardo is in the process to propose an integrated, actually simple install process for newcomers...

### Summary

- Renardo is a **Python library** (actually a set of Python packages). It is meant to be installed with `pip` the Python package manager.
- To produce sound, Renardo uses **SuperCollider** (a classical, infinitely programmable synth/composition/experimentation environment) and a **SuperCollider module** (called a `Quark`).

## 1 - Prerequisites to install Renardo 

- **Python**
- **SuperCollider**
- **Git** (or `Quarks.install("FoxDot")` will fail)

### Windows

- Install **Python** with the official installer (https://www.python.org/downloads/windows/) download and use : `Windows installer 64bits`.

> WARNING: don't forget to check ~"add Python to path" checkbox before clicking install.

- Install **git** with the official installer (https://git-scm.com/download) or use tools like Chocolatey.
- Install SuperCollider (https://supercollider.github.io/downloads) 

### Linux

- Python is usally already installed. Check by typing `python --version`
- Git is also probably installed. Check by typing `git` in some terminal
- Install SuperCollider with your prefered package manager (`sudo apt install supercollider`, `sudo pacman -S supercollider`, etc...)

### MacOS

- Python is already installed but **if you have an old version of MacOS** you should maybe **install a new Python version** using the official installer (https://www.python.org/downloads/macos/)
- Git is also already installed. Check by typing `git` in some terminal
- Install SuperCollider with the official installer (https://supercollider.github.io/downloads) 

## 2 - Install and launch the `FoxDot` SuperCollider module

- Open SuperCollider IDE (`scide` on Linux)
- Install the FoxDot Quark by entering the code `Quarks.install("FoxDot")` in the editor and pressing **Ctrl+Return** to activate the code line
- Quit and relaunch SuperCollider IDE
- _Facultative Linux step_ : you need JACK server started (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) or `pipewire` with the `pipewire-jack` module installed.
- In the editor write `FoxDot.start` and activate with **Ctrl+Return** then check for errors in the log pannel.

## 3 - Install and launch Renardo

### Windows or MacOS

- You can simply open a terminal (PowerShell on windows) and launch `pip install renardo`
- Launch renardo (with FoxDot editor) by launching `renardo` in the terminal
- Test installation by typing `b1 >> blip()` then **Ctrl+Return**

### Linux

On Linux you should not install pip packages globally anymore but use a virtual environment instead. You can learn how to do that for example here : https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/

Or simpler use pipx:

- Install it with your package manager of choice (`sudo apt install pipx`, `sudo pacman -S python-pipx`, ...)
- `pipx ensurepath` in a terminal
- Then you can simply install renardo by launching `pipx install renardo`.
- Then launch renardo with FoxDot editor with: `renardo`
- Test installation by typing `b1 >> blip()` then **Ctrl+Return**

## 4 - Launch Renardo everyday

- _Facultative Linux step_ : if you use JACK server start it before (no need if you use `pipewire-jack`)
1. Launch SuperCollider IDE and execute : `FoxDot.start`
1. Launch `renardo`

## 5 - Use another code editor

### Pulsar (popular in the algorave scene)

- Install Pulsar editor and use the `renardo` extension (for Linux you have to give the path to your venv/pipx venv in extention settings)

### Flok collaborative editor

- To come...

### VIM and VSCod(ium)

- To come...

### Emacs

- To come too...


<!-- 


## Linux installation

Follow the installation instructions for your downloads of Python and SuperCollider. When installing Python on Windows, click yes when asked if you want to add Python to your system path and yes if you want to install pip – this is used for automatically downloading/installing Python libraries such as FoxDot.

Install the latest version of FoxDot from the Python Package Index using pip from your command line (command prompt in Windows, terminal in MacOS and Linux) by executing:

$ pip install FoxDot

Please note, if you have Python 3 installed, the program might be called pip3, which helps discern between pip for Python 2 and 3.

Alternatively, you can build from the source on GitHub and keep up to date with the development version:

$ git clone https://github.com/Qirky/FoxDot.git
$ cd FoxDot
$ python setup.py install

Open SuperCollider and install the FoxDot Quark (this allows FoxDot to communicate with SuperCollider ) by entering the following in the editor and pressing Ctrl+Return; which "runs" a line of code:

Quarks.install("FoxDot")

Recompile the SuperCollider class library by going to Menu Language Recompile Class Library or pressing Ctrl+Shift+L.

If you can't install git on your machine, you can download a startup file, called foxdot.scd. Open this in SuperCollider and evaluate the code by pressing Ctrl+Return.
Installing SC3 Plugins (optional)

The SC3 Plugins are a collections of classes that extend the already massive SuperCollider library. Some of these are used for certain “effects” in FoxDot (such as bitcrush) and will give you an error in SuperCollider if you try to use them without installing the plugins.

Once downloaded place the folder into your SuperCollider “Extensions” folder and then restart SuperCollider. To find the location of the  “Extensions” folder, open SuperCollider and evaluate the following line of code:

Platform.userExtensionDir

This will display the location of the “Extensions” folder in the  SuperCollider “post window”, usually on the right hand side of the screen. If this directory doesn’t exist, just create it and put the SC3 plugins in there and restart SuperCollider. When you next open FoxDot, go to the “Language” drop-down menu and tick “Use SC3 Plugins”. Restart FoxDot and you’re all set!
Starting Up

Open SuperCollider and evaluate the following (this needs to be done before opening FoxDot):

FoxDot.start

SuperCollider is now listening for messages from FoxDot. To start FoxDot from the command line  just type:

$ python -m FoxDot

The FoxDot interface should open up and you’re ready to start jamming! Check out the Getting Started docs for some useful tips on getting to know the basics of FoxDot. Happy coding! -->
