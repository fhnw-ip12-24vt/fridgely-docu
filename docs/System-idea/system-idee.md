# System-Idee

## Kernaufgabe des Systems

<div class="info-card">
  <p>
    <strong>Fridgely</strong> ist ein interaktiver Mock-Smart-Kühlschrank, der spielerisch Kinder im Alter von 7–13 Jahren für einen bewussten Umgang mit Lebensmitteln sensibilisiert und Lebensmittelverschwendung reduziert. Das System erfasst automatisch Produkte über <span class="highlight">Barcode-Scanning</span>, überwacht deren Haltbarkeit und bietet proaktive Rezeptvorschläge, wodurch Kinder einen nachhaltigen und effizienten Umgang mit Lebensmitteln erlernen.
  </p>
</div>

### Zentrale Begriffe der Fachdomäne

<div class="learning-goals">
  <ul>
    <li><strong>Smart-Fridge</strong> (intelligenter Kühlschrank)</li>
    <li><strong>Foodmanagement</strong> (Lebensmittelverwaltung)</li>
    <li><strong>Gamifizierung</strong> (spielerisches Lernen)</li>
    <li><strong>Nachhaltigkeit</strong> (bewusster Konsum)</li>
    <li><strong>Barcode-Scanning</strong> (automatisierte Produkterfassung)</li>
    <li><strong>Rezeptvorschläge</strong> (proaktive Nutzung vorhandener Lebensmittel)</li>
    <li><strong>Kinderfreundliche Benutzeroberfläche</strong> (intuitive Interaktion)</li>
    <li><strong>Mehrsprachigkeit</strong> (sprachübergreifende Nutzbarkeit)</li>
  </ul>
</div>

## Kategorie von System

<div class="sad-grid-container">
  <div class="sad-feature">
    <h3>Interaktives Online-System</h3>
    <p>
      Fridgely arbeitet als Teil eines normalen Kühlschrank-Nutzungsprozesses und enthält Operationen auf Daten (Erfassung, Änderung und Löschung von Lebensmitteleinträgen). Die Transaktionen sind in die Benutzeroberfläche eingebettet und das System operiert auf aktuellen Datenbeständen mit hoher Verfügbarkeit und Performance.
    </p>
  </div>
  <div class="sad-feature">
    <h3>Mobile Systeme (Charakteristika)</h3>
    <p>
      Obwohl nicht mobil im herkömmlichen Sinne, übernimmt Fridgely Eigenschaften mobiler Systeme mit starkem Fokus auf Benutzeroberfläche und Benutzbarkeit. Es setzt auf Touch-Interaktion und eine intuitive, visuelle Gestaltung.
    </p>
  </div>
  <div class="sad-feature">
    <h3>Eingebettetes System</h3>
    <p>
      Das System arbeitet eng verzahnt mit spezieller Hardware (Raspberry Pi, Barcode-Scanner, Dual-Displays, Lautsprecher) und ist in eine physische Kühlschrank-Attrappe integriert.
    </p>
  </div>
</div>

## Wesentliche Qualitätsanforderungen

<div class="info-card">
  <h3>Qualitätsanforderungen</h3>
  <ul>
    <li><strong>Usability (Benutzerfreundlichkeit):</strong> Intuitiv und selbsterklärend für Kinder im Alter von 7-13 Jahren. Kinderfreundliche Gestaltung mit Maskottchen und verständlichen Visualisierungen.</li>
    <li><strong>Robustheit und Zuverlässigkeit:</strong> Stabilität auch bei intensiver Nutzung. Fehlerhafte Eingaben werden verständlich kommuniziert.</li>
    <li><strong>Wartbarkeit und Modifizierbarkeit:</strong> Modulare Software-Architektur mit Spring Boot und MVC-Pattern. Fernwartung über SSH.</li>
    <li><strong>Attraktivität:</strong> Kindgerechtes Design mit spielerischen Elementen, die Lernmotivation fördern.</li>
    <li><strong>Funktionale Eignung:</strong> Zuverlässige und korrekte Funktionen wie Barcode-Scanning, Lebensmittelverwaltung und Rezeptvorschläge.</li>
  </ul>
</div>

## Relevante Stakeholder

<div class="team-grid">
  <div class="team-member">
    <h3>Primäre Nutzer</h3>
    <p>Kinder im Alter von 7-13 Jahren</p>
    <span class="role-badge">Hauptzielgruppe</span>
  </div>
  <div class="team-member">
    <h3>Sekundäre Nutzer</h3>
    <p>Lehrkräfte und Eltern</p>
    <span class="role-badge special">Unterstützer</span>
  </div>
  <div class="team-member">
    <h3>Product Owner</h3>
    <p>Elif Gürcinar</p>
    <span class="role-badge">Verantwortlich für Produktvision</span>
  </div>
  <div class="team-member">
    <h3>Primeo Energie AG</h3>
    <p>Auftraggeber</p>
    <span class="role-badge">Förderung von Umweltbewusstsein</span>
  </div>
  <div class="team-member">
    <h3>Projekt Stakeholder</h3>
    <p>Stefan Vetter, weitere</p>
    <span class="role-badge">Beratung und Unterstützung</span>
  </div>
  <div class="team-member">
    <h3>Wartungspersonal</h3>
    <p>Entwickler</p>
    <span class="role-badge">Wartung und Weiterentwicklung</span>
  </div>
</div>

## Schnittstellen zu externen Systemen

<div class="sad-grid-container">
  <div class="sad-feature">
    <h3>Netzwerkzugang für Wartung</h3>
    <p>SSH-Schnittstelle für Fernwartung und Debugging. Zugriff auf Systemstatus und Log-Daten.</p>
  </div>
  <div class="sad-feature">
    <h3>Barcode-Scanner-Schnittstelle</h3>
    <p>USB-Verbindung zum Barcode-Scanner-Modul. Erkennt 1D/2D Codes und überträgt diese an die Anwendung.</p>
  </div>
  <div class="sad-feature">
    <h3>Ausgabe-Schnittstellen</h3>
    <p>Dual-Display-Konfiguration und Audio-Ausgabe für akustisches Feedback.</p>
  </div>
  <div class="sad-feature">
    <h3>Physikalische Eingabe-Schnittstellen</h3>
    <p>Kapazitiver Touchscreen und GPIO-Anschlüsse für zusätzliche Eingabemöglichkeiten.</p>
  </div>
  <div class="sad-feature">
    <h3>Stromversorgung</h3>
    <p>Anschluss an das Stromnetz über Steckdosenleiste. Versorgt alle Hardware-Komponenten des Systems.</p>
  </div>
</div>

Das System ist bewusst als geschlossenes System konzipiert, das keine externe Internetverbindung für den normalen Betrieb benötigt. Dies erhöht die Sicherheit und vermeidet Abhängigkeiten von externen Diensten. Die lokale SQLite-Datenbank speichert alle relevanten Informationen zu Lebensmitteln, Rezepten und Benutzerinteraktionen.