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
  });
  const mode = params.get("mode") || "on-site";
  const [documents, setDocuments] = useState<Record<string, File[]>>();
  const [programs, setPrograms] = useState<Programs[]>(["CAAP"]);
  const [birthCountry, setBirthCountry] = useState<SelectOption | null>(null);
  const ctx = useContext(cartContext);
  const [location, setLocation] = useState<LocationData>({
    country: null,
    state: null,
    city: null,
  });

  const router = useRouter();

  useEffect(() => {
    if (isError) {
      const err = (error as AxiosError<ApiErrorMessage>).response?.data;
      toast.error(
        err?.error && Array.isArray(err.error)
          ? `Incorrect fields: \n
      ${err?.error?.map((e) => e.path).join(", ")}`
          : err?.message,
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

    if (documents) {
      for (const ifileskeys of Object.keys(documents)) {
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
      />
    </div>
  );
}
