"use client";
import AnimatedChecked from "@/app/components/AnimatedChecked";
import { useAdminReview } from "@/app/hooks/useAdmission";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { GrInspect } from "react-icons/gr";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

export default function ReviewMessage({ id }: { id: string }) {
  const [message, setMessage] = useState("");
  const { mutate, isPending, isSuccess, isError, error } = useAdminReview();
  const router = useRouter();
  const reviewHandler = () => {
    mutate({id, reason: message});
  };

  useEffect(() => {
    if (isError) {
      const message = (error as AxiosError<ApiErrorMessage>)?.response?.data
        ?.message;
      toast.error(message);
      console.log(error)
    }
    const redirectTimer = setTimeout(() => {
      if (isSuccess) router.push("/application");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, [isError, isSuccess]);

  if (isSuccess)
    return <AnimatedChecked message="Review message sent to guardian" />;
  return (
    <div className="flex flex-col p-4 text-sm items-center justify-center w-full gap-2">
      <div className="bg-primary/10 text-2xl text-primary p-8 rounded-full w-fit">
        <GrInspect />
      </div>
      <p className="text-lg text-gray-900">Send Review</p>

      <p className="text-center max-w-md">
        This will mark the application as rejected and notify the student to
        review application. Hence, the student cannot move forward.
      </p>
      <div className="w-full mt-2">
        <label>Review message</label>
        <textarea
          className="resize-none border border-gray-100  focus:ring-2 ring-primary bg-gray-50 rounded-xl p-4 w-full outline-none"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button className="action w-full" onClick={reviewHandler}>
        {isPending ? (
          <ClipLoader size={10} color="#479da5" />
        ) : (
          <p>Send Message</p>
        )}
      </button>
    </div>
  );
}
