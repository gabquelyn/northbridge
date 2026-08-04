// Blogs

import { api } from "./api";

export const create_blog = async (formData: FormData) => {
  const res = await api.post(`/blog`, formData);
  return res.data;
};

export const update_blog = async (details: { data: FormData; id: string }) => {
  const res = await api.patch(`/blog/${details.id}`, details.data);
  return res.data;
};

export const delete_blog = async (id: string) => {
  const res = await api.delete(`/blog/${id}`);
  return res.data;
};

export const get_blog = async (id: string) => {
  const res = await api.get<{ blog: Blog }>(`/blog/${id}`);
  return res.data;
};

export const get_all_blogs = async () => {
  const res = await api.get<{ blogs: Blog[] }>(`/blog`);
  return res.data;
};
