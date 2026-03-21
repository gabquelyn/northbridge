"use client";
import AnimatedCancel from "@/app/components/AnimatedCancel";
import AnimatedChecked from "@/app/components/AnimatedChecked";
import Button from "@/app/components/atoms/Button";
import Input from "@/app/components/Input";
import genericInputHandler from "@/app/utils/genericInputHandler";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

const inputs = [
  { name: "password", label: "New password" },
  { name: "confirmPass", label: "Confirm new password" },
];
interface ResetDetails {
  password: string;
  confirmPass: string;
}
export default function ResetForm({
  isPending,
  isSuccess,
  isError,
  onSubmit,
}: {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  onSubmit: ({ token, password }: { token: string; password: string }) => void;
}) {
  const [details, setDetails] = useState<ResetDetails>({
    password: "",
    confirmPass: "",
  });
  const params = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      if (isSuccess) router.replace("/login");
    }, 2500);

    return () => clearTimeout(redirectTimeout);
  }, [isSuccess]);

  return (
    <div className="flex flex-col items-center gap-4 bg-white p-8 shadow py-12 rounded-3xl">
      <div>
        <p className="text-xl font-semibold">Reclaim Account Access</p>
        <p className="text-secondary text-sm">
          Enter new password to manage admissions on Northbridge Collegiate.
        </p>
      </div>

      {isError && <AnimatedCancel message="Invalid password reset link" />}

      {isSuccess && <AnimatedChecked message="Password rest successfully" />}

      {isPending && <ClipLoader color="#616161" />}

      <div className="w-full flex flex-col gap-1">
        {inputs.map((input) => (
          <Input
            key={input.name}
            name={input.name}
            label={input.label}
            type="password"
            onChange={genericInputHandler(setDetails)}
            value={details[input.name as keyof ResetDetails]}
          />
        ))}
      </div>

      <Button
        onClick={() => {
          if (!details.password) return toast.error("Input a password");
          if (details.password.length < 8)
            return toast.error("Password must be a minimum of 8 char");
          onSubmit({
            token: params.get("otp") || "",
            password: details.password,
          });
        }}
        disabled={details.password !== details.confirmPass}
        className="w-full"
      >
        <p>Reset Password</p>
      </Button>
    </div>
  );
}
