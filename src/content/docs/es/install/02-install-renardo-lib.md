---
title: Instalar libreria Renardo
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

### Conseguir que python funcione

#### Windows

Necesitas instalar Python. Usa la oficial de https://python.org (por favor, no uses anaconda o entornos paralelos si no entiendes sus consecuencias).

#### Mac OS

Si usted nunca ha utilizado developper cosas antes de que usted probablemente necesita para instalar python3 (y herramientas de línea cmd) mediante la ejecución en un terminal: `sudo xcode-select --install`.

#### Linux

Python viene de forma nativa como herramienta base de tu sistema operativo. 

### Instalar Renardo

### Windows o MacOS

- Basta con abrir un terminal (PowerShell en windows) y ejecutar `pip install renardo` (o `pip3 install renardo` si falla lo anterior)
- Ejecuta renardo (con el editor FoxDot) ejecutando `renardo` en el terminal (o puedes probar `python -m renardo` o `python3 -m renardo`)

### Linux

En Linux ya no debe instalar paquetes pip globalmente, sino utilizar un entorno virtual en su lugar. Puede :

- aprenda a crear manualmente un virtualenv : https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/
- instale y utilice `pipx` :
    - Instálelo con el gestor de paquetes de su elección (`sudo apt install pipx`, `sudo pacman -S python-pipx`, ...)
    - En una terminal ejecute `pipx ensurepath`
    - A continuación, sólo tiene que instalar renardo ejecutando `pipx install renardo`.
    - A continuación, inicie renardo con: `renardo`