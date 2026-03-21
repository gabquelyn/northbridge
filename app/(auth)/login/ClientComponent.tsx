"use client";
import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import { useLogin, useLoginWithGoogle } from "@/app/hooks/useAuth";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function ClientComponent() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const { mutate, isPending, isError, error, isSuccess } = useLogin();
  const {
    mutate: mutateGoogle,
    data,
    isSuccess: gs,
    isError: isGoogleError,
    error: er,
  } = useLoginWithGoogle();

  const handleLogin = () => {
    if (!details.email || !details.password)
      return toast.warning("Enter email and password");
    mutate(details);
  };

  // Effects for notifiction
  useEffect(() => {
    if (isGoogleError) {
      console.log(er);
      const message = (er as AxiosError<ApiErrorMessage>)?.response?.data
        ?.message;
      toast.error(message);
    }

    if (isError) {
      console.log(error)
      const message = (error as AxiosError<ApiErrorMessage>)?.response?.data
        ?.message;
      toast.error(message);
    }

    if (isSuccess || gs) {
      toast.success("Logged in successfully");
      router.push("/dashboard");
    }
  }, [isGoogleError, isError, isSuccess]);

  return (
    <LoginForm
      handleLogin={handleLogin}
      setDetails={setDetails}
      details={details}
      isLoading={isPending}
      googleLoginHandler={(credential) => mutateGoogle(credential)}
    />
  );
}
