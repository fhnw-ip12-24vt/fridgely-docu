# TC 8.5: Punktesystem und Berechnung

## Testbeschreibung
Überprüft, ob das Punktesystem im Multiplayer-Modus korrekt arbeitet und die Punkte (z. B. „Verschwendungspunkte“ bzw. Nachhaltigkeitsbonus) korrekt berechnet werden.

## Testart
Funktionstest / Integrationstest

## Annahmen und Voraussetzungen
- Fridgely ist eingeschaltet und betriebsbereit.
- Der Multiplayer-Spielzyklus (Einkaufs- und Kochphase) wurde gestartet und erfolgreich abgeschlossen.
- Die interne Logik zur Punkteberechnung (basierend auf den gescannten Produkten und der Kochphase) ist implementiert.

## Testdaten
- Simulierte Eingaben bzw. Produktszenarien, die zu vorhersehbaren Punktzahlen führen.

## Auszuführende Schritte
1. Starte den Multiplayer-Zyklus, scanne Produkte in der Einkaufsphase.
2. Wähle während der Kochphase ein Rezept aus.
3. Beobachte nach Abschluss der Kochphase die berechneten Punkte.

## Erwartetes Ergebnis
- Das Punktesystem stimmt mit den vorgegebenen Berechnungsregeln überein.