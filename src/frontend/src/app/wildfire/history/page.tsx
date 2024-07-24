"use client";

import { Map } from "react-map-gl";
import { useEffect, useState } from "react";
import DeckGL, { MapViewState, ScatterplotLayer } from "deck.gl";

import { Slider } from "@/ui/components/slider";
import { getWildfiresByYear } from "@/api/wildfire";

const INITIAL_VIEW_STATE: MapViewState = {
  latitude: 50.8283,
  longitude: -120.5795,
  zoom: 3,
};

export default function Home() {
  const [year, setYear] = useState<number>(2000);
  const [wildfires, setWildfires] = useState([]);
  const [layers, setLayers] = useState<ScatterplotLayer[]>();

  useEffect(() => {
    (async () => {
      const response = await getWildfiresByYear(year);
      setWildfires(response);
    })();
  }, [year]);

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
      radiusScale: 10,
      getRadius: (d) => d.size,
      getPosition: (d) => d.position,
      getFillColor: (d) => [255, 0, 0, d.opacity * 255],
    });

    setLayers([layer]);
  }, [wildfires]);

  return (
    <div className="flex w-screen h-screen justify-end">
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
      <div className="flex flex-col w-1/3 p-8">
        <div className="flex flex-col">
          <p className="text-2xl">Year {year}</p>
          <Slider
            min={1992}
            max={2015}
            defaultValue={[year]}
            onValueChange={(value) => setYear(value[0])}
            step={1}
          />
        </div>
      </div>
    </div>
  );
}
