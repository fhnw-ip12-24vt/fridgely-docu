# TC 2.1: Produkt scannen und Bestand aktualisieren

## Testbeschreibung
Dieser Test überprüft, ob ein Produkt erfolgreich gescannt wird und der Bestand von Fridgely aktualisiert wird.

## Testart
Funktionstest / Integrationstest

## Annahmen und Voraussetzungen
- Fridgely ist eingeschaltet
- Barcode-Scanner ist funktionsfähig
- Verbindung zur Datenbank besteht

## Testdaten
- Produkt mit gültigem Barcode, welches auch in der Datenbank vorhanden ist

## Auszuführende Schritte
1. In den Scanmodus von Fridgely gehen
2. Barcode des Produkts scannen

## Erwartetes Ergebnis
- Informationen zum gescannten Produkt werden angezeigt
- Produkt wird in den Bestand von Fridgely aufgenommen
- Produkt wird im Lager / zweiten Bildschirm angezeigt