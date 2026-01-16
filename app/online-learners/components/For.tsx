"use client";
import React from "react";
import { motion } from "motion/react";
import {
  HiUserGroup,
  HiAcademicCap,
  HiOutlineGlobeAlt,
  HiCheckCircle,
} from "react-icons/hi2";

export default function WhoIsThisFor() {
  const audience = [
    {
      icon: HiUserGroup,
      text: "Graduates of any educational system including IGCSE, A-Levels, IB, or equivalent programs",
    },
    {
      icon: HiOutlineGlobeAlt,
      text: "Young adults planning to study in Canada or internationally",
    },
    {
      icon: HiAcademicCap,
      text: "Students preparing for university-level academic expectations",
    },
    {
      icon: HiCheckCircle,
      text: "Learners seeking academic upgrading or credit completion",
    },
    {
      icon: HiUserGroup,
      text: "Students interested in flexibility while maintaining academic structure",
    },
  ];

  return (
    <section className="bg-white py-20  px-5 md:px-[10%]">
      <div className="mx-auto max-w-5xl flex flex-col items-center gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <p className="title">
            <span className="text-[#479DA5]">Who</span> is this for?
          </p>
          <p className="w-80 md:w-100 text-center">
            This pathway is designed for learners who may have already completed
            secondary education and are seeking purposeful next steps.
          </p>
        </motion.div>

        {/* Audience List */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="flex items-start gap-2 p-6 bg-gray-50 rounded-3xl shadow-md hover:shadow-xl transition-shadow cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="shrink-0">
                  <Icon className="h-7 w-7 text-[#479DA5]" />
                </div>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
