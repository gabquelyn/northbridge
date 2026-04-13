"use client";
import React from "react";
import { motion } from "motion/react";
import { Item } from "@/app/components/SlideIn";

export default function School() {
  return (
    <div>
      <div className="md:flex justify-around hidden transition-all bg-[#010A1D] p-8 border-b border-slate-200">
        <Item
          label="Program Overview"
          href="/right-program"
          className="text-white"
        />
        <Item
          label="Our Approach to Learning"
          href="/northbridge-model"
          className="text-white"
        />
        <Item label="Guidance Centre" href="/guidance" className="text-white" />
      </div>
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
            <div className="h-1 w-44 bg-[#479DA5]" />

            <p className="text-justify">
              <span className="font-semibold text-[#479DA5]">
                Northbridge Collegiate
              </span>{" "}
              is authorized by the Ontario Ministry of Education, supporting
              learners preparing for post-secondary education in Canada and
              globally.
            </p>
            <p>
              We deliver Ontario-aligned education with structured transition
              and readiness programs for students coming from diverse academic
              backgrounds, with a focus on academic alignment, intellectual
              maturity, personal formation and long-term success
            </p>
            <p>
              At Northbridge, your child's credits, and diploma are issued
              directly through Northbridge Canada. As an authorized institution,
              we grant Ontario credits and issue the Ontario Secondary School
              Diploma (OSSD) under our own authority.
            </p>

            <p>
              This direct structure ensures clarity, credibility, and full
              academic oversight. It also enables us to design intentional
              support systems tailored to our students — particularly during the
              years when academic performance, personal development, and future
              planning all intersect.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
