"use client";
import React from "react";
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
    label: "Intended Post-Secondadry School Pathway",
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
type AcademicFormData = Pick<
  IApplicationForm,
  | "dob"
  | "currentSchool"
  | "homeSchool"
  | "secondaryEntry"
  | "qualification"
  | "pathway"
  | "gender"
  | "completedSecondaryDiploma"
>;
function AcademicInformation({
  data,
  onChange,
   disableEdit
}: {
  data: AcademicFormData;
  onChange: inputHandler;
  disableEdit?: boolean
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {inputs.map((input) => (
        <Input
          key={input.name}
          name={input.name}
          value={data[input.name as keyof AcademicFormData]}
          type={
            ["dob", "secondaryEntry"].includes(input.name) ? "date" : "string"
          }
          onChange={onChange}
          placeholder={input.placeholder}
          label={input.label}
          readOnly={disableEdit}
        />
      ))}

      {radioInput.map((ques) => (
        <div key={ques.name}>
          <p>{ques.label}</p>
          <div className="flex flex-wrap gap-3 mt-1">
            {ques.options.map((item) => (
              <label className="flex items-center gap-1 cursor-pointer">
                <input
                  name={ques.name}
                  type="radio"
                  value={item}
                  checked={item == data[ques.name as keyof AcademicFormData]}
                  onChange={onChange}
                  disabled={disableEdit}
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

export default React.memo(AcademicInformation)
