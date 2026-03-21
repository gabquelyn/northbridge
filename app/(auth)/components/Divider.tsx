import React from "react";

export default function Divider() {
  return (
    <div className="flex items-center w-full my-3">
      <div className="grow h-px bg-linear-to-r from-transparent via-gray-300 to-gray-300 opacity-60" />

      <span className="px-5 text-xs font-semibold tracking-widest text-gray-400 uppercase">
        or
      </span>

      <div className="grow h-px bg-linear-to-l from-transparent via-gray-300 to-gray-300 opacity-60" />
    </div>
  );
}
