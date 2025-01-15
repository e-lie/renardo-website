---
title: Starte Renardo
---


Renardo kann SuperCollider und einen Code-Editor für Dich automatisch starten. Oder Du kannst das alleine tun:

- _Facultative Linux step_ : wenn Du JACK-Server verwendest, starte es zuvor (kein Bedarf, wenn Du `pipewire-jack` verwendest)

- Automatischer Modus: Starte `renardo` in einem Terminal und klicke dann auf die Schaltflächen in der Terminal-Schnittstelle, um SuperCollider und einen Editor zu starten. Wenn Du Pulsar verwendest, musst Du das Plugin Pulsardo installieren und manuell starten (siehe doc)

- Manueller Modus: Starte SuperCollider Backend manuell: Öffne SuperCollider IDE und führe `Renardo.start;` aus, 
  dann entweder:
    - starte Pulsar manuell und starte die Pulsardo Erweiterung
  oder:
    - starte den FoxDot Editor direkt mit: `renardo --foxdot-editor`

### Teste und benutze Renardo

Sobald Renardo den foxdot Editor oder Pulsardo gestartet hat

- gebe `b1 >> blip()` ein und führe es aus (Strg+Enter)

Es sollte einige Blips produzieren \o/

Wenn nicht, versuche zuerst, beide Software zu beenden und starte einfach SuperCollider noch einmal zuerst und danach Renardo oder schaue in den Problembehebung Abschnitt.