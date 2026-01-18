"use client";
import { motion } from "motion/react";

export default function Learners() {
  return (
    <section className="bg-white px-6 md:px-[6%] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* ================= Left: Narrative ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="title">
            Academic <span className="text-[#479DA5]">Guidance</span>
          </h2>

          <p className="text-lg text-slate-700 leading-relaxed">
            Academic success is not only about content—it is also about identity.
            Students perform better when they understand themselves as learners.
          </p>

          <p className="text-base text-slate-600 leading-relaxed">
            At Northbridge Collegiate, we believe that success is not accidental.
            It is built through structure, self-awareness, and guided progression.
            That is why Academic Guidance sits at the heart of our educational model.
          </p>

          {/* Accent Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="h-px w-24 bg-[#479DA5] origin-left"
          />
        </motion.div>

        {/* ================= Right: Outcomes ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10"
        >
          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-sm uppercase tracking-widest text-slate-500 mb-6"
          >
            Through Academic Guidance, students develop
          </motion.h3>

          <ul className="space-y-4">
            {[
              "Awareness of their strengths and learning preferences",
              "The ability to plan, prioritize, and manage academic workload",
              "Confidence in asking questions and seeking clarification",
              "The language to communicate their learning needs respectfully",
              "A sense of ownership over their academic journey",
            ].map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex items-start gap-4"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-[#479DA5]" />
                <p className="text-slate-700 leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ================= Transition Statement ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="max-w-4xl mx-auto mt-16 text-center"
      >
        <p className="text-base md:text-lg text-slate-600 leading-relaxed">
          This matters deeply as students transition into more independent
          environments—where self-advocacy, clarity, and confidence are essential.
        </p>
      </motion.div>
    </section>
  );
}
