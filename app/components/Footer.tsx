import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { LuFacebook } from "react-icons/lu";
import Link from "next/link";
import { TbMail } from "react-icons/tb";
import { MdLocationPin } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="bg-[#010A1D] text-white px-5 py-20">
      {/* Top horizontal divider */}
      <hr className="border-[#151e2f] mb-10" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-5 md:w-1/3">
          <div className="bg-white p-3 rounded-sm w-fit">
            <Link href="/">
              <Image src="/asset/logo1.png" height={70} width={70} alt="logo" />
            </Link>
          </div>
          <p className=" leading-relaxed">
            Northbridge Collegiate is a private secondary school authorized by
            the Ontario Ministry of Education.
          </p>
          <div className="flex gap-6 items-center">
            <Link
              href={
                "https://www.instagram.com/northbridgecollegiate?igsh=NDhiZTFiMTljeWlk"
              }
            >
              <GrInstagram />
            </Link>
            <Link href="https://www.facebook.com/share/1CZy6LLMmz/?mibextid=wwXIfr">
              <LuFacebook />
            </Link>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-[#151e2f]" />

        {/* Column 2 */}
        <div className="md:w-1/3">
          <p className="font-semibold mb-5">Quick links</p>
          <div className="flex flex-col gap-2 ">
            <Link href="/">Home Page</Link>
            <Link href="/caap">CAAP</Link>
            <Link href="/grade11">GRADE 11</Link>
            <Link href="/grade12">GRADE 12</Link>
            <Link href="/ay12">AY12</Link>
            <Link href="/right-program">Which program is right for me?</Link>
            <Link href="/about">About Northbridge Collegiate</Link>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="hidden md:block w-px bg-[#151e2f]" />

        {/* Column 3 */}
        <div className="md:w-1/3">
          <p className="font-semibold mb-5">Contact Us</p>
          <div className="flex flex-col items-start gap-3 ">
            <Link href="mailto:contact@northbridgec.ca">
              <div className="flex gap-3 items-center">
                <TbMail className="text-[#17757E]" />
                <p>contact@northbridgec.ca</p>
              </div>
            </Link>
            <Link href="tel:+2347047002406">
              <div className="flex gap-3 items-center">
                <LuPhone className="text-[#17757E]" />
                <p>+234 - 704 - 700 - 2406</p>
              </div>
            </Link>
            <div className="flex items-center gap-3 justify-center">
              <MdLocationPin className="text-[#17757E]"/>
              <Image src="/asset/nigeria.png" height={20} width={20} alt="" />

              <p>Victoria Island, Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom horizontal divider */}
      <hr className="border-[#151e2f] my-10" />

      <p className="text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Northbridge Collegiate. All rights
        reserved.
      </p>
    </footer>
  );
}
