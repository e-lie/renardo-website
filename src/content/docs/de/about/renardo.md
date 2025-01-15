---
title: Was ist Renardo ?
description: Präsentation der Renardo-Umgebung für Livecodierung von Musik.
---

#### Renardo ist eine neue aufgearbeitete Version (ein Fork) von FoxDot.

FoxDot ist eine klassische sowie progressive Software, die in der Algorave-Community verwendet wird und vor fast 10 Jahren von Ryan Kirkbride entwickelt wurde!

...aber sie wurde seit einigen Jahren nicht mehr gepflegt.

Die Community ist immer noch sehr lebendig! (sehe Dir insbesondere den FoxDot-Kanal auf Telegram an)

Es gab mehrere sehr coole Community-Forks, die aber schwer zu finden, zu installieren und zu verstehen waren, ohne in den Code zu schauen.

Aufgrund der vielen beweglichen Teile, aus denen es besteht, war die Installation von FoxDot für Nichtentwickler schon vorher schwierig.

Die Absicht des Projekts ist also:

- Renardo wird als Fork von FoxDot alle/die meisten Vanilla-FoxDot-Funktionen unterstützen.
- Der neue Name „Renardo“ soll die neue Version (Fork) erkennbar und damit online auffindbar machen, insbesondere als Unterstützung für Workshops und Musikunterricht.
- Renardo sollte einfacher zu installieren sein (und wird weiterhin einfacher).
- FoxDot/Renardo bietet jede Menge Potenzial und wir möchten es weiterentwickeln und besser machen.

Diese Software würde ohne die harte und kluge Arbeit von Ryan Kirbride und allen Mitwirkenden aus der Community nicht existieren. Ihnen gebührt dafür großer Dank!!

## Was ist neu bei Renardo?


### Bereinigen und Refactoring

- Progressives und tiefgreifendes Code-Refactoring ist im Gange, um nach neuen Python-Funktionen und bewährten Methoden zu suchen.
- Renardo ist eine modulare Version von FoxDot, die die Codebasis in mehrere Teile/PyPI-Pakete aufspaltet: „renardo-lib“, „renardo“ (Launcher + Konfigurations-TUI), „renardo-gatherer“ (Beispielpakete und Synthdefs installieren/teilen) | „FoxDotEditor“ (Tkinter-Editor von FoxDot), „renardo-reaper“

### Neue Hilfsfunktionen zum Komponieren von Musikstücken

- Fade-Funktionen (...zu, ...hinein oder ...hinaus)
- Intelligente periodische Pausenfunktionen („eclipse“)
- Neue Rhythmusgeneratoren
- Neue Methoden der Musterinterpolation
- Neue Utility-Dekoratoren zum Aufschreiben/Erstellen von Stücken/Tracks mit Code (im Gegensatz zum Live-Coding)

### Zukünftige Funktionen ...

### Einfache Installation

- Mit dem Renardo-Paket lässt sich die Umgebung mithilfe von Pyinstaller ganz einfach installieren, indem Du einfach ein Archiv mit Python und Renardo herunterladen kannst.

### Externe TUI, um den FoxDot-Status während der Wiedergabe anzuzeigen

- Unabhängig vom verwendeten Editor (FoxDot-Editor, Pulsar, VIM, VSCod(ium) usw.)
- Interaktive Anzeige der aktuell aktiven Player-Objekte und deren Parameter
- Clock-anzeige mit mehreren konfigurierbaren, modulobasierten Fortschrittsbalken
- Fehler-/Debug-Anzeige

### REAPER DAW / Vital(ium) Synth-Integration

- Reaper-Projektvorlagen zur Verwendung mit Renardo
- Instanziierung klassischer (VST, AU, LV2) Plugins über Code
- Automatische Zuordnung aller Plugin-Parameter zur nativen Steuerung von Renardo.

### Ableton Link-Taktsynchronisierung ...

- ...Als De-facto-Standard für die Synchronisierung von Musiksoftware und die Synchronisierung mit anderen Livecoding-Umgebungen.