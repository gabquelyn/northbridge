import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-screen absolute z-50 inset-0 bg-[rgba(0,0,0,0.3)]">
      <div className="flex bg-white p-7 rounded-2xl flex-col gap-5 max-w-xl min-w-sm">{children}</div>
    </div>
  );
}
