# TC 8.3: Rezept auswählen und Kochphase beenden

## Testbeschreibung
Dieser Test überprüft, ob nach der Auswahl eines Rezeptes durch Benutzer*in 2 die Kochphase korrekt beendet wird, Nachhaltigkeitspunkte berechnet werden und das Feedback (über Pinguin-Visualisierungen) angezeigt wird – was den Abschluss des Spielzyklus signalisiert.

## Testart
Funktionstest / Integrationstest

## Annahmen und Voraussetzungen
- Fridgely ist eingeschaltet und betriebsbereit
- Kochphase ist aktiv
- Rezeptvorschläge wurden aus der Datenbank geladen und werden auf dem Touchscreen angezeigt

## Testdaten
- Gültiges, auswählbares Rezept oder Rezepte (basierend auf den zuvor gescannten Produkten)

## Auszuführende Schritte
1. Benutzer*in 2 wählt einen Rezeptvorschlag aus (via Touch).

## Erwartetes Ergebnis
- Fridgely berechnet im Hintergrund die "Nachhaltigkeitspunkte" basierend auf den gescannten Produkten, welche im Rezept benutzt werden.
- Fridgely entfernt die im Rezept benötigten Produkte aus dem Lager.
- Die Kochphase wird beendet.
- Ein visuelles Feedback (Pinguin-Sprite) zeigt die Nachhaltigkeitsbewertung der Runde an.
- Der Spielzyklus wird zurückgesetzt und ein neuer Tag bzw. eine neue Einkaufsphase gestartet.