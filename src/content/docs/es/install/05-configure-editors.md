---
title: Configura otros editores
---

El editor FoxDot tiene varios inconvenientes. Usted podría utilizar otra opción para livecoding FoxDot / Renardo.

Primero tienes que iniciar renardo en supercollider (`Renardo.start;`)

### Flok editor colectivo

Flok es un editor basado en la web para livecoding colectivo, se puede usar en diferentes lenguajes para música y visuales (supercollider, mercury, tidal, foxdot, renardo, hydra, tal vez GLSL shader ...Pronto).

Primero necesitas instalar `nodejs` 18 o posterior e instalar `npx` con el comando `npm install -g npx`.

A continuación, ejecute el editor web: puede utilizar https://flok.cc o ejecutar su servidor local con `npx flok-web@latest`.

Luego crea un panel `renardo` desde el menú superior izquierdo de selección y abre `Configurar` en el menú superior derecho. Verás una línea de comando que puedes pegar en tu terminal como:

```sh
npx flok-repl@latest -H wss://yourserver \
  -s yoursessionid \
  -t renardo \
  -T user:youruser
```

A continuación, puede activar el código renardo en el editor (CTRL+RETURN) y debería producir sonido (si el backend del supercolisionador está iniciado).

Cuidado, ALT+RETURN activan todo el archivo.

###  Editor Pulsar

(bastante popular en la escena algorave con opciones hydra/tidal/VEDA/sclang)

- Instale el editor de código Pulsar con su gestor de paquetes o descargándolo de : https://pulsar-edit.dev
- Instalar la extensión oficial `Pulsardo` (Ajustes > + instalar buscar Pulsardo)

Ir a la configuración de la extensión pulsardo y, o bien:

- Si instalaste renardo como binario:
    - Renardo Binary Path es la ruta al binario de renardo, por ejemplo. `C:\somewhere\dir\renardo.exe` o `/home/machin/Desktop/renardo/renardo`
    - Renardo Lanza Argumentos : `--pipe`

- Si utiliza renardo como biblioteca python
    - Renardo Binary Path es la ruta al intérprete de python donde está instalado renardo por ejemplo.. `/home/machin/Desktop/virtualenv/bin/python`
    - Los argumentos cuiando se ejecuta renardo debe ser así : `-m,renardo,--pipe`

- Abrir un archivo de código python
- Presiona `Ctrl+Shift+P` para buscar `Pulsardo Toggle`
- A continuación, puede activar el código renardo con `Ctrl+Return` o `Ctrl+Alt` !

### Vim

Necesitas instalar renardo como una librería de python e instalar por ejemplo `vim-slime` plugin.

- abrir un buffer `musicodewhatever.py` y un REPL de python
- enviar `from renardo_lib import *` a la REPL
- ¡a continuación, enviar renardo bloque de código a la REPL y debe producir música !
- Puede seleccionar rápidamente todo un bloque de código con el combo VIM `vip` antes de enviarlo a REPL

### Emacs

Igual que Vim con el plugin SLIME `from renardo_lib import *`

### VSCode/VSCodium

- Instalar la extención de python
- Importante: Instale la extensión Vim para utilizar `vip` para seleccionar rápidamente un bloque
- Escribe el código `from renardo_lib import *` y pulsa Shift+Return para enviarlo a Python REPL
- Puedes seleccionar cualquier código musical y usar Shift+Return para ejecutarlo en la REPL.


