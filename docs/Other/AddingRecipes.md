# Anleitung zum Hinzufügen von Rezepten

Diese Anleitung erklärt, wie neue Rezepte zum Fridgely-System hinzugefügt werden können. Die Rezeptdatenbank ist ein zentraler Bestandteil von Fridgely und ermöglicht es Benutzern, passende Rezepte basierend auf den im Kühlschrank vorhandenen Zutaten zu finden.

## Datenbankstruktur für Rezepte

Fridgely verwendet eine SQLite-Datenbank mit folgenden relevanten Tabellen für Rezepte:

1. **Recipes** - Enthält grundlegende Rezeptinformationen
2. **RecipeIngredients** - Verknüpft Rezepte mit den benötigten Produkten (Join-Tabelle)
3. **Products** - Enthält alle Produktinformationen

### Recipes-Tabelle

```sql
CREATE TABLE Recipes
(
    Id            INTEGER PRIMARY KEY AUTOINCREMENT,
    Name          TEXT,     -- Englischer Name des Rezepts
    NameDE        TEXT,     -- Deutscher Name des Rezepts
    NameFR        TEXT,     -- Französischer Name des Rezepts
    Description   TEXT,     -- Englische Beschreibung
    DescriptionDE TEXT,     -- Deutsche Beschreibung
    DescriptionFR TEXT      -- Französische Beschreibung
);
```

### RecipeIngredients-Tabelle (Verknüpfungstabelle)

```sql
CREATE TABLE RecipeIngredients
(
    RecipeId INTEGER NOT NULL, -- Fremdschlüssel zum Rezept
    Barcode  TEXT    NOT NULL, -- Fremdschlüssel zum Produkt
    FOREIGN KEY (RecipeId) REFERENCES Recipes (Id),
    FOREIGN KEY (Barcode) REFERENCES Products (Barcode),
    PRIMARY KEY (RecipeId, Barcode)
);
```

## Schritt-für-Schritt Anleitung zum Hinzufügen von Rezepten

### 1. Vorbereitung

Bevor ein neues Rezept hinzugefügt wird, prüfe folgende Punkte:

- Stelle sicher, dass alle benötigten Produkte (Zutaten) bereits in der Produktdatenbank existieren
- Überlege einen passenden Namen und eine Beschreibung in allen unterstützten Sprachen (Englisch, Deutsch, Französisch)
- Notiere die Barcodes aller benötigten Zutaten

### 2. SQL-Skript erstellen

Um ein neues Rezept hinzuzufügen, müssen die SQL-Anweisungen für beide Tabellen erstellt werden.

#### a) Rezept in die Recipes-Tabelle einfügen

```sql
INSERT INTO recipe (name, nameDE, nameFR, description, descriptionDE, descriptionFR)
VALUES
    ('Recipe Name', 'Rezeptname', 'Nom de la recette',
     'Recipe description in English.', 'Rezeptbeschreibung auf Deutsch.', 'Description de la recette en français.');
```

#### b) Zutaten in die RecipeIngredients-Tabelle einfügen

Wenn die Rezept-ID bereits bekannt ist, kann die folgende Vorlage verwendet werden:

```sql
INSERT INTO recipe_ingredient (id, recipe_recipe_id, product_barcode)
VALUES
    ([Nächste verfügbare ID], [Rezept-ID], '[Produkt-Barcode 1]'),
    ([Nächste verfügbare ID + 1], [Rezept-ID], '[Produkt-Barcode 2]'),
    ([Nächste verfügbare ID + 2], [Rezept-ID], '[Produkt-Barcode 3]');
```

### 3. Beispiel für ein vollständiges Rezept

Hier ist ein Beispiel für das Hinzufügen eines neuen Rezepts "Vegetarische Pasta":

```sql
-- Rezept hinzufügen
INSERT INTO recipe (name, nameDE, nameFR, description, descriptionDE, descriptionFR)
VALUES
    ('Vegetarian Pasta', 'Vegetarische Pasta', 'Pâtes Végétariennes',
     'Pasta with tomatoes, garlic and olive oil.', 'Nudeln mit Tomaten, Knoblauch und Olivenöl.', 'Pâtes aux tomates, à l''ail et à l''huile d''olive.');

-- Zutaten verknüpfen (angenommen, das neue Rezept hat die ID 46)
INSERT INTO recipe_ingredient (id, recipe_recipe_id, product_barcode)
VALUES
    (120, 46, 'CCC'),  -- Pasta / Nudeln
    (121, 46, '001'),  -- Tomato / Tomate
    (122, 46, '017'),  -- Garlic / Knoblauch
    (123, 46, 'EEE');  -- Olive Oil / Olivenöl
```

