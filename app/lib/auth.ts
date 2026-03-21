import { api } from "./api";
import { setAccessToken } from "./token";

// get current user

export const refresh = async () => {
  const res = await api.get("/auth/refresh");
  setAccessToken(res.data.accessToken);
  return res.data;
};

export const login = async (credentials: LoginCredentials) => {
  const res = await api.post("/auth", credentials);
  return res.data;
};

export const logout = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};

export const register = async (details: RegistrationDetails) => {
  const res = await api.post("/auth/register", details);
  return res.data;
};

export const loginWithGoogle = async (token: string) => {
  const res = await api.post("/auth/google", { token });
  return res.data;
};

export const registerWithGoogle = async (token: string) => {
  const res = await api.post("/auth/google/register", { token });
  return res.data;
};

export const verify = async (details: VerifyCredentials) => {
  const res = await api.post(`/auth/verify/${details.id}/${details.token}`);
  return res.data;
};

export const forgot = async (email: string) => {
  const res = await api.post(`/auth/forgot`, { email });
  return res.data;
};

export const reset = async ({
  password,
  token,
}: {
  password: string;
  token: string;
}) => {
  const res = await api.post(`/auth/reset/${token}`, { password });
  return res.data;
};
