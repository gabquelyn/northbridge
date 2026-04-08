"use client";
import AnimatedChecked from "@/app/components/AnimatedChecked";
import { useAdminReview } from "@/app/hooks/useAdmission";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { GrInspect } from "react-icons/gr";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

export default function ReviewMessage({ id, onClose }: { id: string , onClose : () => void}) {
  const [message, setMessage] = useState("");
  const { mutate, isPending, isSuccess, isError, error } = useAdminReview();
  const router = useRouter();

  const reviewHandler = () => {
    if (!message.trim()) {
      toast.error("Please enter a review message");
      return;
    }
    mutate({ id, reason: message });
  };

  useEffect(() => {
    if (isError) {
      const msg = (error as AxiosError<ApiErrorMessage>)?.response?.data?.message;
      toast.error(msg || "Something went wrong");
      console.log(error);
    }

    const redirectTimer = setTimeout(() => {
      if (isSuccess) router.push("/application");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, [isError, isSuccess]);

  if (isSuccess)
    return (
      <AnimatedChecked message="Review message sent successfully" />
    );

  return (
  
      <div className="p-8 flex flex-col gap-6">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            <GrInspect className="text-primary text-3xl relative z-10" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">
            Send Review Message
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
            This action will mark the application as <span className="font-medium text-gray-900">rejected</span> 
            and notify the student to review their submission before proceeding.
          </p>
        </div>

        {/* Textarea */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-800">
            Review Message
          </label>

          <div className="relative">
            <textarea
              className="resize-none w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm 
              outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
              rows={5}
              placeholder="Explain clearly why the application was rejected and what needs to be corrected..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {/* subtle focus glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 focus-within:ring-2 focus-within:ring-primary/20" />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-3 mt-2">
          <button
            onClick={reviewHandler}
            disabled={isPending}
            className="w-full h-12 rounded-xl bg-primary text-white font-medium shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {isPending ? (
              <ClipLoader size={14} color="#fff" />
            ) : (
              "Send Review"
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full h-12 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>

      </div>
    
  );
}