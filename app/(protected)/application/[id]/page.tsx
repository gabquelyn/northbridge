"use client";
import AnimatedCancel from "@/app/components/AnimatedCancel";
import { useApplication } from "@/app/hooks/useAdmission";
import { useParams } from "next/navigation";
import React from "react";
import { ClipLoader } from "react-spinners";
import ApplicationDetails from "../../dashboard/components/ApplicationEdit";

export default function page() {
  const { id } = useParams();
  const { data, isPending, isSuccess, isError } = useApplication(id as string);

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-[30vh]">
        <ClipLoader />
      </div>
    );
  }

  if (isError) {
    <div className="flex items-center justify-center h-[30vh]">
      <AnimatedCancel />
    </div>;
  }

  if (isSuccess) {
    return (
      <ApplicationDetails
        application={data.data}
        invoice={{ code: "" }}
        isAdmin = {data.user.role === "admin"}
      />
    );
  }
}
