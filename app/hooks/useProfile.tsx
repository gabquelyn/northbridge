import { useMutation, useQuery } from "@tanstack/react-query";
import { consultation, getprofile } from "../lib/profile";

export const useProfile = () =>
  useQuery<{ data: { role: "admin" | "user" } }>({
    queryFn: getprofile,
    queryKey: ["profile"],
  });

export const useConsultation = () => 
  useMutation({
    mutationFn: consultation
  })