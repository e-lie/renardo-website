---
title: Integración con Reaper (muy poco útil).
---


## Descargo de responsabilidad

Esta página se trata de hackear y hacer uso de la integración Renardo para controlar Reaper DAW.

Esto es crudo, actualmente no probado fuera de mi configuración basada en archlinux, y probablemente no muy utilizable, especialmente si no estás cómodo con tu configuración de sonido, entornos Python, o arquitectura SuperCollider.

Dicho esto, ha funcionado para mí durante 2 años y permite un muy buen sonido de música FoxDot/Renardo mediante el control programático de cualquier plugin (VST/LV2/etc instrumentos y efectos) de Renardo.

## Instalar Reaper

Reaper no es gratuito ni de código abierto. La versión de demostración con todas las funciones es gratuita para siempre, pero entonces debería considerar la posibilidad de adquirir una licencia si lo utiliza con regularidad. 

Es un DAW muy bueno impulsado por la comunidad que va realmente lejos con características de mezcla, multicanal, personalización extrema, programabilidad a través de la API. Es compatible con Windows, Linux y MacOS. Por eso lo elegí como plugin host para que Renardo lo controle.

Vaya a https://reaper.fm, descárguelo y siga las instrucciones para instalarlo. En distros basadas en archlinux puedes `yay reaper`.

## Descargar el plugin Vita(lium) (como sintetizador de ejemplo)

Vital es un plugin de sintetizador de tabla de ondas/todo muy popular, que es de código abierto.

Vitalium es una bifurcación que elimina la parte comercial de vital pero es un poco anticuado.

- Si quieres usarlo para los ejemplos de abajo, instálalo desde la web https://vital.audio o desde el repositorio deb de kxstudio (vitalium) o quizás con tu gestor de paquetes preferido.

## Configurar Reaper

Encuentra tu carpeta de configuración de Reaper con : **Opciones > Mostrar ruta de recursos de Reaper en explorador/buscador**. 

- Dentro de **Plantilla de proyecto**, descargue el archivo https://samples.renardo.org/renardo_reaper_template.RPP
- Vaya a Opciones/Preferencias y active : **Habilitar python para su uso en Reascripts**.
- En las preferencias también puede asegurarse de que REAPER sabe dónde encontrar sus plugins y volver a escanear los plugins disponibles: Compruebe dónde está instalado Vital(ium) y añada la carpeta que lo contiene si no está en la lista.
- Cierra reaper

## Comprueba si la biblioteca reapy funciona

La integración se basa en la librería reapy. Deberías instalar `python-reapy` y seguir las instrucciones para ver si puedes `importar reapy` sin errores: https://python-reapy.readthedocs.io/en/latest/install_guide.html#://

Puede ser de alguna manera la parte difícil: a veces no funciona y tienes que hack arround para hacer que esta biblioteca de trabajo.

## Prueba en Renardo

- Ejecute renardo con el editor FoxDot y asegúrese de que tiene la versión de renardo `1.0.0.dev7` o superior (puede verlo en el borde de la ventana). Si no, puede instalarlo con `pipx uninstall renardo` y luego `pipx install renardo==1.0.0.dev7`.
- Inicie reaper y abra la plantilla de proyecto `renardo_reaper_template`
- Inicie renardo Supercollider backend y un editor configurado para ser utilizado con renardo.
- Ejecute `from renardo_lib.preset import *`

### Crea una cadena "chain" FX

- Añadir un vital (u otro plugin de instrumento) a **chan1** pista
- Exportarlo como FXChain (**Ctrl+clic** en un plugin para abrir la ventana y luego **exportar fx seleccionados como chian**).

### Pruebas

- Ejecutar el código `myvital = instanciate(«chan1», «<fxchainname>»)`. Esto crea un sintetizador renardo que proxy el plugin en reaper.
- Asegúrese de que la salida MIDI del supercollider está conectada a la (primera) entrada Midi del REAPER.
- Deberías ser capaz de producir sonido con `v1 >> myvital([0,1,2,4], dur=.5)`.

### Latencia

- Tienes que arreglar el retardo entre el instrumento midi reaper y synthdefs Supercollider. Experimenta cambiando los valores de latencia y nudge para ajustar ambos instrumentos:

```python

v1 >> myvital([0,4,4,4], dur=.5)
d1 >> play("Xooo")

Clock.latency = .5
Clock.midi_nudge = -.232
```

### Control de los parámetros del plugin !!

Cuando instancias un fxchain con renardo puedes controlar directamente cualquier parámetro de cualquier plugin de la cadena usando una versión snake_case de su nombre.

Ejemplo:

```python
v1 >> myvital([0,4,4,4], dur=.5, filter_fx_switch=1, monpetitplugindereverb_mix=.5)
v1.filter_fx_resonance=.2
v1.filter_fx_cutoff=linvar([1,.2], [8], start=Clock.mod(4))
```

El control de los parámetros del plugin con linvars funciona pero no es tan preciso y fácil como controlar los parámetros del supercollider con linvars.

**todos los valores del parametro están en el rango [0,1].**

También puedes renombrar tus params dentro de reaper para tener mejores nombres en Renardo : `filter_fx_resonance` > `reso`