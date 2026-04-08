import AnimatedCancel from "@/app/components/AnimatedCancel";
import Button from "@/app/components/atoms/Button";
import { useAdminApprove, useReceipt } from "@/app/hooks/useAdmission";
import { AxiosError } from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import AnimatedChecked from "@/app/components/AnimatedChecked";
import Receipt from "./Receipt";
import clsx from "clsx";
export default function AcceptApplication({
  mode,
  name,
  onCancel,
  id,
}: {
  mode: "off-site" | "on-site";
  name: string;
  onCancel: Fn;
  id: string;
}) {
  const router = useRouter();
  const { data, isPending } = useReceipt(id);
  const {
    mutate,
    isPending: approving,
    isError,
    error,
    isSuccess,
  } = useAdminApprove();
  useEffect(() => {
    if (isError) {
      const message = (error as AxiosError<ApiErrorMessage>)?.response?.data
        ?.message;
      console.log(error);
      toast.error(message);
    }
    const redirectTimer = setTimeout(() => {
      if (isSuccess) router.push("/application");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, [isError, isSuccess]);

  const [installment, setInstallment] = useState(false);

  const approveHandler = async () => {
    mutate({ id, installment });
  };

  if (isSuccess) {
    return <AnimatedChecked message="Application Approved" />;
  }

  return (
    <div className="flex flex-col p-4 text-sm items-center justify-center w-full gap-4">
      {mode == "on-site" && (
        <div className="flex flex-col gap-6">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
              <Image
                src="/asset/approve.png"
                alt=""
                height={32}
                width={32}
                className="relative z-10"
              />
            </div>
          </div>

          {/* Content */}
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-gray-900">
              Confirm Application
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You are about to confirm{" "}
              <span className="font-medium text-gray-900">{name}</span>&apos;s
              application as valid. This will allow them to proceed with
              payment.
            </p>
          </div>

          {/* Option */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <p className="text-sm font-medium text-gray-900">
                  Allow installment payments
                </p>
                <p className="text-xs text-gray-500">
                  Enable flexible fee payment for this applicant <br />
                  (50%) paid twice
                </p>
              </div>

              <input
                type="checkbox"
                checked={installment}
                onChange={(e) => setInstallment(e.target.checked)}
                className="w-5 h-5 accent-primary cursor-pointer"
              />
            </label>
          </div>

          {/* Actions */}
          <div className="flex flex-col md:flex-row gap-3">
            <Button
              className="w-full h-12 rounded-xl text-sm font-medium shadow-md"
              onClick={approveHandler}
            >
              {approving ? (
                <ClipLoader size={14} color="#fff" />
              ) : (
                "Yes, Approve Application"
              )}
            </Button>

            <button
              className="w-full h-12 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {mode == "off-site" &&
        (isPending ? (
          <ClipLoader />
        ) : data?.data.length == 0 ? (
          <AnimatedCancel message="Payment invoice not found" />
        ) : (
          <div className="w-full space-y-4">
            <div className="max-h-70 overflow-y-auto space-y-3">
              {data?.data.map((datum) => (
                <Receipt
                  key={datum.reference}
                  reference={datum.reference}
                  status={datum.status}
                  currency={datum.currency}
                  amount={+datum.amount / 100}
                  createdAt={datum.createdAt}
                />
              ))}
            </div>

            <div className="mt-3 flex flex-col md:flex-row gap-3 justify-between">
              <button className="action w-full" onClick={approveHandler}>
                {approving ? <ClipLoader size={10} /> : <p>Confirm</p>}
              </button>
              <button
                className="p-2 px-5 border-2 border-gray-200 rounded-2xl cursor-pointer w-full"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
