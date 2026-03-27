import React from "react";
import Input from "../Input";
import PhoneInput from "react-phone-number-input";

type ContactInfo = Pick<
  IApplicationForm,
  "firstName" | "middleName" | "lastName" | "email" | "canadian" | "phoneNumber"
>;
function ContactInformation({
  data,
  onChange,
  phoneNumChange,
  disableEdit
}: {
  data: ContactInfo;
  onChange: inputHandler;
  phoneNumChange: (val: string) => void;
  disableEdit?:boolean
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {inputs.map((input) => (
        <Input
          key={input.name}
          name={input.name}
          value={data[input.name as keyof ContactInfo]}
          type={input.name == "email" ? "email" : "string"}
          onChange={onChange}
          placeholder={input.placeholder}
          label={input.label}
          readOnly = {disableEdit}
        />
      ))}
      <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
        <p>Phone number</p>
        <PhoneInput
          international
          disabled = {disableEdit}
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

export default React.memo(ContactInformation);
