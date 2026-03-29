"use client";
import React from "react";
import { useApplications } from "@/app/hooks/useAdmission";
import { ClipLoader } from "react-spinners";
import ApplicationTable from "../dashboard/components/ApplicationTable";
export default function page() {
  const { data, isPending, isSuccess } = useApplications();

  if (isPending)
    return (
      <div className="flex items-center justify-center h-[30vh]">
        <ClipLoader />
      </div>
    );

  if (isSuccess)
    return (
      <div>
        <ApplicationTable data={data.data.application} />
      </div>
    );
}
