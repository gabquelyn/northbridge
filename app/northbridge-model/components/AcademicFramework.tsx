"use client";
import React from "react";
import { motion } from "motion/react";
export default function AcademicFramework() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        //   ease: "easeOut",
      },
    },
  };

  const content = [
    {
      title: (
        <>
          Foundation Before
          <br />
          <span className="text-[#F9CA52]">Acceleration</span>
        </>
      ),
      content:
        "We believe lasting success is built on strong academic foundations and systems awareness. Preparation precedes pace, and mastery comes before advancement.",
    },
    {
      title: (
        <>
          Clarity and <br />
          <span className="text-[#F9CA52]">Responsibility</span>
        </>
      ),

      content:
        "We prioritize clear expectations and structured guidance, while equipping students to take ownership of their learning, decisions, and conduct as they move toward independence.",
    },
    {
      title: (
        <>
          Navigational
          <br />
          <span className="text-[#F9CA52]">Intelligence</span>
        </>
      ),
      content:
        "We treat navigation as a skill. Students are taught how to understand, interpret, and move confidently through academic and institutional systems, especially during critical transitions.",
    },
    {
      title: (
        <>
          Impact
          <br />
          <span className="text-[#F9CA52]">Integrity</span>
        </>
      ),
      content:
        "We prepare students to engage the world thoughtfully and ethically, ensuring that achievement is paired with character, discernment, and long-term responsibility",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="title text-center capitalize">
        The Academic
        <br />
        <span className="text-[#479da5]">Bridge Framework</span>
      </p>
      <p className="md:w-[40%] w-[90%] my-3 text-center">
        Northbridge Collegiate is not a traditional high school. We are a
        specialized academic bridge institution. Through a sophisticated blend
        of online and in-class learning, we have moved beyond the
        "graduation-only" mindset to create a model built for high performance
        in Canadian higher education.
      </p>

      <motion.div
        className="mt-8 flex items-center justify-center flex-wrap gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {content.map((c, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="
      w-80 h-120
      bg-linear-to-b from-[#010A1D] to-[#293B59]
      [clip-path:polygon(10%_0%,90%_0%,100%_100%,0%_100%)]
      flex flex-col justify-between
      text-white items-center p-8 text-center pt-8
    "
          >
            <p className="text-[1.5rem]">{c.title}</p>
            <p>{c.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
