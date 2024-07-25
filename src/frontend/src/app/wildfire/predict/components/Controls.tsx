import React from "react";
import Link from "next/link";

export default function Controls() {
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
      </div>
    </div>
  );
}
