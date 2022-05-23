import React from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import pin from "../../images/pin.png";
export default function MapCard() {
  const markers = [
    {
      name: "nakhla-1",
      data: 300,
      lat: 36.3773383013567,
      lng: 43.16410915286604,
    },
    {
      name: "nakhla-2",
      data: 300,
      lat: 36.35317367802859,
      lng: 43.097355072660896,
    },
    {
      name: "nakhla-3",
      data: 300,
      lat: 36.32472542851645,
      lng: 43.13226316946006,
    },
    {
      name: "nakhla-4",
      data: 300,
      lat: 36.35103630937551,
      lng: 43.063671821363464,
    },
    {
      name: "nakhla-5",
      data: 300,
      lat: 36.37158550028737,
      lng: 43.18146113044602,
    },
    {
      name: "nakhla-6",
      data: 300,
      lat: 36.3911432879625,
      lng: 43.13144660579224,
    },
  ];

  return (
    <Map
      initialViewState={{
        latitude: 36.3489,
        longitude: 43.1577,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%", minHeight: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken="pk.eyJ1IjoidGF3ZmVrIiwiYSI6ImNqMG14bjFrYTAwMW8yd251cm14dnNiaGwifQ.HBES0LqkE-Jcxs24amwGuw"
    >
      {markers.map((location) => (
        <Marker
          longitude={location.lng}
          latitude={location.lat}
          anchor="bottom"
        >
          <img src={pin} />
        </Marker>
      ))}
    </Map>
  );
}
