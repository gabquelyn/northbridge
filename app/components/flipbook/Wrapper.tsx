import React from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8 md:p-15 bg-white text-slate-600 h-full  text-xs md:text-[1rem]">
      <div className=" flex flex-col gap-1 md:gap-5 text-justify">
        {children}
      </div>
    </div>
  );
}
