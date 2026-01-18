"use client";

import { motion } from "motion/react";

export default function AcademicGuidanceSection() {
  return (
    <section className="bg-white px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-widest text-sm text-slate-500 mb-4">
          Guided structure
          </p>

          <h2 className="title">
            Building clarity, confidence,  <br/>
            <span className="text-[#479DA5]"> and strong learning habits</span>
          </h2>
        </motion.div>

        {/* Intro Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-lg text-slate-700 leading-relaxed"
        >
          <p>
            Academic Guidance at Northbridge combines education and counselling to help
            students understand how they learn, strengthen their academic habits, and
            move forward with clarity—both in school and in future planning.
          </p>

          <p className="mt-6">
            Our goal is simple: students should feel confident in themselves, equipped
            with practical strategies, and able to advocate for what they need—now and
            in the environments they will enter later.
          </p>
        </motion.div>

        {/* Emphasis Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Structured Progress",
              text: "Individualized learning plans provide direction through goal-setting, study routines, assessment preparation, and time management—supported by regular feedback and guided check-ins.",
            },
            {
              title: "Reflective Growth",
              text: "Students learn to recognize what supports their learning, recover when challenges arise, and build repeatable systems that remain effective under academic pressure.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-slate-200 rounded-2xl p-8 bg-slate-50"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-12 border-t border-slate-200 max-w-4xl"
        >
          <p className="text-xl font-medium text-slate-900 leading-relaxed">
            This is not a label.
          </p>

          <p className="mt-4 text-slate-700 text-lg leading-relaxed">
            It is a structured academic system designed to help students build strong,
            transferable learning habits—so they can carry these practices forward
            independently, long after they leave Northbridge.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
