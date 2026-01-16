"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
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
    <div className="flex flex-col gap-20 py-20 px-[5%] lg:px-[15%]">
      <div className="flex gap-24 text-center items-center justify-center">
        <div className="max-w-200 flex gap-7">
          <Image
            src="/asset/left.png"
            height={100}
            className="hidden md:block"
            width={100}
            alt=""
          />
          <p>
            <span className="font-bold">
              The Grade 12 Advantage Year (AY12)
            </span>{" "}
            represents the "Advance" phase of the Northbridge pathway. It
            provides a structured academic enrichment layer that sits on top of
            the standard Ontario Secondary School Diploma (OSSD), ensuring you
            graduate not just with a credential, but with mastery.
          </p>
          <Image
            src="/asset/right.png"
            height={100}
            className="hidden md:block"
            width={100}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <p className="title font-bold text-center">
          <span className="text-[#479da5]">What does</span>
          <br />
          Ay represent?
        </p>

        <div className="grid grid-cols-1 mt-5 md:grid-cols-[40%_60%] items-center justify-center gap-10 px-5 lg:px-[10%]">
          <div className="w-full h-150 relative overflow-hidden hidden md:block">
            <Image
              src="/asset/study.jpg"
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute flex flex-col justify-end p-5 inset-0 bg-[rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between">
                <Link href="/consultation">
                  <motion.div
                    className="border-2 rounded-3xl text-white border-white p-2 px-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    Book a consultation
                  </motion.div>
                </Link>
                <motion.div
                  className="border-2 rounded-[50%] flex items-center justify-center text-3xl h-15 w-15 text-white border-white p-2 px-6 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaArrowRight />
                </motion.div>
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
                className="p-6 px-4 md:px-10 grid grid-cols-[20%_80%] -my-5 lg:-my-7 gap-10 relative"
              >
                <p className="text-6xl lg:text-8xl text-[#c6cad1]">0{i + 1}</p>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <p className="title font-bold text-center">
          <span className="text-[#479da5]">What</span> You will{" "}
          <span className="text-[#479da5]">Master</span>
        </p>
        <div className="h-50 md:h-100 w-full  relative">
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
          className="title font-bold capitalize text-center"
          variants={fadeUp}
        >
          The weekly{" "}
          <span className="text-[#479da5] capitalize">academic flow</span>
        </motion.p>

        <motion.p variants={fadeUp} className="w-90">
          The AY12 schedule is designed to simulate the balance of a university
          workload, providing a bridge between structured high school days and
          the independence of campus life.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-8 justify-center px-[5%] md:px-[10%] mt-8"
          variants={stagger}
        >
          {content.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[320px] rounded-3xl p-8 text-center flex flex-col gap-4
                 bg-white/70 backdrop-blur-xl border border-white/30
                 shadow-lg hover:shadow-2xl"
            >
              <div className="mx-auto h-16 w-16 rounded-full bg-[#479DA5]/15 flex items-center justify-center">
                <Image src={c.image} alt={c.title} height={42} width={42} />
              </div>

              <p className="text-lg font-semibold text-gray-900">{c.title}</p>

              <p className="text-sm text-gray-700 leading-relaxed">
                {c.details}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
