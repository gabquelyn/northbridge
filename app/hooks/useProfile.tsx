import { useMutation, useQuery } from "@tanstack/react-query";
import {
  academic,
  citizenship,
  consultation,
  contact,
  create,
  document,
  getprofile,
  mailing,
  mode,
  parent,
  profile,
  programs,
  courses,
  incomplete,
} from "../lib/profile";

export const useProfile = () =>
  useQuery<{ data: { role: "admin" | "user" } }>({
    queryFn: getprofile,
    queryKey: ["user"],
  });

export const useApplicationProfile = (profileId: string) =>
  useQuery<{ profile: Profile }>({
    queryFn: () => profile(profileId),
    queryKey: ["profile", profileId],
  });

export const useConsultation = () =>
  useMutation({
    mutationFn: consultation,
  });

export const useCreateProfile = () =>
  useMutation({
    mutationFn: create,
  });

export const useEditContact = () =>
  useMutation({
    mutationFn: contact,
  });

export const useEditMailing = () =>
  useMutation({
    mutationFn: mailing,
  });

export const useEditAcademic = () =>
  useMutation({
    mutationFn: academic,
  });

export const useEditCitizenship = () =>
  useMutation({
    mutationFn: citizenship,
  });

export const useEditMode = () =>
  useMutation({
    mutationFn: mode,
  });

export const useEditPrograms = () =>
  useMutation({
    mutationFn: programs,
  });

export const useEditCourses = () =>
  useMutation({
    mutationFn: courses,
  });

export const useEditParent = () =>
  useMutation({
    mutationFn: parent,
  });

export const useEditDocument = () =>
  useMutation({
    mutationFn: document,
  });

interface ProfileData extends Profile {
  _id: string
  createdAt: string
}
export const useGetIncomplete = () =>
  useQuery<{ profiles : ProfileData[] }>({
    queryFn: incomplete,
    queryKey: ["profile"]
  });
