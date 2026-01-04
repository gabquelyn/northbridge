"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const slides = [
  {
    title: "Core Academic Framework",
    text: `Our Grade 12 program focuses on the essential building blocks required for university eligibility. Students engage with the standard Ontario curriculum through a structured, high-stakes academic lens.`,
    sub: `Targeted Assessment: We utilize standard Grade 12 assessment styles, preparing you for the types of testing environments you will encounter in higher education.`,
  },
//   {
//     title: "Research & Writing Mastery",
//     text: `Students develop advanced academic writing skills aligned
//     with Canadian university standards.`,
//     sub: `Emphasis on citations, structured argumentation, and analysis.`,
//   },
  {
    title: "University Readiness",
    text: `The "Complete" Mission: While other programs focus on broad concepts, this phase is about completion. We ensure you meet every structural requirement—from core instructional hours to literacy standards—necessary to unlock university doors.`,
    sub: `Standard Transition Support: Students receive essential guidance to help them navigate the logistical and academic hurdles of their final high school year.`,
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
};

export default function Slideshow() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setIndex(([prev]) => [
      (prev + newDirection + slides.length) % slides.length,
      newDirection,
    ]);
  };

  return (
    <div className="bg-[url('/asset/library.jpg')] bg-no-repeat bg-cover bg-center py-20 p-8 text-white relative">
      <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0"></div>

      <div className="grid relative grid-cols-1 md:grid-cols-2 mx-[5%] md:mx-[14%] items-center gap-8">
        {/* Title */}
        <div>
          <p className="text-[2rem] text-center md:text-left md:text-[2.5rem] font-bold capitalize">
            <p>Core Academic <br className="hidden md:block"/> Framework</p>
          </p>
        </div>

        {/* Slide box */}
        <div className="ring-[#479DA5] ring-2 p-3 relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) paginate(1);
                if (info.offset.x > 80) paginate(-1);
              }}
              className="bg-[#479DA5] p-9 text-left flex flex-col gap-3 cursor-grab active:cursor-grabbing"
            >
              <p>{slides[index].text}</p>
              <p className="text-black">{slides[index].sub}</p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div className="absolute right-3 -translate-x-1/2 -bottom-7 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="rounded-full bg-black p-5"
            >
              <FaArrowLeft />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="rounded-full bg-black p-5"
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
