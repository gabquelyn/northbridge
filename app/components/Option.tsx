import React from "react";
import clsx from "clsx";
export default function Option({
  program,
  value,
  onChange,
  name="program"
}: {
  program: string;
  value: string;
  onChange: () => void;
  name?: string
}) {
  return (
    <label
      className={clsx(
        "bg-[#479DA526] p-4 rounded-xl flex gap-2 items-center cursor-pointer transition-all",
        program == value && "ring-[#479DA5] ring-2"
      )}
    >
      <input
        type="radio"
        name={name}
        className="accent-[#479DA5]"
        onChange={onChange}
      />
      <p>{program}</p>
    </label>
  );
}
