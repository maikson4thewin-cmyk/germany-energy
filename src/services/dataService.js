// Daten aus öffentlichen Quellen
// Basiert auf Daten der Bundesnetzagentur und ÜNB Websites

const ÜNB_DATA = [
  {
    id: 'unb-1',
    name: '50Hertz Transmission',
    type: 'ÜNB',
    lat: 52.5200,
    lon: 13.4050,
    area: 'Nordostdeutschland',
    description: 'Betreiber des Übertragungsnetzes in Nordostdeutschland',
    website: 'https://www.50hertz.com'
  },
  {
    id: 'unb-2',
    name: 'Amprion',
    type: 'ÜNB',
    lat: 51.4556,
    lon: 7.0116,
    area: 'Westdeutschland',
    description: 'Betreiber des Übertragungsnetzes in Westdeutschland',
    website: 'https://www.amprion.net'
  },
  {
    id: 'unb-3',
    name: 'Tennet',
    type: 'ÜNB',
    lat: 52.0116,
    lon: 5.8652,
    area: 'Norddeutschland und Süddeutschland',
    description: 'Betreiber des Übertragungsnetzes in Nord- und Süddeutschland',
    website: 'https://www.tennet.eu'
  },
  {
    id: 'unb-4',
    name: 'TransnetBW',
    type: 'ÜNB',
    lat: 48.7758,
    lon: 9.1829,
    area: 'Baden-Württemberg',
    description: 'Betreiber des Übertragungsnetzes in Baden-Württemberg',
    website: 'https://www.transnetbw.de'
  }
];

const VNB_DATA = [
  {
    id: 'vnb-1',
    name: 'Stromnetz Berlin',
    type: 'VNB',
    lat: 52.5200,
    lon: 13.4050,
    area: 'Berlin',
    description: 'Verteilnetzbetreiber in Berlin',
    website: 'https://www.stromnetz-berlin.de'
  },
  {
    id: 'vnb-2',
    name: 'Vattenfall Europe Distribution',
    type: 'VNB',
    lat: 52.5200,
    lon: 13.4050,
    area: 'Berlin, Brandenburg, Mecklenburg-Vorpommern',
    description: 'Verteilnetzbetreiber Vattenfall',
    website: 'https://www.vattenfall.de'
  },
  {
    id: 'vnb-3',
    name: 'Westnetz',
    type: 'VNB',
    lat: 51.4556,
    lon: 7.0116,
    area: 'Nordrhein-Westfalen',
    description: 'Verteilnetzbetreiber in Westdeutschland',
    website: 'https://www.westnetz.de'
  },
  {
    id: 'vnb-4',
    name: 'Stadtwerke München',
    type: 'VNB',
    lat: 48.1351,
    lon: 11.5820,
    area: 'München und Umland',
    description: 'Verteilnetzbetreiber München',
    website: 'https://www.swm.de'
  },
  {
    id: 'vnb-5',
    name: 'Netze BW',
    type: 'VNB',
    lat: 48.7758,
    lon: 9.1829,
    area: 'Baden-Württemberg',
    description: 'Verteilnetzbetreiber Baden-Württemberg',
    website: 'https://www.netze-bw.de'
  },
  {
    id: 'vnb-6',
    name: 'Hamburg Energie',
    type: 'VNB',
    lat: 53.5511,
    lon: 9.9937,
    area: 'Hamburg',
    description: 'Verteilnetzbetreiber Hamburg',
    website: 'https://www.hamburgenergie.de'
  }
];

const NVP_DATA = [
  {
    id: 'nvp-1',
    name: 'Netznutzungspunkt Berlin-Mitte',
    type: 'NVP',
    lat: 52.5200,
    lon: 13.4050,
    area: 'Berlin',
    description: 'Hauptzugang Berlin-Mitte'
  },
  {
    id: 'nvp-2',
    name: 'Netznutzungspunkt Köln',
    type: 'NVP',
    lat: 50.9365,
    lon: 6.9589,
    area: 'Nordrhein-Westfalen',
    description: 'Hauptzugang Köln'
  },
  {
    id: 'nvp-3',
    name: 'Netznutzungspunkt München',
    type: 'NVP',
    lat: 48.1351,
    lon: 11.5820,
    area: 'Bayern',
    description: 'Hauptzugang München'
  },
  {
    id: 'nvp-4',
    name: 'Netznutzungspunkt Frankfurt',
    type: 'NVP',
    lat: 50.1109,
    lon: 8.6821,
    area: 'Hessen',
    description: 'Hauptzugang Frankfurt'
  },
  {
    id: 'nvp-5',
    name: 'Netznutzungspunkt Hamburg',
    type: 'NVP',
    lat: 53.5511,
    lon: 9.9937,
    area: 'Hamburg',
    description: 'Hauptzugang Hamburg'
  },
  {
    id: 'nvp-6',
    name: 'Netznutzungspunkt Stuttgart',
    type: 'NVP',
    lat: 48.7758,
    lon: 9.1829,
    area: 'Baden-Württemberg',
    description: 'Hauptzugang Stuttgart'
  }
];

export async function fetchNetworkOperators() {
  // Simuliert einen API-Aufruf
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ÜNB: ÜNB_DATA,
        VNB: VNB_DATA,
        NVP: NVP_DATA
      });
    }, 500);
  });
}