### 4. Überprüfen der Produktbarcodes

Stelle sicher, dass alle verwendeten Produkt-Barcodes in der Datenbank existieren:

```sql
SELECT barcode, name, nameDE, nameFR FROM product WHERE barcode IN ('001', '017', 'CCC', 'EEE');
```

## Hinweise und Best Practices

1. **Sprachversionen**: Achte darauf, das Rezept immer in allen drei unterstützten Sprachen anzulegen (Englisch, Deutsch, Französisch).

2. **Komplexität der Rezepte**: Die meisten vorhandenen Rezepte haben 2-4 Zutaten. Diese Komplexität sollte beibehalten werden.

3. **Standardzutaten vs. Kühlschrankzutaten**: Beachte, dass manche Produkte als "Standard" markiert sind (`IsDefaultProduct = 1`). Diese werden als immer verfügbar betrachtet:
   - 'AAA' (Brot / Bread)
   - 'BBB' (Reis / Rice)
   - 'CCC' (Nudeln / Pasta)
   - 'DDD' (Honig / Honey)
   - 'EEE' (Olivenöl / Olive Oil)

4. **Rezepte testen**: Nach dem Hinzufügen eines neuen Rezepts solltest du testen, ob es korrekt angezeigt wird und ob es richtig funktioniert, wenn entsprechende Produkte im Kühlschrank verfügbar sind.

5. **Backup**: Erstelle immer ein Backup der Datenbank, bevor Änderungen vorgenommen werden.

## Fehlerbehandlung

Falls ein Rezept nach dem Hinzufügen nicht angezeigt wird, prüfe folgende mögliche Ursachen:

1. Stelle sicher, dass alle Fremdschlüsselbeziehungen korrekt sind (gültige Rezept-ID und Produkt-Barcodes).
2. Überprüfe, ob alle erforderlichen Felder ausgefüllt sind.
3. Überprüfe die Formatierung der SQL-Anweisungen, insbesondere bei Texten mit Apostrophen (ein Apostroph muss als zwei Apostrophe `''` geschrieben werden).

## Liste der vorhandenen Produkt-Barcodes

Hier sind die wichtigsten Produkt-Barcodes, die du in Rezepten verwenden kannst:

| Barcode | Englischer Name | Deutscher Name | Französischer Name |
|---------|-----------------|----------------|-------------------|
| '001'   | Tomato          | Tomate         | Tomate            |
| '002'   | Egg             | Ei             | Œuf               |
| '003'   | Cheese          | Käse           | Fromage - France  |
| '004'   | Carrots         | Karotten       | Carottes Locales  |
| '005'   | Butter          | Butter         | Beurre            |
| '006'   | Beef            | Rindfleisch    | Bœuf              |
| '007'   | Milk            | Milch          | Lait              |
| '008'   | Spinach         | Spinat         | Épinard           |
| '010'   | Apples          | Äpfel          | Pommes            |
| '011'   | Potatoes        | Kartoffeln     | Terre Locales     |
| '012'   | Chicken         | Poulet         | Poulet            |
| '016'   | Strawberries    | Erdbeeren      | Fraises           |
| '017'   | Garlic          | Knoblauch      | Ail               |
| '018'   | Lettuce         | Salat          | Laitue            |
| '019'   | Bananas         | Bananen        | Bananes           |
| '020'   | Tofu            | Tofu           | Tofu              |
| '021'   | Orange          | Orange         | Orange            |
| '022'   | Lemon           | Zitrone        | Citron            |
| '023'   | Onion           | Zwiebel        | Oignon            |
| '024'   | Avocado         | Avocado        | Avocat            |
| '025'   | Bell Pepper     | Paprika        | Poivron           |
| '026'   | Tuna            | Thunfisch      | Thon              |
| '027'   | Ground Beef     | Hackfleisch    | Viande Hachée     |
| '028'   | Beans           | Bohnen         | Haricots          |
| '029'   | Corn            | Mais           | Maïs              |
| 'AAA'   | Bread           | Brot           | Pain              |
| 'BBB'   | Rice            | Reis           | Riz               |
| 'CCC'   | Pasta           | Nudeln         | Pâtes             |
| 'DDD'   | Honey           | Honig          | Miel              |
| 'EEE'   | Olive Oil       | Olivenöl       | Huile d'Olive     |