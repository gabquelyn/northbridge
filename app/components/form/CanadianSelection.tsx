import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { RiInformationLine } from "react-icons/ri";
import Button from "../atoms/Button";
import CustomSelect from "../CustomSelect";

function CanadianSelection({
  canadian,
  onChange,
  onNext,
  edit,
  disableEdit,
  option,
  setHearAboutUs,
}: {
  canadian: "true" | "false";
  onChange: inputHandler;
  onNext: () => void;
  edit?: boolean;
  disableEdit?: boolean;
  option: SelectOption | null;
  setHearAboutUs: React.Dispatch<React.SetStateAction<SelectOption | null>>;
}) {
  const hearAboutUsOptions = [
    { label: "Social media", value: "social_media" },
    { label: "Friend or family", value: "friend_or_family" },
    { label: "Google search", value: "google_search" },
    { label: "School", value: "school" },
    { label: "Teacher/Lecturer", value: "teacher_lecturer" },
    { label: "Advertisement", value: "advertisement" },
    { label: "Event or seminar", value: "event_or_seminar" },
    { label: "Email", value: "email" },
    { label: "Website", value: "website" },
    { label: "WhatsApp", value: "whatsapp" },
    { label: "LinkedIn", value: "linkedin" },
    { label: "Instagram", value: "instagram" },
    { label: "Facebook", value: "facebook" },
    { label: "X (Twitter)", value: "x_twitter" },
    { label: "YouTube", value: "youtube" },
    { label: "Other", value: "other" },
  ];
  return (
    <div className="space-y-4">
      {!edit && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold md:text-lg text-center text-gray-900">
            A Canadian or Non-Canadian student?
          </p>
          <p className="md:w-md text-center text-secondary leading-relaxed">
            This determines the curriculum track, CAAP requirements, and
            available course options for your child.
          </p>
        </div>
      )}

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
          const isSelected = canadian === select.value;
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


      <div>
        <CustomSelect
          label="How did you hear about us?"
          option={option}
          options={hearAboutUsOptions}
          setOption={setHearAboutUs}
        />
      </div>

      {!edit && (
        <div className="flex w-full items-center justify-between">
          <p className="text-secondary text-xs">
            Proceed to the next step
            <br /> <span className="text-black">Begin application</span>
          </p>

          <Button onClick={onNext} disabled={disableEdit}>
            <p>Continue</p>
          </Button>
        </div>
      )}
    </div>
  );
}

export default React.memo(CanadianSelection);
