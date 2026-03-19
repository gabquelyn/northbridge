"use client";
import React, { useState } from "react";
import CanadianSelection from "./CanadianSelection";
import StepProgress from "@/app/online-learners/components/StepProgress";
import ContactInformation from "./ContactInformation";
import { MdOutlineArrowForward, MdOutlineArrowBack } from "react-icons/md";

import Button from "../atoms/Button";
import Mailing from "./Mailing";
import AcademicInformation from "./AcademicInformation";
import Citizenship from "./Citizenship";
import Document from "./Document";
import Programs from "./Programs";
import { isCancel } from "axios";

export default function ApplicationForm() {
  const [details, setDetails] = useState<IApplicationForm>({
    canadian: "false",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    state: "",
    street: "",
    unit: "",
    dob: "",
    homeSchool: "",
    currentSchool: "",
    secondaryEntry: "",
    gender: "",
    completedSecondaryDiploma: "",
    qualification: "",
    language: "",
    intendToApply: "",
    canadianVisa: "",
  });

  const [step, setCurrentStep] = useState(0);
  const [programs, setPrograms] = useState<Programs[]>(["CAAP"]);
  const genericInputHandler: inputHandler = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };
  const PROGRAM_ORDER: Programs[] = ["CAAP", "GRADE11", "GRADE12", "AY12"];
  return (
    <section className="flex bg-[#f2f2f2] items-center justify-center min-h-screen">
      <div>
        {step > 0 && (
          <div className="mb-5">
            <StepProgress
              steps={Array.from({ length: 7 })}
              currentStep={step}
            />
          </div>
        )}

        <div className="w-3xl p-15 bg-white rounded-2xl shadow text-sm">
          {step > 0 && (
            <div className="mb-5 font-semibold text-secondary text-xl">
              <p>
                {
                  [
                    "",
                    "Student Contact Information",
                    "Mailing Address",
                    "Academic Information",
                    "Citizenship Information",
                    "Documents",
                    "Programs",
                  ][step]
                }
              </p>
              <hr className="border border-gray-100 mt-2" />
            </div>
          )}
          {step == 0 ? (
            <CanadianSelection
              canadian={details.canadian}
              onChange={genericInputHandler}
              onNext={() => setCurrentStep(1)}
            />
          ) : step == 1 ? (
            <ContactInformation
              data={details}
              onChange={genericInputHandler}
              phoneNumChange={(val: string) => {}}
            />
          ) : step == 2 ? (
            <Mailing
              setLocation={(name, val) =>
                setDetails((prev) => ({ ...prev, [name]: val }))
              }
              data={details}
              onChange={genericInputHandler}
            />
          ) : step == 3 ? (
            <AcademicInformation
              data={details}
              onChange={genericInputHandler}
            />
          ) : step == 4 ? (
            <Citizenship
              data={details}
              onChange={genericInputHandler}
              onCountryChange={(e) =>
                setDetails((prev) => ({ ...prev, country: e }))
              }
            />
          ) : step == 5 ? (
            <Document />
          ) : step == 6 ? (
            <Programs
              data={programs}
              canadian={details.canadian == "true"}
              programChange={(program: Programs, checked: boolean) => {
                const index = PROGRAM_ORDER.indexOf(program);
                const isCanadian = details.canadian === "true";

                setPrograms((prev) => {
                  // 🔒 Non-Canadian → CAAP locked
                  if (index === 0 && !isCanadian) {
                    return prev;
                  }

                  // ✅ Canadian → CAAP acts independently
                  if (index === 0 && isCanadian) {
                    if (checked) {
                      return [...new Set(["CAAP" as Programs, ...prev])];
                    } else {
                      return prev.filter((p) => p !== "CAAP");
                    }
                  }

                  if (checked) {
                    return PROGRAM_ORDER.slice(0, index + 1);
                  }

                  // ✅ Remove selected and below, BUT don't touch CAAP
                  return prev.filter((p) => {
                    if (p === "CAAP") return true;
                    return PROGRAM_ORDER.indexOf(p) < index;
                  });
                });
              }}
            />
          ) : (
            ""
          )}
          {step >= 1 && (
            <div>
              <div className="mt-8 flex justify-between">
                <Button
                  className="bg-white"
                  onClick={() => {
                    if (step > 0) {
                      setCurrentStep((prev) => prev - 1);
                    }
                  }}
                >
                  <p className="flex gap-2 items-center px-5">
                    <span>Prev</span>
                    <MdOutlineArrowBack />
                  </p>
                </Button>
                <Button
                  onClick={() => {
                    if (step < 6) setCurrentStep((prev) => prev + 1);
                  }}
                >
                  <p className="flex gap-2 items-center px-5">
                    <span>Continue</span>
                    <MdOutlineArrowForward />
                  </p>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
