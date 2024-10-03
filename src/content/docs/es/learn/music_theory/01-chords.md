---
title: Chords
---


### Chord


In music, a chord is the simultaneous sounding of at least three different tones that can be interpreted harmonically.

We can divide chords into different types depending on how many notes they have. We can have them in:

* Groups of two notes - called intervals or dyads
* Groups of three notes - known as triad chords
* Groups of four or more notes - usually called seventh chords or expanded chords

A triad occupies the root or first note of the scale, the third degree, and the fifth degree, with each interval being a third.

For example, the C minor scale has the notes C-D-Eb-F-G-Ab-B-C. Take the 1st, 3rd and 5th notes (C-Eb-G) to get a C to form a minor triad.

A seventh chord uses the root, 3rd, 5th, and 7th degree degrees, so a Cmin7 chord would add the Bb (C-Eb-G-Bb). C minor seventh chord.

Extended chords add the 9th, 11th, and 13th scales (the octaves of the 2nd, 4th, and 6th, respectively).


### Chord Inversion

If you have a chord where the lowest note is not the note the chord is named after, we call this a chord inversion. A chord inversion takes a different starting note (also called a bass note) and builds the chord from there. Chord inversions are mainly used to allow easier voice guidance through different chord progressions, especially in the bass.

Features of a chord inversion are:

*   The root note is not in the bases.
    
*   Get a smooth dynamic by rearranging the chords through changing the octave of notes to align closer to first chord, thus in versing the highest note to the bass note.
    
*   Inversion of a 5th becomes a 4th and visa verse.
    
*   Major 2nd inverted becomes a minor 7th and a minor 7th becomes a Major 2nd.
    
*   Major 6th inverted becomes a minor 3rd and a minor 3rd becomes a Major 6th.
    

---
### Chord progression


To create a nice sounding and interesting melody, you need to carefully choose how each note moves to the next note and how each note relates to the notes in its vicinity. Notes can't be too far apart, and usually you want the notes to stay within the key or related keys.

The same concept is used for harmony. Since a song usually consists of more than one chord, you need to relate each chord to the one before and after it in order for the harmonic movement to sound good and interesting. This is where a chord progression comes into play.

A chord progression is when several different chords are played one after the other.

**Dur <<>> Moll**

Major and minor form the two sides of the proverbial coin when it comes to defining the key of a song or composition. Songs are in either a major or a minor key. Sometimes more complex songs or pieces contain modulations (key changes), and we can see both major and minor keys represented in a single work. However, major and minor keys (and their correlating modes) cannot occur simultaneously, at least in tonal music.

Each piece or section of a piece must be either major or minor. You can't be both. Major and minor songs are based on their respective scales (modes). This provides information about both the content of the melody and the harmony of a piece.

In other words, songs with a major key are selected from notes found in a particular seven-note major scale (like C major or F major, etc.). Songs tuned in minor are selected from seven-part minor scales (such as C minor or F minor, etc.). In the case of minor, however, there is a super-ordinate minor scale called the natural minor, as well as two variants, each called the harmonic and melodic minor.

In addition, major and minor chord progressions usually follow the primary cadences (harmonic touchstones) of the mode from which they are derived. Pieces tuned to major almost always end on a major **home-base** chord. This chord is usually referred to as **I** using Roman numerals.

The opposite is the case with songs in the minor key. Occasionally, however, classical pieces with a minor key surprise the listener by suddenly ending with a major third in the **home-base** or **I** chord. This unexpected switch gives the music a sudden boost. The classic term for this is Picardy third.

Create a minor from a major chord by lowering the 3rd, 6th and 7th degrees by one note.

Minor:

| **Moll** | **Dim**  | **Dur** | **Moll** | **Moll** | **Dur** | **Dur** |
| -------- | -------- | ------- | -------- | -------- | --------| ------- |


Major:

| **Dur**  | **Moll** | **Moll** | **Dur**  |  **Dur** | **Moll** | **Dim** |
| -------- | -------- | -------- | -------- | -------- | ---------| ------- |


Am Example:

|  **Am**  |  **B0** | **C** |  **Dm**  |  **Em**  |  **F**  | **G** |
| -------- | ------- | ----- | -------- | -------- | ------- | ----- |


Cm Example:

|  **Cm**  |  **D0** | **D#** |  **Fm**  |  **Gm**  |  **G#**  | **A#** |
| -------- | ------- | ------ | -------- | -------- | -------- | ------ |


**A minor scale can be achieved by lowering the 3rd, 6th and 7th major tones by one note**

```python
print(Scale.major)
```
_Console output >> P[0,2,4,5,7,9,11]_


```python
print(Scale.minor)

```
_Console output >> P[0,2,3,5,7,8,10]_


If you only want to change one chord to minor, lower the third note.

A melodic minor scale is created by raising the 6th and 7th notes of the minor scale.

```python
print(Scale.minor)

```
_Console output >> P[0,2,3,5,7,8,10]_


```python
print(Scale.melodicMinor)
```
_Console output >> P[0,2,3,5,7,9,11]_


Examples 7th minor scale of E (E3,F#3,G3,A3,B3,C4,D4,E4)

* E3, G3, B3, D4 – m7 (add F#4 for m9)
* F#3, A3, C4, E4 – Dim7 (add G4 for Dim9) 
* G3, B3, D4, F#4 – Maj7 (add A4 for Maj9)
* A3, C4, E4, G4 – m7 (add B4 for m9)
* B3, D4, F#4, A4 – m7 (add C5 for m9)
* C4, E4, C4, B4 – Maj7 (add D5 for Maj9)
* D4, F#4, A4, C5 – Major chord with minor7 – Dom7 (add E5 for Dom9)

