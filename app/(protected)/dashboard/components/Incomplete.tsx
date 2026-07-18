"use client";
import { useGetIncomplete } from "@/app/hooks/useProfile";
import React from "react";
import Link from "next/link";

export default function Incomplete() {
  const { data, isSuccess, isLoading, isError } = useGetIncomplete();

  if (isLoading) {
    return (
      <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
        <p className="text-sm text-gray-400">Checking for incomplete applications…</p>
      </div>
    );
  }

  if (!isSuccess || data.profiles.length === 0) {
    return null;
  }

  return (
    <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
      <p className="mb-3 text-sm font-semibold text-yellow-800">
        You have an incomplete application
      </p>

      <div className="space-y-3">
        {data.profiles.map((profile) => (
          <div
            key={profile._id}
            className="flex items-center justify-between gap-4 rounded-lg border border-yellow-100 bg-white px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium text-gray-900">
                Started on{" "}
                {new Date(profile.createdAt).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p className="text-xs text-gray-500">
                This application hasn&apos;t been submitted yet
              </p>
            </div>

            <Link
              href={`/dashboard/apply?profile=${profile._id}`}
              className="shrink-0 rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-yellow-700"
            >
              Continue application
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}