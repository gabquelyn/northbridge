import React, { useMemo } from "react";
import Input from "../Input";
import CustomSelect from "../CustomSelect";
import { Country } from "country-state-city";
import clsx from "clsx";
import Image from "next/image";
import FormNavigation from "./FormNavigation";
import { useEditCitizenship } from "@/app/hooks/useProfile";
import useNext from "@/app/hooks/useNext";
function Citizenship({
  data,
  onChange,
  setBirthCountry,
  birthCountry,
  disableEdit,
  editMode,
  disabled,
  back,
  next,
}: {
  data: IApplicationForm;
  onChange: inputHandler;
  setBirthCountry: React.Dispatch<React.SetStateAction<SelectOption | null>>;
  birthCountry: SelectOption | null;
  disableEdit?: boolean;
  editMode?: boolean;
  disabled?: boolean;
  back?: Fn;
  next?: Fn;
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
  const { canadian, language, canadianVisa, intendToApply } = data;
  const editCitizenShip = useEditCitizenship();
  const { isPending, saveHandler } = useNext({
    mutation: editCitizenShip,
    next,
    details: {
      canadian,
      language,
      canadianVisa,
      birthCountry: birthCountry?.label || "",
      intendToApply,
    },
  });

  return (
    <div className="space-y-4">
      {/* {!edit && (
        <div className="">
          <p className="text-secondary leading-relaxed">
            This determines the curriculum track, CAAP requirements, and
            available course options for your child.
          </p>
        </div>
      )} */}

      <div className="my-5 flex flex-col md:flex-row gap-5 w-full">
        {[
          {
            name: "Canadian",
            image: "/asset/flag.png",
            tag: "Student with prior Canadian education",
            value: "true",
          },
          {
            name: "Non-Canadian",
            image: "/asset/map.png",
            tag: "International student",
            value: "false",
          },
        ].map((select) => {
          const isSelected = data.canadian === select.value;
          const isDisabled = disableEdit;

          return (
            <label
              key={select.name}
              className={clsx(
                "w-full",
                isDisabled ? "cursor-not-allowed" : "cursor-pointer",
              )}
            >
              <div
                className={clsx(
                  "relative border rounded-2xl p-6 h-44 flex flex-col items-center justify-center text-center transition-all duration-300",

                  // ✅ Disabled state
                  isDisabled &&
                    "bg-gray-100 border-gray-200 opacity-60 shadow-none",

                  // ✅ Active state
                  !isDisabled && "shadow-sm hover:shadow-md",

                  // ✅ Selected
                  !isDisabled &&
                    isSelected &&
                    "border-primary bg-primary/10 scale-[1.02]",

                  // ✅ Default
                  !isDisabled &&
                    !isSelected &&
                    "border-slate-200 hover:border-primary/40",
                )}
              >
                <input
                  type="radio"
                  name="canadian"
                  value={select.value}
                  className="hidden"
                  disabled={isDisabled}
                  checked={isSelected}
                  onChange={(e) => {
                    if (isDisabled) return;
                    onChange(e);
                  }}
                />

                {/* Optional lock indicator */}
                {isDisabled && (
                  <div className="absolute top-2 right-2 text-xs text-gray-400">
                    🔒
                  </div>
                )}

                <div className="flex flex-col gap-2 items-center text-center">
                  <Image
                    src={select.image}
                    alt="flag"
                    height={20}
                    width={30}
                    className={clsx(isDisabled && "grayscale")}
                  />

                  <div>
                    <p
                      className={clsx(
                        "font-medium",
                        isDisabled && "text-gray-400",
                      )}
                    >
                      {select.name}
                    </p>
                    <p>or</p>
                    <p
                      className={clsx(
                        "text-xs",
                        isDisabled ? "text-gray-400" : "text-secondary",
                      )}
                    >
                      {select.tag}
                    </p>
                  </div>
                </div>
              </div>
            </label>
          );
        })}
      </div>

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
            readOnly={disableEdit}
          />
        ))}

        <CustomSelect
          label="Birth Country"
          option={birthCountry}
          options={countries}
          setOption={setBirthCountry}
          isDisabled={disableEdit}
        />

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
                    className="accent-primary"
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

export default React.memo(Citizenship);
