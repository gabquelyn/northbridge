import { api } from "./api";

export const get_personnels = async () => {
  const res = await api.get<{ personnels: Personnel[] }>(`/personnel`);
  return res.data;
};
