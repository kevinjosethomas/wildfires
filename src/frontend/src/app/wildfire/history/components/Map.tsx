import { Map } from "react-map-gl";
import { useEffect, useState } from "react";
import DeckGL, { MapViewState, ScatterplotLayer } from "deck.gl";

const INITIAL_VIEW_STATE: MapViewState = {
  latitude: 50.8283,
  longitude: -120.5795,
  zoom: 3,
};

export default function MapView({ wildfires }: { wildfires: any }) {
  const [layers, setLayers] = useState<ScatterplotLayer[]>();

  useEffect(() => {
    if (!wildfires) {
      return;
    }
    const data = [];
    for (const wildfire of wildfires) {
      const point = {
        position: [wildfire[7], wildfire[8]],
        size: wildfire[2] / 5,
        opacity: 0.8,
      };

      switch (wildfire[3]) {
        case "A":
          point.opacity = 0.02;
          break;
        case "B":
          point.opacity = 0.03;
          break;
        case "C":
          point.opacity = 0.04;
          break;
        case "D":
          point.opacity = 0.05;
          break;
        case "E":
          point.opacity = 0.06;
          break;
        case "F":
          point.opacity = 0.07;
          break;
        case "G":
          point.opacity = 0.08;
          break;
        default:
          point.opacity = 0.04;
          break;
      }
      data.push(point);
    }

    const layer = new ScatterplotLayer({
      id: "scatterplot-layer",
      data,
      filled: true,
      stroked: true,
      pickable: true,
      radiusScale: 5,
      radiusMinPixels: 0.5,
      getRadius: (d) => d.size,
      getPosition: (d) => d.position,
      getFillColor: (d) => [255, 0, 0, d.opacity * 255],
    });

    setLayers([layer]);
  }, [wildfires]);
  return (
    <DeckGL
      width="66%"
      initialViewState={INITIAL_VIEW_STATE}
      controller
      layers={layers}
    >
      <Map
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  );
}
