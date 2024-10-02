---
title: Installiere Renardo Python library
---

## Renardo binäre Installation (nur Windows und Linux)

Binaries ist jetzt nicht aktuell. Bitte verwenden Sie stattdessen die Library. Dies wird bald behoben (automatischer Aufbau von Binaries)

<!-- Diese Methode ist besonders nützlich für Windows-Systeme, bei denen Python-Umgebungen nicht standardmäßig installiert sind und messy werden können.

Lade Renardo herunter und komprimiere es irgendwo:

- Renardo binäre Versionen auf Github : https://github.com/e-lie/renardo/releases/

Um Renardo zu starten:
- Windows: Doppelklick Exekutive Programmdatei.
- Linux: Öffne einen Terminal, navigieren zu Renardo's Verzeichnis mit `cd` und gebe `./renardo-0.9.3` oder `./renardo` ein. Presse Enter.

Dazu verwenden wir Befehle wie `cd`, `ls` und `pwd`: wenn du nicht weißt, diese Tutorials lehren die grundlegende Befehlszeilen:
- https://www.davidbaumgold.com/tutorials/command-line/
- https://www.youtube.com/watch?v=QAt_Ej4Dqpc (MacOS but works quite the same way on Linux) -->

## Renardo Library installieren

### Windows oder MacOS

- Du kannst einfach ein Terminal öffnen (PowerShell auf Windows) und starte `pip install renardo` (oder `pip3 install renardo`, wenn der vorangegangene scheitert)
- Starte Renardo (mit FoxDot-Editor) indem Du `renardo` im Terminal startest (oder Du kannst `python -m renardo` oder `python3 -m renardo` versuchen)

### Linux

Auf Linux solltest Du pip-Pakete nicht global installieren, sondern eine virtuelle Umgebung verwenden. 

Du kannst entweder:
- lernen, wie man manuell ein virtualenv erstellt: https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/

oder:
- installiere und verwende `pipx` :
    - Installiere es mit Deinem Paketmanager der Wahl (`sudo apt install pipx`, `sudo pacman -S python-pipx`, ...)
    - Gebe `pipx ensurepath` in den Terminal ein.
    - Dann kannst Du einfach Renardo installieren, indem Du `pipx install renardo` eingibst.
    - Dann starte Renardo mit:`renardo`

