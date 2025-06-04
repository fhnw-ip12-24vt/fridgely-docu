# TC 8.4: Nachhaltigkeitsbewertung und Pinguin-Feedback

## Testbeschreibung
Dieser Test überprüft, ob Fridgely anhand der gescannten Produkte den Nachhaltigkeitsgrad korrekt bewertet und das entsprechende Pinguin-Bild (Feedback) anzeigt.  
Dabei soll ersichtlich sein, ob der Koch als nachhaltig (Sieges-Pinguin) oder als verschwenderisch (z. B. Game-Over-Pinguin) eingestuft wird.

## Testart
Funktionstest / Integrationstest

## Annahmen und Voraussetzungen
- Fridgely ist eingeschaltet und betriebsbereit
- Ausreichend Daten (gescannte Produkte) vorhanden, welche sinnvolle Rezepte und Bewertungen ermöglichen

## Testdaten
- Produktszenario mit hoher Nachhaltigkeit (z. B. überwiegend umweltfreundliche Produkte)  
- Produktszenario mit geringer Nachhaltigkeit (z. B. überwiegend weniger nachhaltige Produkte)

## Auszuführende Schritte
1. Multiplayer-Zyklus starten gemäss TC 8.1 bis TC 8.2
2. Simulation der Szenarien "Hohe Nachhaltigkeit" und "Niedrige Nachhaltigkeit"
3. Pinguin-Feedback beobachten

## Erwartetes Ergebnis
- Bei Szenario "Hohe Nachhaltigkeit" wird ein positiveres oder Sieges-Pinguin angezeigt
- Bei Szenario "Niedrige Nachhaltigkeit" wird ein negativeres oder Game-Over-Pinguin angezeigt
- Die Nachhaltigkeitsbewertung für die aktuelle Runde wird korrekt im System festgehalten