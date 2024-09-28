

 > Ausschluss : Renardo ist dabei, einen integrierten und einfachen Installationsprozess für Beginner zu entwickeln. Momentan kann es jedoch noch eine holprige Straße sein.

## Zusammenfassung

Renardo ist entweder:
- eine **binäre Anwendung** als Paket welches **pyinstaller** (_the "easy" install_) benutzt.
oder:
- eine **Python Library** (genauer einige Python Libraries) wird mit dem Pythonpaketmanager`pip` (oder `pipx`) installiert. (_the manual install_)

Um Musik zu erzeugen wird **SuperCollider** (eine klassische, stufenlos programmierbare Synth/Kompposition-Platform) genutzt. **SuperCollider** selbst ist eine Programmiersprache zur Audioanalyse und Soundsynthesis.

## Installiere SuperCollider

- Windows : Installiere SuperCollider mit dem offiziellen Installer (https://supercollider.github.io/downloads) 
- MacOS :  Installiere SuperCollider mit dem offiziellen Installer (https://supercollider.github.io/downloads) 
- Linux : Installiere SuperCollider mit Deinem bevorzugten Paketmanager (`sudo apt install supercollider`, `sudo pacman -S supercollider`, etc...)

### Starte SuperCollider und konfiguriere!

- _Facultative Linux step_ : du benötigst den gestarteten JACK-Server (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) oder `pipewire` mit dem installierten `pipewire-jack`-Modul.
- Öffne die SuperCollider IDE (`scide` auf linux).
- Gebe den Code `s.boot` oder `Server.default.boot` ein und presse Strg+Return. Suche nach Fehlern in der Konsole.
- Gebe den Code `{ SinOsc.ar() }.play;` wie zuvor ein. Du solltest ein einfaches Geräusch hören! Hurra!

Wenn es funktioniert, kannst du SuperCollider jetzt beenden.

Wenn es nicht funktioniert hat, musst du die richtige Soundkarte auszuwählen. Folge: https://doc.sccode.org/Reference/AudioDeviceSelection.html

Auf den aktuellen M1/M2 Mac-Computern müssen Sie das Soundgerät manuell wechseln, um Kopfhörer zu verwenden (weil Apple-Ingenieure gerne Sachen / Standards brechen)

Hier finden Sie Hilfe zum Debug Supercollider : https://scsynth.org/

### Testen, ob `sclang` Programm in PATH ist (nur MacOS)

- Öffne ein Terminal und starte `sclang`. Wenn die Antwort nicht gefunden ist, musst Du folgendes verstehen:

Standardmäßig fügt die MacOS-Installation von SuperCollider die Programme nicht zur PATH-Umgebungsvariable hinzu. Dadurch wird verhindert, dass Renardo SuperCollider im Hintergrund automatisch starten kann.

Du kannst entweder:

- Füge `sclang` zu PATH hinzu: `sclang` befindet sich irgendwo wie z.B. `/Applications/SuperCollider.app/Contents/MacOS/sclang`. Du kannst diesem Tutorial folgen : https://techpp.com/2021/09/08/set-path-variable-in-macos-guide/
- Starte SuperCollider manuell im Hintergrund: Starte SuperCollider IDE Anwendung und führe `Renardo.start;` aus. Dann starte Renardo.

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

## Initiualisiere Renardo

Beim Starten von Renardo solltest Du eine spezielle Schnittstelle mit 2 Tasten haben, klicke auf:
1. die (erforderlichen) Audiosamples herunterladen (es ist nicht schnell, warten bis zum ende)
2. konfiguriere SuperCollider, um mit Renardo zu arbeiten (die Klassen- und Startdateien erstellen)

## Starte Renardo automatisch oder manuell

Renardo kann SuperCollider und einen Code-Editor für Dich automatisch starten. Oder Du kannst das alleine tun:

- _Facultative Linux step_ : wenn Du JACK-Server verwendest, starte es zuvor (kein Bedarf, wenn Du `pipewire-jack` verwendest)

- Automatischer Modus: Starte `renardo` in einem Terminal und klicke dann auf die Schaltflächen in der Terminal-Schnittstelle, um SuperCollider und einen Editor zu starten. Wenn Du Pulsar verwendest, musst Du das Plugin Pulsardo installieren und manuell starten (siehe doc)

- Manueller Modus: Starte SuperCollider Backend manuell: Öffne SuperCollider IDE und führe `Renardo.start;` aus, 
  dann entweder:
    - starte Pulsar manuell und starte die Pulsardo Erweiterung
  oder:
    - starte den FoxDot Editor direkt mit: `renardo --foxdot-editor`

### Teste und benutze Renardo

Sobald Renardo den foxdot Editor oder Pulsardo gestartet hat

- gebe `b1 >> blip()` ein und führe es aus (Strg+Enter)

Es sollte einige Blips produzieren \o/

Wenn nicht, versuche zuerst, beide Software zu beenden und starte einfach SuperCollider noch einmal zuerst und danach Renardo oder schaue in den Problembehebung Abschnitt.


## Problembehebung

Wenn `b1 >> blip() ` nicht produziert Klang, sollte in dieser Reihenfolge versuchen:

1. Schließe Renardo und start es erneut! Es kann helfen, sich mit dem SuperCollider Backend zu verbinden...
1. Überprüfe, ob Programme mit dem Namen `sclang`/`scsynth` laufen (z.B. unter Verwendung von `Task Manager` oder `System Monitor`). Wenn nicht ** Starte Supercollider manuell* mit:
    - _Facultative Linux step_ : Du benötigst den gestarteten JACK Server (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) oder `pipewire` mit dem `pipewire-jack` Modul installiert.
    - Im SuperCollider IDE Editor, schreibe `Renardo.start` und aktiviere es mit **Ctrl+Return** und überprüfe dann, ob es Fehler im Log-Panel (Konsole) gibt.

Du kannst immer auch um Hilfe in unserem FoxDot-Telegramkanal bitten.

Einige häufige Fehler:

#### SuperCollider ist nicht bereit

Wenn SuperCollider installiert ist, aber Renardo sagt, dass es nicht bereit ist bzw. es nicht finden kann >> Um es automatisch zu starten muss `sclang` in PATH verfügbar (siehe oben) sein.

#### playsound/other bibliothek kann nicht installiert werden (Renardo library install fails)

Upgrades von `pip` oder `wheel` oder `build` Pythonpakete löst manchmal das Installationproblem. Zum Beispiel: https://stackoverflow.com/questions/76078698/how-to-fix-oserror-could-not-get-source-code-error-when-installing-playsound

