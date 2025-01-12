---
title: Installiere SuperCollider
---

- Windows : Installiere SuperCollider mit dem offiziellen Installer (https://supercollider.github.io/downloads)
- MacOS :  Installiere SuperCollider mit dem offiziellen Installer (https://supercollider.github.io/downloads)
- Linux : Installiere SuperCollider mit Deinem bevorzugten Paketmanager (`sudo apt install supercollider`, `sudo pacman -S supercollider`, etc...)

- Alle OS : Downloade das neueste sc3-plugins Archiv (https://supercollider.github.io/sc3-plugins)

### Starte SuperCollider und konfiguriere!

- _Facultative Linux step_ : du benötigst den gestarteten JACK-Server (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) oder `pipewire` mit dem installierten `pipewire-jack`-Modul.
- Öffne die SuperCollider IDE (`scide` auf linux).
- Gebe den Code `s.boot` oder `Server.default.boot` ein und presse Strg+Return. Suche nach Fehlern in der Konsole.
- Gebe den Code `{ SinOsc.ar() }.play;` wie zuvor ein. Du solltest ein einfaches Geräusch hören! Hurra!

Wenn es nicht funktioniert hat, musst du die richtige Soundkarte auszuwählen. Folge: https://doc.sccode.org/Reference/AudioDeviceSelection.html

Auf den aktuellen M1/M2 Mac-Computern müssen Sie das Soundgerät manuell wechseln, um Kopfhörer zu verwenden (weil Apple-Ingenieure gerne Sachen / Standards brechen)

Hier finden Sie Hilfe zum Debug Supercollider : https://scsynth.org/

### Testen, ob `sclang` Programm in PATH ist (nur MacOS)

- Öffne ein Terminal und starte `sclang`. Wenn die Antwort nicht gefunden ist, musst Du folgendes verstehen:

Standardmäßig fügt die MacOS-Installation von SuperCollider die Programme nicht zur PATH-Umgebungsvariable hinzu. Dadurch wird verhindert, dass Renardo SuperCollider im Hintergrund automatisch starten kann.

Du kannst entweder:

- Füge `sclang` zu PATH hinzu: `sclang` befindet sich irgendwo wie z.B. `/Applications/SuperCollider.app/Contents/MacOS/sclang`. Du kannst diesem Tutorial folgen : https://techpp.com/2021/09/08/set-path-variable-in-macos-guide/
- Starte SuperCollider manuell im Hintergrund: Starte SuperCollider IDE Anwendung und führe `Renardo.start;` aus. Dann starte Renardo.


### Install sc3-plugins to play all synths!

sc3-plugins contains the community collection of unit generator plugins for SuperCollider. The piano synth of Renardo needs this plugins activated in order to make it play!

Open SuperCollider IDE again and write the line `Platform.userExtensionDir`, then executed it using **Ctrl+Return**.

A path should appear in the console window (Bottom right) of SuperCollider. Copy und paste this path and open it up in your file manager.

Extract the sc3-plugin archive you downloaded earlier. In the extracted folder, you will find a directory called **SC3plugins**. Move this directory completely into that extension folder of SuperCollider you opened in your file manager. ***That's it!***


Now you can close the SuperCollider IDE!
