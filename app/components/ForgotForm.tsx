"use client";

import React, { useState } from "react";
import Input from "./Input";
import genericInputHandler from "../utils/genericInputHandler";
import Button from "./atoms/Button";
import { motion } from "framer-motion";
import AnimatedChecked from "./AnimatedChecked";
import AnimatedCancel from "./AnimatedCancel";

export default function ForgotForm({
  onForgot,
  isPending,
  isError,
  isSuccess,
}: {
  onForgot: (email: string) => void;
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
}) {
  const [details, setDetails] = useState({ email: "" });

  const handleSubmit = () => {
    onForgot(details.email);
  };

  return (
    <div className="h-screen flex items-center justify-center text-sm bg-[#f2f2f2]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-8"
      >
        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Forgot Password
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Enter your email to receive a reset link
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center my-4">
          {/* PENDING */}
          {isPending && (
            <motion.div
              className="w-10 h-10 border-4 border-blue-200 border-t-[#1e3a8a] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          )}

          {/* SUCCESS */}
          {isSuccess && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <AnimatedChecked />

              <p className="text-sm text-green-600 mt-3 text-center">
                Reset link sent to your email
              </p>
            </motion.div>
          )}

          {/* ERROR */}
          {isError && <AnimatedCancel />}
        </div>
        {/* INPUT */}
        <Input
          label="Email address"
          value={details.email}
          onChange={genericInputHandler(setDetails)}
          name="email"
          type="email"
          className="my-2"
        />

        {/* BUTTON */}
        <Button onClick={handleSubmit} className= "w-full" disabled={isPending}>
          Send Password reset link
        </Button>
      </motion.div>
    </div>
  );
}
