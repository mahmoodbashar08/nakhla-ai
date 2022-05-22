import React, { useRef, useEffect, useState } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapCard() {
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
    />
  );
}
