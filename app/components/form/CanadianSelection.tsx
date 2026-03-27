import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { RiInformation2Line } from "react-icons/ri";
import Button from "../atoms/Button";

function CanadianSelection({
  canadian,
  onChange,
  onNext,
  edit,
  disableEdit,
}: {
  canadian: "true" | "false";
  onChange: inputHandler;
  onNext: () => void;
  edit?: boolean;
  disableEdit?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {!edit && (
        <div>
          <p className="font-semibold md:text-2xl text-center text-gray-900">
            A Canadian or Non-Canadian student?
          </p>
          <p className="w-md text-center text-secondary leading-relaxed">
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
            tag: "Citizen or permanent resident",
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
                isDisabled ? "cursor-not-allowed" : "cursor-pointer"
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
                  !isDisabled && isSelected &&
                    "border-primary bg-primary/10 scale-[1.02]",

                  // ✅ Default
                  !isDisabled && !isSelected &&
                    "border-slate-200 hover:border-primary/40"
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
                        isDisabled && "text-gray-400"
                      )}
                    >
                      {select.name}
                    </p>

                    <p
                      className={clsx(
                        "text-xs",
                        isDisabled
                          ? "text-gray-400"
                          : "text-secondary"
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

      {/* Info box */}
      <div
        className={clsx(
          "w-full flex gap-3 items-start border p-4 rounded-xl",
          disableEdit
            ? "bg-gray-100 border-gray-200 text-gray-400"
            : "text-gray-600 bg-primary/5 border-primary/10"
        )}
      >
        <RiInformation2Line
          className={clsx(
            "text-lg mt-0.5",
            disableEdit ? "text-gray-400" : "text-primary"
          )}
        />
        <p>
          The <span className="font-medium">CAAP</span> program is mandatory for
          non-Canadian students and will be automatically included in your
          course selection to ensure recognition by Canadian universities.
        </p>
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