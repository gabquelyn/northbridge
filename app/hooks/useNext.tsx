"use client";
import { UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

interface EditVariables<TDetails> {
  details: TDetails;
  profileId?: string;
}

interface UseNextOptions<TDetails, TData, TError, TContext = unknown> {
  mutation: UseMutationResult<TData, TError, EditVariables<TDetails>, TContext>;
  next?: () => void;
  details: TDetails;
}

export default function useNext<
  TDetails,
  TData = unknown,
  TError = AxiosError<ApiErrorMessage>,
  TContext = unknown
>({ mutation, next = () => {}, details }: UseNextOptions<TDetails, TData, TError, TContext>) {
  const params = useSearchParams();
  const { mutate, isPending, isSuccess, isError, error } = mutation;

  const saveHandler = () => {
    mutate({
      details,
      profileId: params.get("profile") ?? undefined,
    });
  };

  const nextRef = useRef(next);
  nextRef.current = next;

  useEffect(() => {
    if (isSuccess) {
      nextRef.current();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      const message =
        (error as AxiosError<ApiErrorMessage> | null)?.response?.data
          ?.message ?? "Something went wrong. Please try again.";
      toast.error(message);
    }
  }, [isError, error]);

  return { saveHandler, isPending };
}