# TC 4.2: Kein Rezeptvorschlag gefunden

## Testbeschreibung
Dieser Test überprüft, ob Fridgely korrekt reagiert, wenn kein Rezeptvorschlag gefunden wird.

## Testart
Funktionstest / Integrationstest

## Annahmen und Voraussetzungen
- Fridgely ist eingeschaltet
- Mindestens drei Produkte wurden gescannt und im System/Lager erfasst, welche aber zu keinem Rezept führen

## Testdaten
- Mindestens 3 Produkte, deren Kombination nicht zu einem Rezept führen
- (TBD: Beispiel für falsche Produktkombination auflisten)

## Auszuführende Schritte
1. Scan-Modus/Phase beenden

## Erwartetes Ergebnis
- Automatischer Wechsel in den Rezept-Modus/Phase
- Fridgely zeigt eine Meldung an, dass kein Rezept gefunden wurde
- Der Benutzer kann die Rezept-Phase beenden