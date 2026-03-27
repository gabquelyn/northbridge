import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  application,
  applications,
  apply,
  categories,
  courses,
  edit,
  enrolCourses,
  enroled,
  enrolProgram,
  receipt,
} from "../lib/course";

export const useCourses = () =>
  useQuery<{ data: Course[] }>({
    queryFn: courses,
    queryKey: ["courses"],
  });

export const useApplications = () =>
  useQuery<{ data: { application: Application[]; user: User } }>({
    queryFn: applications,
    queryKey: ["applications"],
  });

export const useEnrolled = () =>
  useQuery<{ data: number[]; paid: boolean; granted: boolean }>({
    queryFn: enroled,
    queryKey: ["mycourses"],
  });

export const useCatgories = () =>
  useQuery<{ data: { id: number; name: string }[] }>({
    queryFn: categories,
    queryKey: ["categories"],
  });

export const useApply = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: apply,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["application"],
      });
    },
  });
};

export const useEnrolCourses = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: enrolCourses,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["application"],
      });
    },
  });
};

export const useApplicationEdit = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: edit,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["application", "mycourses"],
      });
    },
  });
};

export const useEnrolProgram = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: enrolProgram,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["application"],
      });
    },
  });
};

export const useApplication = (id: string) =>
  useQuery<{ data: Application; user: { role: "user" | "admin" } }>({
    queryKey: ["application"],
    queryFn: () => application(id),
    enabled: !!id,
  });

export const useReceipt = (id: string) =>
  useQuery<{
    data: {
      reference: string;
      status: string;
      amount: string;
      currency: string;
    }[];
  }>({
    queryKey: ["receipt"],
    queryFn: () => receipt(id),
    enabled: !!id,
  });
