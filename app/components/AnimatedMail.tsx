import React from "react";
import { motion } from "motion/react";
export default function AnimatedMail() {
  return (
    <motion.div
      className="relative mx-auto mb-6 w-fit"
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-400/30"
        animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />

      {/* SVG Mail */}
      <svg
        width="70"
        height="70"
        viewBox="0 0 24 24"
        fill="none"
        className="relative"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          stroke="#479da5"
          strokeWidth="2"
        />

        <motion.path
          d="M3 7l9 6 9-6"
          stroke="#479da5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
      </svg>
    </motion.div>
  );
}
