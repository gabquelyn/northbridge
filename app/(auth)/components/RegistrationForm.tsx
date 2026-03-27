"use client";
import React, { useEffect, useState } from "react";
import Input from "@/app/components/Input";
import genericInputHandler from "@/app/utils/genericInputHandler";
import Button from "@/app/components/atoms/Button";
import Divider from "../components/Divider";
import { FaInfo } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import Modal from "@/app/components/Modal";
import Image from "next/image";
import { GoogleLogin } from "@react-oauth/google";
import { GiCheckMark } from "react-icons/gi";
import Link from "next/link";
import { motion } from "motion/react";
import AnimatedMail from "@/app/components/AnimatedMail";

const inputs = [
  { name: "name", label: "Fullname" },
  { name: "email", label: "Email" },
  { name: "password", label: "password" },
];

export default function RegistrationForm({
  setDetails,
  isLoading,
  details,
  registerHandler,
  googleRegisterHandler,
  isSuccess,
}: {
  setDetails: React.Dispatch<React.SetStateAction<RegistrationDetails>>;
  details: RegistrationDetails;
  isLoading: boolean;
  registerHandler: Fn;
  googleRegisterHandler: (credentials: string) => void;
  isSuccess: boolean;
}) {
  useEffect(() => {
    if (isSuccess) setOpenModal(true);

    const closeModalTimeout = setTimeout(() => {
      if (openModal) setOpenModal(false);
    }, 10000);

    return () => clearTimeout(closeModalTimeout);
  }, [isSuccess]);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      {openModal && (
        <Modal>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-xl px-10 py-12 text-center"
          >
            {/* Animated Mail Icon */}
            <AnimatedMail/>

            {/* Text */}
            <h2 className="text-xl font-semibold text-gray-800">
              Check your email
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              We've sent a verification link to your email address.
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Click the link to activate your account.
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/login"
                className="px-5 py-2 rounded-lg bg-primary text-white text-sm font-medium"
              >
                Go to Login
              </Link>
            </div>
          </motion.div>
        </Modal>
      )}
      <div>
        <p className="text-xl font-semibold">Register with us</p>
        <p className="text-secondary text-sm">
          Create an account to start and manage your child's application to
          Northbridge Collegiate.
        </p>
      </div>

      <div className="w-full mb-3 flex flex-col gap-1">
        {inputs.map((input) => (
          <Input
            key={input.name}
            name={input.name}
            onChange={genericInputHandler(setDetails)}
            value={details[input.name as keyof RegistrationDetails]}
            type={
              input.name === "email"
                ? "email"
                : input.name === "password"
                  ? "password"
                  : "text"
            }
            label={input.label}
            className=""
          />
        ))}
        <Link href="/login">
          <p className="text-xs underline text-primary text-right">
            Already have an account?
          </p>
        </Link>
      </div>

      <Button onClick={registerHandler} className="w-full">
        {isLoading ? (
          <ClipLoader size={25} color="white" />
        ) : (
          <p className="p-1 font-semibold">Register Account</p>
        )}
      </Button>
      <Divider />
      <GoogleLogin
        shape="pill"
        text="signup_with"
        onSuccess={(res) => {
          googleRegisterHandler(res.credential || "");
        }}
        onError={() => {
          console.error("Failed to login with google");
        }}
      />
    </div>
  );
}
