"use client";

import React, { useEffect } from "react";
import { useVerify } from "@/app/hooks/useAuth";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ClientComponent() {
  const params = useSearchParams();
  const router = useRouter();

  const { mutate, isPending, isSuccess, isError, error } = useVerify();
  const mode = params.get("mode");
  useEffect(() => {
    const data = {
      id: params.get("id") || "",
      token: params.get("token") || "",
    };
    mutate(data);
  }, []);

  // Auto redirect on success
  useEffect(() => {
    if (!isSuccess) return;
    const redirectTimeout = setTimeout(() => {
      router.push(`/login?verified=true&mode=${mode}`);
    }, 2500);
    return () => clearTimeout(redirectTimeout);
  }, [isSuccess]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f2f2f2] relative overflow-hidden">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl px-10 py-12 max-w-md w-full text-center"
      >
        {/* VERIFYING */}
        {isPending && (
          <>
            <motion.div
              className="mx-auto mb-6 w-12 h-12 border-4 border-blue-200 border-t-[#1e3a8a] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />

            <h2 className="text-xl font-semibold text-gray-800">
              Verifying your email...
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Please wait while we confirm your details.
            </p>
          </>
        )}

        {/* SUCCESS */}
        {isSuccess && (
          <>
            <motion.div
              className="mx-auto mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                className="mx-auto"
              >
                <motion.circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#479da5"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.path
                  d="M7 12l3 3 7-7"
                  stroke="#479da5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                />
              </svg>
            </motion.div>

            <h2 className="text-xl font-semibold text-gray-800">
              Email Verified 🎉
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Your account has been successfully verified. Redirecting...
            </p>
          </>
        )}

        {/* ERROR */}
        {isError && (
          <>
            <motion.div
              className="flex items-center justify-center mb-6 text-red-500"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              <svg width="64" height="64" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M15 9l-6 6M9 9l6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <h2 className="text-xl font-semibold text-gray-800">
              Verification Failed
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              This link may be invalid or expired.
            </p>
          </>
        )}
      </motion.div>
    </div>
  );
}
