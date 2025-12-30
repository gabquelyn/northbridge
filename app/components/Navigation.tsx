"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import MenuItem from "./atoms/MenuItem";

export type Link_ = {
  label: string;
  href: string;
};

export type NestedLink = { label: string; children: Link_[] };

export type NavLinks = Link_ | NestedLink;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu: NavLinks[] = [
    { label: "Home", href: "" },
    { label: "About us", href: "" },
    {
      label: "Our Model",
      children: [
        {
          label: "Canadian University Prep Model",
          href: "",
        },
        { label: "How We Are Different", href: "" },
        { label: "Academic Bridge Framework", href: "" },
        { label: "How the Pathway Works", href: "" },
      ],
    },
    {
      label: "Programs",
      children: [
        {
          label: "Canadian Academic Alignment Program (CAAP)",
          href: "",
        },
        { label: "Grade 12 OSSD (Canada)", href: "" },
        { label: "Grade 12 Advantage Year (AY12)", href: "" },
        { label: "Grade 12 OSSD Online (Global)", href: "" },
      ],
    },
  ];

  return (
    <div
      className={clsx(
        scrolled ? "bg-[rgba(71,157,165)]" : "bg-[rgba(71,157,165,0.4)]",
        "fixed z-30 inset-0 text-white transition-all h-fit p-3 backdrop-blur-xl shadow-md"
      )}
    >
      <div className="flex items-center justify-between px-[5%]">
        <motion.div
          animate={{
            scale: scrolled ? 0.75 : 1,
            y: scrolled ? -2 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <Image src="/asset/logo1.png" height={100} width={100} alt="logo" />
        </motion.div>

        <div className="flex gap-10">
          {menu.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}
        </div>
        <div>
          <motion.div
            className={
              "bg-linear-0 from-[#479DA5] transition-all cursor-pointer to-[#17757E] p-2 px-6 rounded-3xl"
            }
            whileHover={{ scale: "1.05" }}
          >
            Sign up
          </motion.div>
        </div>
      </div>
    </div>
  );
}
