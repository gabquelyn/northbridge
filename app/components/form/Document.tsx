import React from "react";
import Upload from "./Upload";

const uploads = [
  {
    name: "avatar",
    description:
      "Please upload a recent photo portrait of you, Not less than three month.",
    label: "Passport Upload",
    multiple: false,
  },
  {
    name: "govId",
    description:
      "Choose your ID Card (National ID, Driver's license, and Passport)  from your device and upload it here. we would handle it securely.",
    label: "ID Upload",
    multiple: false,
  },
  {
    name: "transcripts",
    description: "Please provide a transcript from the last 24 months",
    label: "School Transcripts",
    multiple: false,
  },
  {
    name: "others",
    description:
      "Additional documentation accelerates the verification process",
    label: "Upload any supporting docs",
    multiple: true,
  },
];
export default function Document() {
  return (
    <div className="grid grid-cols-2 gap-4 items-center">
      {uploads.map((upload) => (
        <Upload
          multiple={upload.multiple}
          name={upload.name}
          description={upload.description}
          label={upload.label}
          fileChangeHandler={() => {}}
        />
      ))}
    </div>
  );
}
