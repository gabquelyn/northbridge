import React from "react";
import { RiSearch2Line } from "react-icons/ri";

export default function Search({
  value,
  setSearch,
}: {
  value: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="relative">
      <input
        name="search"
        type="search"
        value={value}
        className="bg-white border outline-0 border-gray-200 px-4 w-xs pl-9 p-2 rounded-3xl"
        onChange={(e) => setSearch(e.target.value)}
      />
      <p className="absolute top-1/2 -translate-y-1/2 text-secondary ml-3">
        <RiSearch2Line />
      </p>
    </div>
  );
}
