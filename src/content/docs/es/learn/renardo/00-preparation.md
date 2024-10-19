---
title: Preparación
---

**Las siguientes pautas te ayudarán a proteger tus oídos y tu equipo como principiante con Renardo.**

---

**Activar "SafetyNet"**

SafetyNet es un quark de SuperCollider que protege a los usuarios de señales de audio peligrosas. Instala el módulo necesario en SuperCollider con la siguiente línea de comando:

```
Quarks.install("SafetyNet")
```

Coloca tu cursor sobre la línea respectiva y presiona _**Ctrl + Return (Cmd + Enter)**_ para ejecutar el comando.

Consejo: Hay una versión de ventana gráfica para instalar elementos de Quark. Usa la siguiente línea de comando para esto:

```
Quarks.gui
```

---

**Siempre empieza bajo**

Si comienzas con un nuevo reproductor, se recomienda empezar con un volumen bajo. Los sintetizadores o muestras pueden aparecer inesperadamente fuertes dependiendo de los cambios en los atributos. Además, sonará mejor en su experiencia completa si un instrumento entra con un volumen creciente en lugar de abrumar otros sonidos en la mezcla.

```python
p1 >> pluck(amplify=0.1) ... p1 >> pluck(amplify=0.3)
```

---

**Experimenta con cuidado**

Ten cuidado al usar valores de atributos al experimentar. Por ejemplo, una octava alta puede producir sonidos desagradables, que no solo pueden dañar tu equipo, sino también tus oídos si usas auriculares.

En la teoría musical tradicional, la octava de Do central es 3. Sin embargo, es 5 en Renardo.
```python
oct=5
```

Mal ejemplo:
```python
oct=60
```

Para obtener todos los valores predeterminados de los atributos básicos de un reproductor, usa:
```python
print(Player("pluck").info())
```

---
