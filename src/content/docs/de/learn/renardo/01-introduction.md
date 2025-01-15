---
title: Einleitung
---

### Was ist Live Coding?

_**“Live Coding ist eine neue immer interessantere Richtung in der elektronischen Musik und in Videokunst. Live Coders enthüllen und verdrahten die Innereien einer Software, während sie improvisierte Musik erzeugt.”**_ - toplap.org

*   Interaktives Programmieren als Kunstperformance wie Musik- oder Videokunst
*   Verwenden von Code zur Beschreibung von Regeln für ein Kunstwerk
*   Live-Notation / Komposition als Performance
*   Der Code kann in Echtzeit geändert und erneut ausgeführt werden, während das Programm weiterlaeuft (Musik während der Ausführung komponieren).
*   Bringt Computersprache in ein soziales Umfeld und macht so das Codieren zu einer sozialen Aktivität


---
### Warum Code für Musik verwenden?

*   Klassische Musik mit Notation auf Blättern ist bereits ein Code zum Schreiben von Musikstücken
*   Tonhöhe, Dauer, Lautstärke in Noten ist ein Code, der von Musikern gelesen werden kann
*   Mit Live-Codierung kannst du:
*   flexible Beschreibungsregeln nutzen
*   den Code ohne Benutzeroberfläche hacken
*   mit deiner Komposition interagieren, während die Musik spielt
*   am Rande der Echtzeit arbeiten


---
### Was ist Renardo?

*   Renardo ist eine Wiedergeburt von FoxDot, nachdem es abgeschrieben wurde. Vielen Dank an den Entwickler Ryan Kirkbride aus Leeds UK für seinen Beitrag zur Live-Coding-Community!
*   Renardo ist ein Python-Paket, das mit einer eigenen IDE und einem Plugin für [Pulsar](https://pulsar-edit.dev/) namens Pulsardo kommt
*   Renardo spielt Musik, indem Du auf alle SynthDefs zugreifest, die auf einen lokalen SuperCollider-Server mit einigen benutzerdefinierten Bits von Syntax geladen werden
*   SuperCollider ist eine Programmiersprache, die ursprünglich 1996 von James McCartney für Echtzeit-Audiosynthese und algorithmische Kompositionen veröffentlicht wurde, die unter der Renardo-Umgebung verläuft
*   Live-Codierung mit Python via Renardo bietet durch seine reaktiven und dynamischen Objekte zugängliche Zustände
*   Renardo konzentriert sich auf musikalische Muster, nicht auf die digitale Signalverarbeitung (DSP), die von [SuperCollider](https://en.wikipedia.org/wiki/SuperCollider) programmiert und über [OSC](https://en.wikipedia.org/wiki/Open_Sound_Control) gesteuert wird
*   Renardo hat eine saubere Syntax, die leicht zu lesen ist, so kann der Code von einem Publikum und traditionellen Musikern verstanden werden, ohne Renardo oder Programmierung zu kennen