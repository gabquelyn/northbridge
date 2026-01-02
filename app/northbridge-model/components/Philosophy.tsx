"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
export default function Philosophy() {
  const content = [
    {
      title: "Cognitive Readiness",
      details:
        "Building the mental frameworks required for North American scholarly inquiry.",
      image: "/asset/1.png",
    },
    {
      title: "Emotional Regulation",
      details:
        "Equipping students with the resilience to manage the transition into a new culture and academic environment.",
      image: "/asset/2.png",
    },
    {
      title: "System Alignment",
      details:
        "Closing the friction gap between your current education and Canadian university expectations.",
      image: "/asset/3.png",
    },
  ];

  return (
    <div className="flex flex-col gap-20 py-20">
      <div className="px-[20%]">
        <p className="text-[2.5rem] font-bold text-center capitalize">
          A specialized
          <br />
          <span className="text-[#479da5]">What</span> Approach to success
        </p>
        <p className="text-center mt-2">
          Northbridge Collegiate is not a traditional high school. We are a
          specialized academic bridge institution. Through a sophisticated blend
          of online and in-class learning, we have moved beyond the
          "graduation-only" mindset to create a model built for high performance
          in Canadian higher education.
        </p>
      </div>

      <div className="bg-[#479DA526] py-20 px-[15%]">
        <div className="flex justify-between items-center">
          <p className="text-[2.5rem] font-bold text-left capitalize">
            The Readiness-First
            <br />
            <span className="text-[#479da5]">What</span> Philosophy
          </p>
          <div className="flex flex-col gap-3">
            <p>
              For the international student, admission is only the beginning.
              <br />
              True success requires being "system-ready" before you arrive.
            </p>
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className={
                  "bg-linear-0 text-white from-[#479DA5] to-[#17757E] p-2 px-6 rounded-3xl cursor-pointer"
                }
              >
                Book a consultation
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex gap-8 mt-15">
          {content.map((d) => (
            <div className="bg-white rounded-xl p-7 w-full">
              <Image src={d.image} height={30} width={30} alt="" />

              <div className="mt-5  p-3 flex flex-col gap-3">
                <p>{d.title}</p>
                <p>{d.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
