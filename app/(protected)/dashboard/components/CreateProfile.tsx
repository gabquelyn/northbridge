"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Button from "@/app/components/atoms/Button";
import { TiPlus } from "react-icons/ti";
import { useCreateProfile } from "@/app/hooks/useProfile";
import Modal from "@/app/components/Modal";
import { ClipLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
export default function CreateProfile() {
  const { mutate, isPending, isSuccess, isError, data } = useCreateProfile();
  const router = useRouter();
  useEffect(() => {
    if (isSuccess) {
      router.push(`/dashboard/apply?profile=${data.id}`);
    }
    if (isError) {
      toast.error("Something went wrong");
    }
  }, [isSuccess, isError]);

  if (isPending) {
    return (
      <Modal>
        <div className="flex items-center justify-center">
          <ClipLoader size={25} />
        </div>
      </Modal>
    );
  }
  return (
    <div>
      <Button onClick={() => mutate()}>
        <div className="text-[.9rem] flex items-center gap-1">
          <TiPlus />
          <p className="">Create a new application</p>
        </div>
      </Button>
    </div>
  );
}
