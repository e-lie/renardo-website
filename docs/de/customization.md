

## Benutzerverzeichnis

Renardo speichert Konfigurationen und Ressourcen in einem (traditionellen) Benutzer config-Verzeichnis:

- In Linux: `/home/<username>/.config/renardo`
- In MacOS: `/Users/<username>/Library/Application Support/renardo`
- In Windows: `C:\Users\<username>\AppData\Roaming\renardo`

## Renardo Pipe-modus

Renardo kann Code von einem Terminal (sehr nützliche Funktion von FoxDot) ausführen.

Wenn Du es so gestartet hast (`renardo --pipe` oder klicken Sie auf den Button in TUI) erh Du einen leeren Terminal und zum Beispiel:

- Gebe `p1 >> pluck()` ein
- Dann presse ENTER zweimal
- `p1.stop()` + presse zweimal ENTER

So kannst Du jeden Renardo/Python-Code ausführen.

Dieser Modus wird von Renardo Pulsar Plugin (Pulsardo) verwendet.

## Renardo Library Modus

Der Kern von Renardo ist in einem Python-Paket namens `renardo_lib`, das in jeder Python-Umgebung importiert werden kann (python/ipython/Jupyter/...)

- Versuche `python` Interpreter zu starten.
- Führe `from renardo_lib import *` aus.

Du kannst dann Renardo's musikalischen Code ausführen.

This mode can be used to livecode renardo using **Vim** + **vim-slime** or with **VSCod(ium)** + **Python extension**.

## Samples!

Samples-Packs werden unter https://samples.renardo.org gehostet und dann im Benutzer config-Verzeichnis heruntergeladen.

### Download der Bonus-Samples-Pakete

Für jetzt gibt es 2 Audiosamplepakete:

- **FoxDot default**: mit den ziemlich guten Basisproben von FoxDot.
- **PitchGlitch samples**: gesammelte und organisierte Audiosamples von `iShapeNoise` (Vielen Dank!) (source https://gitlab.com/iShapeNoise/foxdot_sampledb_pitchglitch)

FoxDot Standard Samples werden benötigt und vor dem ersten Renardo-Start heruntergeladen.

Um ein neues Paket zum Beispiel umfangreiche PitchGlitch-Audiosamplepaket herunterzuladen:

- Finde den genauen muster-packnamen von https://samples.renardo.org
- Inside renardo python interpreter (oder renardo pipe mode) führe den folgenden Code aus
- und WARTE BIS DIE COMPILIERUNG BEENDET IST!:

```python
from renardo_gatherer.samples_download import SPackManager
spackmanager = SPackManager()
spackmanager.download_samples_pack('1_pitchglitch_samples')
```

... Schneller und einfacher Download mit dem Renardo Terminal UI ist in Arbeit :) ...


### Neues Gemeinschaftsmusterpaket einfügen

WIP

### Credits für FoxDot Standardprobenpaket

FoxDots Audiodateien wurden aus einer Reihe von Quellen gewonnen, aber ich habe verlorene Daten, von denen Dateien zugeschrieben werden, auf welche Originalautor. Hier ist eine Liste von Dank für die unbekannten Schöpfer von FoxDot's Sample Archiv.

    Legowelt Sample Kits
    Game Boy Drum Kit
    Eine Reihe von Klängen mit freundlicher Genehmigung von Mike Hodnicks Live-Codealbum, Expedition
    Viele Proben wurden von http://freesound.org erhalten und wurden über die Creative Commons 0 Lizenz in der öffentlichen Domain platziert: http://creativecommons.org/publicdomain/zero/1.0/ - danke den Original-Autoren
    Weitere Proben stammen aus der Dirt Sample Engine, die Teil der Live-Coding-Sprache TidalCycles ist, die von Yaxu erstellt wurde - ein weiterer großer Dank.

Wenn Du das Gefühl hast, dass wir Samples von Dir benutzt haben, bitte melden Dich!



