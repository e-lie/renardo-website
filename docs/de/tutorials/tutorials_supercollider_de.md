

## SynthDefs


Renardo erstellt Musik, indem er Player-objekte ein *digitales Instrument* zum Spielen gibt, die als **SynthDefs** bezeichnet werden. Du kannst die Liste der vorinstallierten *Synths* durch den folgenden Befehl in der Konsole anzeigen:
```python
print(SynthDefs)
```

Jeder dieser stellt ein **SynthDef***-Objekt dar. Diese Objekte werden dann den Player-Objekt zum Spielen gegeben - wie ein Instrument jemandem in Deinem Orchester zu geben.

---
### Schreibe Deine eigenes Instrument

Dies ist etwas fortgeschrittener, aber wenn Du bereits SynthDefs in Supercollider geschrieben hast, dann könntest Du dich wie zu Hause fühlen. Wenn nicht, das [SuperCollider Buch](https://github.com/supercollider/scbookcode/) wird helfen mit SuperCollider zu starten.

Renardo kann auf jeden SynthDef zugreifen, der auf dem SuperCollider-Server gespeichert ist, aber es muss wissen, dass es da ist. Wenn Du bereits ein SynthDef in SuperCollider geschrieben hast und es \mySynth benannt hast, dann erstelle einfach eine SynthDef-Instanz mit Renardo wie folgend:
```python
mySynth = SynthDef("mySynth")
```

Mit dem gleichen variablen Namen in Renardo wie in SuperCollider für Dein SynthDef ist eine gute Idee, um Verwirrung zu vermeiden. Wenn Du während der Laufzeit in Renardo Deine eigenen SynthDef schreibst oder bearbeiten möchtest, kannst Du eine SuperCollider API verwenden, indem Du das SCLang-Modul importiersts. Alle Renardo SynthDef-Objekte erben das Basis-Klasse-Verhalten, wie Tief- und Hochpassfilter und Vibrato, aber diese können einfach übergeordnet oder aktualisiert werden. Wenn Du mehr über die digitale Klangverarbeitung und die SynthDef-Kreation erfahren möchten, besuche die [SuperCollider Documentation](https://doc.sccode.org/). Unten ist ein Beispiel für die Schaffung eines SynthDef in Renardo:

Importmodul zum Schreiben von SCLang Code in Python
```python
from SCLang import *
```

Erstelle eine SynthDef namens 'beispiel' (unter Verwendung des gleichen variablen Namens wie der SynthDef-Name ist eine gute Idee)
```python
example = SynthDef("example")
```

Erstelle einen Oszillator (osc) mit einer Sinuswelle
```python
example.osc = SinOsc.ar(ex.freq)
```

Und gib ihm eine perkussive Envelope (env)
```python
example.env = Env.perc()
```

Und speichere es schlussendlich!
```python
example.add()
```

So erstellst Du einen SynthDef:
```python
with SynthDef("pads") as pads:
	pads.osc = SinOsc.ar(pads.freq)
	pads.env = Env.perc()
```

Equivalent zu:
```python
pads = SynthDef("pads")
pads.osc = SinOsc.ar(pads.freq)
pads.env = Env.perc()
pads.add()
```

---
## Effekte

W.I.P

### Schreibe dein eigenen Effekt

W.I.P