"use client";
import React from "react";
import Input from "../Input";
import DateManager from "./DateManager"
const inputs = [
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
  disableEdit,
  onDateChange
}: {
  data: AcademicFormData;
  onChange: inputHandler;
  disableEdit?: boolean;
  onDateChange: (name: string, value: string) => void
}) {
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      <DateManager label="Date of birth" name = "dob" value ={data.dob} onDateChange={onDateChange}/>
      <DateManager label="Date of Entry in Secondary" name = "secondaryEntry" value ={data.secondaryEntry} onDateChange={onDateChange}/>
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
              <label
                className="flex items-center gap-1 cursor-pointer"
                key={item}
              >
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

export default React.memo(AcademicInformation);
