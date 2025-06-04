# TC 2.2: Unbekanntes Produkt gescannt

## Testbeschreibung
Dieser Test überprüft, wie Fridgely reagiert, wenn ein Barcode nicht gescannt werden kann oder unbekannt bzw. nicht in der Produktdatenbank vorhanden ist.

## Testart
Funktionstest / Integrationstest

## Annahmen und Voraussetzungen
- Fridgely ist eingeschaltet
- Barcode-Scanner ist funktionsfähig
- Verbindung zur Produktdatenbank besteht

## Testdaten
- Barcode, welcher unlesbar ist oder nicht in der Produktdatenbank vorhanden ist.

## Auszuführende Schritte
1. In den Scanmodus von Fridgely gehen
2. Einen fehlerhaften Barcode scannen

## Erwartetes Ergebnis
- Fridgely zeigt eine Fehlermeldung an, dass das Produkt nicht gefunden wurde
- Nichts wird in das Lager geladen
- Benutzer kann wie gewohnt weiterscannen