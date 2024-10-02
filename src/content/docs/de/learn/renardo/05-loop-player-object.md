---
title: Loop Player
---

### Loop Player Objekt

Du kannst Deine eigenen Samples verwenden, indem Du einfach Audiodateien in die vorhandenen Renardo Sample Verzeichnis abspeicherst. Diese finden sich im Verzeichnis **samples** der Renardo-Installation (z.B. '/home/user/.config/renardo/samples/').

Das **loop** Player()-Objekt ist ähnlich zu **play***. Es spielt jedoch eine Audiodatei von einem bestimmten Ort, der von einem String mit "/absolute_path/file_name" zusammen gegeben wird, statt eine Sampledatei eines installierten Sample-Paket von Renardo zu verwenden.

Du kannst auch Samples mit **loop()* abspielen.
```python
s1 >> loop('foxdot')
```

Du wirst feststellen, dass dies nur den ersten Teil der Probe immer wieder spielt. Du kannst das Verhalten mit vielen der Argumente, die wir bisher für die Kontrolle anderer Synths gesehen haben, nutzen. **dur** ist ein guter Ausgangspunkt.
```python
s1 >> loop('foxdot', dur=4)
```

Wenn Du einen Ordner voller Audiosamples hast, die Du in Renardo verwenden möchten, kannst Du **loop()** mit dem vollen Pfad zum Audiosample angeben.
```python
s1 >> loop('/path/to/samples/quack.wav')
```

Wenn Du den Pfad zu einem Ordner gibst, wird es die erste Probe spielen, die es findet. Du kannst dies ändern, indem du wieder das **sample=** Argument nutzt.

Spiele die erste Audiodatei in deiner Sammlung
```python
s1 >> loop('/path/to/samples')
```

Spiele die zweite Audiodatei in deiner Sammlung
```python
s1 >> loop('/path/to/samples', sample=1)
```

Wenn Du eine Menge Audiosample aus einem Ordner verwendest, kannst Du den Pfad hinzufügen. Renardo wird unter all seinen Suchpfaden nach einer passenden Sounddatei suchen, wenn Du es einen Namen gibst.
```python
Samples.addPath('/path/to/samples')
s1 >> loop('quack')
```

Sobald Du einen Suchpfad hast, kannst Du Musteranpassung zur Suche nach Mustern verwenden. Spiele das 3. Audiosample unter dem 'snare' Verzeichnis:
```python
s1 >> loop('snare/*', sample=2)
```

Du kannst auch * im Verzeichnisnamen verwenden:
```python
s1 >> loop('*_120bpm/drum*/kick*')
```

** bedeutet "alle rekursiven Unterverzeichnisse". Dies wird die erste Probe unter 'Percussion' (z.B. 'Percussion/Kisse/Klassiker/808.wav') spielen
```python
s1 >> loop('percussion/**/*')

```

Du kannst Dateien in einem speziellen Ordner in "/samples/loop" setzen, der geöffnet werden kann, indem Du "Help & Settings" und dann "Open Samples Folder" aus dem FoxDot Editor Menü von Renardo wählst. Du must nicht den vollen Pfad (oder Erweiterung) für Dateien in diesem Ordner liefern:
```python
l1 >> loop("my_file", dur=4)
```

Um alle Dateien in diesem Ordner zu sehen, verwende **print(Samples.loops)**. Wenn Du mit der Abspielordung spielen möchtest, kannst Du nach dem Dateinamen, den Renardo durch die Dauer iterieren wird, ein “Position” Argument liefern.

Spiele erste 4 Beats von Audioordnung:
```python
l1 >> loop("my_file", P[:4], dur=1)
```

Spiele erste Beats in zufälliger Reihenfolge:
```python
l1 >> loop("my_file", P[:4].shuffle(), dur=1)
```

Wenn Du die **bpm** der Audiodatei kennst und sie im aktuellen Tempo spielen möchtest, kannst Du den Player mit einem Tempo Argument liefern. Zum Beispiel könnte my_file ein Schlagzeug mit 135 bpm sein, aber das aktuelle Tempo ist 120, ich kann das Tempo von my_file auf die Uhr wie so passen:

Erste 4 Schläge in 1 Schlag:
```python
l1 >> loop("my_file", P[:4], dur=1, tempo=135)
```

Erste 4 Schläge in 0,5 Schlagschritten:
```python
l1 >> loop("my_file", P[:8]/2, dur=0.5, tempo=135)
```

---
### Zeitdehnung

Die Zeit, die Audio in dieser Weise zu dehnen, wird die Tonhöhe durch **pitch** geändern wird. Diese Dehnung wird zur Verzerrung des Sounds führen. Benutze **striate** anstelle dessen, ohne den Charakter des Sounds zu verlieren. **striate** schneidet die Datei in viele kleine Segmente und spielt sie im Laufe des Dauerwertes wieder ab – dies wird die gesamte Audiodatei abspielen. Je größer die Audiodatei, desto größer die Anzahl, die Du wahrscheinlich verwenden möchten. Mit dem obigen Beispiel möchtest Du einen Striate-Wert von 100-200 für eine reibungslosere Wiedergabe verwenden:

Dehne die Audiodatei mit 100 Segmenten:
```python
l1 >> loop("my_file", dur=4, striate=100)`
```

Dehne es mit 10 Segmenten - und höre den Unterschied:
```python
l1 >> loop("my_file", dur=4, striate=10)
```

Ein weiteres Attribut für **loop** ist **beat_stretch=True**, das die Audiodateilänge in ihre vorgegebene Dauer streckt.


---
### Versuche Dies!

Suche unter [www.wavsource.com](https://www.wavsource.com/) oder [www.findsounds.com](https://www.findsounds.com/) für 2-3 kurze Audiodateien. Stimmen, Vocals, Beat-Loops, Instrumente oder Umgebungsgeräusche sind am besten.

Die **loop** Synth ist so konzipiert, dass Du längere Audiodateien spielen (>1 sec) und manipulieren kannst. Um zu beginnen, nur gebe den Dateinamen, den Du spielen möchtest, und die Dauer, welche Du in Beats spielen möchten:
```python
l1 >> loop("path/to/my/file.wav", dur=32, sus=32)
```

