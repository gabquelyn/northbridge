"use client";
import { motion } from "motion/react";
import React from "react";
import clsx from "clsx";
export default function Button({
  className,
  children,
  onClick,
  disabled,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.button
      className={clsx(
        className,
        disabled ? "bg-white" : "bg-white bg-linear-to-br cursor-pointer from-[#479DA5] to-[#17757E]",
        "px-7 text-white font-medium py-2.5 rounded-3xl disabled:cursor-not-allowed disabled:border-gray-300 disabled:border-2 disabled:text-gray-300",
      )}
      whileHover={{ scale: "1.05" }}
      //   transition={{ duration: 0.5 }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
