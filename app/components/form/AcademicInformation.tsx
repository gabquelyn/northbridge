"use client";
import React, { useState } from "react";
import Input from "../Input";
const inputs = [
  {
    name: "dob",
    label: "Date of birth",
    placeholder: "",
  },
  {
    name: "currentSchool",
    label: "Current School",
    placeholder: "",
  },
  {
    name: "homeSchool",
    label: "Home School",
    placeholder: "Kate",
  },
  {
    name: "secondaryEntry",
    label: "Date of Entry in Secondary",
    placeholder: "",
  },
  {
    name: "qualification",
    label: "Please specify your obtained qualification (if yes)",
    placeholder: "",
  },
];

const radioInput = [
  {
    name: "pathway",
    label: "Intended Pose-Secondadry School Pathway",
    options: [
      "Art",
      "STEM",
      "Business",
      "Life Science",
      "Socail science",
      "Humanities/Law",
    ],
  },
  {
    name: "gender",
    label: "Student Gender",
    options: ["M", "F"],
  },
  {
    name: "completedSecondaryDiploma",
    label: "Has the student completed a secondary school diploma?",
    options: ["true", "false"],
  },
];
export default function AcademicInformation({
  data,
  onChange,
}: {
  data: IApplicationForm;
  onChange: inputHandler;
}) {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <div className="grid grid-cols-2 gap-4">
      {inputs.map((input) => (
        <Input
          key={input.name}
          name={input.name}
          value={data[input.name as keyof IApplicationForm]}
          type={
            ["dob", "secondaryEntry"].includes(input.name) ? "date" : "string"
          }
          onChange={onChange}
          placeholder={input.placeholder}
          label={input.label}
        />
      ))}

      {radioInput.map((ques) => (
        <div key = {ques.name}>
          <p>{ques.label}</p>
          <div className="flex flex-wrap gap-3 mt-1">
            {ques.options.map((item) => (
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  name={ques.name}
                  type="radio"
                  value={item}
                  onChange={onChange}
                />
                <span className="text-secondary">{item}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
