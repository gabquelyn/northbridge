import { AxiosError } from "axios";
import React, { useEffect } from "react";
import { toast } from "sonner";
export default function ErrorComponent({
  isError,
  error,
}: {
  isError: boolean;
  error: any;
}) {
  useEffect(() => {
    if (isError) {
      console.log(error);
      const message =
        (error as AxiosError<ApiErrorMessage> | null)?.response?.data
          ?.message ?? "Something went wrong. Please try again.";
      toast.error(message);
    }
  }, [isError, error]);
  return <></>;
}
