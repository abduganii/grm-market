"use client";

import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "@/lib/leaflet-icons";
import { reverseGeocode } from "@/lib/reverseGeocode";
import type { LatLngTuple } from "leaflet";

function LocationMarker({ onSelect }: { onSelect: (lat: number, lng: number, address: string) => void }) {
  const [position, setPosition] = useState<LatLngTuple | null>(null);

  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      const address = await reverseGeocode(lat, lng);
      onSelect(lat, lng, address);
    },
  });

  return position ? <Marker position={position} /> : null;
}

export default function MapPicker({ onSelect }: { onSelect: (lat: number, lng: number, address: string) => void }) {
  return (
    <MapContainer
      center={[41.2995, 69.2401] as LatLngTuple} // Tashkent default
      zoom={13}
      className="h-[400px] w-full rounded-lg"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onSelect={onSelect} />
    </MapContainer>
  );
}
