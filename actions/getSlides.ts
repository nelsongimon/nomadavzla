import { api } from "@/lib/api";

export async function getSlides() {
  try {
    const res = await api.get("/slides");
    return res.data.slides;
  } catch (error) {
    return [];
  }
}