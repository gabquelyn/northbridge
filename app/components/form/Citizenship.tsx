import React, { useMemo } from "react";
import Input from "../Input";
import CustomSelect from "../CustomSelect";
import { Country } from "country-state-city";
function Citizenship({
  data,
  onChange,
  setBirthCountry,
  birthCountry,
  disableEdit
}: {
  data: IApplicationForm;
  onChange: inputHandler;
  setBirthCountry: React.Dispatch<React.SetStateAction<SelectOption | null>>;
  birthCountry: SelectOption | null;
  disableEdit?: boolean
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
      options: ["true", "false"],
    },
    {
      name: "canadianVisa",
      label: "Does student have a valid Canadian visa?",
      options: ["true", "false"],
    },
  ];

  const countries = useMemo(
    () =>
      Country.getAllCountries().map((country) => ({
        label: country.name,
        value: country.isoCode,
      })),
    [],
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          readOnly = {disableEdit}
        />
      ))}

      <CustomSelect
        label="Birth Country"
        option={birthCountry}
        options={countries}
        setOption={setBirthCountry}
        isDisabled= {disableEdit}
      />

      {radioInput.map((ques) => (
        <div key={ques.name}>
          <p>{ques.label}</p>
          <div className="flex flex-wrap gap-3 mt-1">
            {ques.options.map((item) => (
              <label className="flex items-center gap-1 cursor-pointer" key ={item}>
                <input
                  name={ques.name}
                  type="radio"
                  value={item}
                  checked={item == data[ques.name as keyof IApplicationForm]}
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

export default React.memo(Citizenship);
