"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import {
  HiAcademicCap,
  HiUserGroup,
  HiArrowTrendingUp,
  HiCheckCircle,
} from "react-icons/hi2";

export default function VerticalProgramCard() {
  const content = [
    {
      program: "Canadian Academic Alignment Program (CAAP)",
      purpose:
        "For students who may have completed senior secondary school elsewhere and want a smooth, confident transition into Canadian Grade 12.",
      who: "Designed for students who need academic alignment and orientation before starting Ontario secondary studies.",
      gain: [
        "Recognition of prior learning.",
        "Alignment to Ontario expectations",
        "Prepare and complete the Grade 10 literacy test",
        "Academic writing & study skills",
        "Familiarity with Canadian-style learning systems",
      ],
      outcome:
        "Aligns prior learning to Canadian academic standards so students are appropriately placed and ready to progress into Canadian Grade 12.",
      image: "/asset/grop.jpg",
    },

    {
      program: "Grade 11 OSSD",
      purpose:
        "Progressive academic programming for learners assessed as having prior education comparable to Ontario Grade 10, in accordance with the school's academic review and placement processes.",
      who: "Ideal for students prepared to begin Ontario curriculum-based secondary studies following Grade 10-level education",
      gain: [
        "Ontario curriculum alignment",
        "Academic progression readiness",
        "Foundational study and assessment skills",
        "Eligibility for Grade 12 OSSD pathways",
      ],
      outcome:
        "Supports readiness for progression within Ontario secondary programming, including eligibility for Grade 12 OSSD pathways, subject to successful completion of program requirements.",
      image: "/asset/teacher.jpg",
    },

    {
      program: "Grade 12 OSSD",
      purpose:
        "For students ready to complete their final year of secondary school and preparing for Canadian post-secondary education.",
      who: "Ideal for students prepared to begin Ontario curriculum-based secondary studies following Grade 11-level education",
      gain: [
        "Ontario Grade 12 credits",
        "Academic monitoring and tutoring",
        "University and college pathway planning",
      ],
      outcome:
        "Graduation with a globally recognized Canadian diploma (OSSD), a Canadian secondary school credential recognized by post-secondary institutions in Canada and globally.",
      image: "/asset/hall.jpg",
    },

    {
      program: "Grade 12 OSSD Advantage Year (AY12)",
      purpose: "Strengthen university readiness while completing Grade 12.",
      who: "Best suited for students seeking maximum preparation for competitive university environments.",
      gain: [
        "Advanced academic writing & research skills",
        "Independent learning and critical thinking",
        "Tutoring and academic reinforcement",
        "Structured university application support",
      ],
      outcome:
        "Students graduate with stronger confidence and readiness for Canadian post-secondary study.",
      image: "/asset/c.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-28 px-[5%]">
      {content.map((c) => (
        <div className="mx-auto max-w-4xl mb-12" key={c.program}>
          <motion.div
            className="overflow-hidden rounded-3xl bg-white shadow-xl"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Image Header */}
            <div className="relative h-64 w-full">
              <Image
                src={c.image}
                alt={c.program}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm uppercase tracking-wide text-white/80">
                  Academic Preparation Program
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-white">
                  {c.program}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 md:p-12 space-y-10">
              {/* Purpose */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 text-[#479DA5]">
                  <HiAcademicCap className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">Purpose</h3>
                </div>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {c.purpose}
                </p>
              </motion.div>

              {/* Who it's for */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <div className="flex items-center gap-3 text-[#479DA5]">
                  <HiUserGroup className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">Who It's For</h3>
                </div>
                <p className="mt-3 text-gray-700 leading-relaxed">{c.who}</p>
              </motion.div>

              {/* Gains */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 text-[#479DA5]">
                  <HiArrowTrendingUp className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">What Students Gain</h3>
                </div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {c.gain.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Outcome */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="pt-8 border-t border-gray-200"
              >
                <div className="flex items-center gap-3 text-[#479DA5]">
                  <HiCheckCircle className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">Outcome</h3>
                </div>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  {c.outcome}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
