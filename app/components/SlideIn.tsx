"use client";
import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function SlideIn({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-60 bg-[#F8FAFC] flex flex-col h-full text-[1.2rem]"
    >
      {/* ================= Header ================= */}
      <div className="flex items-center justify-between px-10 py-8 bg-white border-b border-slate-200 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Image
            src="/asset/logo.png"
            height={90}
            width={90}
            alt="Northbridge logo"
            className="drop-shadow-[0_0_2px_white]"
          />
        </div>

        <div
          onClick={onClose}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-600 cursor-pointer hover:bg-slate-900 hover:text-white transition"
          aria-label="Close menu"
        >
          <VscChromeClose className="text-xl group-hover:rotate-90 transition-transform duration-300" />
        </div>
      </div>

      {/* ================= Navigation (scrollable) ================= */}
      <div className="flex-1 overflow-y-auto px-10 py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 md:grid-cols-3">
          <Section title="About Northbridge">
            <Item label="Who we are" href="/about" />
            <Item label="Program Overview" href="/right-program" />
            <Item label="Our Approach to Learning" href="/northbridge-model" />
            <Item label="Guidance Centre" href="/guidance" />
          </Section>

          <Section title="Academic Programs">
            <Item label="Canadian Academic Alignment Program (CAAP)" href="/caap" />
            <Item label="Grade 11 OSSD" href="/grade11" />
            <Item label="Grade 12 OSSD" href="/grade12" />
            <Item label="Grade 12 Advantage Year (AY12)" href="/ay12" />
            <Item label="Transitional Learners" href="/online-learners" />
          </Section>

          <Section title="Admissions & Resources">
            <Item label="Home" href="/" />
            <Item label="FAQs" href="/faq" />
            <Item label="Reach out to us" href="/consultation" />
          </Section>
        </div>
      </div>

      {/* ================= Footer ================= */}
      <div className="flex-shrink-0 border-t border-slate-200 bg-white px-10 py-6">
        <div className="mx-auto flex max-w-7xl justify-between text-xs uppercase tracking-widest text-slate-500">
          <span>© {new Date().getFullYear()} Northbridge Collegiate</span>
          <span>Raising Global Leaders</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= Reusable ================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-6 font-bold uppercase tracking-widest text-slate-500">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function Item({ label, href }: { label: string; href: string }) {
  const pathname = usePathname();
  return (
    <p className="group relative w-fit cursor-pointer font-medium text-slate-800 transition">
      <Link href={href}>
        {label}
        <span
          className={clsx(
            "absolute left-0 -bottom-1 h-[2px] w-full scale-x-0 bg-[#479DA5] transition-transform duration-300 origin-left group-hover:scale-x-100",
            href === pathname && "scale-x-100"
          )}
        />
      </Link>
    </p>
  );
}
