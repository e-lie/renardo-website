---
title: Ein wenig Python zu Beginn
---


Die ersten Schritte lernen die grundlegenden Funktionen des Editors Schritt für Schritt.

**Starte Renardo.**

Da Renardo Python verwendet, beginnen wir mit einem Python-Code:

Gebe im Textteil des Editors die folgende Zeile ein und drücken **Ctrl+Enter** (Cmd+Return), während der Cursor an der Zeile übersteht.
```python
2 + 2
```

Die Ausgabe eines ausgeführten Codes wird in der Konsole im unteren Fenster des Programms angezeigt. Die Konsole zeigt die eingegebene Zeile an. Verwende die Pythonfunktion **_print()_** um das Ergebnis anzuzeigen.
```python
print(2 + 2)
```

Jetzt wickeln wir die Gleichung in eine Variable. Wir verwenden Variablen oft. Schreibe die 2 Zeilen direkt untereinander, so dass sie vollständig als Block ausgeführt werden kann:
```python
a = 2 + 2

print(a)
```

Variablen können auch kombiniert werden:
```python
a = 2
b = 3
c = a + b
print(c)
```

Wenn Du nur eine Zeile innerhalb des Blocks ausführen möchtest, bewege den Cursor über die Linie und drücke **Alt + Enter**.
```python
print("Hello lively coder!")
```

Die allgemeine Philosophie von Renardo ist es, „Player()“-Objekte so einfach wie möglich zu erstellen, während Keyword-Argumente, die die Pbind-SynthDef-Beziehungen von SuperCollider widerspiegeln und ihre Aktionen auf einer global zugänglichen Uhr planen.

Wenn Du mehr über eine Funktion oder Klasse wissen willst – gebe einfach Hilfe, gefolgt vom Namen dieses Python-Objekts in Klammern >> _help(object)_, z.B.:
```python
help(Player())
```

Ein SynthDef in Renardo ist ein Player() Objekt. Es ist im Wesentlichen Dein digitales Instrument, das Du in Deiner Komposition verwendest.
