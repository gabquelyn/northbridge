"use client";
import React from "react";
import Input from "../Input";
import PhoneInput from "react-phone-number-input";
import { useEditParent } from "@/app/hooks/useProfile";
import useNext from "@/app/hooks/useNext";
import FormNavigation from "./FormNavigation";

type ContactInfo = Pick<
  IApplicationForm,
  | "fatherFirstName"
  | "fatherLastName"
  | "fatherPhoneNumber"
  | "fatherEmail"
  | "fatherDeaceased"
  | "motherFirstName"
  | "motherLastName"
  | "motherEmail"
  | "motherPhoneNumber"
  | "motherDeaceased"
>;
function ParentInformation({
  data,
  onChange,
  phoneNumChange,
  disableEdit,
  toggleHandler,
  editMode,
  disabled,
  back,
  next,
}: {
  data: ContactInfo;
  onChange: inputHandler;
  phoneNumChange: (val: string, name?: string) => void;
  disableEdit?: boolean;
  toggleHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editMode?: boolean;
  disabled?: boolean;
  back?: Fn;
  next?: Fn;
}) {
  const f_inputs = [
    {
      name: "fatherFirstName",
      label: "First Name",
      placeholder: "John",
    },
    {
      name: "fatherLastName",
      label: "Last Name",
      placeholder: "Doe",
    },
    {
      name: "fatherEmail",
      label: "Email Address",
      placeholder: "jdoe@gmail.com",
    },
  ];

  const m_inputs = [
    {
      name: "motherFirstName",
      label: "First Name",
      placeholder: "Mae",
    },
    {
      name: "motherLastName",
      label: "Last Name",
      placeholder: "Merci",
    },
    {
      name: "motherEmail",
      label: "Email Address",
      placeholder: "maemerci@gmail.com",
    },
  ];
  const editParent = useEditParent();

  const {
    fatherFirstName,
    fatherLastName,
    fatherPhoneNumber,
    fatherEmail,
    fatherDeaceased,
    motherFirstName,
    motherLastName,
    motherEmail,
    motherPhoneNumber,
    motherDeaceased,
  } = data;

  const { isPending, saveHandler } = useNext({
    mutation: editParent,
    next,
    details: {
      fatherFirstName,
      fatherLastName,
      fatherPhoneNumber,
      fatherEmail,
      fatherDeaceased,
      motherFirstName,
      motherLastName,
      motherEmail,
      motherPhoneNumber,
      motherDeaceased,
    },
  });
  return (
    <div className="space-y-4">
      <div className="pt-5">
        {editMode ? (
          <p className="text-md text-[1rem] font-semibold">
            Father's information
          </p>
        ) : (
          <p className="text-md text-[1rem] font-semibold">
            Provide father's information or tick the checkbox if deceased
          </p>
        )}
        <label className="flex items-center w-fit gap-2">
          <p>(Deceased)</p>
          <input
            className="accent-primary cursor-pointer"
            type="checkbox"
            onChange={toggleHandler}
            name="fatherDeaceased"
            checked={data.fatherDeaceased == "true"}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {f_inputs.map((input) => (
          <Input
            key={input.name}
            name={input.name}
            value={data[input.name as keyof ContactInfo]}
            type={input.name == "email" ? "email" : "string"}
            onChange={onChange}
            placeholder={input.placeholder}
            label={input.label}
            readOnly={disableEdit || data.fatherDeaceased == "true"}
          />
        ))}
        <div className="">
          <p>Phone number</p>
          <PhoneInput
            international
            disabled={disableEdit}
            value={data.fatherPhoneNumber}
            onChange={(value) => {
              if (value) phoneNumChange(value.toString(), "fatherPhoneNumber");
            }}
            className="nb-phone-input"
            countrySelectProps={{
              className: "nb-country-select",
            }}
          />
        </div>
      </div>

      <div className="pt-5">
        {editMode ? (
          <p className="text-md text-[1rem] font-semibold">
            Mother's information
          </p>
        ) : (
          <p className="text-md text-[1rem] font-semibold">
            Provide mother's information or tick the checkbox if deceased
          </p>
        )}
        <label className="flex items-center w-fit gap-2">
          <p>(Deceased)</p>
          <input
            className="accent-primary cursor-pointer"
            type="checkbox"
            name="motherDeaceased"
            onChange={toggleHandler}
            checked={data.motherDeaceased == "true"}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {m_inputs.map((input) => (
          <Input
            key={input.name}
            name={input.name}
            value={data[input.name as keyof ContactInfo]}
            type={input.name == "email" ? "email" : "string"}
            onChange={onChange}
            placeholder={input.placeholder}
            label={input.label}
            readOnly={disableEdit || data.motherDeaceased == "true"}
          />
        ))}
        <div className="">
          <p>Phone number</p>
          <PhoneInput
            international
            disabled={disableEdit}
            value={data.motherPhoneNumber}
            onChange={(value) => {
              if (value) phoneNumChange(value.toString(), "motherPhoneNumber");
            }}
            className="nb-phone-input"
            countrySelectProps={{
              className: "nb-country-select",
            }}
          />
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

export default React.memo(ParentInformation);
