import React from "react";
import Input from "../Input";
import PhoneInput from "react-phone-number-input";
import DateManager from "./DateManager";
import FormNavigation from "./FormNavigation";
import { useEditContact } from "@/app/hooks/useProfile";
import useNext from "@/app/hooks/useNext";

type ContactInfo = Pick<
  IApplicationForm,
  | "firstName"
  | "middleName"
  | "lastName"
  | "email"
  | "canadian"
  | "phoneNumber"
  | "dob"
  | "gender"
>;
function ContactInformation({
  data,
  onChange,
  phoneNumChange,
  disableEdit,
  onDateChange,
  disabled,
  back,
  next,
  editMode,
}: {
  data: ContactInfo;
  onChange: inputHandler;
  phoneNumChange: (val: string) => void;
  disableEdit?: boolean;
  onDateChange: (name: string, value: string) => void;
  disabled?: boolean;
  back?: Fn;
  next?: Fn;
  editMode?: boolean;
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

  const radioInput = [
    {
      name: "gender",
      label: "Student Gender",
      options: ["M", "F"],
    },
  ];
  const editContact = useEditContact();
  const { gender, dob, firstName, middleName, phoneNumber, email, lastName } =
    data;

  const { isPending, saveHandler } = useNext({
    mutation: editContact,
    next,
    details: {
      gender,
      dob,
      firstName,
      middleName,
      phoneNumber,
      email,
      lastName,
    },
  });

  return (
    <div>
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
            readOnly={disableEdit}
          />
        ))}
        <div className="flex flex-col gap-1 col-span-1 md:col-span-2">
          <p>Phone number</p>
          <PhoneInput
            international
            disabled={disableEdit}
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
        <DateManager
          label="Date of birth"
          name="dob"
          value={data.dob}
          onDateChange={onDateChange}
        />
        <div>
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
                      className="accent-primary"
                      checked={item == data[ques.name as keyof ContactInfo]}
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
      </div>
      {!editMode && (
        <FormNavigation
          pending={isPending}
          disabled={disabled}
          next={saveHandler}
          back={back}
        />
      )}
    </div>
  );
}

export default React.memo(ContactInformation);
