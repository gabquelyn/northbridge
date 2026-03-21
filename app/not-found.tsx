"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative h-screen w-full bg-[#f4f6f8] flex items-center justify-center overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-200/20 blur-3xl rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-indigo-300/20 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-2xl px-6">

        {/* 404 Text */}
        <motion.h1
          className="text-6xl font-bold text-gray-800 tracking-tight"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          404
        </motion.h1>

        <motion.h2
          className="mt-4 text-xl text-gray-600 font-medium"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Lost on your academic journey?
        </motion.h2>

        <motion.p
          className="mt-2 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          The page you’re looking for doesn’t exist or has been moved.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium shadow-lg hover:scale-[1.03] transition"
          >
            Go Home
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}