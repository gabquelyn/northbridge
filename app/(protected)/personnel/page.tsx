"use client";
import React from "react";
import { usePersonnel } from "@/app/hooks/usePersonnel";
import PersonnelTable from "./PersonnelTable";

export default function page() {
  const { data, isLoading, isSuccess, isError } = usePersonnel();

  if (isSuccess)
    return (
      <div>
        <PersonnelTable personnels={data.personnels} />
      </div>
    );
}
