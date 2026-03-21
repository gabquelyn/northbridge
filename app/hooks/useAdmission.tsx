import { useQuery } from "@tanstack/react-query";
import { courses } from "../lib/course";

export const useAdmission = () =>
  useQuery({
    queryFn: courses,
    queryKey: ["courses"],
  });
