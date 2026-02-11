import React from "react";
import Image from "next/image";
export default function Introduction() {
  return (
    <div className="h-full bg-white p-8 md:p-15">
      {/* <div className="w-16 h-16 mx-auto p-1 rounded-full bg-white shadow-lg">
        <div className="relative w-full h-full rounded-full overflow-hidden"> */}
      <div className="flex items-center justify-center">
        <Image
          src="/asset/logo.png"
          height={90}
          width={90}
          className="object-contain hidden md:block"
          alt="Northbridge Logo"
        />
      </div>

      <div className="md:mt-20 hidden md:block md:text-2xl font-bold">
        <p>
          Welcome to
          <br /> <span className="text-[#479DA5]">Northbridge Collegiate</span>
        </p>
      </div>

      <div className="text-xs md:text-[1rem] text-justify mt-6 flex flex-col gap-2">
        <p>
          Welcome to the Northbridge Collegiate Grade 11-12 Course Guide. This
          guide describes the courses offered within our Ontario-aligned senior
          secondary curriculum, including the skills developed, academic
          expectations, and how each course supports long-term university and
          career pathways.
        </p>
        <p className="">
          Courses are offered at the University{" "}
          <span className="font-bold">(U) </span> level, suitable for students
          aiming for competitive university programs, and University/College{" "}
          <span className="font-bold">(M) </span>
          level, appropriate for a range of post-secondary pathways.
        </p>

        <div>
          <p>Each course is designed with:</p>
          <ul className="list-disc list-outside md:list-inside">
            <li>Academic breadth</li>
            <li>Critical thinking development</li>
            <li>Preparation for Canadian and international university standards</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
