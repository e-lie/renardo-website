---
title: Introducción
---


### ¿Qué es la codificación en vivo / Livecoding?

  _**“La codificación en vivo es una nueva dirección en la música electrónica y el video, y está llegando a algo interesante. Los codificadores en vivo exponen y reconfiguran las entrañas del software mientras genera música improvisada.”**_ \- toplap.org

*   Programación interactiva como una actuación de arte audiovisual
*   Usar código para describir reglas para una pieza de arte
*   Notación/composición en vivo como actuación
*   El código puede ser cambiado y re-ejecutado en tiempo real, mientras el programa está en ejecución (componer música mientras se realiza)
*   Lleva el lenguaje de programación a un entorno social, convirtiendo la codificación en una actividad social


---
### ¿Por qué usar código?


*   La música clásica con notación en partituras ya es un código para escribir piezas musicales
*   El tono, la duración, la intensidad en la partitura es un código que puede ser leído por músicos
*   Con la codificación en vivo, puedes:
*   Describir reglas de manera flexible
*   Hackear el código sin una interfaz de usuario
*   Interactuar con tu composición mientras se está reproduciendo
*   Operar en el borde de la inmediatez


---
### ¿Qué es Renardo?


*   Renardo es un renacimiento de FoxDot, después de que ha sido depreciado. ¡Muchas gracias al desarrollador Ryan Kirkbride de Leeds, Reino Unido, por su contribución a la comunidad de codificación en vivo!
*   Renardo es un paquete de Python que viene con su propio IDE y un plugin para [Pulsar](https://pulsar-edit.dev/) llamado Pulsardo
*   Renardo reproduce música accediendo a cualquier SynthDefs cargado en un servidor local de SuperCollider con algunos bits de sintaxis personalizados
*   SuperCollider es un lenguaje de programación lanzado originalmente en 1996 por James McCartney para la síntesis de audio en tiempo real y composiciones algorítmicas, que se ejecuta debajo del entorno de Renardo
*   La codificación en vivo con Python a través de Renardo ofrece estados accesibles a través de sus objetos reactivos y dinámicos
*   Renardo se enfoca en patrones musicales, no en el procesamiento de señales digitales (DSP), que es programado por [SuperCollider](https://es.wikipedia.org/wiki/SuperCollider) y controlado a través de [OSC](https://es.wikipedia.org/wiki/Open_Sound_Control)
*   Renardo tiene una sintaxis limpia, que es fácil de leer, por lo que el código puede ser entendido por una audiencia y músicos tradicionales sin conocer Renardo o programación