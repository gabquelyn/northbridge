import { api } from "./api";


export const courses = async () => {
     const res = await api.get("/application/courses");
      return res.data;
}