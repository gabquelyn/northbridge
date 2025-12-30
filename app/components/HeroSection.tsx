"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
export default function HeroSection() {
  return (
    <div className="section bg-[url('/asset/j.jpg')] text-white">
      <div className="flex items-center justify-center h-screen px-[10%]">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3 z-20">
            <p className="text-[4.9rem] leading-23 font-bold">
              Secure Your Place
              <br /> at a Top-Tier <br />{" "}
              <span className="text-[#479DA5] relative z-10 inline-block">
                <Typewriter
                  words={["Canadian University"]}
                  loop={1}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                <motion.div
                  className="absolute right-0 -top-3 -z-10"
                  initial={{ scale: 0, opacity: 0, rotate: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: 12 }}
                  transition={{
                    delay: 2,
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                  }}
                >
                  <Image
                    src="/asset/flag.png"
                    height={80}
                    width={80}
                    alt="Canadian Flag"
                  />
                </motion.div>
              </span>
            </p>
            <p className="text-[1.4rem]">
              A Canadian University Prep Institution designed to align
              international students with the academic, cultural, and structural
              standards of Canadian post-secondary education.
            </p>
            <div className="flex gap-4">
              <motion.div
                className={
                  "bg-linear-0 from-[#479DA5] transition-all cursor-pointer to-[#17757E] p-2 px-6 rounded-3xl"
                }
                whileHover={{ scale: "1.05" }}
              >
                Explore programs
              </motion.div>
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
          {/* <motion.div
            className="h-[70vh] w-full relative overflow-hidden"
            initial={{ opacity: 0, y: -10 }} // start slightly above and invisible
            animate={{ opacity: 1, y: 0 }} // slide down and fade in
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
            src={"/asset/student.png"}
            fill
            alt=""
            className="object-cover"
            unoptimized
          />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
