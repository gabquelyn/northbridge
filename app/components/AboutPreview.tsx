"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 pt-40 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 px-5 md:px-[14%] items-center bg-[#479DA526] py-8 overflow-hidden shadow-sm">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-105 w-full"
        >
          {/* Soft overlay */}
          <div className="absolute inset-0 bg-linear-to-tr from-black/10 to-transparent z-10 " />

          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="relative h-full w-full  overflow-hidden"
          >
            <Image
              src="/asset/flags.png"
              fill
              alt="Global education flags"
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className="p-10 flex flex-col md:items-start items-center gap-6"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="title"
          >
            A Canadian diploma <br />
            <span className="text-[#479DA5]">for global learners.</span>
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-justify text-gray-700 leading-relaxed"
          >
            Northbridge Collegiate delivers Ontario curriculum-based secondary
            education under an Ontario private school license issued by the
            Ministry of Education. Through approved in-class, online, and blended
            instructional models, we support students from diverse educational
            backgrounds with structured academic review and rigorous
            assessment—guiding them confidently toward completion of the Ontario
            Secondary School Diploma (OSSD).
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
