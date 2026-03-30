"use client";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import ApplicationForm from "@/app/components/form/ApplicationForm";
import {
  useApplicationEdit,
  useApply,
  useEnrolProgram,
} from "@/app/hooks/useAdmission";
import { cartContext } from "@/app/providers/cartContextProvider";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/Modal";
import AnimatedChecked from "@/app/components/AnimatedChecked";
import { City, Country, State } from "country-state-city";
import ReviewMessage from "./ReviewMessage";
import AcceptApplication from "./AcceptApplication";

export default function ApplicationEdit({
  application,
  invoice,
  isAdmin,
}: {
  application: Application;
  invoice: { code: string };
  isAdmin: boolean;
}) {
  const { data, mutate, isPending, isSuccess, isError, error } =
    useApplicationEdit();
  const [review, setReview] = useState(false);
  const [accept, setAccept] = useState(false);
  const {
    mutate: enrolToProgram,
    data: payment,
    isPending: enrolling,
    isError: failedToEnrol,
    isSuccess: enrolCheckedOut,
    error: reason,
  } = useEnrolProgram();

  const { firstName, lastName, middleName, email, phoneNumber, dob, gender } =
    application.profile.bio;
  const { city, state, street, unit, country } = application.profile.address;
  const {
    pathway,
    homeSchool,
    currentSchool,
    secondaryEntry,
    completedSecondaryDiploma,
    qualification,
  } = application.profile.academics;
  const {
    language,
    intendToApply,
    canadianVisa,
    birthCountry: bc,
  } = application.profile.citizenship;

  const [details, setDetails] = useState<IApplicationForm>({
    canadian: String(application.profile.citizenship.canadian) as
      | "true"
      | "false",
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    street,
    unit,
    pathway,
    dob: dob.split("T")[0],
    homeSchool,
    currentSchool,
    secondaryEntry: secondaryEntry.split("T")[0],
    gender,
    completedSecondaryDiploma: String(completedSecondaryDiploma),
    qualification,
    language,
    intendToApply: String(intendToApply),
    canadianVisa: String(canadianVisa),
  });
  const router = useRouter();

  const selectedCountry = useMemo(
    () => Country.getAllCountries().find((c) => c.name == country),
    [],
  );

  const selectedBirthCountry = useMemo(
    () => Country.getAllCountries().find((c) => c.name == bc),
    [],
  );

  const selectedState = useMemo(
    () =>
      State.getStatesOfCountry(selectedCountry?.isoCode).find(
        (s) => s.name == state,
      ),
    [],
  );

  const selectedCity = useMemo(
    () =>
      City.getCitiesOfState(
        selectedCountry?.isoCode || "",
        selectedState?.isoCode || "",
      ).find((ci) => ci.name == city),
    [],
  );

  const mode = application.mode;
  const [documents, setDocuments] = useState<Record<string, File[]>>();
  const [courses, setCourses] = useState<number[]>([...application.courses]);
  const [programs, setPrograms] = useState<Programs[]>(application.programs);
  const [birthCountry, setBirthCountry] = useState<SelectOption | null>(
    selectedBirthCountry
      ? {
          label: selectedBirthCountry?.name,
          value: selectedBirthCountry?.isoCode,
        }
      : null,
  );
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

  const removeSelected = useCallback(
    (id: number) => {
      setCourses((prev) => [...prev.filter((c) => c != id)]);
    },
    [setCourses],
  );

  useEffect(() => {
    if (isError) {
      const err = (error as AxiosError<ApiErrorMessage>).response?.data;
      toast.error(
        err?.error && Array.isArray(err.error)
          ? `Incorrect fields: \n
      ${err?.error?.map((e) => e.path).join(", ")}`
          : err?.message ||
              (/File too large/i.test(err?.error as string) &&
                "Selected files must be below or 5mb"),
      );
      console.log(error);
    }

    if (failedToEnrol) {
      const err = (reason as AxiosError<ApiErrorMessage>).response?.data;
      console.log(reason);
      toast.error(
        err?.error && Array.isArray(err.error)
          ? `Incorrect fields: \n
      ${err?.error?.map((e) => e.path).join(", ")}`
          : err?.message,
      );
    }

    if (enrolCheckedOut) {
      if (isAdmin) {
        router.push("/application");
      } else {
        router.push(payment.paymentUrl);
      }
    }

    const successTimer = setTimeout(() => {
      if (isSuccess) {
        if (mode == "off-site") {
          if (isAdmin) {
            router.push("/application");
          } else {
            ctx?.clearCartHandler();
            return router.replace(data.paymentUrl);
          }
        } else {
          if (isAdmin) {
            return router.push("/application");
          }
          router.push("/dashboard");
        }
      }
    }, 3000);

    return () => clearTimeout(successTimer);
  }, [isSuccess, isError, failedToEnrol, enrolCheckedOut]);

  const applicationEditHandler = () => {
    const applicationFormData = new FormData();

    for (const ikeys of Object.keys(details)) {
      applicationFormData.append(
        ikeys,
        details[ikeys as keyof IApplicationForm],
      );
    }
    const combined = ctx?.cart ? [...ctx.cart, ...courses] : [...courses];
    const courseSet = new Set(combined);
    applicationFormData.append("mode", mode);
    if (mode == "off-site") {
      applicationFormData.append("courses", JSON.stringify([...courseSet]));
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
    mutate({ id: application._id, form: applicationFormData });
  };

  const enrolToProgramHandler = useCallback(() => {
    const applicationProgramSet = new Set(application.programs);
    const selected = programs.filter((p) => !applicationProgramSet.has(p));
    enrolToProgram({ id: application._id, programs: selected });
  }, [programs]);

  if (isSuccess) {
    return (
      <Modal>
        <div className="flex items-center justify-center">
          <AnimatedChecked message="Application edited successfully" />
        </div>
      </Modal>
    );
  }

  return (
    <div>
      {review && (
        <Modal onClose={() => setReview(false)}>
          <ReviewMessage id={application._id} />
        </Modal>
      )}

      {accept && (
        <Modal onClose={() => setAccept(false)}>
          <AcceptApplication
            mode={application.mode}
            name={application.profile.bio.firstName}
            onCancel={() => setAccept(false)}
            id={application._id}
          />
        </Modal>
      )}

      <ApplicationForm
        editHandler={applicationEditHandler}
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
        page={true}
        uploaded={application.profile.documents}
        selectedCourses={courses}
        removeSelected={removeSelected}
        disableEdit={
          (application.paid && mode == "off-site" && !isAdmin) ||
          (application.granted && mode == "on-site" && !isAdmin)
        }
        appliedPrograms={application.programs}
        enrol={enrolToProgramHandler}
        enrolling={enrolling}
        isAdmin={isAdmin}
      />
      <div className="mt-8 text-sm">
        {isAdmin && (
          <div className="flex justify-around">
            <button className="action" onClick={() => setReview(true)}>
              Send Review Message
            </button>
            <button className="action" onClick={() => setAccept(true)}>
              Accept Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
