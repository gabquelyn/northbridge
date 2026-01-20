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
              text: `Positioned to become a leading Canadian academic bridge institution,
              Northbridge Collegiate operates within a cross-border academic model
              and employs multi-modal instructional delivery approaches aligned
              with contemporary learning needs.`,
              highlight: false,
            },
            {
              text: `Northbridge Collegiate delivers Ontario curriculum-based secondary
              education directly under an Ontario private school license, rather
              than through third-party partnership or affiliate arrangements.
              Guaranteed university application support.`,
              highlight: true,
            },
            {
              text: `Academic and student-support services are coordinated through a
              cross-border hub, with services delivered in both Canada and Nigeria
              in accordance with Ontario program requirements. Cohort-based
              academics and pastoral support.`,
              highlight: false,
            },
            {
              text: `Programming delivered in compliance with applicable Ontario
              Ministry of Education policies. University-prep focused (not just
              diploma completion).`,
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
