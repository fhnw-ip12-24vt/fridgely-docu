# TC 8.7: Wiederholte Spielzyklen (Reset-Funktionalität)

## Testbeschreibung
Überprüft, ob nach Abschluss eines vollständigen Multiplayer-Zyklus (Einkaufs- und Kochphase inklusive Feedback) das System korrekt zurückgesetzt wird und ein neuer Spielzyklus gestartet werden kann.

## Testart
Integrationstest / End-to-End-Test

## Annahmen und Voraussetzungen
- Fridgely ist eingeschaltet und betriebsbereit.
- Ein vollständiger Zyklus wurde bereits durchlaufen (Einkaufsphase, Kochphase, Feedback).
- Systemvariablen und Zustände werden nach Abschluss korrekt zurückgesetzt.

## Testdaten
- Simulierte Produktscans und Rezeptwahl, die einen vollständigen Zyklus ermöglichen.

## Auszuführende Schritte
1. Führe einen vollständigen Multiplayer-Zyklus (TC 8.1 bis TC 8.3) durch.
2. Überprüfe nach Abschluss der Kochphase, dass alle Zustände (z. B. gescannte Produktliste, Punktestand, angezeigtes Feedback) auf den Ausgangszustand zurückgesetzt werden.
3. Starte anschliessend erneut den Zyklus, indem Benutzer*in 1 die Einkaufsphase aktiviert.

## Erwartetes Ergebnis
- Nach Abschluss eines Zyklus werden alle relevanten Variablen und Zustände (z. B. Punkte, Feedbackanzeige, Produktliste) zurückgesetzt oder korrekt gesetzt.
- Das System signalisiert, dass ein neuer Zyklus gestartet werden kann.
- Die Wiederholung des Zyklus erfolgt reibungslos, ohne Reste des vorangegangenen Zyklus.