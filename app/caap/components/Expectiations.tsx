"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiChartBar,
  HiUserGroup,
  HiClipboardDocumentCheck,
  HiComputerDesktop,
} from "react-icons/hi2";

const pillars = [
  {
    title: "Academic Structure & Discipline",
    description:
      "Canadian universities expect students to manage structured workloads and meet academic deadlines independently.",
    items: [
      "Live instructor-led sessions",
      "Clear academic expectations",
      "A structured weekly schedule",
    ],
    icon: HiClipboardDocumentCheck,
  },
  {
    title: "Assessment & Accountability",
    description:
      "Post-secondary institutions rely on continuous assessment and performance tracking.",
    items: [
      "Continuous assessment and feedback",
      "Regular progress updates shared with parents",
      "OSSLT (Ontario Secondary School Literacy Test)",
    ],
    icon: HiChartBar,
  },
  {
    title: "Collaborative & Cohort-Based Learning",
    description:
      "University environments emphasize peer learning, instructor guidance, and cohort progression.",
    items: [
      "Cohort-based learning led by Ontario-certified teachers",
    ],
    icon: HiUserGroup,
  },
  {
    title: "Digital Fluency & Independent Learning",
    description:
      "Students are expected to engage confidently with digital learning environments and take ownership of their academic progress.",
    items: [
      "Use of digital learning platforms and academic tools",
      "Independent task completion and self-directed study",
    ],
    icon: HiComputerDesktop,
  },
];

export default function CAAPReadinessFramework() {
  return (
    <section className="bg-white py-24 px-[5%]">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="uppercase tracking-wide text-[#479DA5]">
            Academic Alignment
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900">
            How CAAP Aligns with Canadian University Expectations
          </h2>
          <p className="mt-4 text-gray-600">
            CAAP is intentionally designed to meet the academic, structural, and
            accountability standards expected by Canadian post-secondary
            institutions.
          </p>
        </div>

        {/* Cards with animation */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={index}
                className="rounded-3xl bg-gray-50 p-8 border border-gray-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 120 }}
              >
                <Icon className="h-8 w-8 text-[#479DA5]" />

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {pillar.description}
                </p>

                <ul className="mt-5 space-y-2 text-gray-700">
                  {pillar.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
