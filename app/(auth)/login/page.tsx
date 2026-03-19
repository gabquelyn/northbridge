"use client";
import React, { useState } from "react";
import Input from "@/app/components/Input";
import Image from "next/image";
import Button from "@/app/components/atoms/Button";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";

export default function page() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const genericInputHandler: inputHandler = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex flex-col py-15 px-10 items-center justify-center max-w-md gap-4">
      <Image src="/asset/fullogo.png" height={130} width={150} alt="" />
      <div>
        <p className="text-xl font-semibold">Welcome</p>
        <p className="text-secondary text-sm">
          Sign in or create your account to manage your child's application to
          Northbridge Collegiate.
        </p>
      </div>

      <div className="w-full">
        <Input
          name="email"
          onChange={genericInputHandler}
          value={details.email}
          type="email"
          label="Email"
          className=""
        />
        <Input
          name="password"
          onChange={genericInputHandler}
          value={details.password}
          type="password"
          label="Password"
        />
      </div>

      <Button onClick={() => {}} className="w-full">
        <p className="p-1 font-semibold">Sign in</p>
      </Button>

      <div className="flex items-center w-full my-3">
        <div className="grow h-px bg-linear-to-r from-transparent via-gray-300 to-gray-300 opacity-60" />

        <span className="px-5 text-xs font-semibold tracking-widest text-gray-400 uppercase">
          or
        </span>

        <div className="grow h-px bg-linear-to-l from-transparent via-gray-300 to-gray-300 opacity-60" />
      </div>

      <button className="border border-gray-200 w-full px-7 py-2.5 cursor-pointer justify-center rounded-3xl flex gap-2 items-center">
        <FcGoogle />
        <p>Continue with Google</p>
      </button>
    </div>
  );
}
