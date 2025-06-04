## Qualitätsanforderungen

Dieser Abschnitt dokumentiert die wichtigsten Qualitätsanforderungen an das Fridgely-System. Die grundlegenden Qualitätsziele wurden bereits in Abschnitt 1.2 vorgestellt. Hier werden diese nun durch einen strukturierten Qualitätsbaum und konkrete Qualitätsszenarien weiter spezifiziert und operationalisiert.

Fridgely als bildungsorientiertes Smart-Fridge-System stellt besondere Anforderungen an die Qualität, da es von Kindern im Alter von 7-13 Jahren genutzt wird und gleichzeitig robust, wartbar und attraktiv sein muss. Die nachfolgenden Qualitätsanforderungen bilden einen wesentlichen Leitfaden für Architekturentscheidungen und die Produktentwicklung.

---

### Qualitätsbaum

Der folgende Qualitätsbaum gibt einen strukturierten Überblick über die relevanten Qualitätsanforderungen an das Fridgely-System. Die Hauptäste repräsentieren die ISO 25010 Qualitätskategorien, die für unser System von Bedeutung sind.

```mermaid
graph TD
    Q[Qualität Fridgely-System] --> F[Funktionale Eignung]
    Q --> P[Performance]
    Q --> K[Kompatibilität]
    Q --> B[Benutzbarkeit]
    Q --> Z[Zuverlässigkeit]
    Q --> S[Sicherheit]
    Q --> W[Wartbarkeit]
    Q --> T[Übertragbarkeit]
    
    F --> F1[Funktionale Vollständigkeit]
    F --> F2[Funktionale Korrektheit]
    F --> F3[Funktionale Angemessenheit]
    
    P --> P1[Zeitverhalten]
    P --> P2[Ressourcenverbrauch]
    
    K --> K1[Koexistenz]
    K --> K2[Interoperabilität]
    
    B --> B1[Angemessenheit Erkennbarkeit]
    B --> B2[Erlernbarkeit]
    B --> B3[Bedienbarkeit]
    B --> B4[Benutzerfehlerschutz]
    B --> B5[Ästhetik der Benutzeroberfläche]
    B --> B6[Barrierefreiheit]
    
    Z --> Z1[Reife]
    Z --> Z2[Verfügbarkeit]
    Z --> Z3[Fehlertoleranz]
    Z --> Z4[Wiederherstellbarkeit]
    
    S --> S1[Vertraulichkeit]
    S --> S2[Integrität]
    S --> S3[Nachweisbarkeit]
    
    W --> W1[Modularität]
    W --> W2[Wiederverwendbarkeit]
    W --> W3[Analysierbarkeit]
    W --> W4[Modifizierbarkeit]
    W --> W5[Testbarkeit]
    
    T --> T1[Anpassungsfähigkeit]
    T --> T2[Installierbarkeit]
    T --> T3[Austauschbarkeit]
    
    %% Priorisierung durch unterschiedliche Stile
    classDef highPriority fill:#1a202c,stroke:#4a5568,stroke-width:2px;
    classDef mediumPriority fill:#2b3d4f,stroke:#83a598,stroke-width:1.5px;
    classDef lowPriority fill:#3c3836,stroke:#fabd2f,stroke-width:1px;

    %% Hohe Priorität
    class B,Z,W,B1,B2,B3,B5,Z1,Z3,Z4,W1,W4,W5 highPriority;
    
    %% Mittlere Priorität
    class F,P,F1,F2,P1,B4,B6,S1,W2,W3,T1,T2 mediumPriority;
    
    %% Niedrige Priorität
    class K,S,T,F3,P2,K1,K2,S2,S3,T3 lowPriority;
```

Die Farbkodierung im Qualitätsbaum zeigt die Priorität der jeweiligen Qualitätsanforderungen:
- **Rot** markiert Anforderungen mit höchster Priorität für das Fridgely-System
- **Gelb** markiert Anforderungen mit mittlerer Priorität
- **Grau** markiert Anforderungen mit geringerer Priorität

---

### Qualitätsszenarien

Die Szenarien definieren die oben dargestellten Qualitätsanforderungen und machen sie mess- sowie überprüfbar. Sie sind nach Kategorien und Priorität geordnet.

#### Benutzbarkeit (Usability) - Höchste Priorität

