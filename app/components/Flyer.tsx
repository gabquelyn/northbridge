"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import Modal from "./Modal";

export default function Flyer() {
  const [ads, setAds] = useState(true);
  useEffect(() => {
    if (ads) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ads]);


  if (ads)
    return (
      <Modal className="bg-transparent" onClose={() => setAds(false)}>
        <div className="h-[90vh] w-sm md:w-2xl relative z-50 overflow-hidden">
          <button
            className="absolute z-50 bottom-2 right-0 bg-white p-1 cursor-pointer"
            onClick={() => setAds(false)}
          >
            <FaTimes />
          </button>
          <Image
            src="/flyer.jpeg"
            fill
            unoptimized
            alt="flier"
            className="pointer-events-none"
          />
        </div>
      </Modal>
    );
  else return <></>;
}
