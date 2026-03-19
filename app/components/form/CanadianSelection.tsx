import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { RiInformation2Line } from "react-icons/ri";
import Button from "../atoms/Button";

export default function CanadianSelection({
  canadian,
  onChange,
  onNext
}: {
  canadian: "true" | "false";
  onChange: inputHandler;
  onNext: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>
        <p className="font-semibold md:text-2xl text-center text-gray-900">
          A Canadian or Non-Canadian student?
        </p>
        <p className="w-md text-center text-secondary leading-relaxed">
          This determines the curriculum track, CAAP requirements, and available
          course options for your child.
        </p>
      </div>
      <div className="my-5 flex gap-5 w-full">
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
        ].map((select) => (
          <label className="w-full cursor-pointer" key={select.name}>
            <div
              className={clsx(
                "relative border rounded-2xl p-6 h-44 flex flex-col items-center justify-center text-center transition-all duration-300",
                "shadow-sm hover:shadow-md",
                canadian === select.value
                  ? "border-primary bg-primary/10 scale-[1.02]"
                  : "border-slate-200 hover:border-primary/40",
              )}
            >
              <input
                type="radio"
                name="canadian"
                value={select.value}
                className="hidden"
                onChange={onChange}
              />
              <div className="flex items-center flex-col gap-2 justify-center text-center">
                <Image src={select.image} alt="flag" height={20} width={30} />
                <div>
                  <p >{select.name}</p>
                  <p className="text-secondary text-xs">{select.tag}</p>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
      <div className="w-full flex gap-3 items-start text-gray-600 bg-primary/5 border border-primary/10 p-4 rounded-xl">
        <RiInformation2Line className="text-primary text-lg mt-0.5" />
        <p>
          The <span className="font-medium text-gray-800">CAAP</span> program is
          mandatory for non-Canadian students and will be automatically included
          in your course selection to ensure recognition by Canadian
          universities.
        </p>
      </div>

      <div className="flex w-full items-center justify-between">
        <p className="text-secondary test-xs">
          Proceed to the next step
          <br /> <span className="text-black">Begin application</span>
        </p>

        <Button onClick={onNext}>
          <p>Continue</p>
        </Button>
      </div>
    </div>
  );
}
