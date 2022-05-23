import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import pin from "../../images/pin.png";
import "./map.scss";
export default function MapCard({ changeData }) {
  const markers = [
    {
      name: "nakhla-1",
      data: {
        dailyChartSeries: [10, 20, 30, 40, 50, 60, 70],
        co2Concentration: 70,
      },
      lat: 36.3773383013567,
      lng: 43.16410915286604,
    },
    {
      name: "nakhla-2",
      data: {
        dailyChartSeries: [40, 20, 70, 60, 40, 10, 30],
        co2Concentration: 60,
      },
      lat: 36.35317367802859,
      lng: 43.097355072660896,
    },
    {
      name: "nakhla-3",
      data: {
        dailyChartSeries: [30, 50, 70, 20, 40, 10, 80],
        co2Concentration: 50,
      },
      lat: 36.32472542851645,
      lng: 43.13226316946006,
    },
    {
      name: "nakhla-4",
      data: {
        dailyChartSeries: [90, 60, 40, 20, 30, 50, 70],
        co2Concentration: 40,
      },
      lat: 36.35103630937551,
      lng: 43.063671821363464,
    },
    {
      name: "nakhla-5",
      data: {
        dailyChartSeries: [80, 70, 90, 30, 40, 20, 50],
        co2Concentration: 30,
      },
      lat: 36.37158550028737,
      lng: 43.18146113044602,
    },
    {
      name: "nakhla-6",
      data: {
        dailyChartSeries: [70, 40, 80, 10, 30, 50, 90],
        co2Concentration: 20,
      },
      lat: 36.3911432879625,
      lng: 43.13144660579224,
    },
  ];

  React.useEffect(() => {
    // fetch data from api here
    changeData(markers[0]);
  }, []);

  const mapRef = React.useRef(null);

  const onClick = (location) => {
    changeData(location);
    if (mapRef.current !== null) {
      mapRef.current.easeTo({
        center: [ location.lng,location.lat],
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
          </Marker>
        ))}
      </Map>
    </div>
  );
}
