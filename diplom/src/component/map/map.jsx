import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "./map.css";

const MapView = ({ position, markers = [], zoom }) => {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution=""
      />

      {markers.map((marker, index) => {
        const icon = new L.Icon({
          iconUrl:
            marker.iconUrl ||
            "https://cdn-icons-png.flaticon.com/512/2776/2776067.png",
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        return (
          <Marker key={index} position={marker.position} icon={icon}>
            <Popup>
              <div style={{ textAlign: "center" }}>
                <p>{marker.popupText}</p>
                {marker.image && (
                  <img
                    src={marker.image}
                    alt=""
                    style={{
                      width: "100px",
                      borderRadius: "8px",
                      marginTop: "5px",
                    }}
                  />
                )}
                {marker.address && (
                  <p
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    {marker.address}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapView;
