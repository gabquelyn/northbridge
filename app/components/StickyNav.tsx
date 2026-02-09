"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { FaPenClip } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import SlideIn from "./SlideIn";

export default function NorthbridgeAcademicNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 800);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={clsx(
          "fixed top-0 right-0 z-50 hidden lg:flex w-full py-2 items-center justify-between px-6 text-[0.85rem] uppercase transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] text-slate-800"
            : "bg-white/10 backdrop-blur-md text-white",
        )}
      >
        <div className="relative ml-[5%] w-12 h-12 p-1 rounded-full bg-white shadow-lg">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Link href="/">
              <Image
                src="/asset/logo2.png"
                fill
                className="object-contain"
                alt="Northbridge Logo"
              />
            </Link>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center divide-x divide-white/20">
          <Link href="/consultation">
            <div className="group flex items-center gap-3 px-6 py-4 cursor-pointer transition hover:bg-[#479DA5]/10">
              <FaPenClip className="text-[#479DA5] group-hover:scale-110 transition" />
              <span className="font-semibold tracking-wide">
                Inquire & Apply
              </span>
            </div>
          </Link>

          <Link href="/about">
            <div className="group flex items-center gap-3 px-6 py-4 cursor-pointer transition hover:bg-[#479DA5]/10">
              <FaQuestion className="text-[#479DA5] group-hover:scale-110 transition" />
              <span className="font-semibold tracking-wide">Who We Are</span>
            </div>
          </Link>

          {/* Menu CTA */}
          <div
            onClick={() => setOpen(true)}
            className="group relative flex items-center gap-3 px-8 py-4 cursor-pointer bg-gradient-to-r from-[#479DA5] to-[#17757E] text-white font-semibold tracking-wider shadow-lg hover:shadow-xl transition-all"
            aria-label="Open navigation"
          >
            <Menu
              size={20}
              className="group-hover:rotate-90 transition-transform duration-300"
            />
            <span>Menu</span>

            {/* Accent underline */}
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </div>
        </div>
      </div>

      {/* ================= For mobile navigation ================= */}
      <div className="fixed top-0 text-[.9rem] flex p-4 right-0 z-50 lg:hidden w-full items-center justify-between bg-white shadow-lg uppercase">
        <Link href="/">
          <Image src="/asset/logo2.png" height={40} width={40} alt="logo" />
        </Link>
        <div
          onClick={() => setOpen(true)}
          className="text-black"
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </div>
      </div>

      {/* ================= Fullscreen Navigation ================= */}
      <AnimatePresence>
        {open && <SlideIn onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
