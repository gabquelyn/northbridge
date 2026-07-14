"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import CanadianSelection from "./CanadianSelection";
import StepProgress from "@/app/online-learners/components/StepProgress";
import ContactInformation from "./ContactInformation";
import Mailing from "./Mailing";
import AcademicInformation from "./AcademicInformation";
import Citizenship from "./Citizenship";
import Document from "./Document";
import Programs from "./Programs";
import genericInputHandler from "@/app/utils/genericInputHandler";
import Cartitem from "../Cartitem";
import ApplicationPreview from "./ApplicationPreview";
import TermsAndConditions from "./Consent";
import { ClipLoader } from "react-spinners";
import Modal from "../Modal";
import FormNavigation from "./FormNavigation";
import Button from "../atoms/Button";
import StudyMode from "./StudyMode";
import ParentInformation from "./ParentInformation";
import clsx from "clsx";
import sections from "@/app/utils/sections";

export default function ApplicationForm({
  applicationHandler,
  details,
  setDetails,
  setLocation,
  location,
  documents,
  setDocuments,
  programs,
  setPrograms,
  setBirthCountry,
  setMode,
  birthCountry,
  isPending,
  mode,
  page,
  uploaded,
  disableEdit,
  editHandler,
  selectedCourses,
  removeSelected,
  appliedPrograms,
  enrol,
  enrolling,
  isAdmin,
  setHearAboutUs,
  aboutUs,
  incompleteSections,
}: {
  applicationHandler?: Fn;
  details: IApplicationForm;
  setMode: React.Dispatch<React.SetStateAction<string>>;
  setDetails: React.Dispatch<React.SetStateAction<IApplicationForm>>;
  setLocation: React.Dispatch<React.SetStateAction<LocationData>>;
  location: LocationData;
  documents: Record<string, File[]> | undefined;
  setDocuments: React.Dispatch<
    React.SetStateAction<Record<string, File[]> | undefined>
  >;
  programs: Programs[];
  setPrograms: React.Dispatch<React.SetStateAction<Programs[]>>;
  setBirthCountry: React.Dispatch<React.SetStateAction<SelectOption | null>>;
  birthCountry: SelectOption | null;
  isPending: boolean;
  mode: string;
  page?: boolean;
  disableEdit?: boolean;
  uploaded?: {
    [index: string]: DocumentFile[];
  };
  editHandler?: Fn;
  selectedCourses?: number[];
  removeSelected?: (id: number) => void;
  appliedPrograms?: Programs[];
  enrol?: Fn;
  enrolling?: boolean;
  isAdmin?: boolean;
  setHearAboutUs: React.Dispatch<React.SetStateAction<SelectOption | null>>;
  aboutUs: SelectOption | null;
  incompleteSections?: number[];
}) {
  const [step, setCurrentStep] = useState(0);
  const [nextDisabled, setNextDisabled] = useState(false);
  const onChange = useCallback(genericInputHandler(setDetails), [setDetails]);
  const contactData = useMemo(
    () => ({
      firstName: details.firstName,
      middleName: details.middleName,
      lastName: details.lastName,
      email: details.email,
      canadian: details.canadian,
      phoneNumber: details.phoneNumber,
    }),
    [
      details.firstName,
      details.middleName,
      details.lastName,
      details.email,
      details.canadian,
      details.phoneNumber,
    ],
  );

  const parentData = useMemo(
    () => ({
      fatherFirstName: details.fatherFirstName,
      fatherLastName: details.fatherLastName,
      fatherEmail: details.fatherEmail,
      fatherPhoneNumber: details.fatherPhoneNumber,
      fatherDeaceased: details.fatherDeaceased,
      motherFirstName: details.motherFirstName,
      motherLastName: details.motherLastName,
      motherEmail: details.motherEmail,
      motherPhoneNumber: details.motherPhoneNumber,
      motherDeaceased: details.motherDeaceased,
    }),
    [
      details.fatherFirstName,
      details.fatherLastName,
      details.fatherPhoneNumber,
      details.fatherDeaceased,
      details.motherFirstName,
      details.motherLastName,
      details.motherEmail,
      details.fatherEmail,
      details.motherPhoneNumber,
      details.motherDeaceased,
    ],
  );
  const beginRegistration = useCallback(
    () => setCurrentStep(1),
    [setCurrentStep],
  );

  const academicInformationData = useMemo(
    () => ({
      dob: details.dob,
      currentSchool: details.currentSchool,
      homeSchool: details.homeSchool,
      secondaryEntry: details.secondaryEntry,
      qualification: details.qualification,
      pathway: details.pathway,
      gender: details.gender,
      completedSecondaryDiploma: details.completedSecondaryDiploma,
    }),
    [
      details.dob,
      details.currentSchool,
      details.homeSchool,
      details.secondaryEntry,
      details.qualification,
      details.pathway,
      details.gender,
      details.completedSecondaryDiploma,
    ],
  );
  const phoneNumChange = useCallback(
    (val: string, name = "phoneNumber") => {
      if (disableEdit) return;
      setDetails((prev) => ({ ...prev, [name]: val }));
    },
    [setDetails],
  );

  // Next button controller
  useEffect(() => {
    if (step == 0) {
      if (!aboutUs) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }
    if (step == 1) {
      if (mode) setNextDisabled(false);
      else {
        setNextDisabled(true);
      }
    }
    if (step == 2) {
      const { firstName, lastName, email, phoneNumber } = details;
      if (!firstName || !lastName || !email || !phoneNumber) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }

    if (step == 3) {
      const { street } = details;
      if (
        !location?.country ||
        !location?.state ||
        !location?.city ||
        !street
      ) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }

    if (step == 4) {
      const {
        motherDeaceased,
        motherFirstName,
        motherLastName,
        motherEmail,
        motherPhoneNumber,
        fatherDeaceased,
        fatherFirstName,
        fatherLastName,
        fatherEmail,
        fatherPhoneNumber,
      } = details;

      const fatherAlive = fatherDeaceased === "false";
      const motherAlive = motherDeaceased === "false";

      const fatherIncomplete =
        !fatherFirstName ||
        !fatherLastName ||
        !fatherPhoneNumber ||
        !fatherEmail;

      const motherIncomplete =
        !motherFirstName ||
        !motherLastName ||
        !motherPhoneNumber ||
        !motherEmail;

      setNextDisabled(
        (fatherAlive && fatherIncomplete) || (motherAlive && motherIncomplete),
      );
    }

    if (step == 5) {
      const {
        dob,
        currentSchool,
        homeSchool,
        secondaryEntry,
        pathway,
        gender,
        completedSecondaryDiploma,
      } = details;
      if (
        !dob ||
        !currentSchool ||
        !homeSchool ||
        !secondaryEntry ||
        !pathway ||
        !gender ||
        !completedSecondaryDiploma
      ) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }

    if (step == 6) {
      const { language, intendToApply, canadianVisa } = details;
      if (
        !language ||
        !birthCountry?.label ||
        !intendToApply ||
        !canadianVisa
      ) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }

    if (step == 7) {
      if (
        !documents?.passport ||
        documents?.passport?.length == 0 ||
        !documents?.transcripts ||
        documents?.transcripts?.length == 0 ||
        !documents?.govId ||
        documents?.govId?.length == 0 ||
        !documents?.birthCert ||
        documents?.birthCert?.length == 0
      ) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }
  }, [details, step, documents]);

  // const PROGRAM_ORDER: Programs[] = ["CAAP", "GRADE11", "GRADE12", "AY12"];
  const toggleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name == "fatherDeaceased" && checked) {
      setDetails((prev) => ({
        ...prev,
        fatherFirstName: "",
        fatherLastName: "",
        fatherEmail: "",
        fatherPhoneNumber: "",
      }));
    }
    if (name == "motherDeaceased" && checked) {
      setDetails((prev) => ({
        ...prev,
        motherFirstName: "",
        motherLastName: "",
        motherEmail: "",
        motherPhoneNumber: "",
      }));
    }
    setDetails((prev) => ({ ...prev, [name]: `${checked}` }));
  };
  const programChnageHandler = useCallback(
    (program: Programs, checked: boolean) => {
      // const index = PROGRAM_ORDER.indexOf(program);
      // const isCanadian = details.canadian === "true";
      const complementary: Programs[] = ["DIRECT", "CAAP"];
      setPrograms((prev) => {
        if (checked) {
          if (complementary.includes(program))
            return [...prev.filter((p) => complementary.includes(p)), program];
          else {
            return [program];
          }
        }
        return prev.filter((p) => p !== program);
      });
    },
    [details.canadian],
  );

  const goBack = useCallback(() => {
    if (step > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [setCurrentStep, step]);

  const goNext = useCallback(() => {
    if (step < 9) setCurrentStep((prev) => prev + 1);
  }, [setCurrentStep, step]);

  if (isPending) {
    return (
      <Modal>
        <div className="flex items-center justify-center">
          <ClipLoader />
        </div>
      </Modal>
    );
  }

  return (
    <section className="bg-[#f2f2f2]">
      {/* mobile */}
      {!page && (
        <nav className="sticky top-0 z-10 mb-2 flex gap-1 overflow-x-auto bg-white p-3 shadow md:hidden">
          {sections.map((label, i) => (
            <button
              key={label}
              onClick={() => setCurrentStep(i)}
              className={clsx(
                "flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3 py-2 text-sm transition-colors",
                step === i
                  ? "bg-secondary/10 font-semibold text-secondary"
                  : incompleteSections?.includes(i)
                    ? "text-red-500"
                    : "text-gray-500",
              )}
            >
              <span
                className={clsx(
                  "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.65rem]",
                  step === i
                    ? "bg-secondary text-white"
                    : "bg-gray-100 text-gray-400",
                )}
              >
                {i + 1}
              </span>
              {label}
            </button>
          ))}
        </nav>
      )}

      {/* desktop sidebar — fixed to the viewport's left edge */}
      {!page && (
        <aside className="hidden md:fixed md:inset-y-0 md:left-0 md:z-20 md:flex md:w-[280px] md:flex-col md:overflow-y-auto md:bg-white md:p-4 md:shadow-lg">
          <nav className="flex flex-col gap-1 pt-24">
            {sections.map((label, i) => (
              <button
                key={label}
                onClick={() => setCurrentStep(i)}
                className={clsx(
                  "flex items-center gap-3 rounded-lg px-4 cursor-pointer py-2.5 text-left text-sm transition-colors",
                  step === i
                    ? "bg-secondary/10 font-semibold text-secondary"
                    : incompleteSections?.includes(i)
                      ? "text-red-500"
                      : "text-gray-500 hover:bg-gray-50",
                )}
              >
                <span
                  className={clsx(
                    "flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.65rem]",
                    step === i
                      ? "bg-secondary text-white"
                      : "bg-gray-100 text-gray-400",
                  )}
                >
                  {i + 1}
                </span>
                {label}
              </button>
            ))}
          </nav>
        </aside>
      )}

      <div className="flex flex-col gap-2 items-center justify-center">
        {/* {!page && step > 0 && (
          <div className="mb-5 w-full">
            <StepProgress
              steps={Array.from({ length: 11 })}
              currentStep={step}
            />
          </div>
        )} */}

        {page ? (
          <div className="md:w-4xl flex flex-col gap-20 py-12 p-5 md:py-15 md:p-15 bg-white md:rounded-2xl shadow text-sm">
            <ContactInformation
              data={contactData}
              onChange={onChange}
              phoneNumChange={phoneNumChange}
              disableEdit={disableEdit}
            />

            <ParentInformation
              data={parentData}
              onChange={onChange}
              phoneNumChange={phoneNumChange}
              toggleHandler={toggleHandler}
              edit
            />

            <CanadianSelection
              canadian={details.canadian}
              onChange={onChange}
              onNext={beginRegistration}
              edit
              disableEdit={disableEdit}
              setHearAboutUs={setHearAboutUs}
              option={aboutUs}
            />

            <StudyMode data={mode} onChange={setMode} page />

            <Mailing
              setLocation={setLocation}
              unit={details.unit}
              street={details.street}
              onChange={onChange}
              location={location}
              disableEdit={disableEdit}
            />
            <AcademicInformation
              data={academicInformationData}
              onChange={onChange}
              disableEdit={disableEdit}
              onDateChange={(name, value) =>
                setDetails((prev) => ({ ...prev, [name]: value }))
              }
            />
            <Citizenship
              data={details}
              onChange={onChange}
              setBirthCountry={setBirthCountry}
              birthCountry={birthCountry}
              disableEdit={disableEdit}
            />
            <Document
              setFiles={setDocuments}
              filesGroups={documents}
              uploaded={uploaded}
              disableEdit={disableEdit}
            />
            <>
              {mode === "off-site" ? (
                <Cartitem
                  selected={selectedCourses}
                  disableEdit={disableEdit}
                  removeSelected={removeSelected}
                  editMode={page}
                />
              ) : (
                <Programs
                  data={programs}
                  canadian={details.canadian == "true"}
                  programChange={programChnageHandler}
                  disableEdit={disableEdit}
                  applied={appliedPrograms}
                  enrol={enrol}
                  enrolling={enrolling}
                />
              )}
            </>
            <div className="">
              {!disableEdit && (
                <div className="flex justify-end">
                  <Button disabled={disableEdit} onClick={editHandler}>
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="w-full md:w-3xl p-5 md:p-15 py-15 bg-white rounded-2xl shadow text-sm">
            {step > 0 && (
              <div className="mb-5 font-semibold text-secondary text-xl">
                <p>
                  {
                    [
                      "",
                      "",
                      "Student Contact Information",
                      "Mailing Address",
                      "Parent's Information",
                      "Academic Information",
                      "Citizenship Information",
                      "Documents",
                      "Programs",
                      "Terms and Conditions",
                    ][step]
                  }
                </p>
                <hr className="border border-gray-100 mt-2" />
              </div>
            )}
            {step == 0 ? (
              <CanadianSelection
                canadian={details.canadian}
                onChange={onChange}
                onNext={beginRegistration}
                option={aboutUs}
                setHearAboutUs={setHearAboutUs}
              />
            ) : step == 1 ? (
              <StudyMode data={mode} onChange={setMode} />
            ) : step == 2 ? (
              <ContactInformation
                data={contactData}
                onChange={onChange}
                phoneNumChange={phoneNumChange}
              />
            ) : step == 3 ? (
              <Mailing
                setLocation={setLocation}
                unit={details.unit}
                street={details.street}
                onChange={onChange}
                location={location}
              />
            ) : step == 4 ? (
              <ParentInformation
                data={parentData}
                onChange={onChange}
                phoneNumChange={phoneNumChange}
                toggleHandler={toggleHandler}
              />
            ) : step == 5 ? (
              <AcademicInformation
                data={academicInformationData}
                onChange={onChange}
                onDateChange={(name, value) =>
                  setDetails((prev) => ({ ...prev, [name]: value }))
                }
              />
            ) : step == 6 ? (
              <Citizenship
                data={details}
                onChange={onChange}
                setBirthCountry={setBirthCountry}
                birthCountry={birthCountry}
              />
            ) : step == 7 ? (
              <Document setFiles={setDocuments} filesGroups={documents} />
            ) : step == 8 ? (
              <>
                {mode === "off-site" ? (
                  <Cartitem editMode />
                ) : (
                  <Programs
                    data={programs}
                    canadian={details.canadian == "true"}
                    programChange={programChnageHandler}
                  />
                )}
              </>
            ) : step == 9 ? (
              <TermsAndConditions
                onBack={() => setCurrentStep((prev) => prev - 1)}
                submitHandler={applicationHandler}
              />
            ) : (
              ""
            )}

            <FormNavigation
              step={step}
              disabled={nextDisabled}
              mode={mode}
              back={goBack}
              next={goNext}
            />
          </div>
        )}
      </div>
    </section>
  );
}
