"use client";
import { HiArrowTrendingUp, HiAcademicCap } from "react-icons/hi2";
import { motion } from "motion/react";
import React from "react";
import ProgramCard from "@/app/components/ProgramCard";
export default function Learners() {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  const cards = [
    {
      title: "Canadian Academic Alignment Program (CAAP)",
      desc: "Don't repeat a year—align it. CAAP recognizes your prior learning to fast-track your success in Canadian education.",
      image: "/asset/grop.jpg",
      cta: "/caap",
    },
    {
      title: "Grade 12",
      desc: "30+ Grade 12 Courses Choose from a wide variety of Ontario-standard curriculum options tailored to your interests.",

      image: "/asset/afro.jpg",
      cta: "/grade12",
    },
  ];

  return (
    <section className="py-10 flex flex-col gap-3 items-center justify-center">
      <p className="title text-center">
        <span className="text-[#479DA5]">What Adult</span>
        <br />
        Learners can Access
      </p>
      <p className="w-80 md:w-150 text-center">
        Mature learners at Northbridge engage in online programs that provide
        structure, academic oversight, and preparation aligned with future study
        goals.
      </p>
      <div className="w-full mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center px-10 justify-center">
          {/* Left Program */}
          <div className="flex justify-center lg:justify-end">
            <ProgramCard
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveCard(activeCard === 0 ? null : 0)}
              isVisible={hoveredCard === 0 || activeCard === 0}
              card={cards[0]}
            />
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden lg:flex flex-col items-center justify-center gap-6"
          >
            {/* Top line */}
            <div className="h-20 w-px bg-linear-to-b from-transparent via-gray-300 to-gray-300" />

            {/* Core content */}
            <div className="flex flex-col items-center gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm border border-gray-100 text-center max-w-[220px]">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#479DA5]/10">
                <HiArrowTrendingUp className="h-5 w-5 text-[#479DA5]" />
              </div>

              <p className="text-sm font-semibold text-gray-900">
                Academic Upgrading
              </p>

              <p className="text-xs text-gray-600 leading-relaxed">
                Subject reinforcement and structured academic preparation
              </p>

              <div className="h-px w-full bg-gray-100" />

              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#479DA5]/10">
                <HiAcademicCap className="h-5 w-5 text-[#479DA5]" />
              </div>

              <p className="text-sm font-semibold text-gray-900">
                Ontario Curriculum
              </p>

              <p className="text-xs text-gray-600 leading-relaxed">
                Online, credit-based courses where appropriate
              </p>
            </div>

            {/* Bottom line */}
            <div className="h-20 w-px bg-linear-to-t from-transparent via-gray-300 to-gray-300" />
          </motion.div>

          {/* Right Program */}
          <div className="flex justify-center lg:justify-start">
            <ProgramCard
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveCard(activeCard === 1 ? null : 1)}
              isVisible={hoveredCard === 1 || activeCard === 1}
              card={cards[1]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
