# Coding Conventions

## Verwendete Konventionen

### Projektstruktur

- **Paketstruktur**: Das Projekt folgt dem Paketnamensschema `ch.primeo.fridgely` mit folgenden Unterpaketen:
  - `controllers`: Controller-Klassen zur Steuerung des Programmflusses
  - `models`: Datenmodelle und Entitäten (z.B. Product, Recipe, etc.)
  - `views`: UI-Komponenten zur Darstellung
  - `repositories`: Datenzugriffsobjekte für die Datenbankoperationen
  - `utils`: Hilfsklassen und gemeinsam genutzte Funktionalitäten
  - `config`: Konfigurationsklassen
  - `database`: Datenbank-bezogene Klassen

### Code-Stil

- **Namenskonventionen:**
  - **Klassen**: PascalCase (z.B. `ProductRepository`, `FridgeStockView`)
  - **Methoden**: camelCase (z.B. `getProductByBarcode`, `refreshFridgeStock`)
  - **Variablen**: camelCase (z.B. `gameSession`, `productPanel`)
  - **Konstanten**: SNAKE_CASE mit Großbuchstaben (z.B. `DEFAULT_MIN_PRODUCTS`, `POINTS_BIO_PRODUCT`)

- **Javadoc-Kommentare:**
  - Klassen haben aussagekräftige Javadoc-Kommentare, die den Zweck beschreiben
  - Öffentliche Methoden sind mit Javadoc kommentiert
  - Besonders komplexe Algorithmen sind mit zusätzlichen Kommentaren versehen

- **Spracheinstellungen:**
  - Methoden- und Variablennamen: Englisch
  - Kommentare: Englisch
  - Benutzeroberfläche: Mehrsprachig über Lokalisierungsdateien

### Architekturprinzipien

- **MVC-Architektur:**
  - **Models**: Datenmodelle (z.B. `Recipe`, `Product`, `MultiplayerGameSession`)
  - **Views**: UI-Komponenten (z.B. `FridgeStockView`, `Player1ScanningPage`)
  - **Controllers**: Steuerung und Geschäftslogik (z.B. `MultiplayerGameController`)
- **Repository-Pattern**: Für den Datenzugriff werden Repositories verwendet
  - Zentrale Fehlerbehandlung in Repository-Klassen
  - SQL-Befehle werden in den Repository-Klassen gekapselt
- **Singleton-Pattern**: Für Services, die nur einmal existieren sollten (z.B. `FridgeStockController`)

### UI-Design

- **Konsistente Komponentengestaltung:**
  - Gemeinsame Hintergrundfarbe über `Constants.BACKGROUND_COLOR`
  - Standardisierte Schriftarten und -größen
  - Wiederverwendbare UI-Komponenten über Helper-Klassen (z.B. `ProductCardBuilder`)
- **Layoutmanager:**
  - BorderLayout für Hauptkomponenten
  - BoxLayout für vertikale Anordnungen
  - FlowLayout/WrapLayout für dynamische Komponenten
  - Konsistente Abstände durch `BorderFactory.createEmptyBorder`

### Testen

- **JUnit 5**: Für Unit-Tests
- **Testklassen**: Eigene Testklasse für jede wichtige Klasse
- **Testmethoden**: Beschreibende Namen mit dem Schema `methodName_shouldExpectedBehavior`
- **Test-Setup**: Verwendung von `@BeforeEach` für gemeinsame Test-Initialisierung

## Sicherstellung der Einhaltung der Konventionen

- **Automatisierte Build-Prozesse**: Maven wird für den Build-Prozess verwendet und erzwingt einige der Konventionen
- **Javadoc-Generierung**: Die Dokumentation wird automatisch aus den Javadoc-Kommentaren erstellt
- **JUnit-Tests**: Umfangreiche Testabdeckung zur Sicherstellung der korrekten Funktionalität
- **Architektur-Dokumentation**: Das arc42-Template wird zur strukturierten Dokumentation der Architektur verwendet
- **Code-Reviews**: Systematische Überprüfung der Code-Änderungen vor Integration
- **IDE-Unterstützung**: IntelliJ-Konfigurationen für Code-Formatierung und Stil
