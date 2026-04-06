"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import moment from "moment";

function Programs({
  data,
  programChange,
  canadian,
  disableEdit,
  applied,
  enrol,
  enrolling,
}: {
  data: Programs[];
  programChange: (program: Programs, checked: boolean) => void;
  canadian: boolean;
  disableEdit?: boolean;
  applied?: Programs[];
  enrol?: Fn;
  enrolling?: boolean;
}) {
  const programs = [
    {
      image: "/asset/caap.png",
      name: "Canadian Academic Alignment Program",
      description:
        "Don't repeat a year—align it. CAAP recognizes your prior learning to fast-track your success in Canadian education.",
      value: "CAAP",
    },

    {
      image: "/asset/grade11.png",
      name: "Grade 11 OSSD",
      description:
        "Ideal for students prepared to begin Ontario curriculum-based secondary studies following Grade 10-level education",
      value: "GRADE11",
    },
    {
      image: "/asset/grade12.png",
      name: "Grade 12 OSSD",
      description:
        "30+ Grade 12 Courses Choose from a wide variety of Ontario-standard curriculum options tailored to your interests.",
      value: "GRADE12",
    },
    {
      image: "/asset/cup.png",
      name: "Direct Entry",
      description:
        "Designed for transitional learners who have completed WAEC or GSCE and are ready to continue their education in Canada",
      value: "DIRECT",
    },
    {
      image: "/asset/ay12.png",
      name: "Advantage Year 12 (AY12) + Grade 12",
      description:
        "30+ Grade 12 Courses Choose from a wide variety of Ontario-standard curriculum options tailored to your interests.",
      value: "AY12",
    },
  ];
  const now = moment();
  const current = now.format("MM-DD");
  const isWithinRange = current >= "11-01" && current <= "12-15";
  return (
    <div>
      {!canadian && (
        <p className="text-secondary italic mb-3">
          CAAP is compulsory for non-Canadian students (starting point)
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {programs.map((program) => {
          const isSelected = data.includes(program.value as Programs);
          const isLocked =
            (!canadian && program.value === "CAAP") ||
            (disableEdit && applied?.includes(program.value as Programs));
          const isDisabled = program.value === "AY12" && !isWithinRange;

          return (
            <label
              key={program.name}
              className={clsx(
                "w-full",
                isDisabled || isLocked
                  ? "cursor-not-allowed"
                  : "cursor-pointer",
              )}
            >
              <div
                className={clsx(
                  "relative border rounded-2xl p-6 h-44 flex flex-col items-center justify-center text-center transition-all duration-300",

                  // 🔒 Disabled (global)
                  isDisabled &&
                    "bg-gray-100 border-gray-200 opacity-60 shadow-none",

                  // 🔒 Locked CAAP (looks active, not faded)
                  isLocked && "border-primary bg-primary/10",

                  // ✅ Active hover
                  !isDisabled && !isLocked && "shadow-sm hover:shadow-md",

                  // ✅ Selected
                  !isDisabled &&
                    isSelected &&
                    "border-primary bg-primary/10 scale-[1.02]",

                  // ✅ Default
                  !isDisabled &&
                    !isSelected &&
                    !isLocked &&
                    "border-slate-200 hover:border-primary/40 bg-[#F9FAFB]",
                )}
              >
                <input
                  type="checkbox"
                  value={program.value}
                  checked={isSelected}
                  disabled={isDisabled}
                  className="hidden"
                  onChange={(e) => {
                    if (isDisabled) return;
                    // ❌ prevent CAAP removal
                    if (isLocked && !e.target.checked) return;

                    programChange(program.value as Programs, e.target.checked);
                  }}
                />

                {/* Disabled lock */}
                {isLocked && (
                  <div className="absolute top-2 right-2 text-xs text-gray-400">
                    🔒
                  </div>
                )}

                {/* Required badge */}
                {isDisabled && (
                  <div className="absolute top-2 right-2 text-[10px] text-primary bg-white px-2 py-0.5 rounded-full border">
                    Next Application Cycle Nov. 1 - Dec. 15
                  </div>
                )}

                <div className="flex flex-col gap-2 items-center text-center">
                  <Image
                    src={program.image}
                    alt="program"
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
                      {program.name}
                    </p>

                    <p
                      className={clsx(
                        "text-xs",
                        isDisabled ? "text-gray-400" : "text-secondary",
                      )}
                    >
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      {disableEdit && (
        <div className="flex justify-center mt-5">
          <button className="action w-full md:w-sm" onClick={enrol}>
            {enrolling ? (
              <ClipLoader size={15} color="#479da5" />
            ) : (
              <p>Enrol</p>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default React.memo(Programs);
