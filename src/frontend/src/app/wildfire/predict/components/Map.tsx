"use client";

import React from "react";
import { Map } from "react-map-gl";
import { ScatterplotLayer } from "deck.gl";
import DeckGL, { MapViewState } from "deck.gl";

const INITIAL_VIEW_STATE: MapViewState = {
  latitude: 50.8283,
  longitude: -120.5795,
  zoom: 3,
};

export default function MapView({
  onClick,
  layers,
}: {
  onClick: (e: any) => void;
  layers: ScatterplotLayer[];
}) {
  return (
    <DeckGL
      width="66.6666%"
      initialViewState={INITIAL_VIEW_STATE}
      onClick={onClick}
      layers={layers}
      controller
    >
      <Map
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  );
}
