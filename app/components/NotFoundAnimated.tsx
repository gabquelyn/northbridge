"use client";

import React from "react";
import { motion } from "framer-motion";

const NotFoundAnimated = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.svg
        width="140"
        height="140"
        viewBox="0 0 120 120"
        fill="none"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Outer circle */}
        <circle cx="60" cy="60" r="54" stroke="#D1D5DB" strokeWidth="2" />

        {/* Eyes */}
        <motion.circle
          cx="45"
          cy="50"
          r="3"
          fill="#6B7280"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx="75"
          cy="50"
          r="3"
          fill="#6B7280"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />

        {/* Sad mouth */}
        <motion.path
          d="M45 75c5-8 25-8 30 0"
          stroke="#6B7280"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          animate={{ pathLength: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.svg>

      <motion.p
        className="text-sm text-gray-500"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        No results found
      </motion.p>
    </div>
  );
};

export default NotFoundAnimated;