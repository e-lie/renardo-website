---
title: Integración con Reaper (muy poco útil).
---


## Disclaimer

This page it about hacking around and make use of the Renardo integration to control Reaper DAW.

This is raw, currently untested outside of my archlinux based setup, and probably not very usable, especially if you're not confortable with your sound setup, Python environments, or SuperCollider architecture.

This said it has worked for me for 2 years now and it allows very good sounding FoxDot/Renardo music by programmatically controlling any plugin (VST/LV2/etc instruments and effects) from Renardo.

## Install Reaper

Reaper is not free of charge nor open source. The full featured demo version is free forever but should then consider bying a licence if you use it regularly. 

It's a very nice community driven DAW that goes really far with features of mixing, multichannel, extreme customization, programmability through API. It's compatible with Windows, Linux and MacOS. That's why I choosed it as plugin host for Renardo to control.

Go to https://reaper.fm, download it and follow instructions to install. On archlinux based distro you can `yay reaper`.

## Download Vita(lium) plugin (as an example synthetizer)

Vital is a very popular wavetable/everything synth plugin, that is open source.

Vitalium is a fork that removes the  commercial part of vital but is a bit outdated.

- If you want to use it for the examples below, install from https://vital.audio website or kxstudio deb repo (vitalium) or maybe with you prefered package manager.

## Configure Reaper

Find your Reaper config folder with : **Options > Show Reaper resource path in explorer/finder** 

- Inside **Project Template**, download the file https://samples.renardo.org/renardo_reaper_template.RPP
- Go to Options/Preference and activate : **Enable python for use in Reascripts**
- In the preference you can also ensure REAPER know where to find your plugins and rescan the available plugins : Check where Vital(ium) is installed and add the containing folder if it not in the list.
- Quit reaper

## Test if reapy library is working

The integration is based on reapy library. You should install `python-reapy` and follow the getting started to see if you can `import reapy` without errors: https://python-reapy.readthedocs.io/en/latest/install_guide.html#://

It can be somehow the tricky part : sometimes it does work and you have to hack arround to make this library work.

## Test in Renardo

- Launch renardo with FoxDot editor and ensure you have renardo version `1.0.0.dev7` or more (you can see this in the window border). If not you can install with `pipx uninstall renardo` then `pipx install renardo==1.0.0.dev7`.
- Launch reaper and open the project template `renardo_reaper_template`
- Launch renardo Supercollider backend and an editor configured to be used with renardo.
- Execute `from renardo_lib.preset import *`

### Create an FX chain

- Add a vital (or other instrument plugin) to **chan1** track
- Export it as an FXChain (**Ctrl+click** on a plugin to open the window then **export selected fx as chain**)

### Test

- execute the code `myvital = instanciate("chan1", "<fxchainname>")`. This create a renardo synth that proxy the plugin in reaper.
- then ensure supercollider MIDI output is connected to (first) REAPER Midi input.
- You should be able to produce sound with `v1 >> myvital([0,1,2,4], dur=.5)`

### Latency

- You need to fix the delay between the reaper midi instrument and Supercollider synthdefs. Experiment with by changing the values of latency and nudge to adjust both instruments:

```python

v1 >> myvital([0,4,4,4], dur=.5)
d1 >> play("Xooo")

Clock.latency = .5
Clock.midi_nudge = -.232
```

### Controlling plugin params !!

When you instanciate an fxchain with renardo you can directly control any parameter of any plugin of the chain using a snake_case version of their name.

Example:

```python
v1 >> myvital([0,4,4,4], dur=.5, filter_fx_switch=1, monpetitplugindereverb_mix=.5)
v1.filter_fx_resonance=.2
v1.filter_fx_cutoff=linvar([1,.2], [8], start=Clock.mod(4))
```

The control of plugin params with linvars works but is not as precise and easy as controlling supercollider params with it !!

**all param values are in [0,1] range**

You can also rename you params inside reaper to have better names in Renardo : `filter_fx_resonance` > `reso`