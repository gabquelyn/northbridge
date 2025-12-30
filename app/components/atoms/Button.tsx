"use client"
import { motion } from "motion/react";
import React from "react";
import clsx from "clsx";
export default function Button({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <motion.button
      className={clsx(
        className,
        "bg-linear-to-br from-[#479DA5] to-[#17757E] p-2 px-6 rounded-3xl"
      )}
      whileHover={{ scale: "1.05" }}
    //   transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
