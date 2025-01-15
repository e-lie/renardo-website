---
title: Installiere Renardo Python library
---

## Renardo binäre Installation (nur Windows und Linux)

<!--
Binaries ist jetzt nicht aktuell. Bitte verwende stattdessen die Library. Dies wird bald behoben (automatischer Aufbau von Binaries) -->

<!-- Diese Methode ist besonders nützlich für Windows-Systeme, bei denen Python-Umgebungen nicht standardmäßig installiert sind und messy werden können.

Lade Renardo herunter und komprimiere es irgendwo:

- Renardo binäre Versionen auf Github : https://github.com/e-lie/renardo/releases/


Um Renardo zu starten:

- Windows: Doppelklick exekutive Programmdatei.

- Linux: Öffne einen Terminal, navigieren zu Renardo's Verzeichnis mit `cd` und gebe `./renardo-0.9.3` oder `./renardo` ein. Presse Enter.

Dazu verwenden wir Befehle wie `cd`, `ls` und `pwd`: wenn du nicht weißt, diese Tutorials lehren die grundlegende Befehlszeilen:
- https://www.davidbaumgold.com/tutorials/command-line/
- https://www.youtube.com/watch?v=QAt_Ej4Dqpc (MacOS but works quite the same way on Linux) -->


### Python zum Laufen bringen

#### Windows

Du musst zuerst Python installieren, um Renardo zu nutzen. Verwende die offizielle Webseite von Python https://python.org (bitte verwende keine Anaconda oder parallele Umgebungen, wenn du deren Konsequenzen nicht verstehst).

Als nächstes musst du Python zu den Systemvariablen in Windows hinzufügen:
  1. Suche im Programmordner nach Python.
     (z.B. *C:\Users\<USER>\AppData\Local\Programs\Python*)
  2. Beginne mit der Eingabe von *umgebung* in der Suchleiste des Windows-Hauptmenüs. Es sollte   
     angezeigt werden, dass ***Bearbeiten der Systemumgebungsvariablen - Systemsteuerung*** angezeigt wird. (Beachte Fehler durch Übersetzung)
  3. Klicke darauf! Es öffnet das Fenster ***Systemeigenschaften*** und suche ***Umgebungsvariablen***
     am unteren Rand.
  4. Durch Drücken dieser Schaltfläche wird ein neues Fenster geöffnet. Suche ***Pfad*** im unteren
     Abschnitt mit dem Namen ***Systemvariablen***.
  5. Wähle die Zeile ***Pfad*** aus und drücke unten auf **Bearbeiten**. Füge den gefundenen Python-
    Pfad ein, schließe das Fenster und Drücke **OK**.


#### Mac OS

Wenn Du noch nie Entwicklerzeug verwendest hast, musst Du wahrscheinlich python3 (und cmd-Zeilentools) installieren, indem Du in einem Terminal folgenden Befehl startest: 'sudo xcode-select --install'

#### Linux

Python wird nativ als Basiswerkzeug Ihres Betriebssystems geliefert.


## Renardo Library installieren

### Windows

- Du kannst einfach ein Terminal (PowerShell unter Windows) öffnen und "py -m pip install renardo" ausführen (oder "py -m pip3 install renardo" starten, wenn das oben Genannte fehlschlägt)

- Starte renardo (mit dem FoxDot-Editor), indem Du 'python -m renardo' im Terminal startest (oder Du kannst 'python -m renardo' oder 'renardo' ausprobieren)

### MacOS

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
