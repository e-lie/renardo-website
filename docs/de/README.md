

## Renardo ist eine Nachfolgeversion (Branch) von FoxDot.

FoxDot ist eine Software, die in der Algorave Community verwendet wird. Das Projekt wurde von Ryan Kirkbride vor fast 10 Jahren erstellt!

...aber die Entwicklung wurde vor 3 Jahren stillgelegt.

Die Gemeinschaft ist jedoch noch sehr lebendig. (überprüfe vor allem den FoxDot Kanal auf Telegram)

Es gab mehrere sehr coole Community Forks. Jedoch sind viele schwer zu finden, zu installieren und zu verstehen, ohne im Source-code zu suchen.

Davor war es bereits schwer FoxDot für Nicht-Entwickler zu installieren. Dies resultiert aus denen verschiedenen zusammengesetzten Elementen (z.B. SuperCollider).

Die Absicht des Projekts ist daher:

- Renardo als Fork/Branch von FoxDot, welche/r alle/die meisten Vanille FoxDot Funktionen unterstützen wird.
- Der neue Name "Renardo" wird genutzt, um den neuen Fork/Branch identifizierbar und damit einfach online findbar zu machen. Dies ist insbesondere zur Unterstützung von Workshops und der musikalische Lehre konzipiert.
- Renardo sollte einfacher zu installieren sein (und es wird weiterhin einfacher werden).
- Es gibt viel Potenzial für FoxDot/Renardo und wir möchten es noch wunderbarer machen.

Diese Software würde ohne die harte und innovative Arbeit von Ryan Kirbride und allen Community-Beitragern nicht existieren. Vielen Dank an die Erzeuger und Entwickler dieser Platform!!

## Präsentation neuer Features und Architektur

### Neue Dokumentationen und Tutorials (Arbeit im Fortschritt)

### Refactoring und Verbesserung

- Progressive und tiefe Code-Refactoring in der Weiterentwicklung und auf der Suche nach neuen Python-Funktionen und bessere pragmatische Realisierung.
- Renardo ist FoxDot modular aufgebaut, daher ist die Codebasis in mehrere Stücke aufgeteilt / PyPI-Pakete : `renardo-lib`, `renardo` (launcher + Konfiguration TUI), `renardo-gatherer` (install/share probe packs and Synthdefs) |`FoxDotEditor` (Tkinter Editor von FoxDot), `renardo-reaper `

### Neue Utility-Funktionen, um Musikstücke besser zu komponieren

- Fade-Funktionen (...to, ...in or ...out)
- Intelligente periodische Pausenfunktionen (`eclipse`)
- Neue Rhythmusgeneratoren
- Neue Methoden der Musterinterpolation
- Neue Gebrauchsdekoratoren, um Stücke/Tracks mit Code (im Gegensatz zur Livecoding) zu schreiben

### Baldige Features...

### Einfach zu installieren

- Renardo Paket, mit Pyinstaller wird es leicht installierbar, indem Du einfach ein Archiv einschließlich Python und Renardo herunterladest.

### Externe TUI welche FoxDot Zustand während des Spiels zeigt

- Unabhängig von verwendeten Editors (FoxDot Editor, Pulsar, VIM, VSCod(ium) etc.)
- Interaktive Darstellung der aktiven Player()-Objekte und deren Parameter
- Clock-Anzeige mit mehreren konfigurierbaren modulobasierten Fortschrittsleisten
- Error/debug Notizen

### REAPER DAW/Vital(ium) Synth-Integration

- Reaper-Projektvorlagen für den Einsatz mit Renardo
- Instantiation von klassischen (VST,AU,LV2) Plugins über Code
- Automatische Kartierung aller Plugin-Parameter für die native Kontrolle von Renardo.

### Ableton Link Zeitsynchronisation...

- ...Als de facto-Standard für die Synchronisierung und Synchronisation von Musiksoftware mit anderen Livecoding-Umgebungen.