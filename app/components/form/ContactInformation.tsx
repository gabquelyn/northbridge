import React from "react";
import Input from "../Input";
import PhoneInput from "react-phone-number-input";

export default function ContactInformation({
  data,
  onChange,
  phoneNumChange,
}: {
  data: IApplicationForm;
  onChange: inputHandler;
  phoneNumChange: (val: string) => void;
}) {
  const inputs = [
    {
      name: "firstName",
      label: "Legal First Name",
      placeholder: "Kate",
    },
    {
      name: "middleName",
      label: "Middle Name",
      placeholder: "Perry",
    },
    {
      name: "lastName",
      label: "Legal Last Name",
      placeholder: "Kate",
    },
    {
      name: "email",
      label: "Email Address",
      placeholder: "kteyperry@gmail.com",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4">
      {inputs.map((input) => (
        <Input
          key={input.name}
          name={input.name}
          value={data[input.name as keyof IApplicationForm]}
          type={input.name == "email" ? "email" : "string"}
          onChange={onChange}
          placeholder={input.placeholder}
          label={input.label}
        />
      ))}
      <div className="flex flex-col gap-1 col-span-2">
        <p>Phone number</p>
        <PhoneInput
          international
          defaultCountry={data.canadian == "true" ? "CA" : "NG"}
          value={data.phoneNumber}
          onChange={(value) => {
            if (value) phoneNumChange(value.toString());
          }}
          className="nb-phone-input"
          countrySelectProps={{
            className: "nb-country-select",
          }}
        />
      </div>
    </div>
  );
}
