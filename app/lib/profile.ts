import { api } from "./api";
export const getprofile = async () => {
    const res = await api.get("profile");
    return res.data
}