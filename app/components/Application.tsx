"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiPencilAlt, HiDocumentText, HiMailOpen, HiCheckCircle } from "react-icons/hi";

export default function ApplicationJourney() {
  const steps = [
    {
      title: "Enquire with Northbridge Collegiate",
      icon: HiPencilAlt,
      instruction: "Submit an online enquiry form.",
    },
    {
      title: "Apply to Northbridge Collegiate",
      icon: HiDocumentText,
      instruction:
        "Submit a digital application, required documents, and placement assessment.",
    },
    {
      title: "Receive Your Northbridge Collegiate Offer",
      icon: HiMailOpen,
      instruction:
        "Admission results and next steps are shared through your private account.",
    },
    {
      title: "Enroll at Northbridge Collegiate",
      icon: HiCheckCircle,
      instruction:
        "Confirm your place by accepting the offer and completing enrolment requirements.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="title text-center mb-25 font-bold"
      >
        Your Step-by-Step Path to <br />
        <span className="text-[#479DA5]">Northbridge</span>
      </motion.p>

      {/* Timeline container */}
      <div className="relative flex flex-col items-center max-w-7xl mx-auto gap-20 px-7 lg:px-[10%]">
        
        {/* Central vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-[#479DA5]/50 via-transparent to-[#479DA5]/50" />

        {steps.map((step, i) => {
          const Icon = step.icon;
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative w-full flex justify-center md:justify-start"
            >
              {/* Box container with alternating sides */}
              <div
                className={`flex flex-col md:flex-row items-center w-full md:justify-${isLeft ? "start" : "end"} gap-2 md:gap-6`}
              >
                {/* Content box */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`bg-white rounded-3xl p-5 shadow-2xl border flex flex-col items-center text-center border-gray-100 w-full md:w-80`}
                >
                  <p className="text-[#479DA5] font-bold text-lg">Step {i + 1}</p>
                  <p className="text-xl font-semibold text-gray-900 mt-2">{step.title}</p>
                  <p className="text-gray-600 mt-1">{step.instruction}</p>
                </motion.div>

                {/* Connector circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 -mt-6 flex items-center justify-center h-12 w-12 rounded-full bg-[#479DA5] text-white text-xl shadow-lg z-10">
                  <Icon />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
