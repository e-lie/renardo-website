---
title: Troubleshooting
---

Dieser Abschnitt soll Dir bei der Diagnose der Situation helfen, wenn die Renardo-Umgebung nicht wie erwartet funktioniert.

### Sieht gut aus, macht aber keinen Ton

Wenn `b1 >> blip() ` nicht produziert Klang, sollte in dieser Reihenfolge versuchen:

1. Schließe Renardo und start es erneut! Es kann helfen, sich mit dem SuperCollider Backend zu verbinden...
1. Überprüfe, ob Programme mit dem Namen `sclang`/`scsynth` laufen (z.B. unter Verwendung von `Task Manager` oder `System Monitor`). Wenn nicht ** Starte Supercollider manuell* mit:
    - _Facultative Linux step_ : Du benötigst den gestarteten JACK Server (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) oder `pipewire` mit dem `pipewire-jack` Modul installiert.
    - Im SuperCollider IDE Editor, schreibe `Renardo.start` und aktiviere es mit **Ctrl+Return** und überprüfe dann, ob es Fehler im Log-Panel (Konsole) gibt.

Du kannst immer auch um Hilfe in unserem FoxDot-Telegramkanal bitten.


#### SuperCollider ist nicht bereit

Wenn SuperCollider installiert ist, aber Renardo sagt, dass es nicht bereit ist bzw. es nicht finden kann >> Um es automatisch zu starten muss `sclang` in PATH verfügbar (siehe oben) sein.

#### playsound/other bibliothek kann nicht installiert werden (Renardo library install fails)

Upgrades von `pip` oder `wheel` oder `build` Pythonpakete löst manchmal das Installationproblem. Zum Beispiel: https://stackoverflow.com/questions/76078698/how-to-fix-oserror-could-not-get-source-code-error-when-installing-playsound