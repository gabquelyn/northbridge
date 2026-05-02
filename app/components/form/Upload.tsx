"use client";
import React, { useState, useCallback } from "react";
import { BiSolidCloudUpload } from "react-icons/bi";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";
import { TbDownload } from "react-icons/tb";
import FilePreview from "../FilePreview";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Upload({
  fileChangeHandler,
  name,
  label,
  imagesOnly,
  description,
  multiple,
  files,
  uploads,
  disabled,
}: {
  fileChangeHandler: FileHandlerFn;
  name: string;
  label: string;
  imagesOnly?: boolean;
  description?: string;
  multiple?: boolean;
  files: File[];
  uploads?: { url: string }[];
  disabled?: boolean;
}) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (disabled) return;
    fileChangeHandler(acceptedFiles, name);
  }, []);

const { getInputProps, isDragActive, getRootProps } = useDropzone({
  onDrop,
  accept: imagesOnly
    ? { "image/*": [] }
    : {
        "application/pdf": [],
        "application/msword": [], // .doc
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [], // .docx
        "application/vnd.ms-excel": [], // optional (.xls)
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [], // optional (.xlsx)
        "text/plain": [], // optional (.txt)
      },
  disabled,
});

  return (
    <div className="w-full flex flex-col gap-2">
      {uploads && (
        <div>
          {uploads.map((upload) => (
            <div>
              <FilePreview key={upload.url} url={upload.url} />
              <div className="mt-2 flex justify-end">
                <a
                  href={upload.url.replace(
                    "/upload/",
                    "/upload/fl_attachment/",
                  )}
                  download
                >
                  <button className="action">
                    <TbDownload />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

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
          disabled
            ? "bg-gray-100 border-gray-200 cursor-not-allowed opacity-60"
            : files.length > 0
              ? "border-primary bg-primary/10"
              : isDragActive
                ? "border-primary bg-primary/10 scale-[1.01]"
                : "border-gray-200 bg-primary/5 hover:border-primary/50 cursor-pointer",
        )}
      >
        <input
          {...getInputProps()}
          name={name}
          multiple={multiple}
          disabled={disabled}
        />

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
        {disabled ? (
          <p className="text-sm text-gray-400">Upload disabled</p>
        ) : isDragActive ? (
          <p className="text-sm text-prima font-medium">Drop files here</p>
        ) : (
          <p className="text-sm text-gray-600">
            <span className="text-prima font-medium">Click to upload</span> or
            drag and drop
          </p>
        )}

        {/* File List */}
        {/* File List */}
        {files && files.length > 0 && (
          <div className="mt-3 w-full space-y-2">
            {files.map((file, idx) => (
              <div
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Details */}
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB •{" "}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const next = files.filter((_, i) => i !== idx)
                      fileChangeHandler(next, name);
                    }}
                    className="text-xs px-2 py-1 rounded-lg border hover:bg-gray-50"
                  >
                    <RiDeleteBin5Line/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
