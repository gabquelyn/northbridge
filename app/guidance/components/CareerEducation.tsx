"use client";
import { motion } from "motion/react";
export default function CareerEducationSection() {
  return (
    <section className="bg-[#F9FAFB] px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-widest text-sm text-slate-500 mb-4">
            Career Education
          </p>

          <h2 className="title">
            Helping students navigate choice  <br/>
            <span className="text-[#479DA5]"> with clarity and confidence</span>
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-lg text-slate-700 leading-relaxed"
        >
          <p>
            Careers and long-term direction matter to us, and these conversations
            begin early. Many students feel pressure to choose perfectly—we believe
            it is both normal and healthy to be uncertain while clarity develops.
          </p>
        </motion.div>

        {/* Guidance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Exploration & Awareness",
              text: "Students are supported as they explore interests, strengths, and emerging skill areas—building self-understanding before committing to long-term decisions.",
            },
            {
              title: "Informed Direction",
              text: "We help learners understand how subject choices connect to future pathways, compare programs realistically, and adjust plans thoughtfully as clarity grows.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-slate-200 bg-white p-8"
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

        {/* Decision Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl text-lg text-slate-700 leading-relaxed"
        >
          <p>
            We do not rush students into decisions. Instead, we guide them with care
            and perspective—so they choose programs that genuinely align with who
            they are and where they are going.
          </p>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-12 border-t border-slate-200 max-w-4xl"
        >
          <p className="text-xl font-medium text-slate-900 leading-relaxed">
            Academic Guidance at Northbridge is how we prepare students for life
            beyond secondary school.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
