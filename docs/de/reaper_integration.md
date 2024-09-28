
## Ausschluss


Dies ist roh, derzeit nicht getestet außerhalb meiner archlinux-basierten Einrichtung, und wahrscheinlich nicht sehr nutzbar, vor allem, wenn Du nicht mit Deinem Sound-Setup, Python-Umgebungen oder SuperCollider-Architektur kompatibel ist.

Dies gesagt, es funktioniert für mich seit 2 Jahren, was es ermöglicht eine sehr gut klingende FoxDot/Renardo Musik durch Renardo programmatisch gesteuerte Plugins (VST/LV2/etc., Instrumente und Effekte).

## Installiere Reaper

Reaper ist weder kostenlos noch Open Source. Die voll ausgestattete Demo-Version ist kostenlos für immer, aber sollte dann durch eine Lizenz ersetzt werden, wenn Sie es regelmäßig verwendet wird. Es ist wie eine Dauerleihgabe.

Es ist eine sehr schöne Community-betriebene DAW, die wirklich weit geht mit Funktionen der Mischung, Multichannel, extreme Anpassung, Programmierbarkeit durch API. Es ist kompatibel mit Windows, Linux und MacOS. Deshalb habe ich es als Plugin-Host für Renardo zur Kontrolle gewählt.

Gehe zu https://reaper.fm, downloade es und folge den Installationsanweisungen. In archlinux basierenden Distros kannst Du `yay reaper` benutzen.

## Downloade Vita(lium) plugin (as an example synthetizer)

Vital ist ein sehr beliebtes Wavetable/everything Synth Plugin, das Open Source ist.

Vitalium ist ein Fork, die den kommerziellen Teil des Vitals entfernt hat, jedoch ist ein bisschen veraltet ist.

- Wenn Du es für die folgenden Beispiele verwenden möchten, installiere es unter https://vital.audio Website oder kxstudio deb repo (Vitalium) oder vielleicht mit Deinem bevorzugten Paketmanager.

## Konfiguriere Reaper

Finde Deinen Reaper Config-Ordner mit :**Options > Show Reaper resource path in explorer/finder** 

- Innerhalb **Project Template**, downloade die Datei https://samples.renardo.org/renardo_reaper_template.RPP
- Gehe zu Optionen/Voreinstellung und aktiviere: **Enable python for use in Reascripts**
- In der Einsellungen kannst du Reaper auch wissen lassen, wo es Deine Plugins findet: Überprüfe, wo Vital(ium) installiert ist und füge den Ordner dazu, wenn es nicht in der Liste erscheint.
- Schliesse Reaper

## Teste, ob die Reapy Library arbeitet

Die Integration basiert auf der Reapy-Bibliothek. Du solltest `python-reapy` installiert haben und den Beginneranweisung folgen, um zu sehen, ob Du `import reapy` ohne Fehler importieren kannst: https://python-reapy.readthedocs.io/en/latest/install_guide.html#://

Es kann irgendwie der knifflige Teil sein: manchmal funktioniert es nicht und man muss einen Umweg finden.

## Teste es in Renardo

- Starte Renardo mit FoxDot Editor und stelle sicher, dass Du die Renardo Version `1.0.0.dev7` oder mehr hast (Du kannst dies in der Fenstergrenze sehen). Wenn Du nicht mit `pipx deinstall renardo` installieren könntest, dann benutze `pipx install renardo==1.0.0.dev7 `.
- Starte Reaper und öffne die Projektvorlage`renardo_reaper_template`
- Starte damit Renardo, Supercollider IDE und einen Editor zu konfigurieren, um es mit Renardo zu verwendet.
- Execute `from renardo_lib.preset import *`

### Erstellen einer FX-Kette

- Füge ein Vital (oder ein anderes Instrument Plugin) zu **chan1** Track hinzu
- Exportiere es als FXChain (**Ctrl+click*** auf einem Plugin, um das Fenster zu öffnen, dann **export selected fx as chain**)

### Test

- Führe den Code `myvital = instanciate("chan1", "<fxchainname>")` aus. Dies erstellt einen Renardo Synth, welche mit Plugin in Reaper verbunden ist.
- Stelle dann sicher, dass der SuperCollider MIDI-Ausgang mit (ersten) REAPER Midi-Eingang verbunden ist.
- Du solltest in der Lage sein, Klang mit `v1 >> myvital([0,1,2,4], dur=.5)` zu erzeugen.

### Latency

- Du musst die Verzögerung zwischen dem Reaper Midi Instrument und SuperCollider Synthdefs beheben. Experimentiere mit der Änderung der Werte von Latenz und Nudge, um beide Instrumente einzustellen:

```python

v1 >> myvital([0,4,4,4], dur=.5)
d1 >> play("Xooo")

Clock.latency = .5
Clock.midi_nudge = -.232
```

### Kontolliere Plugin Parameter !!

Wenn Du eine fxchain mit Renardo instanciate, kannst Du direkt jeden Parameter jedes Plugins der Kette mit einer snake_case Version deines Namens steuern.

Beispiel:

```python
v1 >> myvital([0,4,4,4], dur=.5, filter_fx_switch=1, monpetitplugindereverb_mix=.5)
v1.filter_fx_resonance=.2
v1.filter_fx_cutoff=linvar([1,.2], [8], start=Clock.mod(4))
```

Die Steuerung von Plugin Params mit Linvars funktioniert, aber nicht so präzise und einfach wie die Steuerung SuperCollider Params mit ihm!!

**all param values are in [0,1] range**

Du kannst die Params in Reaper auch umbenennen, um bessere Namen in Renardo haben: `filter_fx_resonance` > `reso`