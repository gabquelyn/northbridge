import { useQuery, useMutation } from "@tanstack/react-query";
import {
  refresh,
  login,
  logout,
  loginWithGoogle,
  register,
  registerWithGoogle,
  verify,
  forgot,
  reset,
} from "../lib/auth";
import { setAccessToken } from "../lib/token";

export const useRefresh = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: refresh,
    retry: false,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      const accessToken = data.accessToken;
      setAccessToken(accessToken);
    },
    retry: false,
  });
};

export const useVerify = () => {
  return useMutation({
    mutationFn: verify,
    retry: false,
  });
};

export const useLoginWithGoogle = () => {
  return useMutation({
    mutationFn: loginWithGoogle,
    onSuccess: (data) => {
      const accessToken = data.accessToken;
      setAccessToken(accessToken);
    },
    retry: false,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    retry: false,
  });
};

export const useRegisterWithGoogle = () => {
  return useMutation({
    mutationFn: registerWithGoogle,
    retry: false,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => setAccessToken(null),
  });
};

export const useForgot = () => {
  return useMutation({
    mutationFn: forgot,
    retry: false,
  });
};

export const useReset = () => {
  return useMutation({
    mutationFn: reset,
    retry: false,
  });
};
