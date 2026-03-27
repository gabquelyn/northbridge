import { api } from "./api";

export const courses = async () => {
  const res = await api.get("/application/apply/courses");
  return res.data;
};

export const enrolCourses = async ({ courses }: { courses: number[] }) => {
  const res = await api.post("/application/courses/enrol", { courses });
  return res.data;
};

export const enroled = async () => {
  const res = await api.get("/application/courses/my");
  return res.data;
};

export const enrolProgram = async (details: {id: string, programs: string[]}) => {
  const res = await api.post(`/application/enrol/${details.id}`);
  return res.data;
};
export const receipt = async (id: string) => {
  const res = await api.get(`/application/receipt/${id}`);
  return res.data;
};

export const categories = async () => {
  const res = await api.get("/application/courses/categories");
  return res.data;
};

export const apply = async (form: FormData) => {
  const res = await api.post("/application", form);
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
