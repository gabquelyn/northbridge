"use client";
import React, { useState } from "react";
import Input from "../components/Input";
import Upload from "../components/form/Upload";
import { useJoinTeam } from "../hooks/useAdmission";
import { ClipLoader } from "react-spinners";
import AnimatedChecked from "../components/AnimatedChecked";

type FormState = {
  name: string;
  email: string;
  resume: File[] | null;
  coverLetter: File[] | null;
};

export default function ApplicationForm() {
  const [details, setDetails] = useState<FormState>({
    name: "",
    email: "",
    resume: null,
    coverLetter: null,
  });

  const { mutate, isPending, isSuccess } = useJoinTeam();

  const genericInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    details.name.trim() !== "" &&
    details.email.trim() !== "" &&
    details.resume !== null &&
    details.coverLetter !== null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    // Prepare form data (for API submission)
    const formData = new FormData();
    formData.append("name", details.name);
    formData.append("email", details.email);
    if (details.resume) formData.append("resume", details.resume[0] as File);
    if (details.coverLetter)
      formData.append("coverLetter", details.coverLetter[0] as File);

    mutate(formData);
  };

  return (
    <>
      {isSuccess ? (
        <AnimatedChecked message="Application sent successfully, sit tight for a response from us." />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 shadow p-10 rounded-lg bg-white text-sm"
        >
          <div className="flex flex-col gap-6 md:flex-row">
            <Input
              label="Full Name"
              value={details.name}
              onChange={genericInputHandler}
              type="text"
              name="name"
            />

            <Input
              label="Email Address"
              value={details.email}
              onChange={genericInputHandler}
              type="email"
              name="email"
            />
          </div>

          <Upload
            name="coverLetter"
            label="Cover Letter"
            files={details.coverLetter || []}
            fileChangeHandler={(f, name) => {
              setDetails((prev) => ({ ...prev, [name]: f }));
            }}
          />
          <Upload
            name="resume"
            label="Resume"
            files={details.resume || []}
            fileChangeHandler={(f, name) => {
              setDetails((prev) => ({ ...prev, [name]: f }));
            }}
          />

          <button
            type="submit"
            disabled={!isFormValid || isPending}
            className={`w-full py-3 rounded-xl text-white transition cursor-pointer ${
              isFormValid
                ? "bg-black hover:opacity-90"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {isPending ? (
              <ClipLoader size={15} color="white" />
            ) : (
              <p>Submit Application</p>
            )}
          </button>
        </form>
      )}
    </>
  );
}
