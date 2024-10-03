---
title: Comienza a hacer música con livecoding
description: A guide in my new Starlight docs site.
---


## Renardo start automatic or manual

Renardo can autostart the SuperCollider backend and a code editor for you or you can do that on your own:

- _Facultative Linux step_ : if you use JACK server start it before (no need if you use `pipewire-jack`)

- Automatic mode: launch `renardo` in a terminal then click the buttons in the terminal interface to start the backend and editor. If you use Pulsar you still have to install Pulsardo extension and start it manually (see configure another coder editor section)

- Manual mode : launch SuperCollider backend manually : open SuperCollider IDE and execute `Renardo.start;` then either:
    - launch Pulsar manually and start the Pulsardo extension
    - launch FoxDot editor directly with: `renardo --foxdot-editor`

### Test and use Renardo

Once renardo foxdot editor or Pulsardo is launched

- type `b1 >> blip()` and execute

It should produce some blips \o/

If it doesn't, first try to quit both software and just start SuperCollider first and Renardo afterwards or look at Troubleshooting section.

You can then go to the Learn section of this documentation !