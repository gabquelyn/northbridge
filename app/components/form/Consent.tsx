"use client";

import React, { useState } from "react";
import Button from "../atoms/Button";
import { IoMdArrowRoundBack } from "react-icons/io";

type Props = {
  onBack: () => void;
  submitHandler?: () => void;
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className=" rounded-2xl shadow-sm p-6 space-y-4">
    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    <div className="text-sm text-gray-600 leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);

const Check = ({
  name,
  label,
  onChange,
  checked,
}: {
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}) => {
  return (
    <label className="flex w-fit items-center gap-2 pt-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        className="h-4 w-4"
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default function TermsAndConditions({ onBack, submitHandler }: Props) {
  const [checks, setChecks] = useState({
    prerequisite: false,
    refund: false,
    consent: false,
    parent: false,
    diploma: false,
  });

  const allChecked =
    checks.prerequisite && checks.refund && checks.consent && checks.diploma; // parent is conditional

  return (
    <div className="space-y-6">
      <p className="text-sm opacity-90">
        Please read carefully and confirm your agreement before proceeding.
      </p>

      {/* PREREQUISITE */}
      <Section title="Prerequisite Requirement">
        <p>
          Many senior secondary courses have prerequisite requirements. Students
          must submit academic transcripts or report cards showing completion of
          required courses before registration can be finalized.
        </p>
        <p>
          Government-issued identification may be required for verification and
          academic record purposes.
        </p>

        <Check
          label="I agree"
          name="prerequisite"
          onChange={(e) => {
            setChecks((prev) => ({ ...prev, prerequisite: e.target.checked }));
          }}
          checked={checks.prerequisite}
        />
      </Section>

      {/* REFUND */}
      <Section title="Refund and Transfer Policy">
        <p>
          All registrations and fees are final. Due to immediate administrative
          processing and course planning, fees are non-refundable and
          non-transferable.
        </p>
        <p>A transfer request may be submitted within seven (7) days if:</p>
        <ul className="list-disc ml-5">
          <li>Prerequisites are met</li>
          <li>No coursework has been submitted</li>
        </ul>
        <p>
          Only one transfer is allowed, and registrations cannot be transferred
          between students.
        </p>

        <Check
          label="I agree"
          name="refund"
          onChange={(e) => {
            setChecks((prev) => ({ ...prev, refund: e.target.checked }));
          }}
          checked={checks.refund}
        />
      </Section>

      {/* DATA CONSENT */}
      <Section title="Consent to Collect and Use Personal Information">
        <p>
          Personal information is collected for admissions, academic
          administration, student records, and communication.
        </p>
        <p>Students may receive updates about academic matters and programs.</p>
        <p>
          Information is not sold or shared except where required for academic
          purposes or by law.
        </p>

        <Check
          label="I agree"
          name="consent"
          onChange={(e) => {
            setChecks((prev) => ({ ...prev, consent: e.target.checked }));
          }}
          checked={checks.consent}
        />
      </Section>

      {/* PARENT CONSENT */}
      <Section title="Parent / Guardian Consent (if applicable)">
        <p>
          If the student is under 15, registration must be completed by a parent
          or legal guardian.
        </p>
        <p>
          By submitting, the parent/guardian confirms consent for participation
          and data usage.
        </p>

        <Check
          label="I confirm that I am the parent or legal guardian and provide consent"
          name="parent"
          onChange={(e) => {
            setChecks((prev) => ({ ...prev, parent: e.target.checked }));
          }}
          checked={checks.parent}
        />
      </Section>

      {/* DIPLOMA */}
      <Section title="Diploma Students (OSSD Pathway)">
        <p>
          Students intending to earn the Ontario Secondary School Diploma (OSSD)
          must:
        </p>
        <ul className="list-decimal ml-5">
          <li>Intend to complete all graduation requirements</li>
          <li>Complete at least 8 credits in one academic year</li>
        </ul>
        <p>
          Students taking individual courses will receive transcripts but will
          not be registered as diploma students.
        </p>
        <Check
          label="I agree"
          name="diploma"
          onChange={(e) => {
            setChecks((prev) => ({ ...prev, diploma: e.target.checked }));
          }}
          checked={checks.diploma}
        />
      </Section>

      {/* FOOTER ACTION */}
      <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-600 shadow-sm">
        <p className="text-sm text-gray-500">
          You must agree to all required terms before continuing.
        </p>

        <div className="flex gap-3">
          <button
            className="p-3 cursor-pointer rounded-full text-secondary bg-[#f2f2f2]"
            onClick={onBack}
          >
            <IoMdArrowRoundBack />
          </button>
          <Button
            disabled={!allChecked}
            onClick={submitHandler}
            className={`px-6 py-2 rounded-xl text-white transition ${
              allChecked
                ? "bg-primary hover:opacity-90"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
