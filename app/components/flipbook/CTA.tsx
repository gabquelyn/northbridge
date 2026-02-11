"use client";
import React from "react";
import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { GrInstagram } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import Link from "next/link";
export default function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white h-full flex flex-col items-center gap-2 p-8 md:p-15 "
    >
      <div className="text-center">
        <p className="md:text-2xl text-center uppercase font-bold md:mb-6 mb-2">
          Begin the Conversation
        </p>
        <p className="text-slate-600 mt-3">
          Northbridge Collegiate <br/>Preparation for what comes next
        </p>
      </div>

      <div className="flex flex-row items-center justify-center gap-2 md:gap-6 mt-8">
        <Link
          href="https://www.northbridgec.ca"
          target="_blank"
          className="flex items-center  gap-3 bg-[#479DA5] text-white px-8 py-4 rounded-2xl text-base font-medium hover:opacity-90 transition"
        >
          <Globe size={18} />
        </Link>
        <Link
          href="https://www.facebook.com/share/1CZy6LLMmz/?mibextid=wwXIfr"
          className="flex items-center gap-3 bg-[#479DA5] text-white px-8 py-4 rounded-2xl text-base font-medium hover:opacity-90 transition"
        >
          <LuFacebook />
        </Link>

        <Link
          href={
            "https://www.instagram.com/northbridgecollegiate?igsh=NDhiZTFiMTljeWlk"
          }
          className="flex items-center gap-3 bg-[#479DA5] text-white px-8 py-4 rounded-2xl text-base font-medium hover:opacity-90 transition"
        >
          <GrInstagram />
        </Link>
      </div>
    </motion.div>
  );
}
