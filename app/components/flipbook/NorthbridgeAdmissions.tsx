"use client";

import { motion } from "framer-motion";

import TagLine from "./TagLine";

export default function NorthbridgeAdmissions() {
  const steps = [
    "Enquiry",
    "Application Submission",
    "Enrolment into CAAP / Orientation",
    "Grade Placement / Recommendation",
  ];

  return (
    <section className="text-xs md:text-[1rem] relative bg-linear-to-b from-white h-full to-slate-50 p-8 md:p-15 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2 md:mb-4"
        >
          <TagLine tag="Admissions Process" />

          <div className="w-20 h-1 bg-[#479DA5] mt-2 hidden mb:block  rounded-full" />
          <p className="mt-4 text-slate-600 text-center max-w-2xl md:text-left leading-relaxed">
            A guided and structured journey ensuring each student is placed with
            clarity, academic intention, and preparation for what comes next.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-2 md:gap-8 gap-1 mb-2 md:mb-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 h-full">
                <div className="text-sm font-medium text-[#479DA5] mb-4 tracking-wide">
                  STEP {index + 1}
                </div>
                <div className="font-semibold text-slate-900 leading-snug">
                  {step}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fees Explanation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-left mb-4"
        >
          <p className="text-slate-700 leading-relaxed">
            Fees reflect the academic review, structured support, and
            specialised preparation provided. Families receive clear and
            transparent explanations throughout each stage of the admissions
            process.
          </p>
        </motion.div>

      
      </div>
    </section>
  );
}
