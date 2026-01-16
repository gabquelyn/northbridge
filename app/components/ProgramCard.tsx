"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { GoArrowDownRight } from "react-icons/go";
export default function ProgramCard({
  onMouseEnter,
  onMouseLeave,
  onClick,
  isVisible,
  card,
}: {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
  isVisible: boolean;
  card: { title: string; desc: string; image: string; cta: string };
}) {
  return (
    <motion.div
      className="relative h-110 w-76 rounded-3xl overflow-hidden cursor-pointer shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isVisible ? 1.08 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Always-visible title */}
      <div className="absolute inset-0 z-10 flex items-end p-5 bg-linear-to-t from-black/80 via-black/20 to-transparent">
        <div className="text-white font-semibold leading-snug flex items-center w-full justify-between">
          <p>{card.title}</p>
          <p className="flex items-center justify-center h-10 w-10 rounded-full bg-[#479DA5]/20">
            <GoArrowDownRight />
          </p>
        </div>
      </div>

      {/* Reveal Panel */}
      <motion.div
        className="absolute inset-0 z-20 flex flex-col justify-end p-5 text-white bg-black/70"
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 30,
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="text-sm leading-relaxed">{card.desc}</p>

        <Link href={card.cta}>
          <motion.span
            className="mt-4 inline-block w-fit rounded-full bg-[#479DA5] px-4 py-2 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
