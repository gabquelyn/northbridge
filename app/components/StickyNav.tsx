"use client";
import { useState, useEffect, useContext, Suspense } from "react";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { FaPenClip } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { MdOutlinePerson } from "react-icons/md";
import SlideIn from "./SlideIn";
import { cartContext } from "../providers/cartContextProvider";
import { MdShoppingCart } from "react-icons/md";
import CartDrawer from "./CartDrawer";
import { FaBook } from "react-icons/fa";

export default function NorthbridgeAcademicNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const ctx = useContext(cartContext);
  return (
    <>
      <Suspense>
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </Suspense>
      <div
        className={clsx(
          "fixed top-0 right-0 z-40 hidden lg:flex w-full py-2 items-center justify-between px-6 text-[0.85rem] uppercase transition-all duration-500",
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
          <Link href="/login">
            <div className="group flex items-center gap-3 px-6 py-4 cursor-pointer transition hover:bg-[#479DA5]/10">
              <MdOutlinePerson className="text-[#479DA5] text-2xl group-hover:scale-110 transition" />
              <span className="font-semibold tracking-wide">My Account</span>
            </div>
          </Link>

          <Link href="https://study.northbridgec.ca/login/">
            <div className="group flex items-center gap-3 px-6 py-4 cursor-pointer transition hover:bg-[#479DA5]/10">
              <FaBook className="text-[#479DA5] text-2xl group-hover:scale-110 transition" />
              <span className="font-semibold tracking-wide">Study</span>
            </div>
          </Link>

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

          <Link href="#">
            <div
              className="group flex items-center gap-3 px-6 py-4 cursor-pointer transition hover:bg-[#479DA5]/10"
              onClick={() => setCartOpen(true)}
            >
              <div className="relative">
                <MdShoppingCart className="text-[#479DA5] group-hover:scale-110 transition text-2xl" />
                {ctx?.cart && ctx?.cart.length > 0 && (
                  <div className="absolute text-white -top-[10%] -right-1 p-1 text-[.5rem] w-3 h-3 flex items-center justify-center bg-red-500 rounded-full">
                    {ctx?.cart.length}
                  </div>
                )}
              </div>
            </div>
          </Link>

          {/* Menu CTA */}
          <div
            onClick={() => setOpen(true)}
            className="group relative flex items-center gap-3 px-8 py-4 cursor-pointer bg-linear-to-r from-[#479DA5] to-[#17757E] text-white font-semibold tracking-wider shadow-lg hover:shadow-xl transition-all"
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
