---
title: Konfigurieren anderer Code-Editoren
---

Der FoxDot-Editor hat mehrere Nachteile. Du kannst eine andere Option verwenden, um mit FoxDot/Renardo live zu codieren.

Zuerst musst Du Renardo in Supercollider starten (`Renardo.start;`)

### Flok kollaborativer Editor

Flok ist ein webbasierter Editor für das Livecoding verschiedener Sprachen für Musik und visuelle Elemente (Supercollider, Mercury, Tidal, Foxdot, Renardo, Hydra, bald vielleicht GLSL-Shader).

Du musst zuerst `nodejs` 18 oder höher installieren und `npx` mit dem Befehl `npm install -g npx` installieren.

Starte Du dann den Web-Editor: Du kannst https://flok.cc verwenden oder den lokalen Server mit „npx flok-web@latest“ starten.

Erstelle dann einen `renardo`-Bereich aus dem Auswahlmenü oben links und öffne `Konfigurieren` im Menü oben rechts. Du siehst eine Befehlszeile, die Du in Deinem Terminal einfügen kannst, etwa:

```sh
npx flok-repl@latest -H wss://yourserver \
  -s yoursessionid \
  -t renardo \
  -T user:youruser
```

Anschließend kannst Du den Renardo-Code im Editor aktivieren (STRG+EINGABE) und dies sollte einen Ton erzeugen (wenn das Supercollider-Backend gestartet wird).

Beachte, dass ALT+RETURN die gesamte Datei aktiviert.

### Pulsar Editor

(ziemlich beliebt in der Algorave-Szene mit Hydra-/Tidal-/VEDA-/Sclang-Optionen)

- Installiere den Pulsar-Code-Editor mit dem Paketmanager oder lade es von https://pulsar-edit.dev herunter.
- Installiere die offizielle Erweiterung „Pulsardo“ (Einstellungen > + Suche nach Pulsardo installieren)

Gehen Sie zu den Pulsardo-Erweiterungseinstellungen und entweder:

- Wenn Du Renardo als Binärdatei installiert hast:
    - Renardo Binary Path ist der Pfad zur Renardo-Binärdatei, z.B. `C:\irgendwo\dir\renardo.exe` oder `/home/machin/Desktop/renardo/renardo`
    - Renardo-Startargumente: „--pipe“

- Wenn Du Renardo als Python-Bibliothek verwenden
    - Renardo Binary Path ist der Pfad zum Python-Interpreter, in dem Renardo installiert ist, z. B. `/home/machin/Desktop/virtualenv/bin/python`
    - Renardo-Startargumente sollten sein: „-m,renardo,--pipe“

- Öffnen Sie eine Python-Codedatei
- Drücke „Strg+Umschalt+P“, um nach „Pulsardo Toggle“ zu suchen.
- Den Renardo-Code kannst Du anschließend mit `Strg+Return` bzw. `Strg+Alt` aktivieren!

### Vim

Du musst Renardo als Python-Bibliothek installieren und beispielsweise das Plugin „vim-slime“ installieren.

- Öffne einen `musicodewhatever.py`-Puffer und einen Python REPL
- Sende „from renardo_lib import *“ an das REPL
- Sende dann einen Renardo-Codeblock an REPL und dies sollte Musik produzieren!
- Du kannst schnell einen ganzen Codeblock mit der VIM-Kombination „vip“ auswählen, bevor Du ihn an REPL sendest.

### Emacs

Dasselbe wie Vim mit dem SLIME-Plugin und `from renardo_lib import *`

### VSCode/VSCodium

- Installieren der Python-Erweiterung
- fakultativ: Installiere die Vim-Erweiterung, um mit `vip` schnell einen Block auszuwählen
- Erstelle eine Python-Codedatei
- Schreibe den Code `from renardo_lib import *` und drücke Umschalt+Eingabe, um ihn an Python REPL zu senden.
- Du kannst jetzt jeden beliebigen Musikcode auswählen und ihn mit Umschalt+Eingabe in den REPL ausführen.


