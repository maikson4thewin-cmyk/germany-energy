# Deutsche Energienetze - Interaktive Karte

Eine moderne, interaktive Karte der deutschen Energienetzbetreiber (ÜNB, VNB, NVP).

## Features

✨ **Interaktive Kartendarstellung**
- Übersichtliche Visualisierung aller Netzbetreiber auf einer OpenStreetMap-Karte
- Farbcodierung nach Betreibertyp (ÜNB, VNB, NVP)
- Zoom und Panning für detaillierte Ansicht

🔍 **Suchfunktion**
- Schnelle Suche nach Betreiber-Namen
- Echtzeit-Filterung

📊 **Kategorisierung**
- Alle Betreiber anzeigen
- Filter nach Betreibertyp (ÜNB, VNB, NVP)
- Live-Zähler für jeden Typ

📍 **Detaillierte Informationen**
- Pop-ups mit Betreiber-Informationen
- Gebietsinformationen
- Links zu Betreiber-Websites

📱 **Responsive Design**
- Optimiert für Desktop und Mobile
- Touch-freundliche Bedienung

## Installation

```bash
# Dependencies installieren
npm install

# App starten
npm start

# Build erstellen
npm run build
```

## Technologie-Stack

- **React 18** - UI Framework
- **Leaflet** - Kartenbibliothek
- **React Leaflet** - React Komponenten für Leaflet
- **OpenStreetMap** - Kartendaten (kostenlos & offen)

## Datenquellen

Die Daten basieren auf öffentlichen Informationen von:
- **Bundesnetzagentur** (BNetzA)
- **Offizielle ÜNB Websites**:
  - 50Hertz Transmission
  - Amprion
  - Tennet
  - TransnetBW
- **Verteilnetzbetreiber und Stadtwerke**

## Struktur

```
src/
├── components/          # React Komponenten
│   ├── Map.js          # Kartenkomponente
│   ├── Sidebar.js      # Seitenleiste mit Filtern
│   ├── TabSelector.js  # Tab-Navigation
│   └── OperatorList.js # Liste der Betreiber
├── services/           # API & Daten-Services
│   └── dataService.js  # Datenverwaltung
├── utils/              # Hilfsfunktionen
│   └── markerUtils.js  # Marker-Icons
└── App.js              # Haupt-App
```

## Verwendung

1. **Betreiber filtern**: Tab-Buttons oben in der Seitenleiste verwenden
2. **Suchen**: Suchfeld für schnelle Suche nach Namen nutzen
3. **Auf Karte klicken**: Marker anklicken für Details
4. **In Liste klicken**: Betreiber in der Liste auswählen, um auf Karte zu fokussieren

## Erweiterungsmöglichkeiten

- [ ] Echte Geo-Grenzen/Polygone für VNB-Gebiete
- [ ] Heat-Maps für Auslastung
- [ ] Statistiken und Analysen
- [ ] Export-Funktionalität
- [ ] Multilingual Support
- [ ] Anbindung echter API-Daten (BNetzA)

## Lizenz

MIT

## Kontakt

Bei Fragen oder Suggestions gerne ein Issue erstellen! 😊
