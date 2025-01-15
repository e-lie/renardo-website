---
title: Install SuperCollider
---

- Windows : Install SuperCollider with the official installer (https://supercollider.github.io/downloads) and download
- MacOS : Install SuperCollider with the official installer (https://supercollider.github.io/downloads)
- Linux : Install SuperCollider with your prefered package manager (`sudo apt install supercollider`, `sudo pacman -S supercollider`, etc...)

- All OS : Download the latest sc3-plugins archive (https://supercollider.github.io/sc3-plugins)


### Launch SuperCollider and make it work !

- _Facultative Linux step_ : you need JACK server started (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) or `pipewire` with the `pipewire-jack` module installed.
- Open SuperCollider IDE (`scide` on linux).
- Type code `s.boot` or `Server.default.boot` and hit Ctrl+Return. Look for errors in the post window
- Type code `{ SinOsc.ar() }.play;` and execute like before. You should ear a simple sound hurra !

If it does not work you may need to select the proper sound device by following this doc: https://doc.sccode.org/Reference/AudioDeviceSelection.html

On recent M1/M2 Mac computers you may need to manually switch sound device to use headphones (because Apple engineers like to break things/standards)

You can find help here to debug SuperCollider : https://scsynth.org/


#### Test if `sclang` program is in PATH (MacOS only)

- Open a terminal and launch `sclang`. If the answer is `not found` you have to understand the following:

By default MacOS install of SuperCollider doesn't add the programs to the PATH environment variable. This prevents renardo from being able to launch SuperCollider backend automatically.

You can either:

- Add `sclang`  to PATH : `sclang` is located somewhere like `/Applications/SuperCollider.app/Contents/MacOS/sclang` you can link it into normal cli program folder with : `ln -s /Applications/SuperCollider.app/Contents/MacOS/sclang /usr/local/bin`.

If you can't or don't want to make it available in the path you can use renardo by manually starting it's supercollider module/Class before you launch it (see Manual mode below)


### Installiere sc3-plugins um all Synths zu spielen!

sc3-plugins enthält die Community-Sammlung von Unit-Generator-Plugins für SuperCollider. Der Piano-Synthesizer von Renardo benötigt die Aktivierung dieser Plugins, um es zum Spielen zu bringen!

Öffne die SuperCollider-IDE erneut und schreibe die Befehlszeile 'Platform.userExtensionDir', dann führe den Befehlt mit **Strg+Return** aus.

Ein Pfad sollte im Konsolenfenster von SuperCollider (unten rechts) angezeigt werden. Kopiere diesen Pfad, füge ihn in einem Dateimanager ein und öffne diesen.

Entpacke das sc3-plugin-Archiv, das Du zuvor heruntergeladen hast. Im extrahierten Ordner findest Du ein Verzeichnis mit dem Namen **SC3plugins**. Verschiebe dieses Verzeichnis vollständig in den Erweiterungsordner von SuperCollider, den Du in Deinem Dateimanager geöffnet hast. ***Das wars!***

Jetzt kannst du SuperCollider schliessen!
