"use client";
import React, { useState } from "react";
import Input from "@/app/components/Input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import clsx from "clsx";
import { motion } from "motion/react";

export default function ConsultationForm() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    education: "",
    area: "",
    program: "",
  });
  const [value, setValue] = useState<string | undefined>();
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex flex-col gap-8 mx-[5%] md:mx-[27%] py-20">
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
        <div className="flex gap-4 items-center">
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
        <Input
          name="area"
          value={details.area}
          onChange={inputHandler}
          type="text"
          placeholder="Primary Area of Study"
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-bold">Pathway Interests</p>

        {[
          "Canadian Academic Alignment Program (CAAP)",
          "Grade 12 OSSD",
          "Grade 12 Advantage Year (AY12 Enrichment)",
        ].map((program) => (
          <label
            className={clsx(
              "bg-[#479DA526] p-4 rounded-xl flex gap-2 items-center transition-all",
              details.program == program && "ring-[#479DA5] ring-2"
            )}
          >
            <input
              type="radio"
              name="program"
              className="accent-[#479DA5]"
              onChange={() => setDetails((prev) => ({ ...prev, program }))}
            />
            <p>{program}</p>
          </label>
        ))}
      </div>
      <div className="flex justify-center md:justify-end "> 
        <motion.button
          onClick={() => console.log(details)}
          className="bg-linear-0 from-[#479DA5] w-full md:w-fit transition-all cursor-pointer to-[#17757E] p-3 px-5 rounded-3xl text-white"
        >
          Submit for consultation
        </motion.button>
      </div>
    </div>
  );
}
