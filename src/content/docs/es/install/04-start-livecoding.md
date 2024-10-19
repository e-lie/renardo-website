---
title: Comienza a hacer música con livecoding
---


## Arranque Renardo de forma automática o manual

Renardo puede iniciar automáticamente el backend SuperCollider y un editor de código para usted o usted puede hacerlo por su cuenta:

- _pasos en Linux_ : si utiliza el servidor JACK, inícielo antes de (no es necesario si utiliza `pipewire-jack`)

- Modo automático: ejecuta `renardo` en un terminal y haz clic en los botones de la interfaz del terminal para iniciar el backend y el editor. Si usas Pulsar tienes que instalar la extensión Pulsardo e iniciarla manualmente (ver la sección configurar otro editor de código).

- Modo manual : lanza el backend de SuperCollider manualmente : abre SuperCollider IDE y ejecuta `Renardo.start;` luego:
    - lanzar Pulsar manualmente e iniciar la extensión Pulsardo
    - Inicie FoxDot editor directamente con: `renardo --foxdot-editor`

### Probar y utilizar Renardo

Una vez iniciado renardo foxdot editor o Pulsardo

- Escribe `b1 >> blip()` y ejecuta el código

Debería producir algunos blips \o/

Si no lo hace, primero intente salir de ambos programas e inicie primero SuperCollider y después Renardo, o consulte la sección Solución de problemas.

A continuación, puede ir a la sección Aprender de esta documentación.