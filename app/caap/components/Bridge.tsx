"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    //   ease: "easeOut",
    },
  },
};

export default function Bridge() {
  const details = [
    {
      name: "Academic Readiness",
      title:
        "Building the rigorous foundation needed for heavy university course loads.",
      image: "/asset/c.jpg",
    },
    {
      name: "Cultural Transition",
      title:
        "Adjusting to the social and academic environment of Canada before you arrive.",
      image: "/asset/culture.jpg",
    },
    {
      name: "Post-Secondary Placement",
      title:
        "Preparing you for a coordinated, guaranteed pathway into your chosen university.",
      image: "/asset/placement.jpg",
    },
  ];

  return (
    <div className="flex flex-col text-center items-center justify-center py-20">
      {/* Heading */}
      <motion.p
        className="text-[2.5rem] font-bold text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        The
        <span className="text-[#479DA5]"> Northbridge Bridge </span>
        Model
      </motion.p>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        CAAP initiates our signature three-pillar framework to ensure
        <br /> a seamless transition:
      </motion.p>

      {/* Cards container */}
      <motion.div
        className="flex gap-4 px-[25%] mt-8"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-100px" }}
      >
        {details.map((d) => (
          <motion.div
            key={d.name}
            variants={card}
            whileHover={{ y: -10 }}
            className="bg-[#010A1D] rounded-md shadow-md w-full text-white text-center overflow-hidden"
          >
            {/* Image parallax */}
            <motion.div
              className="h-80 w-full relative overflow-hidden"
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <Image
                src={d.image}
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="p-4 flex flex-col gap-4 mt-2">
              <p className="font-bold">{d.name}</p>
              <hr className="border-[#151e2f]" />
              <p>{d.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
