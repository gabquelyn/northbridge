"use client";
import React, { useContext, useEffect, useState } from "react";
import ApplicationForm from "./ApplicationForm";
import { useApply } from "@/app/hooks/useAdmission";
import { cartContext } from "@/app/providers/cartContextProvider";
import { useSearchParams } from "next/navigation";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Modal from "../Modal";
import AnimatedChecked from "../AnimatedChecked";
import sections from "@/app/utils/sections";

export default function ApplicationPage() {
  const { data, mutate, isPending, isSuccess, isError, error } = useApply();
  const params = useSearchParams();
  const [details, setDetails] = useState<IApplicationForm>({
    canadian: "false",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    street: "",
    unit: "",
    pathway: "",
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
    fatherFirstName: "",
    fatherLastName: "",
    fatherPhoneNumber: "",
    fatherEmail: "",
    fatherDeaceased: "false",
    motherFirstName: "",
    motherLastName: "",
    motherEmail: "",
    motherPhoneNumber: "",
    motherDeaceased: "false",
  });
  const [mode, setMode] = useState(params.get("mode") || "on-site");
  const [documents, setDocuments] = useState<Record<string, File[]>>();
  const [programs, setPrograms] = useState<Programs[]>(["CAAP"]);
  const [birthCountry, setBirthCountry] = useState<SelectOption | null>(null);
  const [referrer, setReferrer] = useState<SelectOption | null>(null);
  const [incomplete, setIncomplete] = useState<number[]>([]);
  const ctx = useContext(cartContext);
  const [location, setLocation] = useState<LocationData>({
    country: null,
    state: null,
    city: null,
  });

  const router = useRouter();

  const getInvalidSteps = (): number[] => {
    const invalidSteps: number[] = [];

    // Step 0
    if (!referrer) invalidSteps.push(0);

    // Step 1
    if (!mode) invalidSteps.push(1);

    // Step 2
    const { firstName, lastName, email, phoneNumber, street } = details;

    if (!firstName || !lastName || !email || !phoneNumber) {
      invalidSteps.push(2);
    }

    // Step 3
    if (!location?.country || !location?.state || !location?.city || !street) {
      invalidSteps.push(3);
    }

    // Step 4
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

    if (
      (fatherAlive &&
        (!fatherFirstName ||
          !fatherLastName ||
          !fatherPhoneNumber ||
          !fatherEmail)) ||
      (motherAlive &&
        (!motherFirstName ||
          !motherLastName ||
          !motherPhoneNumber ||
          !motherEmail))
    ) {
      invalidSteps.push(4);
    }

    // Step 5
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
      invalidSteps.push(5);
    }

    // Step 6
    const { language, intendToApply, canadianVisa } = details;

    if (!language || !birthCountry?.label || !intendToApply || !canadianVisa) {
      invalidSteps.push(6);
    }

    // Step 7
    if (
      !documents?.passport?.length ||
      !documents?.transcripts?.length ||
      !documents?.govId?.length ||
      !documents?.birthCert?.length
    ) {
      invalidSteps.push(7);
    }

    return invalidSteps;
  };

  useEffect(() => {
    if (isError) {
      const err = (error as AxiosError<ApiErrorMessage>).response?.data;
      toast.error(
        err?.error && Array.isArray(err.error)
          ? `Incorrect fields: \n
      ${err?.error?.map((e) => e.path).join(", ")}`
          : err?.message
            ? err?.message
            : (err?.error as string)?.match(/:\s*([^\n]+)/)?.[1],
      );
      console.log(err);
    }

    const successTimer = setTimeout(() => {
      if (isSuccess) {
        if (mode == "off-site") {
          ctx?.clearCartHandler();
          return router.replace(data.paymentUrl);
        }
        router.push("/dashboard");
      }
    }, 3000);

    return () => clearTimeout(successTimer);
  }, [isSuccess, isError]);

  const applicationHandler = () => {
    const incompleteSections = getInvalidSteps();
    if (incompleteSections.length > 0) {
      toast.warning(
        `Incomplete Sections:\n
        ${incompleteSections.map((i) => sections[i]).join(", ")}`,
      );
      setIncomplete(incompleteSections);
      setTimeout(() => setIncomplete([]), 8000);
      return;
    }
    const applicationFormData = new FormData();

    for (const ikeys of Object.keys(details)) {
      applicationFormData.append(
        ikeys,
        details[ikeys as keyof IApplicationForm],
      );
    }

    applicationFormData.append("mode", mode);
    if (mode == "off-site") {
      applicationFormData.append("courses", JSON.stringify(ctx?.cart));
    } else {
      applicationFormData.append("programs", JSON.stringify(programs));
    }
    applicationFormData.append("birthCountry", birthCountry?.label || "");
    if (location?.city) applicationFormData.append("city", location.city.label);
    if (location?.country)
      applicationFormData.append("country", location.country.label);
    if (location?.state)
      applicationFormData.append("state", location.state.label);
    if (referrer) {
      applicationFormData.append("referrer", referrer.value);
    }
    if (documents) {
      for (const ifileskeys of Object.keys(documents)) {
        console.log(ifileskeys);
        for (const file of documents[ifileskeys]) {
          applicationFormData.append(ifileskeys, file);
        }
      }
    }
    mutate(applicationFormData);
  };

  if (isSuccess) {
    return (
      <Modal>
        <div className="flex items-center justify-center">
          <AnimatedChecked message="Application submitted successfully" />
        </div>
      </Modal>
    );
  }

  return (
    <div>
      <ApplicationForm
        applicationHandler={applicationHandler}
        details={details}
        setDetails={setDetails}
        documents={documents}
        setDocuments={setDocuments}
        programs={programs}
        setPrograms={setPrograms}
        isPending={isPending}
        location={location}
        setLocation={setLocation}
        birthCountry={birthCountry}
        setBirthCountry={setBirthCountry}
        mode={mode}
        setMode={setMode}
        aboutUs={referrer}
        setHearAboutUs={setReferrer}
        incompleteSections={incomplete}
      />
    </div>
  );
}
