"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function Reason() {
  return (
    <div className="flex items-center justify-center py-20">
      <div>
        {/* Heading */}
        <motion.p
          className="text-[2rem] md:text-[2.5rem] font-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <span className="text-[#479DA5]"> Why CAAP? </span> <br />
          Closing the Readiness Gap
        </motion.p>

        {/* Subtext */}
        <motion.p
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: false }}
        >
          Success in a Canadian university requires more than just good grades;
          <br />
          it requires a specific set of academic and cultural fluencies.
        </motion.p>

        {/* Cards */}
        <div className="mt-10 flex flex-col md:flex-row gap-10 md:gap-6 md:mx-[10%] mx-[5%]">
          {[
            {
              bg: "bg-[#F9CA52]",
              rotate: "-rotate-1 md-rotate-3",
              icon: "/asset/stash.png",
              title: "Academic Writing",
              text:
                "Moving beyond the basics to master high-level university research standards.",
              textColor: "",
            },
            {
              bg: "bg-[#293B59]",
              rotate: "md:rotate-3 rotate-2",
              icon: "/asset/coins.png",
              title: "Academic Writing",
              text:
                "Moving beyond the basics to master high-level university research standards.",
              textColor: "text-white",
            },
            {
              bg: "bg-[#010A1D]",
              rotate: "-rotate-1 md-rotate-3",
              icon: "/asset/dashboard.png",
              title: "Independent Learning",
              text:
                "Shifting from guided instruction to the self-directed study habits required in North America.",
              textColor: "text-white",
            },
            {
              bg: "bg-[#479DA5]",
              rotate: "md:rotate-5 rotate-2",
              icon: "/asset/dashboard.png",
              title: "Classroom Norms",
              text:
                "Master the art of Canadian academic participation, from seminars to collaborative group work.",
              textColor: "text-white",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl w-full ${item.bg} ${item.rotate} ${item.textColor}
                flex flex-col gap-3 items-center justify-center text-center`}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              viewport={{ once: false }}
            >
              <Image src={item.icon} height={30} width={30} alt="" />
              <p className="font-bold">{item.title}</p>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
