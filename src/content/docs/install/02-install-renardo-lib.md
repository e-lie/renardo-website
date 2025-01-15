---
title: Install Renardo Python library
---

<!--
## Renardo binary install (Windows and Linux only)

Binaries are not up to date for now. Please use the library install instead. This will be fixed soon (automatic build of binaries) -->

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

### Getting python to work

#### Windows

You need to install Python. Use the official one from https://python.org (please don't use anaconda or parallel environments if you don't understand their consequences).

Next, you need to add Python to your System variables in Windows:
  1. Check your program folders in order to find Python
     (e.g. *C:\Users\<USER>\AppData\Local\Programs\Python*)
  2. Start typing *environment* in the search bar of Windows main menu.
     You should see ***Edit the system environment variables - Control panel*** popping up.
  3. Click on it! It will open the ***System Properties*** window, and find
     ***Environment variables*** on the bottom.
  4. Pressing this button opens a new window. Find ***Path*** in the lower section called ***System variables***.
  5. Select the line ***Path*** and press **Edit** on the bottom. Paste your found Python path, close the window and
     press **OK**.

#### Mac OS

If you've never use developer stuff before you probably need to install python3 (and cmd line tools) by launching in a terminal: `sudo xcode-select --install`

#### Linux

Python comes natively as a base tool of your OS.

### Install Renardo

### Windows

- You can simply open a terminal (PowerShell on windows) and launch `py -m pip install renardo` (or `py -m pip3 install renardo` if the preceding fails)

- Launch renardo (with FoxDot editor) by launching `python -m renardo` in the terminal (or you can try `python -m renardo` or `renardo`)

### MacOS

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
