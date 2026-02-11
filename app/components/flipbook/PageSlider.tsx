import React, { useState } from "react";

export default function PageSlider({
  totalPages,
  page,
  onChange,
}: {
  totalPages: number;
  page: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const progress = page > 0 ? ((page ) / totalPages) * 100 : 0;

  return (
    <div className="w-30 space-y-3">
      <div className="relative w-full">
        {/* Background Track */}
        <div className="h-0.75 w-28 bg-slate-200 rounded-full" />

        {/* Filled Track */}
        <div
          className="absolute  bg-[#479DA5] top-0 left-0 h-0.75 rounded-full transition-all duration-200"
          style={{
            width: `${progress}%`,
          }}
        />

        {/* Actual Range Input */}
        <input
          type="range"
          min={0}
          step={1}
          max={totalPages}
          value={page}
          onChange={onChange}
          className="absolute top-0 left-0 w-full h-0.75 page-slider appearance-none cursor-pointer"
          
        />
      </div>

      <div className="text-sm text-gray-600 text-center">
        Page {page + 1} of {totalPages}
      </div>
    </div>
  );
}
