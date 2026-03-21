import React from "react";
import { motion } from "motion/react";
export default function AnimatedChecked({ message }: { message?: string }) {
  return (
    <div className="flex items-center flex-col gap-1">
      <motion.svg width="64" height="64" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="#22c55e"
          strokeWidth="3"
          fill="transparent"
          strokeDasharray="251"
          strokeDashoffset="251"
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.path
          d="M30 52 L45 65 L70 38"
          stroke="#22c55e"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          strokeDasharray="60"
          strokeDashoffset="60"
          animate={{ strokeDashoffset: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
      </motion.svg>
      <p className="text-sm text-[#22c55e]">{message || "Successful"}</p>
    </div>
  );
}
