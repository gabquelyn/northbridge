import React, { useState } from "react";
import Input from "../Input";
import CustomSelect from "../CustomSelect";
import { Country } from "country-state-city";
export default function Citizenship({
  data,
  onChange,
  onCountryChange,
}: {
  data: IApplicationForm;
  onChange: inputHandler;
  onCountryChange: (val: string) => void;
}) {
  const inputs = [
    {
      name: "language",
      label: "First Language",
      placeholder: "",
    },
  ];

  const radioInput = [
    {
      name: "intendToApply",
      label: "Does student intend to apply to Canadian Universities?",
      options: ["yes", "no"],
    },
    {
      name: "canadianVisa",
      label: "Does student have a valid Canadian visa?",
        options: ["yes", "no"],
    },
  ];
  const countries = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  }));
  const [country, setCountry] = useState<SelectOption | null>(null);

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
      <CustomSelect
        label="Birth Country"
        option={country}
        options={countries}
        setOption={(e) => {
          setCountry(e);
          onCountryChange(e?.label || "");
        }}
      />

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
