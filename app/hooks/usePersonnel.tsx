import { useQuery } from "@tanstack/react-query";
import { get_personnels } from "../lib/personnel";

export const usePersonnel = () => {
  return useQuery({
    queryKey: ["personnel"],
    queryFn: get_personnels,
    retry: false,
  });
};