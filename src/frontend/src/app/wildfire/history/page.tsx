"use client";

import { useEffect, useState } from "react";

import Map from "./components/Map";
import Controls from "./components/Controls";
import { getWildfiresByYear } from "@/api/wildfire";

export default function Home() {
  const [year, setYear] = useState<number>(1992);
  const [wildfires, setWildfires] = useState([]);
  const [wildfireCount, setWildfireCount] = useState([]);

  useEffect(() => {
    let timeout = setTimeout(async () => {
      const response = await getWildfiresByYear(year);
      setWildfires(response.fires);
      setWildfireCount(response.count);
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [year]);

  return (
    <div className="flex h-screen w-screen justify-end">
      <Map wildfires={wildfires} />
      <Controls
        year={year}
        setYear={setYear}
        wildfires={wildfires}
        wildfireCount={wildfireCount}
      />
    </div>
  );
}
