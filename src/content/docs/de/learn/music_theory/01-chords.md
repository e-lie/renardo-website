---
title: Akkorde
---


### Akkord

Ein Akkord ist in der Musik das gleichzeitige Erklingen mindestens dreier unterschiedlicher Töne, die sich harmonisch deuten lassen.

Wir können Akkorde in verschiedene Typen einteilen, je nachdem, wie viele Noten sie haben. Wir können sie haben in:

* Gruppen von zwei Noten – die als Intervalle oder Dyaden bezeichnet werden
* Gruppen von drei Tönen – die als Dreiklangakkorde bezeichnet werden
* Gruppen von vier oder mehr Noten – die normalerweise als Septakkorde oder erweiterte Akkorde bezeichnet werden

Ein Dreiklang nimmt den Grundton oder die erste Note der Tonleiter, den dritten Tonleitergrad und den fünften Tonleitergrad ein, wobei jedes Intervall eine Terz ist.

Zum Beispiel hat die c-Moll-Tonleiter die Töne C – D – Es – F – G – Ab – B – C. Nehme die 1., 3. und 5. Note (C – Es – G), um einen c-Moll-Dreiklang zu bilden.

Ein Septakkord verwendet den Grundton, den 3., 5. und 7. Tonleitergrad, so dass ein Cmin7-Akkord das Bb hinzufügen würde (C – Es – G – Bb).
c-Moll-Septakkord

Erweiterte Akkorde fügen die 9., 11. und 13. Tonleiter hinzu (die Oktaven der 2., 4. bzw. 6.).

---
#### Akkordumkehrung

Wenn Du einen Akkord hast, bei dem die tiefste Note nicht die Note ist, nach der der Akkord benannt ist, nennen wir dies eine Akkordumkehrung. Eine Akkordumkehrung nimmt eine andere Anfangsnote (auch Bassnote genannt) und baut den Akkord von dort aus auf. Akkordumkehrungen werden überwiegend verwendet, um eine leichtere Stimmführung durch verschiedene Akkordfolgen, insbesondere im Bass, zu ermöglichen.

Merkmale einer Akkordumkehrung sind:

* Der Grundton (Root) befindet sich nicht in der Basis.
* Erziele eine gleichmäßige Dynamik, indem du die Akkorde neu anordnest, indem du die Oktave der Noten so änderst, dass sie näher am ersten Akkord ausgerichtet sind, und so die höchste Note an die Bassnote anpassen
* Die Umkehrung eines 5. wird zu einem 4. und Visa-Vers
* Die invertierte Dur 2. wird zur Moll 7. und die Moll 7. zur Dur 2.
* Major 6 invertiert wird ein Moll 3. und ein Moll 3. wird ein Major 6.
    

---
### Akkordprogression

Um eine gut klingende und interessante Melodie zu erzeugen, musst du sorgfältig auswählen, wie jede Note zur nächsten Note übergeht und wie sich jede Note zu den Noten in ihrer Umgebung verhält. Noten dürfen nicht zu weit voneinander entfernt sein, und normalerweise möchtest du, dass die Notizen innerhalb der Tonart oder verwandter Tonarten bleiben.

Das gleiche Konzept wird für Harmonie verwendet. Da ein Lied normalerweise aus mehr als einem Akkord besteht, musst du jeden Akkord mit dem davor und danach in Beziehung setzen, damit die harmonische Bewegung gut und interessant klingt. Hier kommt eine Akkordprogression ins Spiel.

Eine Akkordprogression liegt vor, wenn mehrere verschiedene Akkorde nacheinander gespielt werden.

**Dur <<>> Moll**

Dur und Moll bilden die beiden Seiten der sprichwörtlichen Medaille, wenn es darum geht, die Tonart eines Liedes oder einer Komposition zu definieren.
Lieder sind entweder in einer Dur- oder einer Moll-Tonart. Manchmal enthalten komplexere Lieder oder Stücke Modulationen (Tonartwechsel), und wir können sowohl Dur- als auch Molltonarten in einem einzigen Werk vertreten sehen.
Allerdings können Dur- und Molltonarten (und ihre korrelierenden Modi) nicht gleichzeitig auftreten, zumindest in der tonalen Musik. Jedes Stück oder jeder Abschnitt eines Stückes muss entweder Dur ODER Moll sein. Sie können nicht beides sein.

