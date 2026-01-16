"use client";
import React from "react";
import { motion } from "motion/react";
import { HiAcademicCap, HiArrowTrendingUp, HiCheckCircle } from "react-icons/hi2";

export default function OnlineProgramsSummary() {
  return (
    <section className="bg-white py-20 px-5 md:px-[10%]">
      <div className="mx-auto max-w-5xl flex flex-col gap-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 text-[#479DA5]">
            <HiAcademicCap className="h-6 w-6" />
            <p className="uppercase font-semibold tracking-wide text-sm">
              Online Academic Programs
            </p>
          </div>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            Positioning, Readiness, and Next Steps
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
            You may already be done with secondary school — this is about positioning,
            readiness, and next steps. Through flexible, online programs, Northbridge Collegiate 
            provides structured preparation, academic upgrading, and university readiness — 
            without necessarily returning to a traditional classroom environment.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed max-w-3xl mx-auto md:mx-0">
            These programs are delivered online and are separate from our on-site Grades 11 
            and 12 senior high school.
          </p>
        </motion.div>

        {/* Benefits / Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start gap-3 p-6 bg-gray-50 rounded-3xl shadow-md hover:shadow-xl transition-shadow">
            <HiArrowTrendingUp className="h-8 w-8 text-[#479DA5]" />
            <h3 className="text-lg font-semibold text-gray-900">Structured Preparation</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Academic programs are carefully designed to ensure learners meet Ontario curriculum expectations and build foundational skills for success.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 p-6 bg-gray-50 rounded-3xl shadow-md hover:shadow-xl transition-shadow">
            <HiCheckCircle className="h-8 w-8 text-[#479DA5]" />
            <h3 className="text-lg font-semibold text-gray-900">University Readiness</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Students gain academic upgrading, familiarity with Canadian-style learning systems, and the confidence to transition into post-secondary education seamlessly.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 p-6 bg-gray-50 rounded-3xl shadow-md hover:shadow-xl transition-shadow">
            <HiAcademicCap className="h-8 w-8 text-[#479DA5]" />
            <h3 className="text-lg font-semibold text-gray-900">Flexible & Online</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Programs are fully online, offering global accessibility and flexibility, so students can prepare without returning to a traditional classroom environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
