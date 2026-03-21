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
        "bg-white bg-linear-to-br cursor-pointer from-[#479DA5] to-[#17757E]",
        "px-7 text-white flex items-center justify-center font-medium py-2.5 rounded-3xl disabled:cursor-not-allowed",
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
