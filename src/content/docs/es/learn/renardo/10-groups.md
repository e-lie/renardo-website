---
title: Grupos
---

Los grupos son útiles para controlar múltiples objetos de jugador al mismo tiempo. Un piano puede consistir en una línea de bajo, una línea de acordes y una línea de melodía. Atributos como el volumen pueden ajustarse más fácilmente. Esto también es útil si deseas organizar transiciones con efectos de filtro (por ejemplo, filtros de paso alto en todo el kit de batería).

```python
s1 >> piano(Pvar([[0,3,7,-2,0,5],[3,0,7,3,0]], [12,8]), oct=4, dur=PDur(3,8), sus=var([s1.dur,s1.dur*2], [6,2]), amplify=var([1,0.7], 8), amp=1)
s2 >> piano(Pvar([[2,5],[0,7]], 16), oct=var([5,6], [6,2]), dur=var([1,2], 32), amplify=var([0.8,1], 16), amp=1)
s3 >> piano((s1.degree,note), oct=(4,5), dur=var([PDur(3,8),1], PRand(8)), amplify=0.75, amp=1)
Piano.amp = Group(s1,s2,s3)
```

Para bajar la amplitud de este piano, solo usa:
```python
Piano.amp = 0
```

O, establece el volumen encendido por 4 tiempos, luego apagado por 4. Esto anula las amplitudes existentes establecidas en el objeto jugador:
```python
Piano.amp=var([1,0],4)
```

Para detener un grupo entero, usa el siguiente comando:
```python
Piano.stop()
```

Puedes usar funciones para agrupar cosas juntas. Para ejecutar usa **CTRL+Return**, no *ALT+Return*.
```python
def tune():
    b1 >> bass([0,3], dur=4)
    p1 >> pluck([0,4], dur=1/2)
    d1 >> play("x--x--x-")
tune()
```

o programa el reloj para llamar a otras funciones agrupadas:
```python
def verse():
    b1 >> bass([0,3], dur=4)
    p1 >> pluck([0,4], dur=1/2)
    d1 >> play("x--x--x-")
    Clock.future(16, chorus)
def chorus():
    b1 >> bass([0,4,5,3], dur=4)
    p1 >> pluck([0,4,7,9], dur=1/4)
    d1 >> play("x-o-")
    Clock.future(16, verse)
verse()
```

Varios objetos de grupo ya existen en Renardo para grupos específicos de objetos de jugador basados en nombres de variables que terminan con el sufijo '_all'. Así que para cada carácter, por ejemplo, **s** hay un grupo llamado **s_all**, que contiene s1, s2, s3,..., s9. Así que si organizas tus jugadores por nombres de variables, puedes aplicar efectos fácilmente o detenerlos todos a la vez:
```python
s1 >> pads([0,4,-2,3], dur=4)
s2 >> pluck([0,1,3,4], dur=0.25)
```

Usa el grupo para aplicar el atributo de filtro a todos los objetos de jugador:
```python
s_all.hpf = 500
```

Esto también es útil para:
```python
s_all.amp = 0
```

Con **.stop()** puedes interrumpir todo el grupo de jugadores:
```python
s_all.stop()
```

Con **.solo()** todos los demás objetos de jugador se silencian, es decir, solo se pueden escuchar los objetos de jugador de este grupo:
```python
s_all.solo()
```

**.only()** detiene a todos los jugadores que no están en el grupo:
```python
s_all.only()
```
