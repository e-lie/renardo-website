---
title: Reproductor de Bucle
---

### Objeto Reproductor de Bucle

Puedes usar tus propias muestras simplemente arrastrando archivos de audio a los directorios de muestras existentes de FoxDot. Estos se encuentran en el directorio **snd** en la raíz de la instalación de Renardo (por ejemplo, '/home/user/.config/renardo/samples/').

Anteriormente viste cómo trabajar con muestras usando **play()**. El objeto **loop** Player() es similar a **play**. Sin embargo, reproduce un archivo de audio dado por un lugar especificado por una cadena que contiene "ruta_absoluta/nombre_del_archivo" juntos, en lugar de usar un archivo de muestra de un paquete de muestras instalado de Renardo.

También puedes reproducir muestras con **loop()**.
```python
s1 >> loop('foxdot')
```

Puedes notar que esto solo reproduce la primera parte de la muestra una y otra vez. Puedes ajustar el comportamiento con muchos de los argumentos que hemos visto hasta ahora para controlar otros sintetizadores. **dur** es un buen lugar para empezar.
```python
s1 >> loop('foxdot', dur=4)
```

Si tienes una carpeta llena de muestras que te gustaría usar en FoxDot, puedes llamar a **loop()** con la ruta completa a la muestra.
```python
s1 >> loop('/ruta/a/muestras/quack.wav')
```

Si le das a **loop** la ruta a una carpeta, reproducirá la primera muestra que encuentre. Puedes cambiar qué muestra reproduce con el argumento **sample=**.

Reproduce la primera muestra en mi colección
```python
s1 >> loop('/ruta/a/muestras')
```

Reproduce la segunda muestra en mi colección
```python
s1 >> loop('/ruta/a/muestras', sample=1)
```

Si vas a usar muchas muestras de una carpeta, puedes agregarla a la ruta de búsqueda de muestras. FoxDot buscará en todas sus rutas de búsqueda una muestra coincidente cuando le des un nombre.
```python
Samples.addPath('/ruta/a/muestras')
s1 >> loop('quack')
```

Una vez que tengas una ruta de búsqueda, puedes usar coincidencias de patrones para buscar muestras. Reproduce la tercera muestra bajo el directorio 'snare':
```python
s1 >> loop('snare/*', sample=2)
```

Puedes usar * en nombres de directorios también:
```python
s1 >> loop('*_120bpm/drum*/kick*')
```

** significa "todos los subdirectorios recursivos". Esto reproducirá la primera muestra anidada bajo 'percussion' (por ejemplo, 'percussion/kicks/classic/808.wav')
```python
s1 >> loop('percussion/**/*')
```

Puedes poner archivos en una carpeta especial ubicada en "/snd/loop" que se puede abrir yendo a “Ayuda y Configuración” y luego “Abrir Carpeta de Muestras” desde el menú del editor de FoxDot. No necesitas suministrar la ruta completa (o extensión) para archivos en esta carpeta:
```python
l1 >> loop("mi_archivo", dur=4)
```

Para ver todos los archivos en esta carpeta usa **print(Samples.loops)**. Si deseas jugar con el orden de reproducción, puedes suministrar un argumento de “posición” después del nombre del archivo que Renardo iterará basado en la duración.

Reproduce los primeros 4 beats del audio en orden:
```python
l1 >> loop("mi_archivo", P[:4], dur=1)
```

Reproduce los primeros beats en orden aleatorio:
```python
l1 >> loop("mi_archivo", P[:4].shuffle(), dur=1)
```

Si conoces el bpm del archivo de audio y deseas reproducirlo al tempo actual, puedes suministrar al reproductor un argumento de tempo. Por ejemplo, **mi_archivo** podría ser un ritmo de batería a 135 bpm pero el tempo actual es 120, puedo ajustar el tempo de **mi_archivo** al reloj así:

Primeros 4 beats en pasos de 1 beat:
```python
l1 >> loop("mi_archivo", P[:4], dur=1, tempo=135)
```

Primeros 4 beats en pasos de 0.5 beat:
```python
l1 >> loop("mi_archivo", P[:8]/2, dur=0.5, tempo=135)
```

---
### Estiramiento de Tiempo

El estiramiento de tiempo del audio de esta manera cambiará el tono. Si el audio tiene tono, es posible que desees estirarlo en el tiempo sin perder esa información. Esto es posible usando **striate**. Esto corta el archivo en muchos pequeños segmentos y los reproduce distribuidos a lo largo del valor de duración – esto reproducirá todo el archivo de audio. Cuanto más grande sea el archivo de audio, mayor será el número que probablemente querrás usar. Usando el ejemplo anterior, es posible que desees usar un valor de **striate** de 100-200 para una reproducción más suave:

Estira el archivo usando 100 segmentos:
```python
l1 >> loop("mi_archivo", dur=4, striate=100)
```

Estíralo usando 10 segmentos - escucha la diferencia:
```python
l1 >> loop("mi_archivo", dur=4, striate=10)
```

Un atributo adicional para **loop** es **beat_stretch=True**, que estirará la longitud del archivo de audio en su duración dada.

---
### ¡Prueba Esto!

Busca en [www.wavsource.com](https://www.wavsource.com/) o [www.findsounds.com](https://www.findsounds.com/) 2-3 archivos de audio cortos. Voces, vocales, bucles de ritmos, instrumentos o ruido ambiental son los mejores.

El sintetizador de bucle está diseñado para permitirte reproducir archivos de audio más largos (>1 seg) y manipularlos. Para comenzar, simplemente suministra el nombre del archivo que deseas reproducir y la duración que deseas reproducir en beats:
```python
l1 >> loop("ruta/a/mi/archivo.wav", dur=32, sus=32)
```
