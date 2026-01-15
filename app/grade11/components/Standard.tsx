"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
export default function Standard() {
  const content = [
    {
      title: "Ministry-Aligned Instruction",
      details:
        "Every course is taught and assessed in strict accordance with the Ontario Ministry of Education policies.",
      image: "/asset/1.png",
    },
    {
      title: "Qualified Faculty",
      details:
        "Instruction is led by educators who understand the nuances of the Canadian system and how to bridge the gap for international learners.",
      image: "/asset/2.png",
    },
    {
      title: "Assessment Literacy",
      details:
        "We don't just teach the subject; we teach you how to master Canadian-style assessments, ensuring you understand exactly how your work will be evaluated.",
      image: "/asset/3.png",
    },
  ];
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
      scale: 0.9,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.45,
      },
    },
  };
  return (
    <section className="flex flex-col gap-8 items-center pb-20 pt-10 justify-center">
      <div>
        <p className="title text-center">
          Program Excellence & <span className="text-[#479DA5]">Standards</span>
        </p>
        <p className="max-w-150 text-center">
          Our Grade 11 curriculum is delivered by qualified educators who
          specialize in the Ontario curriculum.
        </p>
      </div>

      <div className="bg-[#479DA526] py-20 px-5 md:px-[15%]">
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {content.map((d) => (
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-xl p-7 w-full"
            >
              <Image src={d.image} height={30} width={30} alt="" />

              <div className="mt-5  p-3 flex flex-col text-center md:text-left gap-3">
                <p className="font-bold">{d.title}</p>
                <p>{d.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
