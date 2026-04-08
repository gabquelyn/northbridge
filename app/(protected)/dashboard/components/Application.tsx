"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import clsx from "clsx";
import CircularProgress from "./CircularProgress";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { usePayup } from "@/app/hooks/useAdmission";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";

export default function Application({ data }: { data: Application }) {
  const image = data.profile.documents?.passport[0]?.url;
  const {
    data: response,
    mutate,
    isPending: isLoading,
    isSuccess,
  } = usePayup(data._id);
  const router = useRouter();
  const payupHandler = () => {
    mutate();
  };

  useEffect(() => {
    if (isSuccess) router.push(response.paymentUrl);
  }, [isSuccess]);

  const isPending =
    (!data.granted && data.mode == "on-site") ||
    (data.paid && data.mode == "off-site" && !data.granted);
  const isComplete = data.paid && data.granted;
  const isAwaitingPaymentProgram = data.granted && !data.paid;
  const isAwaitingPaymentCourse = data.mode == "off-site" && !data.paid;

  const statusText = isAwaitingPaymentProgram
    ? "Awaiting Payment"
    : isPending
      ? "Application in review"
      : isComplete
        ? "Admission granted"
        : isAwaitingPaymentCourse
          ? "Incomplete"
          : "";

  const statusColor = clsx(
    "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium",
    isAwaitingPaymentProgram
      ? "bg-blue-50 text-blue-600"
      : isPending
        ? "bg-amber-100 text-amber-600"
        : isComplete
          ? "bg-green-100 text-green-600"
          : isAwaitingPaymentCourse
            ? "bg-rose-50 text-rose-500"
            : "",
  );

  const progressColor = isAwaitingPaymentProgram
    ? "#0088FF"
    : isPending
      ? "#FFBE00"
      : isComplete
        ? "#14AE5C"
        : isAwaitingPaymentCourse
          ? "#E00C00"
          : undefined;

  const message = isAwaitingPaymentProgram
    ? "Complete enrollment payment to secure this student's place."
    : isPending
      ? "No action required right now. Our admissions team is reviewing the application."
      : isComplete
        ? "Congratulations, you have been admitted!"
        : isAwaitingPaymentCourse
          ? "Payment required to continue, go to cart to checkout"
          : "";

  const isOutstanding = Boolean(data?.outstanding && data.outstanding > 0);
  return (
    <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm hover:shadow-md transition-all duration-300">
      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="flex gap-4 items-center">
          {/* Avatar */}
          <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-slate-100">
            <Image
              src={image}
              fill
              className="object-cover"
              alt=""
              unoptimized
            />
          </div>

          {/* Name + meta */}
          <div>
            <p className="font-semibold text-base text-slate-800">
              {data.profile.bio.firstName} {data.profile.bio.lastName}
            </p>

            <div className="flex flex-wrap items-center text-xs text-slate-500 mt-1">
              {data.programs.map((p) => (
                <span key={p} className="flex items-center">
                  {p.toLowerCase()} <BsDot />
                </span>
              ))}

              {data.courses.length > 0 && (
                <span className="ml-1">{data.courses.length} courses</span>
              )}

              <span className="ml-2 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                {data.mode}
              </span>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className={clsx(statusColor, "mt-3 md:mt-0 ")}>
          <BsDot className="text-lg" />
          {statusText}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="my-5 h-px bg-slate-100" />

      {/* BOTTOM SECTION */}
      <div className="flex items-center gap-5 justify-between">
        {/* Left: Info */}
        <div className="space-y-1">
          <p className="text-xs text-slate-400 uppercase tracking-wide">
            Progress
          </p>
          <p className="text-sm font-medium text-slate-700">
            {message}
            <br />{" "}
            {isOutstanding &&
              "However, complete outstanding payment within 6 weeks to retain access"}
          </p>
          {isOutstanding && (
            <button
              className="text-sm bg-amber-500 cursor-pointer text-white px-3 mb-3 p-1 rounded-lg flex items-center justify-center"
              onClick={payupHandler}
            >
              {isLoading ? (
                <ClipLoader size={10} color="#ffffff" />
              ) : (
                <p> Pay outstanding</p>
              )}
            </button>
          )}
          <Link href={`/application/${data._id}`}>
            <p className="text-primary  text-sm flex items-center cursor-pointer gap-2">
              <span>View Application</span> <IoIosArrowRoundForward />
            </p>
          </Link>
        </div>

        {/* Right: Progress */}
        <div className="relative">
          <CircularProgress
            percent={
              isAwaitingPaymentProgram
                ? 70
                : isPending
                  ? 50
                  : isAwaitingPaymentCourse
                    ? 10
                    : 100
            }
            color={progressColor}
            size={100}
            strokeWidth={8}
          />
        </div>
      </div>
    </div>
  );
}
