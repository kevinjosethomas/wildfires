import { Slider } from "@/ui/components/slider";
import { Dispatch, SetStateAction } from "react";

export default function Controls({
  year,
  setYear,
}: {
  year: number;
  setYear: Dispatch<SetStateAction<number>>;
}) {

    function play(year: number) {
        if (year >= 2015) {
            return;
        }
        setYear(year+1)
        setTimeout(() => {play(year+1)}, 1000)
    }

  return (
    <div className="flex flex-col w-1/3 p-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center w-full justify-between">
          <p className="text-2xl">Year {year}</p>
          <div className="px-4 py-1 border flex rounded transition hover:bg-white hover:bg-opacity-20 border-opacity-10 duration-300 cursor-pointer" onClick={() => play(1991)}>
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
    </div>
  );
}
