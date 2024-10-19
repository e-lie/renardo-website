---
title: Transiciones
---

### Crear transiciones

* Aumenta gradualmente, luego respira, luego vuelve a latir (redoble de tambor...silencio...latido). Aquí se pueden asignar excelentemente los grupos, por ejemplo, con **gBeats.hpf = linvar([0,5000], [12,0], start = Clock.now())**, luego de repente **gBeats.amp = var([0,1], [4 ,inf], start=Clock.now())**
* Para comenzar una transición con el siguiente compás, simplemente usa **start=nextbar**.
* Resta antes de sumar, como sin el bajo, solo caja y HiHat.
* Enrolla y aumenta con notas de 8ª y 16ª de, por ejemplo, caja, HiHat, Shaker.
* Si necesitas una transición de una sección a otra, sin una gran resta como quitar el ritmo de batería, sé sutil.
