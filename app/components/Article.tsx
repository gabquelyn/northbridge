"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Article({
  title,
  highlight,
  preview,
  details,
  thumbnail,
  date,
}: {
  title: string;
  highlight: string;
  preview: string;
  details: React.ReactNode;
  thumbnail: string;
  date: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      layout
      transition={{ layout: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }}
      className="relative bg-white rounded-2xl overflow-hidden border border-gray-100"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Teal left accent bar */}

      <div className="pl-8 pr-6 pt-8 pb-6 md:pl-10 md:pr-8 md:pt-10 md:pb-8">
        {/* Top grid: meta + image */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-start">
          <div className="flex flex-col gap-3">
            {/* Tag row */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[1.4px] text-[#479DA5] bg-[#479DA5]/8 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#479DA5] inline-block" />
                Announcement
              </span>
              <span className="text-xs text-gray-400 tracking-wide">
                {new Date(date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight tracking-tight">
              {title}
            </h2>

            {/* Highlight */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-prose">
              {highlight}
            </p>
          </div>

          {/* Thumbnail */}
          <div className="relative w-full md:w-52 h-36 md:h-36 rounded-xl overflow-hidden shrink-0 bg-gray-50">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Preview + Read more trigger */}
        <AnimatePresence initial={false}>
          {!expanded && (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="mt-5 text-gray-600 text-sm leading-relaxed line-clamp-2">
                {preview}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Divider */}
        <motion.div
          className="mt-6 h-px bg-gray-100 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        />

        {/* EXPANDED body */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              key="body"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-6 text-gray-700 text-sm leading-relaxed flex flex-col gap-4"
            >
              {details}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Read more / Show less */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="group mt-6 flex items-center gap-2 text-sm font-medium text-[#479DA5] hover:text-[#347d84] transition-colors cursor-pointer"
        >
          <span>{expanded ? "Show less" : "Read full article"}</span>
          <motion.span
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex items-center justify-center w-5 h-5 rounded-full border border-[#479DA5]/30 group-hover:border-[#347d84]/40 group-hover:bg-[#479DA5]/5 transition-all"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="text-[#479DA5]"
            >
              <path
                d="M2 3.5L5 6.5L8 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </button>
      </div>
    </motion.article>
  );
}
