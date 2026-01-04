import React from "react";

export default function Input({
  value,
  label,
  type,
  name,
  placeholder,
  onChange,
}: {
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label>{label}</label>
      <input
        onChange={onChange}
        name={name}
        value={value}
        type={type}
        className="bg-[#479DA526] p-4 rounded-xl border-none outline-none focus:ring-[#479DA5] focus:ring-2 transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}
