"use client";
import React, { useState, useCallback } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";

export default function Upload({
  fileChangeHandler,
  name,
  label,
  imagesOnly,
  description,
  multiple,
}: {
  fileChangeHandler: FileHandlerFn;
  name: string;
  label: string;
  imagesOnly?: boolean;
  description?: string;
  multiple?: boolean;
}) {
  const [files, setFiles] = useState<File[]>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    fileChangeHandler(acceptedFiles, name);
    setFiles(acceptedFiles);
  }, []);

  const { getInputProps, isDragActive, getRootProps } = useDropzone({
    onDrop,
    accept: imagesOnly ? { "image/*": [] } : undefined,
  });

  return (
    <div className="w-full flex flex-col gap-2">
      {/* Label */}
      <div>
        <p className="text-sm font-medium text-gray-900">{label}</p>
        <p className="text-xs font-medium text-secondary">{description}</p>
      </div>
      {/* Upload Box */}
      <div
        {...getRootProps()}
        className={clsx(
          "rounded-2xl border-2 border-dashed p-4 flex items-center justify-center flex-col transition-all",
          files
            ? "border-primary bg-primary/10"
            : isDragActive
              ? "border-primary bg-primary/10 scale-[1.01]"
              : "border-gray-200 bg-primary/5 hover:border-primary/50",
        )}
      >
        <input {...getInputProps()} name={name} multiple={multiple} />

        {/* Icon */}
        <div
          className={clsx(
            "w-8 h-8 flex items-center justify-center rounded-full",
            "bg-white shadow-sm transition-all",
            isDragActive && "bg-primary/10",
          )}
        >
          <BiSolidCloudUpload
            className={clsx(
              "text-xl text-gray-500 transition-all",
              isDragActive && "text-primary",
            )}
          />
        </div>

        {/* Text */}
        {isDragActive ? (
          <p className="text-sm text-prima font-medium">Drop files here</p>
        ) : (
          <p className="text-sm text-gray-600">
            <span className="text-prima font-medium">Click to upload</span> or
            drag and drop
          </p>
        )}

        {/* File List */}
        {files && (
          <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-sm">
            {/* Check icon */}
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10">
              <span className="text-primary text-sm">✓</span>
            </div>

            {/* Text */}
            <p className="text-sm text-gray-700 font-medium">
              {files.length} file{files.length > 1 ? "s" : ""} selected
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
