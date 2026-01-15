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
          Academic <br />
          <span className="text-[#F9CA52]">Alignment</span>
        </>
      ),
      content:
        "Transitioning from local curricula to Canadian standards and grading literacy.",
    },
    {
      title: (
        <>
          Structural <br />
          <span className="text-[#F9CA52]">Readiness</span>
        </>
      ),

      content:
        "Mastery of university-style assessments and research methods ($APA$/$MLA$).",
    },
    {
      title: (
        <>
          Cultural & <br />
          <span className="text-[#F9CA52]">Regulatory</span>
        </>
      ),
      content:
        "Navigating immigration rules, work expectations, and social adjustment.",
    },
    {
      title: (
        <>
          Investment <br />
          <span className="text-[#F9CA52]">Protection</span>
        </>
      ),
      content:
        "Safeguarding the family's financial investment by eliminating the risk of first-year failure.",
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
