"use client";

import React, { useState } from "react";
import { ScatterplotLayer } from "deck.gl";

import Map from "./components/Map";
import Controls from "./components/Controls";
import { predictWildfire } from "@/api/wildfire";

export default function Predict() {
  const [data, setData] = useState<any>([]);
  const [layers, setLayers] = useState<ScatterplotLayer[]>();

  const onClick = async (e) => {
    const response = await predictWildfire(
      e.coordinate[1],
      e.coordinate[0],
      10,
    );

    console.log(response);

    let size;
    switch (response.prediction) {
      case "A":
        size = 0.25;
        break;
      case "B":
        size = 10;
        break;
      case "C":
        size = 100;
        break;
      case "D":
        size = 300;
        break;
      case "E":
        size = 1000;
        break;
      case "F":
        size = 5000;
        break;
      case "G":
        size = 10000;
        break;
      default:
        size = 100;
        break;
    }
    const point = {
      position: [e.coordinate[0], e.coordinate[1]],
      size: size,
      opacity: 0.8,
    };

    setData([...data, point]);
    const layer = new ScatterplotLayer({
      id: "scatterplot-layer",
      data,
      filled: true,
      stroked: true,
      pickable: true,
      radiusScale: 5,
      radiusMinPixels: 1,
      getRadius: (d) => d.size,
      getPosition: (d) => d.position,
      getFillColor: (d) => [255, 0, 0, d.opacity * 255],
    });
    setLayers([layer]);
  };

  return (
    <div className="flex h-screen w-screen justify-end">
      <Map onClick={onClick} layers={layers} />
      <Controls />
    </div>
  );
}
