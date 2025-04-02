// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useCities } from "../contexts/CitiesContext";
import { useState } from "react";

function Map() {
  const [searchParams] = useSearchParams();

  //   const navigate = useNavigate();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  const [mapPosition] = useState([40, 0]);

  const { cities } = useCities();

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        // center={mapPosition}
        center={(mapLat, mapLng)}
        zoom={13}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
