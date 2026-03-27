"use client";
import React from "react";
import { useApplications } from "@/app/hooks/useAdmission";
import { ClipLoader } from "react-spinners";
import AnimatedCancel from "@/app/components/AnimatedCancel";
import { TiPlus } from "react-icons/ti";
import Button from "@/app/components/atoms/Button";
import Application from "./components/Application";
import Link from "next/link";

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

          <div>
            <Link href = "/dashboard/apply">
              <Button>
                <div className="text-[.9rem] flex items-center gap-1">
                  <TiPlus />
                  <p className="">Create a new application</p>
                </div>
              </Button>
            </Link>
          </div>
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
