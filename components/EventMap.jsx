"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

export default function EventMap() {
  const position = [23.729465, 90.417043];
  const [customIcon, setCustomIcon] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");

      const svgIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" 
          viewBox="0 0 24 24">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z" 
            fill="#ef4444"/> 
          <circle cx="12" cy="9" r="3" fill="#b91c1c"/>
        </svg>
      `;

      const icon = L.divIcon({
        className: "custom-marker",
        html: svgIcon,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      });

      setCustomIcon(icon);
    }
  }, []);

  return (
    <div className="w-full h-[500px] z-0">
      <MapContainer
        center={position}
        zoom={16}
        className="!z-[0]"
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {customIcon && (
          <Marker position={position} icon={customIcon}>
            <Popup>
              📍 Printers Building <br /> 12–13th Floor, 5 Rajuk Avenue,
              Motijheel, Dhaka
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
