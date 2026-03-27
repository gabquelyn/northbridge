"use client";

import React from "react";
import { FaRegFile } from "react-icons/fa";
import Section from "../Section";
import { useSearchParams } from "next/navigation";

type Props = {
  details: IApplicationForm;
  documents?: Record<string, File[]>;
  programs: string[];
  birthCountry?: { label: string; value: string } | null;
  location: {
    country: any;
    state: any;
    city: any;
  };
};

const Field = ({ label, value }: { label: string; value?: any }) => (
  <div className="flex flex-col">
    <span className="text-xs text-gray-500 uppercase tracking-wide">
      {label}
    </span>
    <span className="text-sm font-medium">{value || "—"}</span>
  </div>
);

export default function ApplicationPreview({
  details,
  documents,
  programs,
  birthCountry,
  location,
}: Props) {
  const params = useSearchParams();
  return (
    <div className="space-y-6 text-secondary">
      <p className="text-sm opacity-90">
        Please review your information before submission
      </p>

      {/* PERSONAL INFO */}
      <Section title="Personal Information">
        <Field label="First Name" value={details.firstName} />
        <Field label="Middle Name" value={details.middleName} />
        <Field label="Last Name" value={details.lastName} />
        <Field label="Date of Birth" value={details.dob} />
        <Field label="Gender" value={details.gender} />
        <Field label="Canadian Citizen" value={details.canadian} />
      </Section>

      {/* CONTACT */}
      <Section title="Contact Information">
        <Field label="Email" value={details.email} />
        <Field label="Phone Number" value={details.phoneNumber} />
        <Field label="Street" value={details.street} />
        <Field label="Unit" value={details.unit} />
      </Section>

      {/* LOCATION */}
      <Section title="Location">
        <Field label="Country of Birth" value={birthCountry?.label} />
        <Field label="Country" value={location.country?.label} />
        <Field label="State" value={location.state?.label} />
        <Field label="City" value={location.city?.label} />
      </Section>

      {/* EDUCATION */}
      <Section title="Education Background">
        <Field label="Home School" value={details.homeSchool} />
        <Field label="Current School" value={details.currentSchool} />
        <Field label="Secondary Entry" value={details.secondaryEntry} />
        <Field
          label="Completed Secondary Diploma"
          value={details.completedSecondaryDiploma}
        />
        <Field label="Qualification" value={details.qualification} />
      </Section>

      {/* PROGRAM */}
      {params.get("mode") != "off-site" && (
        <Section title="Program Details">
          <Field label="Pathway" value={details.pathway} />
          <Field label="Programs Selected" value={programs.join(", ")} />
          <Field label="Intend To Apply" value={details.intendToApply} />
        </Section>
      )}

      {/* LANGUAGE & VISA */}
      <Section title="Language & Visa">
        <Field label="Language" value={details.language} />
        <Field label="Canadian Visa" value={details.canadianVisa} />
      </Section>

      {/* DOCUMENTS */}
      <div className="bg-[#f2f2f2] rounded-2xl shadow-sm p-6 space-y-4">
        <h2 className="text-lg font-semibold border-[#e9e5e5] border-b-2 pb-2">
          Selected Documents
        </h2>

        {!documents || Object.keys(documents).length === 0 ? (
          <p className="text-sm text-gray-500">No documents selected</p>
        ) : (
          <div className="grid grid-cols-2 space-y-2">
            {Object.entries(documents).map(([key, files]) => (
              <div key={key}>
                <p className="text-sm font-medium">{key}</p>
                <ul className="text-sm 0 ml-4">
                  {files.map((file, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2  max-w-[60%] text-ellipsis overflow-hidden text-nowrap"
                    >
                      <FaRegFile />
                      {file.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
