"use client";
import React, {Suspense} from "react";
import ResetForm from "../components/ResetForm";
import { useReset } from "@/app/hooks/useAuth";

export default function page() {
  const { mutate, isPending, isSuccess, isError } = useReset();
  return (
    <div className="flex h-screen items-center justify-center text-sm bg-[#f2f2f2]">
      <Suspense>
        <ResetForm
          onSubmit={(data) => {
            mutate(data);
          }}
          isPending={isPending}
          isSuccess={isSuccess}
          isError={isError}
        />
      </Suspense>
    </div>
  );
}
