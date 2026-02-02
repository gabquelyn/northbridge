"use client";

import React from "react";
import { motion } from "motion/react";

export default function Vision() {
  return (
    <section className="bg-[#479DA5] px-[5%] md:px-[20%] py-20 text-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-12 items-start">
        {/* Left title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-[#F9CA52] font-medium title">
            What Makes Northbridge Collegiate Different?
          </p>
        </motion.div>

        {/* Right content */}
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
        >
          {[
            {
              text: `Northbridge operates in Nigeria under its own Canadian licence, with both the Canadian and Nigerian campuses under the same ownership and academic authority. For parents, this matters because it means decisions about your child's education, support, and progression are made within one accountable system—not passed between partners or third parties.`,
              highlight: false,
            },
            {
              text: `At Northbridge, your child's academic records, credits, and diploma come directly from the school they attend. We are authorized to grant Ontario credits and issue the Ontario Secondary School Diploma (OSSD) directly through Northbridge Canada.
              Because of this structure, we have the flexibility to design strong, age-appropriate support systems, which is especially important for students in Grades 11 and 12, a period when academic pressure, emotional development, and future planning all intersect`,
              highlight: true,
            },
            {
              text: `We also recognise that children are not all the same. We do not serve only the naturally high-performing student. We support academically able students and those who need structure, guidance, and confidence-building, because real education honours different strengths and learning paths.`,
              highlight: false,
            },
            {
              text: `Finally, Northbridge is mission driven. We focus only on senior secondary education (Grades 11 and 12) because these years are pivotal. Beyond grades, we intentionally develop students to become globally competent, thoughtful, and grounded young adults. Personal formation -Through purpose-led career exploration, leadership development, ethics, and civic responsibility, we help students understand not just where they are going, but who they are becoming.`,
              highlight: true,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              className="flex flex-col gap-5"
            >
              <p className={item.highlight ? "text-[#F9CA52]" : ""}>
                {item.text}
              </p>
              <hr className="border-[#68b2b9]" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
