"use client";

import React from "react";
import { motion } from "motion/react";

const content = [
  {
    title: "An Authorized Canadian School",
    text: `
We operate under our own licence within the Ontario framework. No third-party delivery.`,
    highlight: false,
  },
  {
    title: "Built From Canada",
    text: `
With a Canadian headquarters, our programs reflect what Canadian universities actually expect — academically, structurally, and in practice.`,
    highlight: true,
  },
  {
    title: "Academic Integrity You Can Trust",
    text: `
All credit courses are assessed in accordance with Ontario curriculum expectations and Ministry policy and are formally documented through Ministry-compliant records, including the Ontario Student Record (OSR).`,
    highlight: false,
  },
  {
    title: "Canadian Academic Residency Opportunity",
    text: `Students may have the opportunity to participate in a supervised academic residency at our Canadian headquarters, designed to deepen academic engagement and provide direct exposure to the Canadian learning environment.`,
    highlight: true,
  },
  {
    title: "Guided, Informed Transition",
    text: `Families have access to licensed Canadian immigration guidance to support informed, compliant planning, for study permit application.`,
    highlight: true,
  },
  {
    title: "A Clear Path Forward",
    text: `If the goal is Canada, the preparation should be Canadian`,
    highlight: true,
  },
];

export default function Vision() {
  return (
    <section className="bg-[#479DA5] px-[5%] md:px-[20%] py-20 text-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-15 items-start">
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
          {content.map((item, i) => (
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
              className="flex flex-col gap-2"
            >
              <p className={`${item.highlight ? "text-[#F9CA52]" : ""} font-semibold`}>
                {item.title}:
              </p>
              <p className={item.highlight ? "text-[#F9CA52]" : ""}>
                {item.text}
              </p>
              <hr className="border-[#68b2b9] mt-5" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
