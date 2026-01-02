"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import clsx from "clsx";
import { FaGreaterThan } from "react-icons/fa";

export default function Program() {
  const content = [
    {
      title: "Canadian Academic Alignment Program (CAAP)",
      details:
        "Don't repeat a year—align it. CAAP recognizes your prior learning to fast-track your success in Canadian education.",
      image: "/asset/grop.jpg",
    },
    {
      title: "Grade 12 OSSD (Canada Only)",
      details:
        "30+ Grade 12 Courses Choose from a wide variety of Ontario-standard curriculum options tailored to your interests.",
      image: "/asset/origin.jpg",
    },
    {
      title: "Grade 12 Advantage Year (AY12)",
      details:
        "Designed for students seeking maximum preparation for competitive universities, our program runs concurrently with Grade 12.",
      image: "/asset/boy.jpg",
    },
  ];
  return (
    <div className="py-20">
      <p className="text-[2.5rem] capitalize font-bold text-center">
        Which <span className="text-[#479DA5]">Program is right</span>
        <br /> for my child?
      </p>

      <div className="flex px-[20%] gap-6 mt-8">
        {content.map((c, i) => (
          <div
            key={c.image}
            className={clsx(
              "p-6 rounded-xl h-120  flex flex-col justify-between",
              i % 2 == 0 ? "bg-[#479DA533]" : "bg-[#479DA5] text-white"
            )}
          >
            <p className="font-bold capitalize">{c.title}</p>
            <p>{c.details}</p>
            <motion.div
              className="border-2 rounded-3xl flex items-center gap-3 w-fit p-2 px-6"
              whileHover={{ scale: 1.05 }}
            >
              <p>Learn more</p>
              <div className="flex">
                <FaGreaterThan />
                <FaGreaterThan />
              </div>
            </motion.div>
            <div className="h-36 w-full relative overflow-hidden rounded-xl">
              <Image src={c.image} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
