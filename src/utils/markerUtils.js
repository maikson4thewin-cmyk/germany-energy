import L from 'leaflet';

const markerColors = {
  ÜNB: '#FFC864',
  VNB: '#64C8FF',
  NVP: '#64FFC8'
};

export function getMarkerIcon(type, isSelected = false) {
  const color = markerColors[type] || '#64C8FF';
  const size = isSelected ? 40 : 32;

  return L.icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="${size}" height="${size}">
        <path d="M12 0C7.04 0 3 4.04 3 9c0 5.25 9 15 9 15s9-9.75 9-15c0-4.96-4.04-9-9-9zm0 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" fill="${color}" stroke="white" stroke-width="0.5"/>
      </svg>
    `)}`
  , iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size]
  });
}
