"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Layout({ children }: { children: React.ReactNode }) {
  const images = ["/asset/graduate.jpg", "/asset/mixed.jpg", "/asset/congratulations.jpg"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 20000); // change every 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <div className="bg-[#f2f2f2] text-[.9rem] flex items-center justify-center h-screen p-2 md:p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow p-5 overflow-hidden rounded-2xl">

          {/* LEFT IMAGE PANEL */}
          <div className="relative hidden md:block w-md min-h-20 overflow-hidden rounded-tl-2xl rounded-bl-2xl">

            {images.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt=""
                fill
                className={`
                  object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out
                  ${i === index ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-linear-to-b from-black/5 via-black/20 to-black/90" />

            {/* Content */}
            <div className="absolute bottom-0 p-7 text-white">
              <p className="text-xl font-semibold">
                Your child's <span className="text-primary">future</span>
                <br /> starts here.
              </p>
              <p className="text-sm">
                Northbridge Collegiate is a Canadian university prep model,
                giving students the edge they need for top-tier admissions.
              </p>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-4 md:p-9 max-w-md gap-2 md:gap-4">
            <Image
              src="/asset/fullogo.png"
              height={130}
              width={150}
              alt=""
              className="mx-auto"
            />
            {children}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}