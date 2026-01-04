"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function IconBox({
  image,
  tag,
}: {
  image: string;
  tag: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 22,
      }}
      className="relative"
    >
      {/* Notification box */}
      <motion.div
        className="bg-[#68b2b9] text-center rounded-2xl p-5 md:p-7"
        whileHover={{ scale: 1.03 }}
      >
        <p>{tag}</p>
      </motion.div>

      {/* Icon bubble */}
      <motion.div
        className="absolute -top-6 left-1/2 -translate-x-1/2"
        initial={{ scale: 0, y: -8 }}
        whileInView={{ scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{
          delay: 0.15,
          type: "spring",
          stiffness: 520,
          damping: 18,
        }}
      >
        <Image alt="" src={image} height={35} width={35} />
      </motion.div>
    </motion.div>
  );
}
