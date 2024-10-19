---
title: Comienza con un poco de Python
---

Como Renardo usa Python, comenzamos con algo de código Python. Para ejecutar código en Renardo, asegúrate de que el cursor de texto esté en el 'bloque' de código (secciones de texto no separadas por líneas en blanco) y presiona `Ctrl+Return`.

Ingresa la siguiente línea en la parte de texto del editor y presiona Ctrl+Enter (Cmd+Return) mientras el cursor esté posicionado sobre la línea.
```python
2 + 2
```

La salida de un código ejecutado se muestra en la consola en la ventana inferior del programa. La consola muestra la línea que ingresaste. Usa la función de Python **print()** para mostrar el resultado.
```python
print(2 + 2)
```

Ahora vamos a envolver la ecuación en una variable. Usaremos variables a menudo. Escribe las 2 líneas directamente una debajo de la otra para que se puedan ejecutar completamente como un bloque:
```python
a = 2 + 2

print(a)
```

Las variables también se pueden combinar:
```python
a = 2
b = 3
c = a + b
print(c)
```

Si solo deseas ejecutar una línea dentro del bloque, mueve el cursor sobre la línea y presiona **Alt + Enter**. Prueba con algún texto entre comillas:
```python
print("¡Hola, codificador animado!")
```

La filosofía general de Renardo es crear objetos “Player()” de la manera más simple posible, mientras se toman argumentos de palabras clave que reflejan las relaciones Pbind-SynthDef de SuperCollider y programan sus acciones en un reloj accesible globalmente.

Si deseas saber más sobre una función o clase, simplemente escribe help seguido del nombre de ese objeto de Python entre paréntesis >> _help(object)_, por ejemplo:
```python
help(Player())
```

Un SynthDef en Renardo es un objeto Player(). Es esencialmente tu instrumento digital que usarás en tu composición.
