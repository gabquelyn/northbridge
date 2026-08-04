"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Article({
  title,
  preview,
  details,
  thumbnail,
  date,
  id,
}: {
  title: string;
  preview: string;
  details: string;
  thumbnail: string;
  date: string;
  id: string;
}) {
  const router = useRouter();
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
            <h2 className="text-2xl md:text-3xl capitalize font-semibold text-gray-900 leading-tight tracking-tight">
              {title}
            </h2>
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

        {/* Divider */}
        <motion.div
          className="mt-6 h-px bg-gray-100 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        />

        {/* Read more / Show less */}
        <Link href={`/insights/${id}`}>
          <button className="group mt-6 flex items-center gap-2 text-sm font-medium text-[#479DA5] hover:text-[#347d84] transition-colors cursor-pointer">
            <p>Read full article</p>
          </button>
        </Link>
      </div>
    </motion.article>
  );
}
