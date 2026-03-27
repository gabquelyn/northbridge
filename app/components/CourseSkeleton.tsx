"use client";

import React from "react";
import { motion } from "framer-motion";

const shimmerVariants = {
  animate: {
    x: ["-100%", "100%"],
  },
};

const CourseSkeletonCard = () => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg bg-white p-4 space-y-4">
      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0"
        variants={shimmerVariants}
        animate="animate"
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      >
        <div className="h-full w-1/2 bg-linear-to-r from-transparent via-white/40 to-transparent blur-sm" />
      </motion.div>

      {/* Skeleton content */}
      <div className="h-40 w-full bg-gray-200 rounded-lg" />
      <div className="h-5 w-3/4 bg-gray-200 rounded" />

      <div className="space-y-2">
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />
      </div>

      <div className="flex justify-between items-center pt-2">
        <div className="h-4 w-20 bg-gray-200 rounded" />
        <div className="h-8 w-24 bg-gray-200 rounded-md" />
      </div>
    </div>
  );
};

export default CourseSkeletonCard;