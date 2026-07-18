"use client";
import ApplicationPage from "@/app/components/form/ApplicationPage";
import { useApplicationProfile } from "@/app/hooks/useProfile";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { ClipLoader } from "react-spinners";

export default function ApplicationProfile() {
  const params = useSearchParams();
  const { data, isPending, isSuccess, isError, error } = useApplicationProfile(
    params.get("profile") as string,
  );

  if (isPending) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <ClipLoader />
      </div>
    );
  }

  if (isError) {
    <div>
      <p>Unable to fetch profile for admisssion</p>
      <Link href="/dashboard" className="underline pointer text-blue-500">
        Go back
      </Link>
    </div>;
  }

  if (isSuccess)
    return (
      <div>
        <ApplicationPage profile={data.profile} />
      </div>
    );
}
