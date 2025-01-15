---
title: Configure other code editors
---

FoxDot editor has several drawbacks. You could use another option to livecode FoxDot/Renardo.

You need first to start renardo in supercollider (`Renardo.start;`)

### Flok collaborative editor

Flok is a web based editor for livecoding collectively different languages for music and visuals (supercollider, mercury, tidal, foxdot, renardo, hydra, maybe GLSL shader soon).

You need first to install `nodejs` 18 or later and install `npx` with the command `npm install -g npx`

Then launch the web editor : you can use https://flok.cc or launch your local server with `npx flok-web@latest`

Then create a `renardo` pane from the selection top left menu and open `Configure` in the top right menu. You'll see a command line that you can paste in your terminal like:

```sh
npx flok-repl@latest -H wss://yourserver \
  -s yoursessionid \
  -t renardo \
  -T user:youruser
```

You can then activate renardo code in the editor (CTRL+RETURN) and it should produce sound (if the supercollider backend is started).

Beware that ALT+RETURN activate the whole file.

### Pulsar Editor

(quite popular in the algorave scene with hydra/tidal/VEDA/sclang options)

- Install Pulsar code editor with your package manager or downloading it from : https://pulsar-edit.dev
- Install the official `Pulsardo` extension (Settings > + install search for Pulsardo)

Go to pulsardo extension settings and either:

- If you installed renardo as a binary:
    - Renardo Binary Path is the path to renardo binary e.g. `C:\somewhere\dir\renardo.exe` or `/home/machin/Desktop/renardo/renardo`
    - Renardo Launch Arguments : `--pipe`

- If you use renardo as a python library
    - Renardo Binary Path is the path to python interpreter where renardo is installed e.g. `/home/machin/Desktop/virtualenv/bin/python`
    - Renardo Launch Arguments should be : `-m,renardo,--pipe`

- Open some python code file
- Hit `Ctrl+Shift+P` search for `Pulsardo Toggle`
- You can then activate renardo code with `Ctrl+Return` or `Ctrl+Alt` !

### Vim

You need to install renardo as a python library and install for instance `vim-slime` plugin.

- open a `musicodewhatever.py` buffer and a python REPL
- send `from renardo_lib import *` to the REPL
- then send renardo code bloc to the REPL and it should produce music !
- You can quickly select a whole code bloc with VIM combo `vip` before sending to REPL

### Emacs

Same as Vim with the SLIME plugin and `from renardo_lib import *`

### VSCode/VSCodium

- Install Python extension
- facultative: Install Vim extension to use `vip` to quickly select a block
- Create a python code file
- Write code `from renardo_lib import *` and hit Shift+Return to send it to Python REPL
- You can know select any musical code and use Shift+Return to execute it into the REPL


