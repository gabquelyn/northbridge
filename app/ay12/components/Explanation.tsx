"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import clsx from "clsx";
export default function Explanation() {
  const bgColors = [
    "#deedf1", // strongest
    "#e7f2f6",
    "#f0f6fa",
    "#f7fafe",
  ];

  const content = [
    {
      title: "Core OSSD Classes",
      details:
        "Focused instructional hours dedicated to your Grade 12 credit completion.",
      image: "/asset/time.png",
    },
    {
      title: "AY12 Advantage Modules",
      details: "6-8 hours per week of intensive enrichment training.",
      image: "/asset/deadline.png",
    },
    {
      title: "Supervised Study",
      details:
        " Dedicated blocks for writing, high-level research, and project preparation.",
      image: "/asset/book.png",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="flex flex-col gap-20 py-20 px-[15%]">
      <div className="flex gap-24 text-center">
        <Image src="/asset/left.png" height={200} width={200} alt="" />
        <p>
          <span className="font-bold">The Grade 12 Advantage Year (AY12)</span>{" "}
          represents the "Advance" phase of the Northbridge pathway. It provides
          a structured academic enrichment layer that sits on top of the
          standard Ontario Secondary School Diploma (OSSD), ensuring you
          graduate not just with a credential, but with mastery.
        </p>
        <Image src="/asset/right.png" height={200} width={200} alt="" />
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-[2.5rem] font-bold text-center">
          <span className="text-[#479da5]">What does</span>
          <br />
          Ay represent?
        </p>

        <div className="grid grid-cols-[40%_60%] items-center gap-10 px-[10%]">
          <div className="w-full h-150 relative overflow-hidden">
            <Image
              src="/asset/study.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute flex flex-col justify-end p-5 inset-0 bg-[rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between">
                <motion.div
                  className="border-2 rounded-3xl text-white border-white p-2 px-6"
                  whileHover={{ scale: 1.05 }}
                >
                  Book a consultation
                </motion.div>
                <motion.button
                  className="border-2 rounded-[50%] flex items-center justify-center text-3xl h-15 w-15 text-white border-white p-2 px-6 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaArrowRight />
                </motion.button>
              </div>
            </div>
          </div>
          <div className="flex flex-col relative">
            {[
              "AY12 does not replace Grade 12",
              "AY12 does not alter diploma requirements",
              "AY12 is a structured academic enrichment layer",
              "OSSD integrity remains intact",
            ].map((text, i) => (
              <div
                key={i}
                style={{ backgroundColor: bgColors[i] }}
                className="p-6 px-10 grid grid-cols-[20%_80%] -my-7 gap-10 relative"
              >
                <p className="text-8xl text-[#c6cad1]">0{i + 1}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <p className="text-[2.5rem] font-bold text-center">
          <span className="text-[#479da5]">What</span> You will{" "}
          <span className="text-[#479da5]">Master</span>
        </p>
        <div className="h-[60vh] w-full relative">
          <Image
            src="/asset/module.png"
            fill
            alt=""
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      <motion.div
        className="flex flex-col gap-3 items-center justify-center text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <motion.p
          className="text-[2.5rem] font-bold capitalize text-center"
          variants={fadeUp}
        >
          The weekly{" "}
          <span className="text-[#479da5] capitalize">academic flow</span>
        </motion.p>

        <motion.p variants={fadeUp}>
          The AY12 schedule is designed to simulate the balance of a university
          <br />
          workload, providing a bridge between structured high school days
          <br /> and the independence of campus life.
        </motion.p>

        <motion.div className="flex gap-4 px-[10%] mt-3" variants={stagger}>
          {content.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={clsx(
                "flex items-center justify-center w-full text-center flex-col gap-4 p-3 rounded-lg transition-all",
                i % 2 === 0 ? "bg-[#479DA526]" : "bg-[#293B59] text-white py-8"
              )}
            >
              <Image src={c.image} alt={c.title} height={100} width={100} />
              <p className="font-semibold">{c.title}</p>
              <p>{c.details}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
