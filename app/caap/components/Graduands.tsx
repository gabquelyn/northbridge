"use client";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
export default function Graduands() {
  return (
    <div className="bg-[url('/asset/graduands.jpg')] bg-no-repeat bg-cover bg-center py-19 p-8 text-white  text-center relative">
      <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0"></div>
      <div className="relative flex flex-col items-center gap-5 justify-center z-10">
        <p className="font-bold text-[1.2rem]">Start Your Alignment</p>
        <p>
          Your journey to a Canadian degree begins with the right foundation.{" "}
          <br />
          Let's build it together.
        </p>
        <Link href = "/consultation">
          <motion.div
            className={
              "bg-linear-0 w-fit from-[#479DA5] transition-all cursor-pointer to-[#17757E] p-2 px-6 rounded-3xl"
            }
            whileHover={{ scale: "1.05" }}
          >
            Book a consultation
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
