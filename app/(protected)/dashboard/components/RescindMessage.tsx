"use client";
import { useAdminRescind } from "@/app/hooks/useAdmission";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";
import { AlertTriangle, Loader2 } from "lucide-react";

export default function RescindMessage({
  id,
  onClose,
}: {
  id: string;
  onClose: () => void;
}) {
  const { mutate, isPending, isSuccess, isError, error } = useAdminRescind();
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      const msg = (error as AxiosError<ApiErrorMessage>)?.response?.data
        ?.message;
      toast.error(msg || "Something went wrong");
      console.log(error);
    }

    if (isSuccess) {
      const redirectTimer = setTimeout(() => {
        router.push("/application");
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }
  }, [isError, isSuccess, error, router]);

  return (
    <div className="w-full max-w-sm mx-auto p-2">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="h-14 w-14 rounded-full bg-red-50 flex items-center justify-center">
          <AlertTriangle className="h-6 w-6 text-red-500" />
        </div>
      </div>

      {/* Copy */}
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-xl font-semibold text-gray-900">
          Rescind application
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
          This action will mark the application as{" "}
          <span className="font-medium text-gray-900">rejected</span> and
          notify the student about the admission withdrawal.
        </p>
      </div>

      {/* Success state */}
      {isSuccess ? (
        <div className="text-center py-3 px-4 rounded-xl bg-green-50 text-green-700 text-sm font-medium">
          Application rescinded. Redirecting…
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <button
            onClick={() => mutate({ id })}
            disabled={isPending}
            className="w-full h-12 rounded-xl bg-red-600 text-white font-medium text-sm hover:bg-red-700 active:bg-red-800 transition disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Rescinding…
              </>
            ) : (
              "Continue"
            )}
          </button>

          <button
            onClick={onClose}
            disabled={isPending}
            className="w-full h-12 rounded-xl border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}