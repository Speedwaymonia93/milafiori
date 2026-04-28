'use client';

import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import { Popup } from 'react-leaflet/Popup';
import { DivIcon } from 'leaflet';

const LeafletMapContainer = MapContainer as unknown as React.ComponentType<Record<string, unknown>>;
const LeafletTileLayer = TileLayer as unknown as React.ComponentType<Record<string, unknown>>;
const LeafletMarker = Marker as unknown as React.ComponentType<Record<string, unknown>>;
const LeafletPopup = Popup as unknown as React.ComponentType<Record<string, unknown>>;

const locations = [
  {
    name: 'Biuro i Sala wykladowa',
    address: 'ul. Chelminska 18, 87-140 Chelmza',
    position: [53.1869, 18.6056] as [number, number],
    color: '#ef4444',
    routeUrl: 'https://www.google.com/maps/dir/?api=1&destination=53.1869,18.6056',
  },
  {
    name: 'Plac manewrowy',
    address: 'ul. Ksiedza Piotra Skargi 18, 87-140 Chelmza',
    position: [53.1873, 18.6029] as [number, number],
    color: '#2563eb',
    routeUrl: 'https://www.google.com/maps/dir/?api=1&destination=53.1873,18.6029',
  },
];

function createPinIcon(color: string) {
  return new DivIcon({
    className: 'custom-map-pin-wrapper',
    iconSize: [24, 34],
    iconAnchor: [12, 34],
    popupAnchor: [0, -28],
    html: `<span style="position:relative;display:inline-block;width:24px;height:34px;"><span style="position:absolute;left:0;top:0;width:24px;height:24px;border-radius:9999px;background:${color};border:2px solid #ffffff;box-shadow:0 2px 8px rgba(15,23,42,0.35);"></span><span style="position:absolute;left:8px;top:20px;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:12px solid ${color};"></span></span>`,
  });
}

export function LocationsMap() {
  const bounds: [[number, number], [number, number]] = [
    [53.1865, 18.6024],
    [53.1878, 18.6059],
  ];

  return (
    <div className="h-[340px] w-full md:h-[440px]" aria-label="Interaktywna mapa lokalizacji OSK Milafiori">
      <LeafletMapContainer
        bounds={bounds}
        boundsOptions={{ padding: [24, 24] }}
        className="h-full w-full"
      >
        <LeafletTileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((location) => (
          <LeafletMarker
            key={location.name}
            position={location.position}
            icon={createPinIcon(location.color)}
          >
            <LeafletPopup>
              <div className="space-y-2">
                <p className="font-bold">{location.name}</p>
                <p>{location.address}</p>
                <a
                  href={location.routeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
                >
                  Open route
                </a>
              </div>
            </LeafletPopup>
          </LeafletMarker>
        ))}
      </LeafletMapContainer>
    </div>
  );
}
