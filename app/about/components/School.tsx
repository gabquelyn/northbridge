import Image from "next/image";
import React from "react";

export default function School() {
  return (
    <div className="relative">
      <div className="relative h-120">
        <Image src="/asset/hall.jpg" fill alt="" className="object-cover" />
      </div>

      <div className="bg-white flex flex-col gap-3 rounded-md shadow-lg w-[70%] p-13 absolute left-1/2 -translate-x-1/2 -bottom-17">
        <p>
          <span className="text-[#479DA5]">Northbridge Collegiate</span>{" "}
          operates within a cross-border instructional context and is structured
          to support students entering Ontario secondary programming from a
          range of prior educational systems.
        </p>
        <p>
          <span className="text-[#479DA5]">Northbridge Collegiate</span> serves
          students from diverse educational backgrounds and applies structured
          academic review and placement processes to support appropriate entry
          into Ontario secondary programming. We deliver Ontario
          curriculum-based instruction and apply structured academic review and
          placement processes to determine appropriate course sequencing and
          program entry.
        </p>
        <p>
          Instructional delivery may occur through approved online, in-class, or
          blended models, with all credit courses assessed and evaluated in
          accordance with Ontario curriculum requirements. Progression through
          OSSD programs is documented through Ministry-compliant records,
          including the Ontario Student Record (OSR). All instruction and
          assessment are conducted in accordance with Ontario curriculum and
          Ministry policy requirements
        </p>
      </div>
    </div>
  );
}