Dur- und Moll-Songs basieren auf ihren entsprechenden Tonleitern (Modi). Dies informiert sowohl über den Inhalt der Melodie als auch über die Harmonie eines Stückes.

Mit anderen Worten, Lieder mit Dur-Tonart werden aus Noten ausgewählt, die in einer bestimmten Sieben-Noten-Dur-Tonleiter (wie C-Dur oder F-Dur usw.) gefunden werden. In Moll gestimmte Lieder werden aus siebenstimmigen Moll-Tonleitern (wie c-Moll oder f-Moll usw.) ausgewählt. Bei Moll gibt es jedoch eine übergeordnete Moll-Tonleiter, die als natürliches Moll bezeichnet wird, sowie zwei Varianten, die jeweils als harmonisches und melodisches Moll bezeichnet werden.

Darüber hinaus folgen Dur- und Moll-Akkordfolgen normalerweise den primären Kadenzen (harmonische Prüfsteine) des Modus, von dem sie abgeleitet sind. Dur-gestimmte Stücke enden fast immer auch auf einem Dur-„Homebase“-Akkord. Dieser Akkord wird normalerweise mit römischen Ziffern als „I“ bezeichnet.

Das Gegenteil ist bei Liedern mit Moll-Tonart der Fall. Gelegentlich jedoch überraschen klassische Stücke mit Moll-Tonart den Hörer, indem sie plötzlich mit einer großen Terz im „Homebase“- oder „I“-Akkord enden. Dieses unerwartete Umschalten gibt der Musik einen plötzlichen Auftrieb. Der klassische Begriff dafür ist Picardie-Drittel.


Erzeuge ein Moll aus einem Dur Akkord bei der Senkung des 3., 6. und 7. Tonleitergrads um eine Note.


Moll:

| **Moll** | **Dim** | **Dur** | **Moll** | **Moll** | **Dur** | **Dur** |
|----------|---------|---------|----------|----------|---------|---------|


Dur:

| **Dur**  | **Moll** | **Moll** | **Dur** | **Dur** | **Moll** | **Dim** |
|----------|----------|----------|---------|---------|----------|---------|


Am Beispiel:

| **Am** | **B0** | **C** | **Dm** | **Em** | **F** | **G** |
|--------|--------|-------|--------|--------|-------|-------|


Cm Beispiel:

| **Cm** | **D0** | **D#** | **Fm** | **Gm** | **G#** | **A#** |
|--------|--------|--------|--------|--------|--------|--------|


**Eine Moll-Tonleiter kann erreicht werden, indem der 3., 6. und 7. Dur-Ton um eine Note abgesenkt wird.**


```python
print(Scale.major)
```
_Konsolenausgabe >> P[0,2,4,5,7,9,11]_


```python
print(Scale.minor)

```
_Konsolenausgabe >> P[0,2,3,5,7,8,10]_


Wenn du nur einen Akkord in Moll ändern möchtest, senke die dritte Note.

Eine melodische Moll-Tonleiter wird durch Erhöhen der 6. und 7. Note der Moll-Tonleiter erzeugt.

```python
print(Scale.minor)

```
_Konsolenausgabe >> P[0,2,3,5,7,8,10]_


```python
print(Scale.melodicMinor)
```
_Konsolenausgabe >> P[0,2,3,5,7,9,11]_


Beispiele 7th moll skala of E (E3, F#3, G3, A3, B3, C4, D4, E4)

*   E3, G3, B3, D4 – m7 (add F#4 for m9)
*   F#3, A3, C4, E4 – Dim7 (add G4 for Dim9)
*   G3, B3, D4, F#4 – Maj7 (add A4 for Maj9)
*   A3, C4, E4, G4 – m7 (add B4 for m9)
*   B3, D4, F#4, A4 – m7 (add C5 for m9)
*   C4, E4, C4, B4 – Maj7 (add D5 for Maj9)
*   D4, F#4, A4, C5 – Major chord with minor7 – Dom7 (add E5 for Dom9)

