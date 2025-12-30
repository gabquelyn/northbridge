"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <div className="section bg-[url('/asset/girl.jpg')] text-white">
      <div className="flex items-center justify-center h-screen px-[10%]">
        <div className="grid grid-cols-2 gap-8 ">
          <div className="flex flex-col gap-4 z-20">
            <p className="text-[4.9rem] leading-23 font-bold">
              Secure Your Global Credential.
              <span className="text-[#479DA5] relative z-10 inline-block">
                <Typewriter
                  words={["Fulfill Your Potential."]}
                  loop={1}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <p>
              At Northbridge Collegiate, our Grade 12 OSSD Program represents
              the <br/>"Complete" phase of our signature pathway.
            </p>
            <motion.div
              className={
                "bg-linear-0 w-fit from-[#479DA5] transition-all cursor-pointer to-[#17757E] p-2 px-6 rounded-3xl"
              }
              whileHover={{ scale: "1.05" }}
            >
              Book a consultation
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
