"use client";
import React, { useEffect, useState } from "react";
import Input from "@/app/components/Input";
import PhoneInput from "react-phone-number-input";
import { motion } from "motion/react";
import Option from "@/app/components/Option";
import axios, { AxiosError } from "axios";
import {toast} from "sonner"
import { useConsultation } from "@/app/hooks/useProfile";
import { ClipLoader } from "react-spinners";
import AnimatedChecked from "@/app/components/AnimatedChecked";
interface FormDetails {
  name: string;
  email: string;
  education: string;
  program: string;
  country: string;
  city: string;
}
export default function ConsultationForm() {
  const { mutate, isSuccess, isPending, isError, error } = useConsultation();
  const [details, setDetails] = useState<FormDetails>({
    name: "",
    email: "",
    education: "",
    program: "",
    country: "",
    city: "",
  });
  const [value, setValue] = useState<string | undefined>();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const disableButton =
    !details.name ||
    !details.email ||
    !details.education ||
    !details.program ||
    !details.country ||
    !details.city ||
    !value;

  const sendConsultation = async () => {
    mutate({
      fullName: details.name,
      email: details.email,
      academicBackground: details.education,
      pathway: details.program,
      city: details.city,
      country: details.country,
      phoneNumber: value || "",
    });
  };

  useEffect(() => {
    if (isError) {
      const err = (error as AxiosError<ApiErrorMessage>).response?.data;
      toast.error(
        err?.error && Array.isArray(err.error)
          ? `Incorrect fields: \n
            ${err?.error?.map((e) => e.path).join(", ")}`
          : err?.message,
      );
      console.log(err);
    }
  }, [isError]);

  return (
    <div className="flex flex-col gap-8 mx-[5%] md:mx-[27%] py-20">
      {isSuccess ? (
        <AnimatedChecked message="We have received your message" />
      ) : (
        <>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Personal information</p>
            <Input
              name="name"
              value={details.name}
              onChange={inputHandler}
              type="text"
              label="Full name"
              placeholder="John Doe Philips"
            />
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                name="email"
                value={details.email}
                onChange={inputHandler}
                type="email"
                placeholder="Email address"
              />
              <PhoneInput
                international
                defaultCountry="NG"
                value={value}
                onChange={setValue}
                className="nb-phone-input"
                countrySelectProps={{
                  className: "nb-country-select",
                }}
              />
            </div>
            <Input
              name="country"
              value={details.country}
              onChange={inputHandler}
              type="text"
              placeholder="Country"
            />
            <Input
              name="city"
              value={details.city}
              onChange={inputHandler}
              type="text"
              placeholder="City"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-bold">Academic Background</p>
            <Input
              name="education"
              value={details.education}
              onChange={inputHandler}
              type="text"
              placeholder="Current/Highest Education Level ((e.g., Grade 11, Completed WAEC/IGCSE))"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold">Pathway Interests</p>

            {[
              "Canadian Academic Alignment Program (CAAP)",
              "Grade 11 OSSD",
              "Grade 12 OSSD",
              "Grade 12 Advantage Year (AY12 Enrichment)",
            ].map((program) => (
              <Option
                program={program}
                value={details.program}
                onChange={() => setDetails((prev) => ({ ...prev, program }))}
              />
            ))}
          </div>
          <div className="flex justify-center md:justify-end ">
            <motion.button
              onClick={sendConsultation}
              disabled={disableButton || isPending}
              className="bg-linear-0 from-[#479DA5] w-full md:w-fit transition-all cursor-pointer to-[#17757E] p-3 px-5 rounded-3xl text-white"
            >
              {isPending ? (
                <ClipLoader color="#fff" size={15} />
              ) : (
                <p>Submit</p>
              )}
            </motion.button>
          </div>
        </>
      )}
    </div>
  );
}
