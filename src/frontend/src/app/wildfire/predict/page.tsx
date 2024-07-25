"use client";

import React, { useState } from "react";
import { ScatterplotLayer } from "deck.gl";

import Map from "./components/Map";
import Controls from "./components/Controls";
import { predictWildfire } from "@/api/wildfire";

export default function Predict() {
  const [day, setDay] = useState(1);
  const [data, setData] = useState<any>([]);
  const [layers, setLayers] = useState<ScatterplotLayer[]>();

  function dateFromDay(year: number, day: number) {
    var date = new Date(year, 0);
    return new Date(date.setDate(day));
  }

  const onClick = async (e: any) => {
    const response = await predictWildfire(
      e.coordinate[1],
      e.coordinate[0],
      day,
    );

    const point = {
      date: dateFromDay(2025, day),
      position: [e.coordinate[0], e.coordinate[1]],
      size: response.prediction,
      opacity: 0.8,
    };

    setData([point, ...data]);
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
      <Controls data={data} day={day} setDay={setDay} />
    </div>
  );
}
