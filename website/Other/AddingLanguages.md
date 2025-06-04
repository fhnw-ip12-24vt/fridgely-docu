# Neue Sprachen zu Fridgely hinzufügen

Diese Anleitung beschreibt detailliert, wie man dem Fridgely-System neue Sprachen hinzufügen kann. Das System verwendet einen zentralisierten Lokalisierungsmechanismus, der es ermöglicht, die Benutzeroberfläche in verschiedenen Sprachen anzuzeigen und zur Laufzeit zwischen diesen Sprachen zu wechseln.

## Inhaltsverzeichnis

## Überblick über das Mehrsprachigkeitskonzept

Fridgely unterstützt mehrere Sprachen (standardmässig Deutsch, Englisch und Französisch) mithilfe eines zentralisierten Lokalisierungsdienstes. Dieser basiert auf folgenden Komponenten:

1. **AppLocalizationService**: Ein Singleton-Service, der die Sprachressourcen verwaltet und UI-Komponenten über Sprachänderungen informiert.
2. **LocalizationObserver**: Ein Interface, das von UI-Komponenten implementiert wird, um auf Sprachänderungen zu reagieren.
3. **Properties-Dateien**: Textdateien im Schlüssel-Wert-Format, die die übersetzten Texte für jede Sprache enthalten.

Der Lokalisierungsmechanismus verwendet das Observer-Pattern, um dynamisch die UI-Elemente zu aktualisieren, wenn die Sprache gewechselt wird.

## Sprachdateien und ihre Struktur

Die Sprachdateien befinden sich im Verzeichnis `src/main/resources/ch/primeo/fridgely/` und folgen der Namenskonvention `languages_XX.properties`, wobei `XX` der ISO-639-1-Sprachcode ist (z.B. `de` für Deutsch, `en` für Englisch, `fr` für Französisch).

### Beispiel für den Aufbau einer Sprachdatei

Eine typische Sprachdatei enthält Schlüssel-Wert-Paare, wobei der Schlüssel in allen Sprachdateien identisch ist und der Wert die Übersetzung in der jeweiligen Sprache darstellt:

```properties
# Navigation
home.button.lang=English
gamemode.title=Choose Game Mode
gamemode.singleplayer=Single Player
gamemode.multiplayer=Multiplayer

# Tutorials
tutorial.welcome=Welcome to Fridgely!
tutorial.game.winner=Help Fridgely reclaim its iceberg!

# Product labels
product.isBio=Organic
product.isNotBio=Non-Organic
product.isLocal=Local
product.isNotLocal=Non-Local
```

## Eine neue Sprache hinzufügen

Um eine neue Sprache zu Fridgely hinzuzufügen, sind folgende Schritte erforderlich:

### 1. Erstellen einer neuen Sprachdatei

1. Erstelle eine neue Datei mit dem Namen `languages_XX.properties` im Verzeichnis `src/main/resources/ch/primeo/fridgely/`, wobei `XX` der ISO-639-1-Code der neuen Sprache ist (z.B. `it` für Italienisch).
2. Kopiere den gesamten Inhalt einer bestehenden Sprachdatei (z.B. `languages_en.properties`) in die neue Datei.
3. Übersetze alle Werte (rechts vom `=`-Zeichen) in die neue Sprache. **Wichtig:** Die Schlüssel (links vom `=`-Zeichen) dürfen nicht verändert werden.

**Hinweis:** Achte besonders auf Platzhalter wie `%d` oder `%s` in den Texten. Diese müssen in der Übersetzung an der entsprechenden Position beibehalten werden, da sie zur Laufzeit durch variable Werte ersetzt werden.

### 2. Aktualisieren des AppLocalizationService

Öffne die Datei `src/main/java/ch/primeo/fridgely/service/localization/AppLocalizationService.java` und füge die neue Locale zur Liste der unterstützten Sprachen hinzu:

```java
private final List<Locale> locales = Arrays.asList(
    Locale.forLanguageTag("en"),
    Locale.forLanguageTag("de"),
    Locale.forLanguageTag("fr"),
    Locale.forLanguageTag("XX")  // Füge hier den Code der neuen Sprache ein
);
```

## Aktualisieren der Anwendungskonfiguration

