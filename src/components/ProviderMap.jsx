import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const NYC_CENTER = [40.7128, -74.006];
const DEFAULT_ZOOM = 11;

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapBounds({ providers }) {
  const map = useMap();
  const hasValid = useMemo(
    () => providers.some((p) => p.lat != null && p.lng != null),
    [providers]
  );
  const bounds = useMemo(() => {
    if (!hasValid) return null;
    const valid = providers.filter((p) => p.lat != null && p.lng != null);
    if (valid.length === 0) return null;
    if (valid.length === 1) return L.latLng(valid[0].lat, valid[0].lng);
    return L.latLngBounds(valid.map((p) => [p.lat, p.lng]));
  }, [providers, hasValid]);

  React.useEffect(() => {
    if (bounds && map) {
      if (bounds instanceof L.LatLng) {
        map.setView([bounds.lat, bounds.lng], DEFAULT_ZOOM);
      } else {
        map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14 });
      }
    }
  }, [map, bounds]);

  return null;
}

export function ProviderMap({ providers, onViewProfile }) {
  const providersWithCoords = useMemo(
    () => (providers || []).filter((p) => p.lat != null && p.lng != null),
    [providers]
  );

  if (!providersWithCoords.length) {
    return (
      <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 h-[400px] flex items-center justify-center text-gray-500 font-bold">
        No provider locations to display on the map.
      </div>
    );
  }

  return (
    <section className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[500px]" aria-label="Provider map">
      <MapContainer
        center={NYC_CENTER}
        zoom={DEFAULT_ZOOM}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapBounds providers={providersWithCoords} />
        {providersWithCoords.map((provider) => (
          <Marker
            key={provider.id}
            position={[provider.lat, provider.lng]}
            icon={markerIcon}
          >
            <Tooltip direction="top" offset={[0, -41]} opacity={1} className="provider-tooltip">
              <div className="text-left min-w-[200px]">
                <p className="font-bold text-gray-900">{provider.name}</p>
                <p className="text-sm text-gray-600">{provider.clinic}</p>
                <p className="text-sm text-gray-500">{provider.specialty} · {provider.rating} rating</p>
              </div>
            </Tooltip>
            <Popup>
              <div className="text-left min-w-[220px] p-1">
                <p className="font-bold text-gray-900">{provider.name}</p>
                <p className="text-sm text-gray-600">{provider.clinic}</p>
                <p className="text-sm text-gray-500">{provider.specialty} · {provider.rating} rating</p>
                <p className="text-xs text-gray-400 mt-1">{provider.address}</p>
                <button
                  type="button"
                  onClick={() => onViewProfile && onViewProfile(provider)}
                  className="mt-3 w-full py-2 rounded-lg bg-gray-900 text-white text-sm font-bold hover:bg-gray-800 transition-colors"
                >
                  View Profile
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
}

export default ProviderMap;
