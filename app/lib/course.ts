import { api } from "./api";

export const courses = async () => {
  const res = await api.get("/courses/apply");
  return res.data;
};

export const enrolCourses = async ({ courses }: { courses: number[] }) => {
  const res = await api.post("/courses/enrol", { courses });
  return res.data;
};

export const enroled = async () => {
  const res = await api.get("/courses/my");
  return res.data;
};

export const enrolProgram = async (details: {
  id: string;
  programs: string[];
}) => {
  const res = await api.post(`/application/enrol/${details.id}`, {
    programs: details.programs,
  });
  return res.data;
};

export const approve = async (details: {
  id: string;
  installment: boolean;
}) => {
  const res = await api.post(`/application/approve/${details.id}`, {
    ...details,
  });
  return res.data;
};

export const review = async (details: { id: string; reason: string }) => {
  const res = await api.post(`/application/review/${details.id}`, {
    reason: details.reason,
  });
  return res.data;
};

export const receipt = async (id: string) => {
  const res = await api.get(`/application/receipt/${id}`);
  return res.data;
};

export const categories = async () => {
  const res = await api.get("/courses/categories");
  return res.data;
};

export const apply = async (form: FormData) => {
  const res = await api.post("/application", form);
  return res.data;
};

export const joinTeam = async (form: FormData) => {
  const res = await api.post("/consultation/join", form);
  return res.data;
};

export const edit = async ({ form, id }: { form: FormData; id: string }) => {
  const res = await api.patch(`/application/${id}`, form);
  return res.data;
};

export const applications = async () => {
  const res = await api.get("/application");
  return res.data;
};

export const application = async (id: string) => {
  const res = await api.get(`/application/${id}`);
  return res.data;
};

export const payup = async (id: string) => {
  const res = await api.post(`/application/pay/${id}`);
  return res.data;
};
