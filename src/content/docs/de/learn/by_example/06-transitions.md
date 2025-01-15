---
title: Übergänge (Transitions)
---

## Übergänge erstellen

* Ramp nach oben, dann Pause, dann wieder Beats (Trommelroll...Ruhe...Beat). Hier können vorzüglich die Gruppenzuordnungen z. B. mit _**gBeats.hpf = linvar([0,5000], [12,0], start = Clock.now())**_, dann ganz plötzlich _**gBeats.amp = var([0,1], [4,inf], start=Clock.now()**_
    
* Um einen Übergang mit der nächsten Bar zu beginnen, verwende **start=nextbar***.
* Ziehe ab bevor Du addierst, wie z.B. nur Schnare und HiHat ohne Bassbeat.
* Rolle und hebe es mit 8. und 16. Noten von z.B. Schnare, HiHat, Shaker oder Basskick.
* Wenn Du einen Übergang von einem Abschnitt zu einem anderen benötigst, sei subtil, wenn du keine große Subtraktion, wie das Schlagzeug zu stoppen, verwendest.