"use client";
import React, { useEffect } from "react";
import { useDownload } from "../hooks/useAdmission";
import { useRouter, useSearchParams } from "next/navigation";
import { AxiosError } from "axios";

export default function FileViewer() {
  const params = useSearchParams();
  const router = useRouter();
  const { mutate, isPending, data, isSuccess, isError, error } = useDownload();

  useEffect(() => {
    mutate({
      public_id: params.get("public_id") as string,
      resource_type: params.get("resource_type") as string,
    });
  }, []);

  useEffect(() => {
    if (isSuccess) {
      router.push(data.url);
    }
    if (isError) {
      if ((error as AxiosError).response?.status == 403) {
        return  router.replace(`/login?from=${window.location.href}`);
      }
    }
  }, [isSuccess, isError]);

  if (isPending) return <div>Getting file...</div>;
  if (isError) return <div>Unable to retrieve file</div>;
  return <div>Downloading...</div>;
}
