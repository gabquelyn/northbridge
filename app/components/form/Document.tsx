import React from "react";
import Upload from "./Upload";
import FormNavigation from "./FormNavigation";
import { useEditDocument } from "@/app/hooks/useProfile";
import useNext from "@/app/hooks/useNext";

const uploads = [
  {
    name: "passport",
    description:
      "Please upload a recent photo portrait of you, Not less than three month.",
    label: "Passport Upload",
    multiple: false,
    imageOnly: true,
  },
  {
    name: "govId",
    description:
      "Choose your ID Card (National ID, Driver's license, and Passport)  from your device and upload it here. we would handle it securely.",
    label: "ID Upload",
    multiple: false,
    imageOnly: false,
  },
  {
    name: "transcripts",
    description: "Please provide a transcript from the last 24 months",
    label: "School Transcripts",
    multiple: true,
    imageOnly: false,
  },
  {
    name: "birthCert",
    description: "Please provide a birth certificate",
    label: "Birth Certificate",
    multiple: false,
    imageOnly: false,
  },
  {
    name: "others",
    description:
      "Additional documentation accelerates the verification process (maximum of 3)",
    label: "Upload any supporting docs",
    multiple: true,
    imageOnly: false,
  },
];
function Document({
  setFiles,
  filesGroups,
  uploaded,
  disableEdit,
  disabled,
  back,
  next,
  editMode,
}: {
  setFiles: React.Dispatch<
    React.SetStateAction<Record<string, File[]> | undefined>
  >;
  filesGroups: Record<string, File[]> | undefined;
  uploaded?: {
    [index: string]: DocumentFile[];
  };
  disableEdit?: boolean;
  disabled?: boolean;
  back?: Fn;
  editMode?: boolean;
  next?: Fn;
}) {
  const formData = new FormData();
  if (filesGroups) {
    for (const ifileskeys of Object.keys(filesGroups)) {
      for (const file of filesGroups[ifileskeys]) {
        formData.append(ifileskeys, file);
      }
    }
  }

  const editDocs = useEditDocument();
  const { isPending, saveHandler } = useNext({
    mutation: editDocs,
    next,
    details: {
      form: formData,
    },
  });

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {uploads.map((upload) => (
          <Upload
            key={upload.name}
            multiple={upload.multiple}
            name={upload.name}
            description={upload.description}
            label={upload.label}
            fileChangeHandler={(file, name) =>
              setFiles((prev) => ({ ...prev, [name]: file }))
            }
            uploads={uploaded?.[upload.name]}
            files={filesGroups?.[upload.name] || []}
            disabled={disableEdit}
            imagesOnly={upload.imageOnly}
          />
        ))}
      </div>
      {!editMode && (
        <FormNavigation
          pending={isPending}
          disabled={disabled}
          next={saveHandler}
          back={back}
        />
      )}
    </div>
  );
}

export default React.memo(Document);
