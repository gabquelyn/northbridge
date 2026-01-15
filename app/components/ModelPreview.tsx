"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ModelPreview() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        stiffness: 120,
        damping: 14,
      },
    },
  };

  return (
    <div className="py-20 px-[6%] md:px-[14%]">
      <div className="flex flex-col md:flex-row gap-10 md:gap-30 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col text-center md:text-left max-w-110 gap-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="title"
          >
            The Northbridge
            <br />
            <span className="text-[#479DA5]">Academic Bridge Model.</span>
          </motion.p>

          <p className="text-center md:text-justify">
            A cross-border academic model with Ontario-based
            instruction—designed for students transitioning into Canadian
            education.
          </p>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <p>Learn More</p>
            </motion.button>
          </div>
        </div>

        {/* RIGHT GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={cardVariants}
            className="rounded-3xl bg-[#479DA5] flex items-center justify-between p-7 h-35"
            whileHover={{ scale: 1.03 }}
          >
            <p className="text-2xl text-white">
              How We Are
              <br /> Different
            </p>
            <Image src="/asset/cap.png" alt="" height={50} width={50} />
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="rounded-3xl bg-[#479DA533] flex items-center justify-between p-7 h-35"
            whileHover={{ scale: 1.02 }}
          >
            <p>
              <span className="font-bold">Dual-location learning</span> with
              academic advising and student support coordinated across both
              locations
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="rounded-3xl bg-[#479DA533] flex items-center justify-between p-7 h-35"
            whileHover={{ scale: 1.02 }}
          >
            <p>
              <span className="font-bold">Ontario curriculum</span> delivered
              through approved in-person, online, and blended models
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="rounded-3xl bg-[#479DA533] flex items-center justify-between p-7 h-35"
            whileHover={{ scale: 1.02 }}
          >
            <p>
              Structured instruction toward a{" "}
              <span className="font-bold">globally recognized diploma.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
