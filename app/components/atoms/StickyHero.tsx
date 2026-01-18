"use client";
import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import clsx from "clsx";
import Link from "next/link";

export default function StickyHero({
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
    <section className="relative overflow-hidden">
      {/* ================= Background ================= */}
      <div
        className={clsx(
          "absolute inset-0 bg-cover bg-center bg-no-repeat",
          image
        )}
      />

      {/* ================= Premium Overlay ================= */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/55 to-black/80" />

      {/* ================= Soft Grain / Depth Layer ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* ================= Content ================= */}
      <div className="relative z-10 flex min-h-screen items-center px-5 md:px-[6%] text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
          >
            {/* Headline */}
            <h1 className="font-bold leading-[1.03] tracking-tight text-[2.4rem] md:text-[5rem]">
              {text}{" "}
              <span className="relative inline-block text-[#479DA5]">
                <Typewriter
                  words={[typewrite]}
                  loop={1}
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={3500}
                />
                {/* Accent underline */}
                <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-linear-to-r from-[#479DA5] to-[#17757E]" />
              </span>
            </h1>

            {/* Description */}
            {description && (
              <div className="max-w-xl text-base md:text-lg text-white/85 leading-relaxed">
                {description}
              </div>
            )}

            {/* CTAs */}
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {programs && (
                <Link href="/right-program">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="rounded-full bg-gradient-to-r from-[#479DA5] to-[#17757E] px-7 py-3 text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition"
                  >
                    View Programs
                  </motion.button>
                </Link>
              )}

              <Link href="/consultation">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={clsx(
                    transparent
                      ? "border border-white/40 bg-white/10 backdrop-blur-md"
                      : "bg-gradient-to-r from-[#479DA5] to-[#17757E]",
                    "rounded-full px-7 py-3 text-sm font-semibold tracking-wide cursor-pointer transition hover:bg-white/20"
                  )}
                >
                  Speak to an Advisor
                </motion.div>
              </Link>
            </div>

            {/* Trust Signal */}
            <div className="mt-6 text-xs tracking-widest text-white/60 uppercase">
              Raising Confident Canadaian students
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
