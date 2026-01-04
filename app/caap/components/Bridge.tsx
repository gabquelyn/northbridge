"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Bridge() {
  const details = [
    {
      name: "Academic Readiness",
      title:
        "Building the rigorous foundation needed for heavy university course loads.",
      image: "/asset/icon2.png",
    },
    {
      name: "Cultural Transition",
      title:
        "Adjusting to the social and academic environment of Canada before you arrive.",
      image: "/asset/icon3.png",
    },
    {
      name: "Post-Secondary Placement",
      title:
        "Preparing you for a coordinated, guaranteed pathway into your chosen university.",
      image: "/asset/icon1.png",
    },
  ];

  return (
    <div className="flex flex-col text-center items-center justify-center py-20">
      {/* Heading */}
      <motion.p
        className="text-[2rem] md:text-[2.5rem] font-bold text-center"
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
      <div className="flex justify-center flex-wrap gap-4  mt-5 px-[5%] md:px-[15%]">
        <motion.div
          className="relative w-70 transition-all rounded-2xl overflow-hidden"
          animate={{
            y: [0, -12, 0, 8, 0],
            x: [0, 6, 0, -6, 0],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex flex-col text-[2rem] font-bold items-center justify-center z-10 text-[#F9CA52]">
            <p className="text-white">CAAP</p>
            <p>PILLARS</p>
          </div>
          <Image
            src="/asset/pillar.jpg"
            alt=""
            fill
            unoptimized
            className="object-cover"
          />
        </motion.div>
        {details.map((de) => (
          <div
            key={de.title}
            className="bg-[#010A1D] w-70 rounded-2xl text-white p-10 flex flex-col gap-20 items-center text-center"
          >
            <Image src={de.image} alt="" height={50} width={50} />
            <div>
              <p className="mb-2">{de.name}</p>
              <p>{de.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
