# Testplan

## 1. Einführung
In diesem Dokument werden alle Informationen der Tests, welche in diesem Projekt durchgeführt werden, aufgelistet. Darunter, welche Art von Tests durchgeführt werden, wann diese durchgeführt werden, etc.

## 2. Test-Arten
In diesem Projekt wird das Produkt mit verschiedenen Arten von Tests getestet:

### 1. Funktionstest
Hier werden einzelne Funktionen/Module getestet, wie das Scannen, Mehrsprachigkeit, etc.

### 2. Integrationstests
Hier wird getestet/sichergestellt, dass die Komponenten/Module korrekt zusammenarbeiten und funktionieren.

### 3. Usability-Tests
Hier wird anhand von Prototypen und dem Endprodukt mit der Interessengruppe Tests durchgeführt.

### 4. Smoke-Tests
Hier werden schnelle grundlegende Tests durchgeführt, um sicherzustellen, dass das Produkt funktionsfähig ist.

### 5. Langzeit-Test
Um das Verhalten von Fridgely auch während langem Gebrauch zu testen, wird ein Langzeit-Test durchgeführt, in welchem Fridgely über eine längere Zeitspanne (6h) angeschaltet bleibt.

### 6. Abnahme-Test
Um die Übergabe, Abnahme und Inbetriebnahme des Produktes zu testen und überprüfen wird ein Abnahmetest gegen Ende der Produktion gemacht.

## 3. Planung der Tests

### Generelle Planung der Tests
| Art               | Zeitpunkt / Regelmässigkeit                     | Test(s)               | Verantwortlich | Status         |
|--------------------|------------------------------------|-----------------------|----------------|----------------|
| Smoketests         | Wöchentlich (Mi)                  | TC 1.1, TC 1.2, (TC 2.1) | TM             | Ongoing       |
| Funktions / Unit-Tests         | Nach jeder neuen Software-Funktion |            -           | DEV / TM             | Ongoing |
| Integrationstests  | Nach Implementierung neuer Module  | TC_2_* - TC_8_*       | TM / DEV / SA  | Ongoing       |
| Usability-Tests    | Nach Fertigstellung Gehäuse und Zielgruppenfindung (siehe Usability Tests) | TC_8_1 bis TC_8_3 | UX / TM        | Done / Planning       |
| Langzeit-Tests    | Nach Fertigstellung Gehäuse und Komponenteneinbau (siehe Langzeit-Tests) | TC_* |  TM        | Done        |
| Abnahmetest    | Gegen Ende des Projekts  | TC_* |  TM        | Planning        |

### Genauere Planung
#### Usability-Tests

##### Prototyp 3
| Datum       | Art            | Test | Verantwortlich | Status |
|-------------|----------------|------|----------------|--------|
| 16.12.2024  | Usability-Test | TBD  | UX             | Done   |

##### Endprodukt
| Datum       | Art            | Test | Verantwortlich | Status    |
|-------------|----------------|------|----------------|-----------|
| 14.05.2025  | Usability-Test | TBD  | UX       | Done  |
| 22.05.2025  | Usability-Test | TBD  | UX         | Planning  |

#### Langzeit-Tests
| Datum                        | Art          | Test | Verantwortlich | Status    |
|------------------------------|--------------|------|----------------|-----------|
| 06.05.2025 | Abnahmetest | TC_*  | TM             | Planning  |
| 14.05.2025 | Abnahmetest | TC_*  | TM             | Planning  |
#### Abnahme-Test

| Datum                        | Art          | Test | Verantwortlich | Status    |
|------------------------------|--------------|------|----------------|-----------|
| Transition-Phase (29.05.2025) | Abnahmetest | TC_*  | TM             | Planning  |

## 4. Testumgebung
| Kategorie       | Details                          |
|-----------------|----------------------------------|
| OS              | Windows & RasPi OS              |
| IDE             | IntelliJ (VS Code)              |
| Hardware        | Raspi, Touchscreen, Monitor, Barcodescanner |
| Testframeworks  | JUnit5                          |

### Randbedingungen
_Siehe [SAD](../SAD/02_architecture_constraints.md#betriebsbedingungen)_

- **Temperatur:** 10 °C bis 40 °C
- **Luftfeuchtigkeit:** 10 % bis 90 % (nicht kondensierend)
- **Betriebsumgebung:** Stabil, trocken und staubfrei
- **Schutzart:** IP20 (geschützt gegen Berührung mit festen Fremdkörpern > 12 mm, nicht gegen Wasser oder Staub)
- **Betriebsart:** On-Premises (lokal)
- **Benutzeranzahl:** 1 oder 2 Benutzer gleichzeitig
- **Vorgesehene mögliche Einsatzorte:** Primär in Bildungseinrichtungen, wie Schulen oder ähnlichen Umgebungen
