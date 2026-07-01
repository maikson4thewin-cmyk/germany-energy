import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import { getMarkerIcon } from '../utils/markerUtils';

function Map({ operators, selectedOperator, onSelectOperator, activeTab }) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});

  // Initialiere die Karte
  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([51.1657, 10.4515], 6);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(mapInstanceRef.current);
    }

    return () => {
      Object.values(markersRef.current).forEach(marker => {
        if (marker) mapInstanceRef.current.removeLayer(marker);
      });
      markersRef.current = {};
    };
  }, []);

  // Update Marker
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Entferne alte Marker
    Object.values(markersRef.current).forEach(marker => {
      map.removeLayer(marker);
    });
    markersRef.current = {};

    // Füge neue Marker hinzu
    operators.forEach(operator => {
      if (operator.lat && operator.lon) {
        const icon = getMarkerIcon(operator.type);
        const marker = L.marker([operator.lat, operator.lon], { icon })
          .bindPopup(createPopupContent(operator))
          .addTo(map);

        // Highlight bei Selektion
        if (selectedOperator?.id === operator.id) {
          marker.setIcon(getMarkerIcon(operator.type, true));
          marker.openPopup();
        }

        marker.on('click', () => onSelectOperator(operator));
        markersRef.current[operator.id] = marker;
      }
    });
  }, [operators, selectedOperator, onSelectOperator]);

  return <div ref={mapRef} className="map" />;
}

function createPopupContent(operator) {
  return `
    <div class="popup-content">
      <h3>${operator.name}</h3>
      <p><strong>Typ:</strong> ${operator.type}</p>
      ${operator.description ? `<p><strong>Beschreibung:</strong> ${operator.description}</p>` : ''}
      ${operator.website ? `<p><a href="${operator.website}" target="_blank" rel="noopener noreferrer">Website</a></p>` : ''}
      ${operator.area ? `<p><strong>Gebiet:</strong> ${operator.area}</p>` : ''}
    </div>
  `;
}

export default Map;
