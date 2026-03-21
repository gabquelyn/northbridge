"use client";
import React, { useEffect, useState } from "react";
import { useRefresh, useLogout } from "@/app/hooks/useAuth";
import { setAccessToken } from "@/app/lib/token";
import { GrNotification } from "react-icons/gr";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data, isSuccess, isError, error } = useRefresh();
  const { mutate, isSuccess: loggedOut } = useLogout();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (loggedOut) router.replace("/login");

    if (isSuccess) setAccessToken(data.accessToken);
  }, [loggedOut, isSuccess]);

  if (isError) {
    console.log(error);
  }

  const links = [
    { tag: "Dashboard", href: "/dashboard" },
    { tag: "Application", href: "/apply" },
    { tag: "Courses", href: "/courses" },
    {
      tag: (
        <p className="flex gap-2 items-center">
          <span>Cart</span> <MdOutlineShoppingCart />
        </p>
      ),
      href: "/cart",
    },
  ];

  return (
    <main className="bg-[#f2f2f2] min-h-screen">
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 border-b border-gray-200 px-[5%] py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-sm p-1">
            <Image
              src="/asset/logo2.png"
              fill
              className="object-contain"
              alt="Northbridge Logo"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-2 items-center bg-white shadow-sm rounded-full px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "px-4 py-2 rounded-full transition-all text-sm",
                  pathname === l.href
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-primary/10",
                )}
              >
                {l.tag}
              </Link>
            ))}
          </div>

          <button className="bg-white shadow-sm text-secondary rounded-full p-3 hover:bg-gray-100 transition cursor-pointer">
            <GrNotification />
          </button>

          <button className="bg-white shadow-sm text-secondary rounded-full p-3 hover:bg-gray-100 transition cursor-pointer" onClick={() => mutate()}>
            <RiLogoutCircleRLine />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden bg-white shadow-sm p-3 rounded-full"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClose /> : <MdMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden fixed top-[70px] left-0 w-full bg-white shadow-lg z-40 px-[5%] py-4">
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "px-4 py-3 rounded-lg text-sm",
                  pathname === l.href
                    ? "bg-primary text-white"
                    : "text-secondary hover:bg-primary/10",
                )}
              >
                {l.tag}
              </Link>
            ))}

            <div className="flex gap-3 pt-3 mt-2">
              <button className="flex-1 bg-gray-100 p-3 rounded-lg flex justify-center cursor-pointer">
                <GrNotification />
              </button>
              <button
                className="flex-1 bg-gray-100 p-3 rounded-lg flex justify-center cursor-pointer"
                onClick={() => mutate()}
              >
                <RiLogoutCircleRLine />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="pt-24 px-[5%]">{children}</div>
    </main>
  );
}
