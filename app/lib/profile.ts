import { api } from "./api";
export const getprofile = async () => {
  const res = await api.get("profile");
  return res.data;
};

export const consultation = async (details: Record<string, string>) => {
  const res = await api.post("/consultation", {
    ...details,
  });
  return res.data;
};
