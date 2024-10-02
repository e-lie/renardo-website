---
title: Transitions
---


### Create transitions

* Ramp up, then breath, then beat again (drum roll...silence…beat). Here one can excellently the group assignments z. B. with **gBeats.hpf = linvar([0,5000], [12,0], start = Clock.now())**, then all of a sudden **gBeats.amp = var([0,1], [4 ,inf], start=Clock.now())**
* To start a transition with the next bar just use **start=nextbar** instead.
* Subtract before you add, like no bass beat only snare and HiHat.
* Roll and ramp it up with 8th and 16th notes of e.g. snare, HiHat, Shaker.
* If you need a transition from one section to another, without big subtraction like taking drum beat out, be subtle.