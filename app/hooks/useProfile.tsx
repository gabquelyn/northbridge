import { useQuery } from "@tanstack/react-query";
import { getprofile } from "../lib/profile";

export const useProfile = () =>
  useQuery<{ data: { role: "admin" | "user" } }>({
    queryFn: getprofile,
    queryKey: ["profile"],
  });
