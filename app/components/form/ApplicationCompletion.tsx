import React from "react";
import Button from "../atoms/Button";

export default function ApplicationCompletion({
  onBack,
  submitHandler,
}: {
  onBack: () => void;
  submitHandler?: () => void;
}) {
  const items = [
    "Processing of the student's application",
    "Review of submitted documents and initial eligibility screening",
    "Student record creation and compliance documentation",
    "Onboarding and orientation into academic systems",
  ];
  return (
    <div className="space-y-4">
      <div className="w-full max-w-2xl">
        <div className="border-l-4 border-slate-800 bg-white pl-6 py-1">

          <p className="text-slate-800 leading-relaxed mb-4">
            The registration fee initiates the formal admission process and
            secures the student's place in the program. It includes:
          </p>

          <ul className="space-y-2 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-700 leading-relaxed">
                <span className="text-slate-400 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm font-medium text-slate-900 border-t border-slate-200 pt-3">
            The registration fee is non-refundable.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="p-2 px-4 rounded-md bg-slate-100 cursor-pointer"
        >
          Back
        </button>
        <Button onClick={submitHandler}>
          <p className="px-2">Apply</p>
        </Button>
      </div>
    </div>
  );
}
