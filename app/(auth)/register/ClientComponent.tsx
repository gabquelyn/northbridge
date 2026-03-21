"use client";
import React, { useState, useEffect } from "react";
import RegistrationForm from "../components/RegistrationForm";
import { useRegister, useRegisterWithGoogle } from "@/app/hooks/useAuth";
import { toast } from "sonner";
import { AxiosError } from "axios";
import isEmail from "@/app/utils/isEmail";
export default function ClientComponent() {
  const [details, setDetails] = useState<RegistrationDetails>({
    email: "",
    password: "",
    name: "",
  });
  const { mutate, isPending, isError, error, isSuccess } = useRegister();
  const { mutate: googleMutate, isSuccess: gs } = useRegisterWithGoogle();
  const registrationHandler = () => {
    if (!isEmail(details.email)) return toast.error("Invalid Email address");
    if (!details.name) return toast.error("Enter your fullname");
    if (details.password.length < 8)
      return toast.error("Password must be a minimum of 8 character");
    mutate(details);
  };

  useEffect(() => {
    if (isError) {
      const message = (error as AxiosError<ApiErrorMessage>).response?.data
        ?.message;
      toast.error(message);
    }

    if (isSuccess) {
      toast.success("Registered successfully");
    }
  }, [isSuccess, isError]);

  return (
    <div>
      <RegistrationForm
        registerHandler={registrationHandler}
        isLoading={isPending}
        googleRegisterHandler={(credential) => googleMutate(credential)}
        details={details}
        setDetails={setDetails}
        isSuccess={isSuccess || gs}
      />
    </div>
  );
}
