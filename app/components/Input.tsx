"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Input({
  value,
  label,
  type,
  name,
  placeholder,
  className,
  onChange,
}: {
  value: string;
  label?: string;
  name: string;
  placeholder?: string;
  className?: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-1 w-full">
      <label>{label}</label>
      <div className="relative">
        <input
          onChange={onChange}
          name={name}
          value={value}
          type={open ? "text" : type}
          className={clsx(
            className,
            "bg-primary/2 w-full p-3 rounded-2xl border border-gray-200 outline-none focus:ring-[#479DA5] focus:ring-2 transition-all",
          )}
          placeholder={placeholder}
        />
        {type == "password" && (
          <button
            className="absolute cursor-pointer text-primary right-3 top-1/2 -translate-y-1/2"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        )}
        {type == "email" && (
          <p className="absolute text-slate-200 right-3 top-1/2 -translate-y-1/2 ">
            <MdOutlineAlternateEmail />
          </p>
        )}
      </div>
    </div>
  );
}
