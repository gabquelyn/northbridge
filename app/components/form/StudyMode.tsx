import React from "react";
import clsx from "clsx";
import { RiSchoolLine } from "react-icons/ri";
import { MdLaptopMac } from "react-icons/md";

import { RiInformation2Line } from "react-icons/ri";
export default function StudyMode({
  data,
  onChange,
  page,
}: {
  data: string;
  onChange: (e: string) => void;
  page?: boolean;
}) {
  return (
    <div className="w-full flex flex-col gap-3">
      {page ? (
        <p className="font-semibold md:text-lg text-gray-900 text-center">
          Selected Mode of Lecture Delivery
        </p>
      ) : (
        <div>
          <p className="font-semibold md:text-lg text-gray-900 text-center">
            Select Mode of Lecture Delivery
          </p>

          <p className="text-center text-secondary text-sm">
            Choose how your child will attend lectures and classes.
          </p>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-5 w-full">
        {[
          {
            name: "Online",
            icon: MdLaptopMac,
            tag: "Attend classes remotely",
            value: "off-site",
          },
          {
            name: "Offline",
            icon: RiSchoolLine,
            tag: "Physical in-person classes",
            value: "on-site",
          },
        ].map((mode) => {
          const isSelected = data === mode.value;
          return (
            <label key={mode.name} className={clsx("w-full", "cursor-pointer")}>
              <div
                className={clsx(
                  "relative border border-gray-200 bg-gray-50 rounded-2xl p-6 h-44 flex flex-col items-center justify-center text-center transition-all duration-300",
                  isSelected && "border-primary bg-primary/10 scale-[1.02]",
                )}
              >
                <input
                  type="radio"
                  name="lectureMode"
                  value={mode.value}
                  className="hidden"
                  checked={isSelected}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                />

                <div className="flex flex-col gap-2 items-center text-center">
                  <mode.icon className="text-primary text-2xl" />

                  <div>
                    <p className={clsx("font-medium")}>{mode.name}</p>

                    <p className={clsx("text-xs", "text-secondary")}>
                      {mode.tag}
                    </p>
                  </div>
                </div>
              </div>
            </label>
          );
        })}
      </div>

      {/* Info box */}
      {!page && (
        <div
          className={clsx(
            "w-full flex gap-3 items-start border p-4 rounded-xl",
            "text-gray-600 bg-primary/5 border-primary/10",
          )}
        >
          <RiInformation2Line
            className={clsx("text-lg mt-0.5", "text-primary")}
          />

          <p>
            Online students will attend classes virtually, while offline
            students will participate in physical classroom sessions and campus
            activities.
          </p>
        </div>
      )}
    </div>
  );
}
