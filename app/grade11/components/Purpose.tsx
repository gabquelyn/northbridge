"use client";
import React from "react";
import { motion } from "motion/react";
import { HiAcademicCap, HiArrowRightCircle } from "react-icons/hi2";

export default function AcademicTransitionHighlight() {
  return (
    <section className="flex flex-col gap-8 items-center py-20 justify-center">
      <div>
        <p className="title text-center">
          Bridging to <span className="text-[#479DA5]">Senior Excellence</span>
        </p>
        <p className="max-w-90 md:max-w-150 text-center">
          Our Grade 11 program is specifically designed for learners who have
          completed education comparable to Ontario Grade 10.
        </p>
      </div>
      <motion.div
        className="relative mx-5 grid grid-cols-1 overflow-hidden rounded-[2.5rem] bg-white shadow-xl md:grid-cols-2"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Soft glow */}
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#479DA5]/10 via-transparent to-transparent" />

        {/* LEFT — Targeted Placement */}
        <div className="relative p-12 md:p-14">
          {/* Label */}
          <p className="text-sm uppercase tracking-widest text-[#479DA5]">
            target placement
          </p>

          {/* Icon */}
          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#479DA5]/10">
            <HiAcademicCap className="h-7 w-7 text-[#479DA5]" />
          </div>

          <p className="mt-4 max-w-md leading-relaxed text-gray-700">
            We assess each student's prior international education to ensure
            accurate academic alignment with Ontario Grade 11 curriculum
            standards.
          </p>
        </div>

        {/* RIGHT — Systemic Transition */}
        <div className="relative bg-linear-to-br from-[#479DA5] to-[#3f8f96] p-12 md:p-14 text-white">
          {/* Label */}
          <p className="text-sm uppercase tracking-widest text-white/80">
            Structured Transition
          </p>

          {/* Icon */}
          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
            <HiArrowRightCircle className="h-7 w-7 text-white" />
          </div>

          <p className="mt-4 max-w-md leading-relaxed text-white/90">
            Designed for students moving from local curricula into a
            world-class, Ontario-based secondary education framework with
            clarity and confidence.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
