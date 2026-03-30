import { api } from "./api";
export const getprofile = async () => {
  const res = await api.get("profile");
  return res.data;
};

export const consultation = async (details: {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  academicBackground: string;
  pathway: string;
}) => {
  const res = await api.post("/consultation", {
    ...details,
  });
  return res.data;
};
