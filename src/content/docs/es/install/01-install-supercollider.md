---
title: Instalar SuperCollider
---

- Windows : Instalar SuperCollider con el instalador oficial (https://supercollider.github.io/downloads) 
- MacOS : Instalar SuperCollider con el instalador oficial (https://supercollider.github.io/downloads) 
- Linux : Instala SuperCollider con tu gestor de paquetes preferido (`sudo apt install supercollider`, `sudo pacman -S supercollider`, etc...)


### Inicie SuperCollider y hágalo funcionar.

- _pasos a seguir enlinux_ : necesitar arrancar el servidor de jack (https://archive.flossmanuals.net/ardour/ch015_starting-jack-on-ubuntu.html) o `pipewire` con el módulo instalado `pipewire-jack`
- Abre el IDE de SuperCollider  (`scide` en linux).
- Escribe el código `s.boot` o `Server.default.boot` y pulsa Ctrl+Return. Busque errores en la ventana de mensajes
- Escribe el código `{ SinOsc.ar() }.play;` y ejecútalo como antes. ¡Deberías escuchar un simple sonido 🎊!


Si funciona puedes dejar SuperCollider por ahora.

Si no es así, es posible que tenga que seleccionar el dispositivo de sonido adecuado siguiendo este documento: https://doc.sccode.org/Reference/AudioDeviceSelection.html

En los ordenadores Mac M1/M2 recientes, es posible que tenga que cambiar manualmente el dispositivo de sonido para utilizar auriculares (porque a los ingenieros de Apple les gusta romper cosas/estándares).

Aquí puedes encontrar ayuda para depurar Supercollider : https://scsynth.org/



### Comprueba si el programa `sclang` está en PATH (sólo MacOS)

- Abre un terminal y ejecuta `sclang`. Si la respuesta es `no encontrado` tienes que entender lo siguiente:

Por defecto la instalación de SuperCollider en MacOS no añade los programas a la variable de entorno PATH. Esto impide que renardo pueda lanzar el backend de SuperCollider automáticamente.

Puedes hacerlo:

- Añade `sclang` al PATH : `sclang` se encuentra en algún lugar como `/Applications/SuperCollider.app/Contents/MacOS/sclang` puedes enlazarlo en la carpeta normal del programa cli con : `ln -s /Applications/SuperCollider.app/Contents/MacOS/sclang /usr/local/bin`.

Si no puedes o no quieres hacerlo disponible en la ruta, puedes usar renardo iniciando manualmente su módulo/Clase supercolider antes de lanzarlo (ver Modo manual más abajo).