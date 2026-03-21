"use client";
import React from "react";
import ForgotForm from "../components/ForgotForm";
import { useForgot } from "../hooks/useAuth";
import isEmail from "../utils/isEmail";
import { toast } from "sonner";
export default function ClientComponent() {
  const { mutate, isPending, isError, isSuccess } = useForgot();

  return (
    <div>
      <ForgotForm
        isError={isError}
        isPending={isPending}
        isSuccess={isSuccess}
        onForgot={(email) => {
          if (!isEmail(email)) return toast.error("Invalid email");
          mutate(email)
        }}
      />
    </div>
  );
}
