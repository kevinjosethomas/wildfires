"use client";

import { useEffect, useState } from "react";

import Map from "./components/Map";
import Controls from "./components/Controls";
import { getWildfiresByYear } from "@/api/wildfire";

export default function Home() {
  const [year, setYear] = useState<number>(1992);
  const [wildfires, setWildfires] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getWildfiresByYear(year);
      setWildfires(response);
    })();
  }, [year]);

  return (
    <div className="flex w-screen h-screen justify-end">
      <Map wildfires={wildfires} />
      <Controls year={year} setYear={setYear} />
    </div>
  );
}
