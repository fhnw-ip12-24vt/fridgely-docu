# TC 8.2: Einkaufsphase beenden und Kochphase starten

## Testbeschreibung
Dieser Test überprüft, ob der Wechsel von der Einkaufsphase in die Kochphase korrekt erfolgt, nachdem die erforderliche Anzahl Produkte gescannt wurde und die Einkaufsphase beendet wird.

## Testart
Funktionstest / Integrationstest

## Annahmen und Voraussetzungen
- Fridgely ist eingeschaltet und betriebsbereit
- Die Einkaufsphase ist aktiv
- Es wurden mindestens die erforderliche Anzahl (z. B. 3) Produkte gescannt
- Zwei Benutzer*innen sind aktiv (Benutzer*in 1 und Benutzer*in 2)

## Testdaten
- Produktscans, welche die Mindestanzahl der benötigten Scans erfüllen

## Auszuführende Schritte
1. Benutzer*in 1 beendet die Einkaufsphase.

## Erwartetes Ergebnis
- Fridgely beendet die Einkaufsphase.
- Fridgely startet automatisch die Kochphase.
- Rezeptvorschläge werden geladen (siehe TC 4.1).
- Benutzer*in 2 wird zur Interaktion aufgefordert.