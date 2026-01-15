"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function School() {
  return (
    <section className="bg-white py-20 px-[5%]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 items-center">

        {/* Image Stack */}
        <motion.div
          className="relative w-full h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Background layer */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 40,
                y: -40,
              },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            className="absolute -top-4 -right-4 h-full w-full 
                       rounded-4xl bg-[#479DA5]/10 z-0"
          />

          {/* Foreground image */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.96,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.15,
                },
              },
            }}
            className="relative z-10 h-full w-full overflow-hidden rounded-4xl shadow-xl"
          >
            <Image
              fill
              alt="School environment"
              src="/asset/spread.jpg"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6 text-gray-700 leading-relaxed"
        >
          <div className="h-1 w-24 bg-[#479DA5]" />

          <p className="text-justify">
            Ontario curriculum-based Senior High School instruction is delivered
            within a cross-border instructional model aligned with Ontario
            curriculum and Ministry requirements.
            <br />
            <span className="font-semibold text-[#479DA5]">
              Northbridge Collegiate
            </span>{" "}
            serves students from a range of prior educational systems and applies
            structured academic review and placement processes to support
            appropriate entry into the Ontario secondary programming.
          </p>

          <p className="text-justify">
            Instruction is provided through approved instructional models,
            including in-class, online, or blended formats, as permitted under
            Ontario Ministry of Education requirements. All credit courses are
            assessed and evaluated in accordance with Ontario curriculum
            expectations and Ministry policy. Student progress toward the
            Ontario Secondary School Diploma (OSSD) is documented using
            Ministry-compliant records, including the Ontario Student Record
            (OSR).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
