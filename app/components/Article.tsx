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
}: {
  title: string;
  highlight: string;
  preview: string;
  details: React.ReactNode;
  thumbnail: string;
}) {
//   const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
      className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <span className="text-sm uppercase tracking-wide text-[#479DA5]">
            Announcement
          </span>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {title}
          </h2>

          <p className="text-gray-600 text-sm">{highlight}</p>
        </div>
        <div className="relative">
          <Image src={thumbnail} alt={title} fill className="object-contain" />
        </div>
      </div>
      {/* Excerpt */}
      {/* {!expanded && <p className="mt-4 text-gray-700">{preview}</p>} */}

      {/* {!expanded && (
        <p
          onClick={() => setExpanded(!expanded)}
          className="mt-6 text-[#479DA5] font-medium flex items-center gap-2 cursor-pointer"
        >
          {expanded ? "Show less..." : "Read more..."}
        </p>
      )} */}

      {/* EXPANDED CONTENT */}
      {/* <AnimatePresence>
        {expanded && ( */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="mt-10 space-y-6"
          >
            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4 }}
              className="h-px bg-gray-200 origin-left"
            />

            {/* Full content */}
            <div className="text-gray-700 flex flex-col gap-3 leading-relaxed">
              {details}

              {/* {expanded && (
                <p
                  onClick={() => setExpanded(!expanded)}
                  className="mt-6 text-[#479DA5] font-medium flex items-center gap-2 cursor-pointer"
                >
                  {expanded ? "Show less..." : "Read more..."}
                </p>
              )} */}
            </div>
          </motion.div>
        {/* )}
      </AnimatePresence> */}
    </motion.article>
  );
}
