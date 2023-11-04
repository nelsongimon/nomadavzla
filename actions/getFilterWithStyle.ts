import { api } from "@/lib/api";

export async function getFilterWithStyle(style: string, query: Record<string, string>) {
  const filter = Object.values(query).join("_");
  const url = filter ? `/styles/${style}/filter?values=${filter}` : `/styles/${style}/filter`;
  try {
    const res = await api.get(url);
    return res.data.attributes;
  } catch (error) {
    console.log(error);
    return [];
  }
}