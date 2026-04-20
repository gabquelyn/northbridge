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
}: {
  applicationHandler?: Fn;
  details: IApplicationForm;
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
}) {
  const [step, setCurrentStep] = useState(mode === "off-site" ? 1 : 0);
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
    (val: string) => {
      if (disableEdit) return;
      setDetails((prev) => ({ ...prev, phoneNumber: val }));
    },
    [setDetails],
  );

  // Next button controller
  useEffect(() => {
    if (step == 1) {
      const { firstName, lastName, email, phoneNumber } = details;
      if (!firstName || !lastName || !email || !phoneNumber) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }

    if (step == 2) {
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

    if (step == 3) {
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

    if (step == 4) {
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

    if (step == 5) {
      if (
        !documents?.passport ||
        documents?.passport?.length == 0 ||
        !documents?.transcripts ||
        documents?.transcripts?.length == 0 ||
        !documents?.govId ||
        documents?.govId?.length == 0
      ) {
        setNextDisabled(true);
      } else {
        setNextDisabled(false);
      }
    }
  }, [details, step, documents]);

  // const PROGRAM_ORDER: Programs[] = ["CAAP", "GRADE11", "GRADE12", "AY12"];

  const programChnageHandler = useCallback(
    (program: Programs, checked: boolean) => {
      // const index = PROGRAM_ORDER.indexOf(program);
      // const isCanadian = details.canadian === "true";

      setPrograms((prev) => {
        if (checked) {
          return [...prev, program];
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
    if (step < 8) setCurrentStep((prev) => prev + 1);
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
      <div className="flex flex-col gap-2 items-center justify-center">
        {!page && step > 0 && (
          <div className="mb-5 w-full">
            <StepProgress
              steps={Array.from({ length: mode == "off-site" ? 8 : 9 })}
              currentStep={mode === "off-site" ? step - 1 : step}
            />
          </div>
        )}

        {page ? (
          <div className="md:w-4xl flex flex-col gap-20 py-12 p-5 md:py-15 md:p-15 bg-white md:rounded-2xl shadow text-sm">
            <ContactInformation
              data={contactData}
              onChange={onChange}
              phoneNumChange={phoneNumChange}
              disableEdit={disableEdit}
            />

            {mode == "on-site" && (
              <CanadianSelection
                canadian={details.canadian}
                onChange={onChange}
                onNext={beginRegistration}
                edit
                disableEdit={disableEdit}
              />
            )}

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
                      "Student Contact Information",
                      "Mailing Address",
                      "Academic Information",
                      "Citizenship Information",
                      "Documents",
                      "Programs",
                      "Application Review",
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
              />
            ) : step == 1 ? (
              <ContactInformation
                data={contactData}
                onChange={onChange}
                phoneNumChange={phoneNumChange}
              />
            ) : step == 2 ? (
              <Mailing
                setLocation={setLocation}
                unit={details.unit}
                street={details.street}
                onChange={onChange}
                location={location}
              />
            ) : step == 3 ? (
              <AcademicInformation
                data={academicInformationData}
                onChange={onChange}
                onDateChange={(name, value) =>
                  setDetails((prev) => ({ ...prev, [name]: value }))
                }
              />
            ) : step == 4 ? (
              <Citizenship
                data={details}
                onChange={onChange}
                setBirthCountry={setBirthCountry}
                birthCountry={birthCountry}
              />
            ) : step == 5 ? (
              <Document setFiles={setDocuments} filesGroups={documents} />
            ) : step == 6 ? (
              <>
                {mode === "off-site" ? (
                  <Cartitem />
                ) : (
                  <Programs
                    data={programs}
                    canadian={details.canadian == "true"}
                    programChange={programChnageHandler}
                  />
                )}
              </>
            ) : step == 7 ? (
              <ApplicationPreview
                details={details}
                documents={documents}
                programs={programs}
                birthCountry={birthCountry}
                location={location}
              />
            ) : step == 8 ? (
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