| ID | Szenario | Auslöser | Metrik/Reaktion | Priorität | Verweis auf Architekturentscheidung |
|---|----------|----------|-----------------|-----------|-------------------------------------|
| U-1 | **Intuitive Bedienung für Kinder** | Ein Kind (7-10 Jahre) nutzt zum ersten Mal den Kühlschrank | Das Kind kann innerhalb von 5 Minuten ohne Hilfe ein Produkt scannen und in den Kühlschrank einordnen. | Hoch | [ADR-1](09_architecture_decisions.md#adr-1-verwendung-von-java-swing-statt-javafx) |
| U-2 | **Mehrsprachige Bedienung** | Ein Kind wechselt die Spracheinstellung | Die UI aktualisiert sich sofort mit den Texten in der gewählten Sprache, ohne Neustart der Anwendung. | Hoch | [ADR-4](09_architecture_decisions.md#adr-4-mehrsprachigkeitskonzept-über-zentrale-lokalisierungsservices) |
| U-3 | **Visuelles Feedback bei Aktionen** | Ein Produkt wird gescannt | Der Nutzer erhält innerhalb von 0,5 Sekunden visuelles Feedback (Animation oder Farbänderung), ob der Scan erfolgreich war. | Hoch | [ADR-1](09_architecture_decisions.md#adr-1-verwendung-von-java-swing-statt-javafx) |
| U-4 | **Kindgerechte Fehlermeldungen** | Ein Fehler tritt während der Nutzung auf | Das System zeigt eine kindgerechte, nicht-technische Erklärung mit Pinguin-Maskottchen an und bietet einfache Handlungsoptionen. | Mittel | [ADR-3](09_architecture_decisions.md#adr-3-einsatz-des-repository-patterns-für-datenzugriff) |
| U-5 | **Attraktives Design** | Kind öffnet die App zum ersten Mal | Das ansprechende Design mit konsistentem Farbschema und Pinguin-Maskottchen erzeugt positive emotionale Reaktion und motiviert zur weiteren Nutzung. | Hoch | [ADR-1](09_architecture_decisions.md#adr-1-verwendung-von-java-swing-statt-javafx) |

#### Zuverlässigkeit (Reliability) - Höchste Priorität

| ID | Szenario | Auslöser | Metrik/Reaktion | Priorität | Verweis auf Architekturentscheidung |
|---|----------|----------|-----------------|-----------|-------------------------------------|
| R-1 | **Resilienz bei intensiver Nutzung** | System wird über 8 Stunden kontinuierlich in einer Lehrveranstaltung genutzt | Keine erkennbaren Leistungseinbussen oder Speicherlecks. | Hoch | [ADR-7](09_architecture_decisions.md#adr-7-zentrale-ressourcenverwaltung-via-singleton-services) |
| R-2 | **Umgang mit Barcode-Scanner-Ausfällen** | Der Barcode-Scanner reagiert nicht | System erkennt den Ausfall innerhalb von 2 Sekunden und zeigt eine benutzerfreundliche Fehlermeldung mit Handlungsanweisung. | Hoch | [ADR-6](09_architecture_decisions.md#adr-6-dual-display-management-für-smart-fridge-erlebnis) |
| R-3 | **Datenerhalt bei Stromausfall** | Unerwarteter Stromausfall während des Betriebs | Nach Wiederherstellung der Stromversorgung startet das System automatisch und alle vorher gespeicherten Daten sind intakt. | Hoch | [ADR-5](09_architecture_decisions.md#adr-5-verwendung-von-sqlite-als-eingebettete-datenbank) |
| R-4 | **Fehlertoleranz bei falschen Eingaben** | Kind scannt einen nicht unterstützten Barcode | System zeigt freundliche Meldung "Dieses Produkt kenne ich noch nicht" und bietet Option zur manuellen Eingabe. | Mittel | [ADR-3](09_architecture_decisions.md#adr-3-einsatz-des-repository-patterns-für-datenzugriff) |

#### Wartbarkeit (Maintainability) - Höchste Priorität

| ID | Szenario | Auslöser | Metrik/Reaktion | Priorität | Verweis auf Architekturentscheidung |
|---|----------|----------|-----------------|-----------|-------------------------------------|
| M-1 | **Erweiterbarkeit der Produktdatenbank** | Neue Produkte sollen hinzugefügt werden | Ein Entwickler kann die Produktdatenbank um 50 neue Einträge in weniger als 30 Minuten erweitern. | Hoch | [ADR-3](09_architecture_decisions.md#adr-3-einsatz-des-repository-patterns-für-datenzugriff) |
| M-2 | **Einfacher Austausch von UI-Komponenten** | Anforderung zur Änderung des Spielmodus-Bildschirms | Ein Entwickler kann die betreffende View-Komponente isoliert ändern, ohne andere Systemteile zu beeinflussen. | Hoch | [ADR-2](09_architecture_decisions.md#adr-2-implementierung-des-mvc-architekturmusters) |
| M-3 | **Hinzufügen einer neuen Sprache** | Französische Sprachunterstützung soll ergänzt werden | Integration aller französischen Texte durch Hinzufügen einer Properties-Datei ohne Codeänderungen in weniger als 2 Stunden. | Hoch | [ADR-4](09_architecture_decisions.md#adr-4-mehrsprachigkeitskonzept-über-zentrale-lokalisierungsservices) |
| M-4 | **Fehlerdiagnose bei Problemen** | Ein Fehler im Mehrspieler-Modus wird gemeldet | Entwickler kann den Fehler durch Logs innerhalb von 30 Minuten lokalisieren. | Hoch | [ADR-7](09_architecture_decisions.md#adr-7-zentrale-ressourcenverwaltung-via-singleton-services) |
| M-5 | **Testbarkeit von Komponenten** | Neue Funktion wird entwickelt | Entwickler kann isolierte Unit-Tests für neue Komponenten schreiben, ohne komplexe Mocking-Strukturen aufbauen zu müssen. | Hoch | [ADR-2](09_architecture_decisions.md#adr-2-implementierung-des-mvc-architekturmusters) |

#### Performance (Effizienz) - Mittlere Priorität

| ID | Szenario | Auslöser | Metrik/Reaktion | Priorität | Verweis auf Architekturentscheidung |
|---|----------|----------|-----------------|-----------|-------------------------------------|
| P-1 | **Schnelle Startzeit** | System wird eingeschaltet | Die Anwendung ist in weniger als 15 Sekunden nach dem Hochfahren des Raspberry Pi vollständig betriebsbereit. | Mittel | [ADR-8](09_architecture_decisions.md#adr-8-einsatz-von-spring-boot-als-anwendungsframework) |
| P-2 | **Reaktionsgeschwindigkeit bei Interaktionen** | Benutzer drückt einen Button | Die Reaktion erfolgt in weniger als 100ms, sodass keine wahrnehmbare Verzögerung auftritt. | Hoch | [ADR-1](09_architecture_decisions.md#adr-1-verwendung-von-java-swing-statt-javafx) |
| P-3 | **Effizienter Speicherverbrauch** | System läuft durchgehend über mehrere Tage | Speichernutzung bleibt unter 80% der verfügbaren Ressourcen des Raspberry Pi 5. | Mittel | [ADR-7](09_architecture_decisions.md#adr-7-zentrale-ressourcenverwaltung-via-singleton-services) |
| P-4 | **Schnelles Datenbankzugriffe** | Abfrage des Kühlschrankinhalts | Abfrage und Darstellung von bis zu 50 Produkten im Kühlschrank erfolgt in weniger als 1 Sekunde. | Mittel | [ADR-5](09_architecture_decisions.md#adr-5-verwendung-von-sqlite-als-eingebettete-datenbank) |

#### Funktionale Eignung - Mittlere Priorität

| ID | Szenario | Auslöser | Metrik/Reaktion | Priorität | Verweis auf Architekturentscheidung |
|---|----------|----------|-----------------|-----------|-------------------------------------|
| F-1 | **Korrekte Produkterkennung** | Barcode eines bekannten Produkts wird gescannt | System identifiziert das Produkt korrekt in >98% der Fälle. | Hoch | [ADR-3](09_architecture_decisions.md#adr-3-einsatz-des-repository-patterns-für-datenzugriff) |
| F-2 | **Passende Rezeptvorschläge** | Neue Produkte werden zum Kühlschrank hinzugefügt | System schlägt relevante Rezepte vor, die die vorhandenen Zutaten verwenden. | Mittel | [ADR-3](09_architecture_decisions.md#adr-3-einsatz-des-repository-patterns-für-datenzugriff) |
| F-3 | **Korrekte Haltbarkeitsprüfung** | Ein Produkt nähert sich seinem Ablaufdatum | System zeigt korrekte Warnungen an, wenn Produkte innerhalb der nächsten 3 Tage ablaufen. | Mittel | [ADR-3](09_architecture_decisions.md#adr-3-einsatz-des-repository-patterns-für-datenzugriff) |

#### Übertragbarkeit (Portability) - Mittlere bis Niedrige Priorität

| ID | Szenario | Auslöser | Metrik/Reaktion | Priorität | Verweis auf Architekturentscheidung |
|---|----------|----------|-----------------|-----------|-------------------------------------|
| T-1 | **Einfache Installation** | Neues Fridgely-System wird aufgebaut | Die Software kann durch ein einfaches Installationsskript in weniger als 10 Minuten installiert werden. | Mittel | [ADR-8](09_architecture_decisions.md#adr-8-einsatz-von-spring-boot-als-anwendungsframework) |
| T-2 | **Systemupgrade** | Neue Version des Betriebssystems wird installiert | Das System funktioniert weiterhin ohne Anpassung am Code. | Niedrig | [ADR-5](09_architecture_decisions.md#adr-5-verwendung-von-sqlite-als-eingebettete-datenbank) |
| T-3 | **Hardwarekompatibilität** | Austausch des Barcode-Scanners gegen ein neueres Modell | Das System erkennt das neue Gerät automatisch und funktioniert ohne Codeänderungen. | Niedrig | [ADR-6](09_architecture_decisions.md#adr-6-dual-display-management-für-smart-fridge-erlebnis) |

#### Sicherheit (Security) - Niedrige Priorität

| ID | Szenario | Auslöser | Metrik/Reaktion | Priorität | Verweis auf Architekturentscheidung |
|---|----------|----------|-----------------|-----------|-------------------------------------|
| S-1 | **Datenschutz** | Persönliche Daten werden im System verarbeitet | Keine dauerhafte Speicherung personenbezogener Daten; lokale Begrenzung der Datenerfassung auf das Gerät. | Niedrig | [ADR-5](09_architecture_decisions.md#adr-5-verwendung-von-sqlite-als-eingebettete-datenbank) |
| S-2 | **SSH-Zugriffssicherheit** | Fernwartung über SSH | Zugriff nur mit sicheren Schlüsseln möglich, keine Passwortauthentifizierung erlaubt. | Niedrig | Systemkonfiguration |

---

### Konkrete Nutzungsszenarien

Diese detaillierten Szenarien beschreiben typische Nutzungsfälle und zeigen, wie die verschiedenen Qualitätsaspekte bei der Anwendung zusammenwirken.

#### Nutzungsszenario 1: Erstmalige Benutzung durch ein Kind

**Kontext:**  
Ein 8-jähriges Kind (Erstnutzer) steht vor dem Fridgely-System.

**Auslöser:**  
Das Kind schaltet das System ein und sieht den Begrüssungsbildschirm.

**Qualitätsanforderungen:**  
- Benutzbarkeit (U-1, U-3, U-5)
- Performance (P-1, P-2)

**Szenarioablauf:**
1. Das System startet in unter 15 Sekunden.
2. Das Pinguin-Maskottchen begrüsst das Kind mit einer kurzen Animation und einem Text in kindgerechter Sprache.
3. Das Kind tippt intuitiv auf "Starten" und wählt den Einzelspieler-Modus.
4. Das System reagiert sofort auf jede Interaktion (unter 100ms).
5. Eine kurze, verständliche Einführung erklärt dem Kind, wie es den Barcode-Scanner benutzen kann.
6. Das Kind scannt erfolgreich ein erstes Produkt und erhält positives Feedback vom System.
7. Die gesamte Interaktion vom Einschalten bis zum ersten erfolgreichen Scan dauert weniger als 5 Minuten.

#### Nutzungsszenario 2: Fehlerfall beim Spielen

**Kontext:**  
Zwei Kinder spielen den Mehrspieler-Modus auf dem Fridgely-System.

**Auslöser:**  
Der Barcode-Scanner von Spieler 2 funktioniert während des Spiels nicht mehr.

**Qualitätsanforderungen:**
- Zuverlässigkeit (R-2, R-4)
- Benutzbarkeit (U-4)

**Szenarioablauf:**
1. Das System erkennt den Ausfall des Scanners innerhalb von 2 Sekunden.
2. Das Pinguin-Maskottchen erscheint und erklärt kindgerecht: "Oh nein, der Scanner macht gerade eine Pause!"
3. Das System bietet automatisch eine Alternative: "Ihr könnt die Produkte auch über die Tasten eingeben."
4. Die Kinder können das Spiel ohne technisches Verständnis fortsetzen.
5. Im Hintergrund protokolliert das System den Fehler für die spätere Diagnose durch Wartungspersonal.

#### Nutzungsszenario 3: Wartung und Update

**Kontext:**  
Ein Entwickler muss neue Produkte hinzufügen und eine neue Sprache integrieren.

**Auslöser:**  
Schulungseinsatz in einer französischsprachigen Region mit neuen lokalen Produkten.

**Qualitätsanforderungen:**
- Wartbarkeit (M-1, M-3)
- Übertragbarkeit (T-1)

**Szenarioablauf:**
1. Der Entwickler verbindet sich per SSH mit dem Fridgely-System.
2. Neue Produktdaten werden über SQL-Skripte der SQLite-Datenbank hinzugefügt (30 Minuten).
3. Französische Übersetzungen werden als neue Properties-Datei im Lokalisierungsverzeichnis abgelegt (90 Minuten).
4. Nach einem Neustart der Anwendung sind alle neuen Produkte verfügbar.
5. Die französische Sprache erscheint als neue Option im Sprachauswahlmenü.
6. Alle UI-Elemente werden korrekt in Französisch angezeigt, wenn diese Sprache gewählt wird.

---

### Priorisierung und Qualitätskonflikte

Bei einigen Qualitätsanforderungen können Zielkonflikte auftreten, die abgewogen werden müssen:

| Konflikt | Bevorzugte Qualität | Begründung |
|----------|---------------------|------------|
| Performance vs. Wartbarkeit | Wartbarkeit | Für ein Bildungssystem ist langfristige Anpassbarkeit und Erweiterbarkeit wichtiger als maximale Performance. Die gewählte Hardware ist ausreichend leistungsstark. |
| Funktionsumfang vs. Benutzbarkeit | Benutzbarkeit | Für die junge Zielgruppe ist eine intuitive, klare Bedienung wichtiger als ein grosser Funktionsumfang. |
| Robustheit vs. Ressourcenverbrauch | Robustheit | Die Stabilität des Systems, besonders bei intensiver Nutzung durch Kinder, hat Vorrang gegenüber optimalem Ressourcenverbrauch. |

Die hier dokumentierten Qualitätsanforderungen bilden die Grundlage für kontinuierliche Evaluation und Verbesserung des Fridgely-Systems und stellen sicher, dass sowohl die technischen als auch die pädagogischen Ziele erreicht werden.

---

### Validierung und Messung der Qualitätsanforderungen

Um sicherzustellen, dass die Qualitätsanforderungen nicht nur dokumentiert, sondern auch erfüllt werden, implementiert das Fridgely-System verschiedene Validierungs- und Messmechanismen:

#### Performance-Messung

Für Performance-Anforderungen wie P-1 (Startzeit unter 15 Sekunden) und P-2 (Reaktionsgeschwindigkeit unter 100ms) implementiert das System:

- **Startzeit-Logging**: Die `Fridgely.java` Hauptklasse misst die Zeit vom Anwendungsstart bis zur vollständigen Bereitschaft der UI
- **UI-Reaktionszeit-Monitoring**: Ein Event-Handling-System, das die Zeit zwischen Benutzeraktion und System-Reaktion misst
- **Ressourcen-Monitoring**: Regelmässige Erfassung von Speicher- und CPU-Nutzung während des Betriebs

#### Fehlerprotokollierung

Das im Code sichtbare Logging-System (durch Logger.getLogger in Fridgely.java) implementiert die Anforderung M-4 (Fehlerdiagnose) durch:

- **Strukturierte Logs**: Verschiedene Log-Level (INFO, WARNING, SEVERE) für unterschiedliche Ereignistypen
- **Kontextbezogene Informationen**: Jeder Log enthält Informationen zur Ereignisquelle
- **Persistente Speicherung**: Logs werden so gespeichert, dass sie auch nach einem Neustart verfügbar sind

Diese Implementierungen ermöglichen es, die im Qualitätsbaum und in den Qualitätsszenarien definierten Anforderungen objektiv zu messen und nachzuweisen.

---
