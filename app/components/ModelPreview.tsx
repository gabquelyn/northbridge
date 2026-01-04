"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { IoCheckmarkSharp } from "react-icons/io5";

export default function ModelPreview() {
  const content = [
    "Cognitive & Emotional Readiness built on principles of educational neuroscience.",
    "Academic Alignment as we bridge the gap by recognizing prior learning.",
    "Concurrent Preparation while finishing their Grade 12 credits.",
    "System Awareness we use to prepare the entire family to understand Canadian regulatory responsibilities.",
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:text-[2.5rem] text-[2rem] font-bold text-center"
      >
        Admission is Just the Beginning. <br />
        <span className="text-[#479DA5]">Readiness is the Goal.</span>
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 w-full">
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden w-full"
        >
          <Image src="/asset/people.png" fill className="object-cover" alt="" />
        </motion.div>

        {/* Content column */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="px-20 py-40 bg-[#479DA5]"
        >
          <p className="text-white mb-3">
            What Northbridge Academic Bridge Model Offers:
          </p>

          <div className="flex flex-col gap-2">
            {content.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                  delay: i * 0.08,
                }}
                className="p-4 flex items-start gap-2 rounded-md bg-[#F9FBFF66]"
              >
                <div>
                  <IoCheckmarkSharp />
                </div>
                <p>{c}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
