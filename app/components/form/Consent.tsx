"use client";

import React from "react";
import CustomSelect from "../CustomSelect";
import FormNavigation from "./FormNavigation";
import { hearAboutUsOptions } from "@/app/utils/referrer";

type Props = {
  option: SelectOption | null;
  setHearAboutUs: React.Dispatch<React.SetStateAction<SelectOption | null>>;
  setChecks: React.Dispatch<React.SetStateAction<TermsAndCondition>>;
  checks: TermsAndCondition;
  back: Fn;
  next: Fn;
  disabled: boolean;
  requestedInstallment: boolean;
  setrequestedInstallment: inputHandler;
  selectedDep: boolean;
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
        className="h-4 w-4 accent-primary cursor-pointer"
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
};

export default function TermsAndConditions({
  option,
  setHearAboutUs,
  setChecks,
  checks,
  back,
  next,
  disabled,
  requestedInstallment,
  setrequestedInstallment,
  selectedDep,
}: Props) {
  return (
    <div className="space-y-6">
      <p className="text-sm opacity-90">
        Please read carefully and confirm your agreement before proceeding.
      </p>

      <div>
        <CustomSelect
          label="How did you hear about us?"
          option={option}
          options={hearAboutUsOptions}
          setOption={setHearAboutUs}
        />
      </div>

      <div>
        <p className="text-darkBlue">Request installmental payments</p>
        <input
          type="checkbox"
          className="h-4 w-4 accent-primary cursor-pointer"
          checked={requestedInstallment}
          onChange={setrequestedInstallment}
        />
      </div>
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

      {/* FOR DEP */}
      {selectedDep && (
        <Section title="DEP Acknowledgement">
          <p>
            I acknowledge that I have been informed of Northbridge Collegiate's
            available programme options, including the full Grade 12 programme,
            which typically consists of six or more Ontario Grade 12 courses,
            and have voluntarily chosen the Direct Entry Pathway (DEP).
          </p>

          <p>
            I understand that the DEP consists of four Ontario Grade 12 courses
            plus the Ontario Secondary School Literacy Course (OLC). I further
            understand that many Canadian universities normally require six
            Grade 12 U/M courses for admission; therefore, my application will
            be assessed using a combination of my WAEC (or equivalent) and
            Ontario coursework, subject to each university's admission
            requirements.
          </p>

          <p>
            I acknowledge that additional Ontario prerequisite courses may be
            required for certain university programmes and, if so, must be
            completed at an additional cost. I also acknowledge that Northbridge
            Collegiate will recommend appropriate course selections; however,
            final course selection remains the responsibility of the student
            based on their intended university programme and career goals.
          </p>

          <Check
            label="I agree"
            name="dep"
            onChange={(e) => {
              setChecks((prev) => ({ ...prev, dep: e.target.checked }));
            }}
            checked={checks.dep}
          />
        </Section>
      )}

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

      <FormNavigation
        pending={false}
        disabled={disabled}
        next={() => next()}
        back={back}
      />
    </div>
  );
}
