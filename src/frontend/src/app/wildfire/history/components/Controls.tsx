import { Slider } from "@/ui/components/slider";
import { Dispatch, SetStateAction } from "react";

export default function Controls({
  year,
  setYear,
  wildfires,
}: {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
  wildfires: any;
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
      <div className="flex flex-col gap-4 border-b border-white border-opacity-10 bg-neutral-900 bg-opacity-80 p-8">
        <div className="flex w-full items-center justify-between">
          <p className="text-2xl">Year {year}</p>
          <div
            className="flex cursor-pointer rounded border border-opacity-10 px-4 py-1 transition duration-300 hover:bg-white hover:bg-opacity-20"
            onClick={() => play(1991)}
          >
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
      <div className="flex flex-col p-8">
        <p className="text-2xl text-red-600">
          {wildfires.length.toLocaleString()} Wildfires
        </p>
      </div>
    </div>
  );
}
