---
title: Solución de problemas
---

Esta sección intenta ayudarle a diagnosticar la situación si el entorno Renardo no funciona como se esperaba.

### Se ve bien pero no hace ningún sonido

Si `b1 >> blip()` no produce sonido, debe intentarlo en este orden:

1. Cierra e inicia Renardo de nuevo. Puede que te ayude conectarte al backend de supercollider...
1.Comprueba si los programas llamados `sclang`/`scsynth` se están ejecutando (usando `Task Manager` o `System Monitor` por ejemplo). Si no es así **inicia el supercolisionador manualmente** con:
    - _Facultative Linux step_ : necesita que se inicie el servidor JACK (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) o `pipewire` con el módulo `pipewire-jack` instalado.
    - En el editor del supercolisionador inicie el servidor, escriba `Renardo.start` y actívelo con **Ctrl+Return**, compruebe si hay errores en el panel de registro.

También puedes pedir ayuda en el [canal FoxDot Telegram] o en el .

#### SuperCollider no está listo

Si SuperCollider está instalado pero renardo dice que no está listo es porque no puede encontrarlo para lanzarlo automáticamente: asegúrate de que `sclang` está disponible en PATH (ver más arriba)

#### playsound/otras Librerías no pueden ser instaladas (falla la instalación de la librería renardo)

A veces actualizar los paquetes `pip` o `wheel` o `build` python resuelve la instalación. Por ejemplo: https://stackoverflow.com/questions/76078698/how-to-fix-oserror-could-not-get-source-code-error-when-installing-playsound