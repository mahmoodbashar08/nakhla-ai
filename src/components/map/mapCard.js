import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Tag } from 'antd';

import pin from "../../images/pin.png";
import "./map.scss";
import { MarkersEndpoint } from "../../constants/api";
export default function MapCard({ changeData }) {
  const [markers, setMarkers] = React.useState([]);

  React.useEffect(() => {
    // fetch data from api here

    fetch(MarkersEndpoint)
      .then((response) => {
        return response.json();
      })
      .then(async (responseData) => {
        setMarkers(responseData.data);
        await changeData(responseData.data[0]);
      });
  }, []);

  const mapRef = React.useRef(null);

  const onClick = (location) => {
    changeData(location);
    if (mapRef.current !== null) {
      mapRef.current.easeTo({
        center: [location.lng, location.lat],
        zoom: 13,
        duration: 500,
      });
    }
  };

  return (
    <div className="map-container">
      <Map
        initialViewState={{
          latitude: 36.3489,
          longitude: 43.1577,
          zoom: 11,
        }}
        ref={mapRef}
        style={{ width: "100%", height: "100%", minHeight: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoidGF3ZmVrIiwiYSI6ImNqMG14bjFrYTAwMW8yd251cm14dnNiaGwifQ.HBES0LqkE-Jcxs24amwGuw"
      >
        {markers.map((location) => (
          <Marker
            key={location.name}
            longitude={location.lng}
            latitude={location.lat}
            anchor="bottom"
            style={{ cursor: "pointer" }}
            onClick={() => onClick(location)}
          >

            <img src={pin} alt={location.name} />
            <Tag color="green">5</Tag>

          </Marker>
        ))}
      </Map>
    </div>
  );
}
