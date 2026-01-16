"use client";
import React from "react";
import { motion } from "motion/react";

export default function Special() {
  const details = [
    {
      title: "The Northbridge Academic Bridge Model",
      label:
        "Northbridge is a leader in academic bridge education. Our unique model combines the authorized Ontario Secondary School Diploma (OSSD) curriculum with a structured alignment process. This ensures that students from diverse educational backgrounds are fully prepared for the rigors of Canadian school programming.",
      list: [],
    },
    {
      title: "The Canadian University Preparation Framework",
      label:
        "Entering a Canadian university requires more than just high grades; it requires mastery of specific academic conventions. Our framework is meticulously designed to introduce you to:",
      list: [
        "Academic Writing & Research standards used by Canadian universities",
        "Self-directed learning and time management expectations",
        "Assessment formats and grading conventions",
        "Classroom participation and collaboration norms",
      ],
    },
    {
      title: "Program Design and Scope",
      label:
        "Northbridge Collegiate delivers Canadian-aligned secondary programming that includes:",
      list: [
        "Academic alignment and placement processes",
        "Ontario curriculum-based instruction",
        "Structured academic oversight",
        "Defined progression pathways",
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="title text-center"
      >
        How We Are <span className="text-[#479DA5]">Different</span>
      </motion.h2>

      <div className="mt-16 px-8 mx-auto max-w-4xl space-y-24">
        {details.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 items-start"
          >
            {/* Left Indicator */}
            <div className="flex flex-col items-center md:items-start gap-6">
              <span className="text-[96px] font-light leading-none text-[#293B59]/15">
                {`0${i + 1}`}
              </span>

              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="hidden md:block h-32 w-px bg-gradient-to-b from-[#479DA5]/60 to-transparent origin-top"
              />
            </div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-gray-50 p-8 md:p-10 shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {d.title}
              </h3>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {d.label}
              </p>

              {d.list.length > 0 && (
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.08 },
                    },
                  }}
                  className="mt-6 space-y-2 pl-5 list-disc text-gray-700"
                >
                  {d.list.map((li) => (
                    <motion.li
                      key={li}
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      {li}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
