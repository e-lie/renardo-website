---
title: ¿Qué es Renardo ?
description: Presentación de Renardo, entorno de livecoding para la creación musical.
---

#### Renardo es un (fork) de FoxDot, una nueva versión con mantenimiento.

FoxDot es un software clásico y maravilloso utilizado en la comunidad algorave, creado por Ryan Kirkbride hace casi 10 años.

...pero no tiene mantenimiento hace algunos años.

La comunidad sigue muy viva. (comprueba especialmente el canal FoxDot en Telegram)

Ha habido varias bifurcaciones de la comunidad muy interesantes, pero difíciles de encontrar, instalar y de entender sin mirar en el código.

Incluso antes, FoxDot ya era difícil de instalar para los no desarrolladores debido a las múltiples partes móviles de las que se compone.

Así que la intención del proyecto es:

- Renardo, como bifurcación de FoxDot, soportará todas/la mayoría de las características de FoxDot.
- El nuevo nombre "Renardo" viene a hacer el nuevo fork identificable y por lo tanto encontrable en línea sobre todo para servir de apoyo a los talleres y la enseñanza musical.
- Renardo debería ser más fácil de instalar (y seguirá siéndolo).
- FoxDot/Renardo tiene mucho potencial y nos gustaría hacerlo aún más asombroso.

Este software no existiría sin el duro e inteligente trabajo de Ryan Kirbride y todos los colaboradores de la comunidad. Hay que darles las gracias por ello.

## ¿Qué es lo nuevo de Renardo ?


### Limpieza y refactorización

- Refactorización progresiva y profunda del código en curso buscando nuevas funcionalidades y buenas prácticas de Python.
- Renardo es FoxDot hecho modular, dividiendo el código base en varias piezas / paquetes PyPI: `renardo-lib`, `renardo` (lanzador + TUI de configuración), `renardo-gatherer` (instalar/compartir sample packs y Synthdefs) |`FoxDotEditor` (Editor Tkinter de FoxDot), `renardo-reaper`.

### Nuevas funciones útiles para componer piezas musicales

- Función Fade (...to, ...in o ...out)
- Funciones inteligentes para silencios periodicos  (`eclipse`)
- Nuevos generadores de ritmos
- Nuevos métodos de interpolación de patrones 
- Nuevos decoradores de utilidades para anotar/producir piezas/pistas con código (en lugar de livecoding)

### Nuevas caracteristicas próximamente...

### Fácil de instalar

-  Renardo, usa Pyinstaller y hace que el entorno sea fácil de instalar, simplemente descargando un archivo que incluye Python y Renardo.

### TUI externa para ver el estado de FoxDot mientras se ejecuta

- Independientemente del editor utilizado (FoxDot, Pulsar, VIM, VSCod(ium), etc.)
- Visualización interactiva de los players activos y sus parámetros
- Clock con múltiples barras de progreso configurables basadas en módulos
- Visualización de errores/debug

### REAPER DAW / Vital(ium) Integración de sintetizadores

- Plantillas de proyectos Reaper para utilizar con Renardo
- Instanciación de plugins clásicos (VST,AU,LV2) mediante código
- Mapeo automático de todos los parámetros del plugin para control nativo desde renardo.

### Sincronización del Clock con Ableton...

- ...Como norma de facto para la sincronización de software musical y la sincronización con otros entornos de livecoding.