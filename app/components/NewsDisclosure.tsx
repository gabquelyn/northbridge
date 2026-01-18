"use client";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import Image from "next/image";

export default function NewsDisclosure({
  label,
  title,
  date,
  location,
  excerpt,
  body,
  image,
}: {
  label: string;
  title: string;
  date: string;
  location: string;
  excerpt: string;
  body: React.ReactNode;
  image: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      layout
      transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
      className="grid grid-cols-1 md:grid-cols-5 bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-200 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.18)] overflow-hidden"
    >
      {/* IMAGE PANEL */}
      <div className="relative md:col-span-2 min-h-[260px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/10 to-transparent" />
      </div>

      {/* CONTENT PANEL */}
      <div className="md:col-span-3 flex flex-col">
        {/* HEADER */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full text-left p-8 md:p-10 flex flex-col gap-5 focus:outline-none"
        >
          <div className="flex items-start justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs tracking-[0.25em] uppercase text-[#479DA5] font-semibold">
                {label}
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
                {title}
              </h3>

              <p className="text-sm text-gray-600">
                {location} · {date}
              </p>
            </div>

            {/* Chevron */}
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-[#479DA5] text-2xl mt-1"
            >
              <HiChevronDown />
            </motion.div>
          </div>

          <p className="text-gray-700 max-w-3xl leading-relaxed">
            {excerpt}
          </p>
        </button>

        {/* EXPANDED CONTENT */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="px-8 md:px-10 pb-10 space-y-8"
            >
              {/* Premium divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                className="h-px bg-gradient-to-r from-[#479DA5]/40 via-gray-200 to-transparent origin-left"
              />

              {/* Body */}
              <div className="prose prose-gray max-w-none">
                {body}
              </div>

              {/* About inset */}
              <div className="bg-gray-50/80 backdrop-blur border border-gray-200 rounded-2xl p-6">
                <p className="font-semibold text-gray-900 mb-2">
                  About Northbridge Collegiate
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Northbridge Collegiate is a private Canadian senior high school
                  authorized by the Ontario Ministry of Education, supporting
                  learners preparing for post-secondary education in Canada and
                  globally. Academic oversight is coordinated through its
                  Canada-based headquarters.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}
