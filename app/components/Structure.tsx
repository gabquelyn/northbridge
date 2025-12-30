"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import IconBox from "./atoms/IconBox";
export default function Structure() {
  return (
    <div className="bg-[#479DA5] flex flex-col gap-6 items-center justify-center p-5 py-20 pt-25">
      <p className="text-[2.5rem] text-white font-bold text-center">
        Why parents value this <br /> and{" "}
        <span className="text-[#010A1D]">Structure?</span>
      </p>

      <motion.button
        className={"text-[#68b2b9] bg-[#010A1D] rounded-3xl font-bold p-2 px-8"}
        whileHover={{ scale: "1.05" }}
        //   transition={{ duration: 0.5 }}
      >
        Book a consultation
      </motion.button>

      <div className="flex gap-5 -mt-14">
        <div className="flex flex-col justify-center gap-10">
          <IconBox
            image="/asset/icon4.png"
            tag="No repetition of school years"
          />
          <IconBox
            image="/asset/icon2.png"
            tag="Clear progression at every stage"
          />
        </div>

        <div className="relative h-100 w-120 overflow-hidden rounded-md">
          <Image
            alt=""
            src="/asset/studio.png"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <IconBox
            image="/asset/icon3.png"
            tag="Prior learning is recognized"
          />
          <IconBox
            image="/asset/icon1.png"
            tag="Canadian standards maintained"
          />
        </div>
        <div>
          {/* <div className="bg-[#68b2b9] text-center rounded-2xl p- w-fit">
            <p>No repetition of school years</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
