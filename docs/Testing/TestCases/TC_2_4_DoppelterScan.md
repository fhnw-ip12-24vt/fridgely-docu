# TC 2.4: Doppelter Scan desselben Produkts

## Testbeschreibung
Dieser Test überprüft, ob der Bestand von bereits gescannten Produkten von Fridgely korrekt auf dem zweiten Bildschirm angezeigt wird.

## Testart
Funktionstest / Integrationstest

## Annahmen und Voraussetzungen
- Fridgely ist eingeschaltet

## Testdaten
- Produkt mit gültigem, in der Produktdatenbank vorhandenem Barcode

## Auszuführende Schritte
1. In den Scanmodus von Fridgely gehen
2. Produkt scannen
3. Dasselbe Produkt erneut scannen

## Erwartetes Ergebnis
- Beim ersten Scan wird das Produkt im System gespeichert und auf dem Lagerbildschirm angezeigt
- Beim zweiten Scan wird das Produkt nicht in den Bestand aufgenommen