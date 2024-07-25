import moment from "moment";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import { Slider } from "@/ui/components/slider";

export default function Controls({
  day,
  setDay,
  data,
}: {
  day: number;
  setDay: Dispatch<SetStateAction<number>>;
  data: any[];
}) {
  return (
    <div className="flex w-1/3 flex-col overflow-y-scroll">
      <div className="flex flex-col items-start justify-start gap-4 border-b border-white border-opacity-10 bg-neutral-900 bg-opacity-80 p-8">
        <Link
          href="/"
          className="flex items-center gap-2 opacity-60 transition duration-300 hover:opacity-100"
        >
          <i className="fas fa-arrow-left text-white" />
          <p>Go back</p>
        </Link>
        <p className="text-2xl">Day of the Year: {day}</p>
        <Slider
          min={1}
          max={365}
          value={[day]}
          defaultValue={[day]}
          onValueChange={(value) => setDay(value[0])}
          step={1}
        />
      </div>
      <div className="flex flex-col gap-2 p-8">
        <p className="text-2xl text-white">Predictions</p>
        {data.map((point, index) => (
          <div
            className={`flex flex-col gap-2 rounded border border-white border-opacity-10 ${point.size > 2000 ? "bg-red-600" : point.size > 1000 ? "bg-orange-500" : "bg-white"} bg-opacity-10 p-4`}
            key={index}
          >
            <p>{moment(point.data).format("MMMM Do YYYY")}</p>
            <p className="text-white">
              Latitude: {point.position[1].toFixed(4)}
            </p>
            <p className="text-white">
              Longitude: {point.position[0].toFixed(4)}
            </p>
            <p className="text-white">
              Spread: {point.size.toFixed(0).toLocaleString()} acres
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
