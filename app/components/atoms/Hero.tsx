"use client";
import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import clsx from "clsx";
import Link from "next/link";

export default function Hero({
  text,
  typewrite,
  image,
  transparent,
  description,
  programs,
}: {
  text: React.ReactNode | string;
  typewrite: string;
  image: string;
  transparent?: boolean;
  description?: React.ReactNode;
  programs?: boolean;
}) {
  return (
    <section className="md:mx-10 md:rounded-2xl overflow-hidden relative">
      {/* Background image */}
      <div
        className={clsx(
          "absolute inset-0 bg-cover bg-center bg-no-repeat",
          image
        )}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div
        className="relative z-10 h-[calc(100svh-88px)] flex items-center px-5 md:px-[5%] text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <h1 className="text-[2.3rem] md:text-[4.9rem] leading-[1.05] font-bold">
              {text}
              <span className="text-[#479DA5] relative inline-block">
                <Typewriter
                  words={[typewrite]}
                  loop={1}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={4000}
                />
              </span>
            </h1>
            <div className="md:text-[1.2rem] max-w-160">{description}</div>
            <div className="flex gap-4">
              {programs && (
                <Link href="/ay12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="bg-linear-0 from-[#479DA5] to-[#17757E] p-2 px-6 rounded-3xl cursor-pointer"
                  >
                    View programs
                  </motion.button>
                </Link>
              )}
              <Link href="/consultation">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={clsx(
                    transparent
                      ? "bg-[rgba(23,117,126,0.4)] border-2 border-[#17757E]"
                      : "bg-linear-0 from-[#479DA5] to-[#17757E]",
                    "p-2 px-6 rounded-3xl cursor-pointer"
                  )}
                >
                  Speak to an advisor
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
