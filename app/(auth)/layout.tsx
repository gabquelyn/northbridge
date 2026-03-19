import Image from "next/image";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f2f2f2] text-[.9rem] flex items-center justify-center h-screen p-7">
      <div className="grid grid-cols-2 bg-white shadow p-5 overflow-hidden rounded-2xl">
        <div className="w-md min-h-20 relative overflow-hidden rounded-tl-2xl rounded-bl-2xl">
          <Image src="/asset/mixed.jpg" alt="" fill className="object-cover" />

          <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/20 to-black/90" />

          {/* Content on top */}
          <div className="absolute bottom-0 p-7 text-white">
            <p className="text-xl font-semibold">
              Your child's <span className="text-primary">future</span><br/> starts
              here.
            </p>
            <p className="text-sm">
              Northbridge Collegiate is a Canadian university prep model, giving
              students the edge they need for top-tier admissions.
            </p>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
