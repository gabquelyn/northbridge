"use client";
import { motion } from "motion/react";
import React from "react";
import { HiAcademicCap, HiArrowTrendingUp } from "react-icons/hi2";

export default function Learners() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white flex justify-center">
      <div className="max-w-4xl w-full flex flex-col gap-16">

        {/* HEADER */}
        <div className="text-center">
          <div className="mx-auto mb-4 h-0.5 w-16 bg-primary" />

          <p className="text-xs tracking-[0.25em] uppercase text-gray-500">
            Direct Entry Pathway (DEP)
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
            A Seamless Transition into
            <br />
            <span className="text-primary">
              Leading Canadian Institutions
            </span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Northbridge is not simply a high school—it is a pathway institution
            designed to align secondary education with university expectations.
          </p>
        </div>

        {/* TIMELINE FLOW */}
        <div className="relative flex flex-col gap-14">

          {/* vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-100 hidden md:block" />

          {/* SECTION */}
          {[
            {
              title: "University Transition",
              icon: <HiAcademicCap />,
              desc: "Our Foundation Program aligns with Canadian university expectations.",
              points: [
                "Defined pathways with partner universities",
                "University preparation courses",
                "Alignment with entry standards",
              ],
            },
            {
              title: "Who This Is For",
              icon: null,
              desc: "",
              points: [
                "Students completing SSCE / NECO / GCSE",
                "Students planning university education in Canada",
              ],
            },
            {
              title: "The Northbridge Advantage",
              icon: <HiArrowTrendingUp />,
              desc: "",
              points: [
                "Ontario curriculum recognized across Canada",
                "Personalized academic advising",
                "Structured and guided admission pathway",
              ],
            },
            {
              title: "A Clear Pathway Forward",
              icon: null,
              desc: "",
              points: [
                "Study permit & immigration guidance",
                "Academic & application planning",
                "Scholarship advisory support",
                "Pastoral care throughout the journey",
              ],
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative flex gap-6"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex items-start">
                <div className="mt-2 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {section.icon || <div className="w-2 h-2 bg-primary rounded-full" />}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.title}
                </h3>

                {section.desc && (
                  <p className=" text-gray-600 mt-2">
                    {section.desc}
                  </p>
                )}

                <ul className="mt-4 space-y-2  text-gray-700">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}