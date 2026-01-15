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
        "Academic Writing & Research: Master the specific citation and literacy standards required by Canadian professors.",
        "Self-Directed Learning: Develop the independence and time-management skills expected in North American higher education.",
        "Assessment Familiarity: Get comfortable with the testing and grading formats used in Canadian classrooms.",
        "Classroom Norms: Build the confidence to participate in discussions, seminars, and collaborative projects.",
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
    <div className="py-20">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="title text-center capitalize"
      >
        How we are <span className="text-[#479DA5]">Different.</span>
      </motion.p>

      <div className="px-[5%] md:px-[15%] mt-10 flex flex-col gap-15">
        {details.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 items-start gap-10"
          >
            {/* Number + line */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-10 items-center"
            >
              <p className="text-8xl text-[#293B59]">{`0${i + 1}`}</p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-300 h-px w-80 origin-left"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col text-center md:text-left md:items-start gap-4"
            >
              <p className="font-bold">{d.title}</p>
              <p>{d.label}</p>

              {d.list.length > 0 && (
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: 0.1 },
                    },
                  }}
                  className="list-disc text-left pl-5"
                >
                  {d.list.map((li) => (
                    <motion.li
                      key={li}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
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
    </div>
  );
}
