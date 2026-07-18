"use client";
import React, { useEffect } from "react";
import { useApplicationFee } from "@/app/hooks/useAdmission";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { AxiosError } from "axios";
export default function ApplicationFee({ id }: { id: string }) {
  const { mutate, data, isPending, isSuccess, isError, error } =
    useApplicationFee(id);
  const router = useRouter();
  const onContinueToPayment = async () => {
    mutate();
  };

  useEffect(() => {
    if (isSuccess) router.push(data.paymentUrl);
    if (isError) {
      const err = (error as AxiosError<ApiErrorMessage>).response?.data
        ?.message;
      console.log(error);
      toast.error(err);
    }
  }, [isSuccess, isError]);
  return (
    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
      <div className="flex-1">
        <p className="text-sm font-semibold text-red-700">
          Application fee not completed
        </p>
        <p className="mt-1 text-sm text-red-600">
          Your application will not be reviewed until the application fee has
          been paid.
        </p>

        <button
          onClick={onContinueToPayment}
          disabled={isPending}
          className="mt-3 inline-flex items-center cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
        >
          Continue to payment
        </button>
      </div>
    </div>
  );
}
