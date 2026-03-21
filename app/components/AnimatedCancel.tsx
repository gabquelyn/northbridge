import React from "react";
import { motion } from "motion/react";
export default function AnimatedCancel({ message }: { message?: string }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <svg width="64" height="64" viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="#ef4444"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M15 9l-6 6M9 9l6 6"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <p className="text-sm text-red-500 mt-3 text-center">
        {message || "Something went wrong. Please try again."}
      </p>
    </motion.div>
  );
}
