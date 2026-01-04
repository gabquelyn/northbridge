"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import clsx from "clsx";
import { FaGreaterThan } from "react-icons/fa";
import Link from "next/link";

export default function Program() {
  const content = [
    {
      title: "Canadian Academic Alignment Program (CAAP)",
      details:
        "Don't repeat a year—align it. CAAP recognizes your prior learning to fast-track your success in Canadian education.",
      image: "/asset/grop.jpg",
      href: "/caap",
    },
    {
      title: "Grade 12 OSSD (Canada Only)",
      details:
        "30+ Grade 12 Courses Choose from a wide variety of Ontario-standard curriculum options tailored to your interests.",
      image: "/asset/origin.jpg",
      href: "/grade12",
    },
    {
      title: "Grade 12 Advantage Year (AY12)",
      details:
        "Designed for students seeking maximum preparation for competitive universities, our program runs concurrently with Grade 12.",
      image: "/asset/boy.jpg",
      href: "/ay12",
    },
  ];

  return (
    <div className="py-20 overflow-hidden">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-[2rem] md:text-[2.5rem] capitalize font-bold text-center"
      >
        Which <span className="text-[#479DA5]">Program is right</span>
        <br /> for my child?
      </motion.p>

      {/* Cards */}
      <motion.div
        className="flex md:flex-row flex-col px-[10%] md:px-[20%] gap-6 mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {content.map((c, i) => (
          <motion.div
            key={c.image}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" },
              },
            }}
            className={clsx(
              "p-10 rounded-xl h-120 flex flex-col justify-between items-center md:items-start text-center md:text-left",
              i % 2 === 0 ? "bg-[#479DA533]" : "bg-[#479DA5] text-white"
            )}
          >
            <p className="font-bold capitalize">{c.title}</p>
            <p>{c.details}</p>

            <Link href={c.href}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="border-2 rounded-3xl flex items-center gap-3 w-fit p-2 px-6"
              >
                <p>Learn more</p>
                <div className="flex">
                  <FaGreaterThan />
                  <FaGreaterThan />
                </div>
              </motion.div>
            </Link>

            <motion.div
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-36 w-full relative overflow-hidden rounded-xl"
            >
              <Image src={c.image} alt="" fill className="object-cover" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
