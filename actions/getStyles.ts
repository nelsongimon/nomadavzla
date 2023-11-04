import { api } from "@/lib/api";

export async function getStyles() {
  try {
    const res = await api.get("/styles");
    return res.data.styles;
    
  } catch (error) {
    console.log(error);
    return [];
  }
}