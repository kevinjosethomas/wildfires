import React from "react";

import Map from "./components/Map";
import Controls from "./components/Controls";

export default function Predict() {
  return (
    <div className="flex h-screen w-screen justify-end">
      <Map />
      <Controls />
    </div>
  );
}
