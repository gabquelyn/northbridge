"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function School() {
  return (
    <section className="bg-white py-20 px-5 md:px-[25%] ">
      <div className="mx-auto grid grid-cols-1 gap-16 md:grid-cols-[30%_70%]">
        {/* Image Stack */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="title capitalize">
            {" "}
            Who we <span className="text-[#479DA5]">are</span>
          </p>
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
            <span className="font-semibold text-[#479DA5]">
              Northbridge Collegiate
            </span>{" "}
            is a private Canadian senior high school authorized by the Ontario
            Ministry of Education, supporting learners preparing for
            post-secondary education in Canada and globally.<br/>
            Northbridge delivers Ontario-aligned secondary programming alongside structured academic transition and readiness programs designed to support learners at critical educational inflection points. The institution emphasizes academic alignment, intellectual maturity, and personal formation to support long-term student success beyond admission.
          </p>

          <p className="text-justify">
           <span className="font-semibold text-[#479DA5]">
              Northbridge Collegiate
            </span>{" "} serves students from a range of prior educational systems and applies structured academic review and placement processes to support appropriate entry into the Ontario secondary programming.<br/> All credit courses are assessed and evaluated in accordance with Ontario curriculum expectations and Ministry policy. Student progress toward the Ontario Secondary School Diploma (OSSD) is documented using Ministry-compliant records, including the Ontario Student Record (OSR)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
