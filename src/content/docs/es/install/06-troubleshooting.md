---
title: Solución de problemas
---

This section try to help you diagnose the situation if Renardo environment doesn't not work has expected.

### It looks good but does not make any sound

If `b1 >> blip()` does not produce sound, should try in this order:

1. Close and start renardo again ! It may help to connect to the supercollider backend...
1. Check if programs named `sclang`/`scsynth` are running (using `Task Manager` or `System Monitor` for example). If not **start supercollider manually** with:
    - _Facultative Linux step_ : you need JACK server started (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) or `pipewire` with the `pipewire-jack` module installed.
    - In the supercollider editor start the server then write `Renardo.start` and activate with **Ctrl+Return** then check for errors in the log pannel.

You can also ask for help on the [FoxDot Telegram channel] or the .

#### SuperCollider is not ready

If SuperCollider is installed but renardo says it is not ready that's because it can't find it to launch it automatically: ensure `sclang` is available in PATH (see above)

#### playsound/other library can't be installed (renardo library install fails)

Sometimes upgrading `pip` or `wheel` or `build` python packages solve the installation. For example: https://stackoverflow.com/questions/76078698/how-to-fix-oserror-could-not-get-source-code-error-when-installing-playsound