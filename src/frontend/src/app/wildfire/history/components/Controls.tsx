import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { Slider } from "@/ui/components/slider";

export default function Controls({
  year,
  setYear,
  wildfires,
  wildfireCount,
}: {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
  wildfires: any;
  wildfireCount: any;
}) {
  function play(year: number) {
    if (year >= 2015) {
      return;
    }
    setYear(year + 1);
    setTimeout(() => {
      play(year + 1);
    }, 1500);
  }

  return (
    <div className="flex w-1/3 flex-col">
      <div className="flex flex-col items-start justify-start gap-4 border-b border-white border-opacity-10 bg-neutral-900 bg-opacity-80 p-8">
        <Link
          href="/"
          className="flex items-center gap-2 opacity-60 transition duration-300 hover:opacity-100"
        >
          <i className="fas fa-arrow-left text-white" />
          <p>Go back</p>
        </Link>
        <div className="flex w-full items-center justify-between">
          <p className="text-2xl">Year {year}</p>
          <div
            className="flex cursor-pointer items-center gap-2 rounded border border-white border-opacity-10 bg-white bg-opacity-5 px-4 py-1 transition duration-300 hover:bg-white hover:bg-opacity-10"
            onClick={() => play(1991)}
          >
            <i className="fas fa-play text-xs text-white" />
            <p className="select-none">Play</p>
          </div>
        </div>
        <Slider
          min={1992}
          max={2015}
          value={[year]}
          defaultValue={[year]}
          onValueChange={(value) => setYear(value[0])}
          step={1}
        />
      </div>
      <div className="flex flex-col gap-2 p-8">
        <p className="text-2xl text-red-600">
          {wildfires.length.toLocaleString()} Wildfires
        </p>
        <ul className="flex list-inside list-disc flex-col gap-1 text-white">
          {wildfireCount.map((count: any, index: number) => (
            <li
              key={index}
              className="list-item items-center text-lg text-white"
            >
              <p className="inline">
                {count[0]}: {count[1].toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
