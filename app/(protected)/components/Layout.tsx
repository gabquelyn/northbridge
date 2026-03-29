"use client";

import React, { useEffect, useState, useContext } from "react";
import { useRefresh, useLogout } from "@/app/hooks/useAuth";
import { setAccessToken } from "@/app/lib/token";
import { GrNotification } from "react-icons/gr";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { cartContext } from "@/app/providers/cartContextProvider";
import CartDrawer from "@/app/components/CartDrawer";
import Modal from "@/app/components/Modal";
import { Suspense } from "react";
import AnimatedCancel from "@/app/components/AnimatedCancel";
import { useProfile } from "@/app/hooks/useProfile";

export default function Layout({ children }: { children: React.ReactNode }) {
  const ctx = useContext(cartContext);
  const { data, isSuccess, isError } = useRefresh();
  const { data: profile, isSuccess: loadedProfile } = useProfile();
  const { mutate, isSuccess: loggedOut } = useLogout();
  const pathname = usePathname();
  const router = useRouter();

  const [links, setLinks] = useState<
    { tag: string | React.ReactNode; href: string; onClick?: Fn }[]
  >([]);

  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (loggedOut) router.replace("/login");
    if (isSuccess) setAccessToken(data.accessToken);

    const redirectTimeout = setTimeout(() => {
      if (isError) router.replace(`/login?from=${pathname}`);
    }, 2000);

    if (profile?.data?.role == "admin") {
      setLinks([
        {
          tag: "Applications",
          href: "/application",
        },
      ]);
    } else {
      setLinks([
        { tag: "Dashboard", href: "/dashboard" },
        // { tag: "Application", href: "/apply" },
        { tag: "Courses", href: "/courses" },
        {
          tag: (
            <div className="relative cursor-pointer">
              <p className="flex gap-2 items-center">
                <span>Cart</span> <MdOutlineShoppingCart />
              </p>
              {ctx?.cart && ctx?.cart.length > 0 && (
                <div className="absolute -top-[10%] -right-1 h-2 w-2 p-1 bg-red-500 rounded-full" />
              )}
            </div>
          ),
          href: "#",
          onClick: () => setCartOpen(true),
        },
      ]);
    }

    return () => clearTimeout(redirectTimeout);
  }, [loggedOut, isSuccess, isError, loadedProfile]);

  if (isError)
    return (
      <Modal>
        <AnimatedCancel message="Session expired. Redirecting to login" />
      </Modal>
    );

  return (
    <main className="bg-[#f2f2f2] min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 border-b border-gray-200 px-[10%] py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-sm p-1">
            <Image
              src="/asset/logo2.png"
              fill
              className="object-contain"
              alt="Logo"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex gap-2 items-center bg-white shadow-sm rounded-full px-4 py-2">
            {links.map((l) =>
              l.onClick ? (
                <button
                  key={l.href}
                  onClick={l.onClick}
                  className="px-4 py-2 rounded-full text-sm text-secondary hover:bg-primary/10"
                >
                  {l.tag}
                </button>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={clsx(
                    "px-4 py-2 rounded-full text-sm",
                    pathname.includes(l.href)
                      ? "bg-primary text-white"
                      : "text-secondary hover:bg-primary/10",
                  )}
                >
                  {l.tag}
                </Link>
              ),
            )}
          </div>

          <button
            onClick={() => mutate()}
            className="bg-white shadow-sm cursor-pointer rounded-full p-3 hover:bg-gray-100"
          >
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

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden fixed top-17.5 left-0 w-full bg-white shadow-lg z-40 px-[5%] py-4">
          {links.map((l) =>
            l.onClick ? (
              <button
                key={l.href}
                onClick={() => {
                  l.onClick?.();
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm hover:bg-primary/10"
              >
                {l.tag}
              </button>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm"
              >
                {l.tag}
              </Link>
            ),
          )}
        </div>
      )}
      <Suspense>
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </Suspense>
      {/* PAGE */}
      <div className="py-24 md:pt-40 px-4 md:px-[10%] text-lg text-secondary">
        {children}
      </div>
    </main>
  );
}
