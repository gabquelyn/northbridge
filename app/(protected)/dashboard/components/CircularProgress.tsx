"use client";

import { motion } from "motion/react";

type CircularProgressProps = {
  size?: number;
  strokeWidth?: number;
  percent: number;
  color?: string;
  bgColor?: string;
};

export default function CircularProgress({
  size = 120,
  strokeWidth = 10,
  percent,
  color = "#4f46e5",
  bgColor = "#e5e7eb",
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const targetOffset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size}>
      {/* Background */}
      <circle
        stroke={bgColor}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />

      {/* Animated Progress */}
      <motion.circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1], // smoother easing
        }}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: targetOffset }}
        // transition={{
        //   duration: 1,
        //   ease: "easeInOut",
        // }}
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />

      {/* Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="18"
        fontStyle="bold"
        fill={color}
      >
        {percent}%
      </text>
    </svg>
  );
}
