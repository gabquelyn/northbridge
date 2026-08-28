"use client";
import React from "react";
import { useGetIncomplete } from "@/app/hooks/useProfile";
import { ClipLoader } from "react-spinners";
import IncompleteProfileTable from "./IncompleteProfileTable";
export default function page() {
  const { data, isPending, isSuccess } = useGetIncomplete();
  if (isPending)
    return (
      <div className="flex flex-col h-[60vh] items-center justify-center">
        <ClipLoader />
      </div>
    );

  if (isSuccess) {
    return (
      <div>
        <IncompleteProfileTable data={data.profiles} />
      </div>
    );
  }
}
