"use client";
import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
export default function Hero() {
  return (
    <div className="section bg-[url('/asset/toronto.jpg')] text-white">
      <div className="flex items-center justify-center h-screen px-[10%]">
        <div className="grid grid-cols-2 gap-8 ">
          <div className="flex flex-col gap-4 z-20">
            <p className="text-[4.9rem] leading-23 font-bold">
              Your First Step to Success in Canada: <br />{" "}
              <span className="text-[#479DA5] relative z-10 inline-block">
                <Typewriter
                  words={["Align. Complete. Advance."]}
                  loop={1}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={4000}
                />
              </span>
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
