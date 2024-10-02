---
title: Vorbereitung
---


**Die folgenden Richtlinien helfen Dir als Renardo-Anfänger und schützt Deine Ohren und Deine Ausrüstung.**

---

### Activiere "SafetyNet"

SafetyNet ist ein SuperCollider Quark, der Benutzer vor gefährlichen Audiosignalen schützt. Installiere das notwendige Modul in SuperCollider mit der folgenden Befehlszeile:

```
Quarks.install("SafetyNet")
```

Gehe mit Deinem Cursor über die jeweilige Zeile und drücke _**Ctrl + Return (Cmd + Enter)**_ um den Befehl auszulösen.

Hinweis: Zur Installation von Quark-Elementen gibt es eine grafische Fensterversion. Verwende dazu die folgende Befehlszeile:

```
Quarks.gui
```

---

### Immer langsam starten

Wenn Du mit einem neuen Spieler beginnen, wird es empfohlen, beginnend mit niedrigerem Volumen. Die Synths oder Samples können unvorhersehbar laut erscheinen, abhängig von den Änderungen der Attribute. Darüber hinaus wird es in seiner gesamten Erfahrung schöner klingen, wenn ein Instrument mit zunehmendem Volumen kommt, statt andere Geräusche im Mix zu überwältigen.

```python
p1 >> pluck(amplify=0.1) ... p1 >> pluck(amplify=0.3)
```

---

### Experimentiere mit Sorgfalt

Sei vorsichtig, während Du Attributwerte beim Experimentieren verwendest. Zum Beispiel kann eine hohe Oktave zu schmerzenden Geräuschen führen, die nicht nur Deine Ausrüstung Deiner Maschine beschädigen können, sondern auch Deine Ohren, während Du Kopfhörer trägst.

In der traditionellen Musiktheorie ist die Oktave der Mitte C 3. Es ist jedoch 5 in Renardo.
```python
oct=5
```

Schlechtes Beispiel:
```python
oct=60
```

Um alle Standardwerte der Grundattribute eines Players zu erhalten, verwende:
```python
print(Player("pluck").info())
```
---