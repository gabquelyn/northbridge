"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
export default function Hero() {
  return (
    <div className="section bg-[url('/asset/student.jpg')] text-white">
      <div className="flex items-center justify-center h-screen px-[10%]">
        <div className="grid grid-cols-2 gap-8 ">
          <div className="flex flex-col gap-4 z-20">
            <p className="text-[4.9rem] leading-23 font-bold">
              Get to <br />{" "}
              <span className="text-[#479DA5] relative z-10 inline-block">
                <Typewriter
                  words={["Know us more"]}
                  loop={1}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <p>
              <span className="text-[#17757E] font-bold">
                {" "}
                Northbridge Collegiate{" "}
              </span>
              is a Canadian University Prep Institution designed to prepare
              international students for successful entry into, and performance
              within, Canadian universities.
            </p>
            <div className="flex">
              <motion.div
                className={
                  "transition-all cursor-pointer text-white bg-[rgba(23,117,126,0.4)] border-2 border-[#17757E] p-2 px-6 rounded-3xl"
                }
                whileHover={{ scale: "1.05" }}
              >
                Book a consultation
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