Um die neue Sprache als Standard festzulegen, kann die Datei `application.properties` aktualisiert werden:

1. Öffne die Datei `src/main/resources/application.properties`.
2. Suche nach der Zeile `app.language=de` (oder einer anderen Sprache).
3. Ändere den Wert auf den Code deiner neuen Sprache, z.B. `app.language=it` für Italienisch.

## Testen der neuen Sprache

Nach dem Hinzufügen einer neuen Sprache sollten folgende Tests durchgeführt werden:

1. **Startsprache testen**: Starte die Anwendung und prüfe, ob die konfigurierte Startsprache korrekt geladen wird.
2. **Sprachumschaltung testen**: Verwende die Sprachumschaltung in der Anwendung, um sicherzustellen, dass die neue Sprache im Zyklus erscheint.
3. **UI-Elemente prüfen**: Überprüfe alle Bereiche der Anwendung, um sicherzustellen, dass alle Texte korrekt übersetzt wurden.
4. **Dynamische Inhalte testen**: Teste Texte mit Platzhaltern (z.B. Punkteanzeige oder Rundenanzeige), um sicherzustellen, dass die Formatierung korrekt funktioniert.

## Fehlerbehebung

Hier sind einige häufige Probleme und deren Lösungen:

1. **Fehlende Übersetzung**: Wenn ein Text in der neuen Sprache nicht angezeigt wird, überprüfe, ob der entsprechende Schlüssel in der Sprachdatei vorhanden und korrekt übersetzt ist.
2. **Zeichenkodierungsprobleme**: Bei Sonderzeichen können Kodierungsprobleme auftreten. Stelle sicher, dass die Properties-Datei mit UTF-8-Kodierung gespeichert wird.
3. **Formatierungsfehler**: Achte auf korrekte Formatierung und Platzhalter in den übersetzten Texten.
4. **Cachingprobleme**: Manchmal muss die Anwendung neu gestartet werden, damit Änderungen an den Sprachdateien wirksam werden.

## Beispiel: Italienisch hinzufügen

Hier ist ein Beispiel für das Hinzufügen von Italienisch als neue Sprache:

### 1. Erstellen der italienischen Sprachdatei

Erstelle die Datei `languages_it.properties` im Verzeichnis `src/main/resources/ch/primeo/fridgely/` mit dem folgenden Inhalt (Auszug):

```properties
home.button.lang=Italiano
gamemode.title=Scegli Modalità di Gioco
gamemode.singleplayer=Giocatore Singolo
gamemode.multiplayer=Multigiocatore
gamemode.singleplayer.tooltip=Gioca da solo
gamemode.multiplayer.tooltip=Gioca con amici
multiplayer.of=di
# Tutorial Messages
tutorial.welcome=Benvenuto a Fridgely!
tutorial.multiplayer.player1=Giocatore 1: Scansiona prodotti sostenibili per riempire Fridgely
tutorial.multiplayer.player2=Giocatore 2: Scegli una ricetta e usa quanti più prodotti possibile
```

### 2. Aktualisieren des AppLocalizationService

```java
private final List<Locale> locales = Arrays.asList(
    Locale.forLanguageTag("en"),
    Locale.forLanguageTag("de"),
    Locale.forLanguageTag("fr"),
    Locale.forLanguageTag("it")  // Italienisch hinzugefügt
);
```

### 3. Testen der italienischen Sprache

Starte die Anwendung und teste die italienische Sprachoption mit den oben beschriebenen Testschritten.

## Tipps für Übersetzer

- **Konsistenz**: Achte auf einheitliche Begriffe und Terminologie in der gesamten Übersetzung.
- **Kontext beachten**: Berücksichtige bei der Übersetzung den Kontext, in dem der Text verwendet wird.
- **Platzhalter**: Stelle sicher, dass alle Platzhalter (`%s`, `%d`, etc.) in der Übersetzung erhalten bleiben.
- **UI-Raumbeschränkungen**: Bedenke, dass zu lange Übersetzungen das UI-Layout beeinträchtigen können.
- **Zielgruppe**: Da Fridgely für Kinder und Jugendliche konzipiert ist, solltest du kindgerechte Formulierungen verwenden.