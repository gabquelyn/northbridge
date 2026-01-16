"use client";
import React from "react";
import { motion } from "motion/react";
import { HiOutlineAcademicCap, HiOutlineClock, HiOutlineSupport } from "react-icons/hi";
import Image from "next/image";

export default function DistinctPathwayBg() {
  const benefits = [
    { icon: HiOutlineAcademicCap, label: "Structured Coursework" },
    { icon: HiOutlineClock, label: "Flexible Online Delivery" },
    { icon: HiOutlineSupport, label: "Ongoing Academic Support" },
  ];

  return (
    <section className="relative py-20 p-5">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/asset/library.jpg"
          alt="Learning Background"
          fill
          className="object-cover object-center brightness-75"
        />
      </div>

      {/* White content card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-md rounded-3xl max-w-5xl mx-auto p-12 flex flex-col gap-8 text-center shadow-xl"
      >
        {/* Title */}
        <h2 className="title font-semibold text-gray-900">
          A Distinct Pathway
        </h2>

        {/* Description */}
        <p className="text-gray-700">
          Programs for mature learners are delivered online to provide flexibility
          while maintaining academic discipline. Learners benefit from structured
          coursework, clear expectations, and ongoing academic support—without the
          constraints of an on-site school schedule.
        </p>

        <p className="text-gray-700">
          Learners interested in online programs are invited to explore available
          options and determine the most appropriate starting point based on their
          academic background and future goals.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:shadow-lg transition-shadow bg-white/80"
              >
                <div className="p-4 rounded-full bg-[#479DA5]/10 flex items-center justify-center">
                  <Icon className="text-[#479DA5] h-6 w-6" />
                </div>
                <p className="font-semibold text-gray-900">{b.label}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
