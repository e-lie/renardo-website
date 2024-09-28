
FoxDot ID Editor hat mehrere Nachteile. Deshalb kannst du eine andere Option zum Livecode verwenden >> FoxDot/Renardo.

Zunächst musst Du Renardo in SuperCollider starten (`Renardo.start;`)

### Flok Kollaborativer Editor

Flok ist ein webbasierter Editor für die Live-Codierung von kollektiv unterschiedlichen Sprachen für Musik und Visuals (supercollider, Quecksilber, Tidal, foxdot, renardo, hydra, vielleicht bald auch GLSL Shader).

Zuerst musst Du `nodejs` 18.x oder später und `npx` mit dem Konsolenkommando `npm install -g npx` installieren. 

Dann starte den Web-Browser: Du kannst https://flok.cc verwenden einen lokalen Server mit `npx flok-web@latest` starten.

Dann erstelle ein `renardo`-Fenster aus der Auswahl im Menü oben links und öffne `Configure` im oberen rechten Menü. Du siehst dann eine Befehlszeile, die Du im Terminal benutzen kannst.

Hier ein Beispiel:

```sh
npx flok-repl@latest -H wss://yourserver \
  -s yoursessionid \
  -t renardo \
  -T user:youruser
```

Du kannst dann renardo-Code im Editor (CTRL+RETURN) aktivieren und dadurch den Klang erzeugen (wenn du das SuperCollider Backend davor gestartet hast).

Beachte hierbei, dass ALT+RETURN die ganze Datei aktiviert.

### Pulsar Editor

(sehr beliebt in der AlgoRave szene mit Hydra/TidalCycles/VEDA/SClang optionen)

- Installiere Pulsar-Code-Editor mit einem Paketmanager oder lade es von: https://pulsar-edit.dev
- Installiere die offizielle Extension `Pulsardo` (Einstellungen > + installiere das Result der Suche nach Pulsardo)

Gehe zur Pulsardo Erweiterungseinstellungen >>

und entweder:
- Wenn Du Renardo als Programm installiert hast:
    - Renardo Binary Pfad ist Pfad zur Renardo Programmdatei z.B. `C:\somewhere\dir\renardo.exe` oder `/home/machin/Desktop/renardo/renardo`
    - Renardo Start Argumente: `--pipe`

oder:
- Wenn du Renardo als Python library installiert hast:
    - Renardo Binary Pfad ist Pfad zur Python Interpreter wo Renardo installiert ist z.B. `/home/machin/Desktop/virtualenv/bin/python`
    - Renardo Start Argumente sollten folgende sein: `-m,renardo,--pipe`

- Öffne eine Python-Code-Datei
- Presse `Ctrl+Shift+P` und suche `Pulsardo Toggle`
- Sie können dann renardo code mit`Strg+Return` or `Strg+Alt` !

### Vim

Du musst Renardo als Python-Bibliothek installieren und zum Beispiel das Plug-in `vim-slime` installieren.

- öffne `musicodewhatever.py` Puffer und eine Python REPL
- Sende `from renardo_lib import *` zur REPL
- dann sende den Renardo code block an die REPL und dies sollte Musik produzieren!
- Du kannst schnell einen ganzen Codeblock mit VIM combo `vip` auswählen, bevor Du es an REPL sendest

### Emacs

Wie Vim mit dem SLIME Plugin und `from renardo_lib import *` benutzen.

### VSCode/VSCodium

- Installiere die Python Erweiterung
- facultative: Installiere die Vim-Erweiterung, um `vip` zu verwenden, sodass du schnell einen Block auswählen kannst.
- Erstelle eine Python-Code-Datei
- Schreibe den Code `from renardo_lib import *` und presse Shift+Return, um es an Python REPL zu senden
- Wähle einen beliebigen Musikcode aus und verwende Shift+Return, um ihn via REPL auszuführen



