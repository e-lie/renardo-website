

# Renardo

## Music livecoding environment - FoxDot fork

![Renardo screenshot](/images/screenshot1.png)


### Available soon !!

(in the next weeks for the first beta version)

Renardo intent is to bring back FoxDot (how nice and classical) livecoding language and continue improving it !*


## Features (to come...)

### Bring FoxDot back to usability and make it easier for new users to adopt it

FoxDot has not been maintained by it creator (Qirky) for the last 3 years. There has been multiple very cool community forks but hard to identify, install and understand without looking in the code. Even before, FoxDot like other livecoding tools was already hard to install for non developers.

- Renardo as a fork of FoxDot will support all vanilla FoxDot features.

- Renardo bundle, using Pyinstaller will make the environment easily installable by simply downloading an archive including Python, SuperCollider and Renardo/FoxDot.

- The new name of Renardo come to make the new fork identifiable and thus findable online especially to serve as support for workshops and musical teaching.

- This website (renardo.org) will soon present an extensive documentation and beginner friendly tutorials.

### Cleaning and refactoring

- Progressive and deep code refactoring in progress seeking Python new features and good practices.

- Renardo is FoxDot made modular, splitting the codebase into several pieces / PyPI packages : `renardo-lib`, `renardo` (launcher + configuration), |`FoxDot-editor` (Tkinter Editor from FoxDot) + later `renardo-panopticon` TUI, `renardo-reaper`

### New utility functions to compose musical pieces

- Fade (...to, ...in or ...out) functions
- Smart periodic pause functions
- New rythm generators
- New methods of Pattern interpolation
- New utility decorators to write down/produce pieces/tracks with code (as opposed to livecoding)

### External TUI to see FoxDot state while playing

- Independant of the editor in use (FoxDot editor, Pulsar, VIM, VSCod(ium) etc)
- Interactive displaying of currently active players and their parameters
- Clock display with multiple configurable modulo based progressbars
- Error/debug display

### REAPER DAW / Vital(ium) Synth integration

- Reaper projects templates for use with Renardo
- Instantiation of classic (VST,AU,LV2) plugins via code
- Automatic mapping of all plugin's parameters for native control from renardo.

### Ableton Link clock synchronisation...

- ...As de facto standard for music software synchronisation and synchronisation with other livecoding environments.