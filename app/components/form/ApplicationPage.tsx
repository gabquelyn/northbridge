"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
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
import { City, Country, State } from "country-state-city";

export default function ApplicationPage({ profile }: { profile: Profile }) {
  const { data, mutate, isPending, isSuccess, isError, error } = useApply();
  const params = useSearchParams();

  const selectedCountry = useMemo(
    () =>
      Country.getAllCountries().find(
        (c) => c.name == profile?.address?.country,
      ),
    [],
  );

  const selectedBirthCountry = useMemo(
    () =>
      Country.getAllCountries().find(
        (c) => c.name == profile?.citizenship?.birthCountry,
      ),
    [],
  );

  const selectedState = useMemo(
    () =>
      State.getStatesOfCountry(selectedCountry?.isoCode).find(
        (s) => s.name == profile?.address?.state,
      ),
    [],
  );

  const selectedCity = useMemo(
    () =>
      City.getCitiesOfState(
        selectedCountry?.isoCode || "",
        selectedState?.isoCode || "",
      ).find((ci) => ci.name == profile?.address?.city),
    [],
  );

  const [details, setDetails] = useState<IApplicationForm>({
    canadian:
      (profile?.citizenship?.canadian?.toString() as BooleanString) || "false",
    firstName: profile?.bio?.firstName || "",
    middleName: profile?.bio?.middleName || "",
    lastName: profile?.bio?.lastName || "",
    email: profile?.bio?.email || "",
    phoneNumber: profile?.bio?.phoneNumber || "",
    street: profile?.address?.street || "",
    unit: profile?.address?.unit || "",
    pathway: profile?.academics?.pathway || "",
    dob: profile?.bio?.dob?.split("T")[0] || "",
    homeSchool: profile?.academics?.homeSchool || "",
    currentSchool: profile?.academics?.currentSchool || "",
    secondaryEntry: profile?.academics?.secondaryEntry?.split("T")[0] || "",
    gender: profile?.bio?.gender || "",
    completedSecondaryDiploma:
      profile?.academics?.completedSecondaryDiploma.toString() || "",
    qualification: profile?.academics?.qualification || "",
    language: profile?.citizenship?.language,
    intendToApply: profile?.citizenship?.intendToApply.toString() || "",
    canadianVisa: profile?.citizenship?.canadianVisa.toString() || "",
    fatherFirstName: profile?.parent?.fatherFirstName || "",
    fatherLastName: profile?.parent?.fatherLastName || "",
    fatherPhoneNumber: profile?.parent?.fatherPhoneNumber || "",
    fatherEmail: profile?.parent?.fatherEmail || "",
    fatherDeaceased:
      (profile?.parent?.fatherDeaceased?.toString() as BooleanString) ||
      "false",
    motherFirstName: profile?.parent?.motherFirstName || "",
    motherLastName: profile?.parent?.motherLastName || "",
    motherEmail: profile?.parent?.motherEmail || "",
    motherPhoneNumber: profile?.parent?.motherPhoneNumber || "",
    motherDeaceased:
      (profile?.parent?.motherDeaceased?.toString() as BooleanString) ||
      "false",
  });
  const savedPrograms = localStorage.getItem(
    `programs-${params.get("profile")}`,
  );
  const savedMode = localStorage.getItem(`mode-${params.get("profile")}`);
  const [mode, setMode] = useState(
    savedMode || params.get("mode") || "on-site",
  );
  const [documents, setDocuments] = useState<Record<string, File[]>>();
  const [programs, setPrograms] = useState<Programs[]>(
    savedPrograms ? JSON.parse(savedPrograms) : ["CAAP"],
  );
  const [birthCountry, setBirthCountry] = useState<SelectOption | null>(
    selectedBirthCountry
      ? {
          label: selectedBirthCountry?.name,
          value: selectedBirthCountry?.isoCode,
        }
      : null,
  );
  const [referrer, setReferrer] = useState<SelectOption | null>(null);
  const [incomplete, setIncomplete] = useState<number[]>([]);
  const ctx = useContext(cartContext);

  const [location, setLocation] = useState<LocationData>({
    country: selectedCountry
      ? { label: selectedCountry.name, value: selectedCountry.isoCode }
      : null,
    state: selectedState
      ? { label: selectedState.name, value: selectedState.isoCode }
      : null,
    city: selectedCity
      ? { label: selectedCity?.name, value: selectedCity?.stateCode }
      : null,
  });

  const [checks, setChecks] = useState<TermsAndCondition>({
    prerequisite: false,
    refund: false,
    consent: false,
    parent: false,
    diploma: false,
  });

  const router = useRouter();

  const getInvalidSteps = (): number[] => {
    const invalidSteps: number[] = [];

    // Step 0
    const { firstName, lastName, email, phoneNumber, dob, gender } = details;

    if (!firstName || !lastName || !email || !phoneNumber || !dob || !gender) {
      invalidSteps.push(0);
    }

    // Step 1
    if (
      !location?.country ||
      !location?.state ||
      !location?.city ||
      !details.street
    ) {
      invalidSteps.push(1);
    }

    // Step 2
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
      invalidSteps.push(2);
    }

    // Step 3
    const {
      currentSchool,
      homeSchool,
      secondaryEntry,
      pathway,
      completedSecondaryDiploma,
    } = details;

    if (
      !currentSchool ||
      !homeSchool ||
      !secondaryEntry ||
      !pathway ||
      !completedSecondaryDiploma
    ) {
      invalidSteps.push(3);
    }

    // Step 4
    const { language, intendToApply, canadianVisa } = details;

    if (!language || !birthCountry?.label || !intendToApply || !canadianVisa) {
      invalidSteps.push(4);
    }

    // Step 5
    if (
      (!documents?.passport && profile?.documents?.passport?.length == 0) ||
      (!documents?.transcripts && profile?.documents?.transcripts?.length == 0) ||
      (!documents?.govId && profile?.documents?.govId?.length == 0) ||
      (!documents?.birthCert && profile?.documents?.birthCert?.length == 0)
    ) {
      invalidSteps.push(5);
    }

    const allChecked =
      checks.prerequisite && checks.refund && checks.consent && checks.diploma;
    if (!allChecked || !referrer?.value) {
    }
    if (!allChecked) {
      invalidSteps.push(8);
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
        }
        return router.replace(data.paymentUrl);
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
    mutate({
      form: applicationFormData,
      profileId: params.get("profile") as string,
    });
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
        setChecks={setChecks}
        checks={checks}
        uploaded={profile?.documents}
      />
    </div>
  );
}
