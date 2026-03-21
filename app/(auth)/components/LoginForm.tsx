"use client";
import React from "react";
import Input from "@/app/components/Input";
import Button from "@/app/components/atoms/Button";
import genericInputHandler from "@/app/utils/genericInputHandler";
import Divider from "../components/Divider";
import { ClipLoader } from "react-spinners";
import { GoogleLogin } from "@react-oauth/google";
import Link from "next/link";
export default function LoginForm({
  setDetails,
  details,
  handleLogin,
  isLoading,
  googleLoginHandler,
}: {
  setDetails: React.Dispatch<React.SetStateAction<LoginCredentials>>;
  details: LoginCredentials;
  handleLogin: Fn;
  isLoading: boolean;
  googleLoginHandler: (credential: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-xl font-semibold">Welcome</p>
        <p className="text-secondary text-sm">
          Sign in to manage your child's application to Northbridge Collegiate.
        </p>
      </div>

      <div className="w-full flex flex-col gap-1">
        <Input
          name="email"
          onChange={genericInputHandler(setDetails)}
          value={details.email}
          type="email"
          label="Email"
          className=""
        />
        <Input
          name="password"
          onChange={genericInputHandler(setDetails)}
          value={details.password}
          type="password"
          label="Password"
        />
        <div className="flex items-center justify-between">
          <Link href="/register">
            <p className="text-xs underline text-primary">
              A new user? Register with us
            </p>
          </Link>
          <Link href="/forgot">
            <p className="text-xs underline text-primary">
              Forgot password?
            </p>
          </Link>
        </div>
      </div>

      <Button onClick={handleLogin} className="w-full" disabled={isLoading}>
        {isLoading ? (
          <ClipLoader size={25} color="white" />
        ) : (
          <p className="p-1 font-semibold">Sign in</p>
        )}
      </Button>

      <Divider />
      <GoogleLogin
        shape="pill"
        text="signin_with"
        onSuccess={(res) => {
          googleLoginHandler(res?.credential || "");
        }}
        onError={() => {
          console.error("Failed to login with google");
        }}
      />
    </div>
  );
}
