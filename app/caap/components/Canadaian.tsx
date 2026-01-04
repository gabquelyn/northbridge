import Image from "next/image";
import React from "react";

export default function Canadaian() {
  return (
    <div className="p-20 mx-[5%] md:mx-[15%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="w-full h-100 relative">
          <Image src="/asset/flag1.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-4">
          <p>
            International students are often bright, capable, and ready to
            lead—yet many struggle during their first year in Canada because of{" "}
            <span className="font-bold">"system misalignment."</span>{" "}
            <span className="font-bold">
              The Canadian Academic Alignment Program (CAAP)
            </span>{" "}
            is specifically designed to bridge the gap between your current
            education and the expectations of the Canadian university system.
          </p>
          <p>
            As the foundational step in our "Three Programs. One Clear Route"
            pathway, CAAP ensures you don't just enter Canada—you enter with the
            tools to excel.
          </p>
        </div>
      </div>
    </div>
  );
}
