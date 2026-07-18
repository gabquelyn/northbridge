"use client";
import React from "react";
import { useApplications } from "@/app/hooks/useAdmission";
import { ClipLoader } from "react-spinners";
import AnimatedCancel from "@/app/components/AnimatedCancel";
import Application from "./components/Application";
import CreateProfile from "./components/CreateProfile";
import Incomplete from "./components/Incomplete";

export default function ClientCompent() {
  const { data, isPending, isError, isSuccess } = useApplications();

  if (isPending) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <ClipLoader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <AnimatedCancel message="Unable to fetch application" />
      </div>
    );
  }

  if (isSuccess) {
    const num = data.data.application.length;

    return (
      <div>
        <p className="text-3xl font-semibold leading-relaxed mb-4 text-gray-800">
          Hello, {data.data.user.name.split(" ")[0]} 👋
        </p>
        <div className="flex flex-col gap-4 items-start md:flex-row justify-between md:items-center">
          <p>
            You have
            <span className="font bold italic mx-2 text-gray-800">{num}</span>
            applications across your account. <br />
            {num
              ? "Review their progress, check upcoming dates, and manage everything from here."
              : ""}
          </p>

          <CreateProfile />
        </div>

        <div className="mt-4 max-w-lg">
          <Incomplete />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {data.data.application.map((application) => (
            <Application key={application._id} data={application} />
          ))}
        </div>
      </div>
    );
  }
}
