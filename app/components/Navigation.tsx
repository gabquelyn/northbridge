"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import clsx from "clsx";
import MenuItem from "./atoms/MenuItem";
import { Menu, X } from "lucide-react";
import Link from "next/link";
export type Link_ = {
  label: string;
  href: string;
};

export type NestedLink = { label: string; children: Link_[] };

export type NavLinks = Link_ | NestedLink;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about" },
    { label: "Our Model", href: "/northbridge-model" },
    {
      label: "Programs",
      children: [
        { label: "Canadian Academic Alignment Program (CAAP)", href: "/caap" },
        { label: "Grade 12 OSSD (Canada)", href: "/grade12" },
        { label: "Grade 12 Advantage Year (AY12)", href: "/ay12" },
      ],
    },
  ];

  return (
    <>
      {/* Top Nav */}
      <div
        className={clsx(
          scrolled && "shadow-md",
          "sticky top-0 z-30 bg-white backdrop-blur-xl"
        )}
      >
        <div className="flex items-center justify-between px-[5%] py-3">
          <Image src="/asset/logo1.png" height={70} width={70} alt="logo" />

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-12">
            {menu.map((item) => (
              <MenuItem key={item.label} item={item} />
            ))}
            <Link href="/consultation">
              <div className="bg-linear-0 from-[#479DA5] to-[#17757E] px-6 py-2 rounded-3xl text-white cursor-pointer">
                Book a consultation
              </div>
            </Link>
          </ul>

          {/* Mobile Hamburger */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Slide-in */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed left-0 top-0 z-50 h-full w-[85%] max-w-sm bg-white p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <Image src="/asset/logo1.png" height={50} width={50} alt="" />
                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {menu.map((item) => (
                  <MenuItem
                    key={item.label}
                    item={item}
                    mobile
                    closeMenu={() => setMobileOpen(false)}
                  />
                ))}
                <Link href="/consultation">
                  <div className="mt-6 bg-[#479DA5] text-white py-3 rounded-xl text-center">
                    Book a consultation
                  </div>
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
