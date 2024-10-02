---
title: Akkordfolge
---


### "Billy Jean" (Michael Jackson)

Dieses Beispiel zeigt, wie man "Billy Jeans' Intro" kodiert.

```python
# Tempo:
Clock.bpm=117
# Root E:
Root.default=“E”
# Scale to minor:
Scale.default=Scale.minor
# Chords in a list:
chords=[(0,2,4),(0,1,3,5),(0,2,4,6),(0,1,3,5)]
# Player object:
s1 >> pluck(chords, oct=3, dur=[1.5,5/2], sus=2)
# Drums:
b1 >> play("<V....V..V...[VV]V..><..o.><---->")
```

---

### “Get Lucky” (Daft Punk)

Dieses Beispiel zeigt, wie man Bassline und Akkorde des Titels "Get Lucky" von Daft Punk erstellt.

Bass:

|  **B1**  |  **D2** | **F#2** |  **E2**  |
| -------- | ------- | ------- | -------- |


Akkorde:

|  **Bm**  |  **D**  | **F#m** |  **Em**  |
| -------- | ------- | ------- | -------- |


Im vierten Akkord gibt es eine Notiz von dem Nachbar F#m (Kreis der Fünften):

|  **F#2** |  **A2** | **C#3** |  **B2**  |
| -------- | ------- | ------- | -------- |
|    D2    |    F#2  |   A2    | G#2 (F#m chord key) |
|    B1    |    D2   |   F#2   |    E2    |


Als Extra kannst du versuchen, eine kleine Vielfalt mit TimeVars zu erstellen:

Drop: Duenner ohne Beats - Break: keine Gesang - Buildup: Mix BreakNDrop

Mit 4 Noten/Chors gespielt alle 16 Beats, die Songstruktur ist wie folgt:

| **Intro** | **Break** | **Buildup** | **Drop** | **Break** | **Buildup** | **Drop**  | **Outro** |
| --------- | --------- | ----------- | -------- | --------- | ----------- | --------- | --------- |
|  16 Beats |  32 Beats |  32 Beats   | 64 Beats |  32 Beats |  32 Beats   |  64 Beats | 48 Beats  |


