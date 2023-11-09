import { api } from "@/lib/api";

export async function getFilter(query: Record<string, string>) {
  const filter = Object.values(query).join("_");
  const url = filter ? `/filter?values=${filter}` : "/filter";

  try {
    const res = await api.get(url);
    return res.data.attributes;
  } catch (error) {
    console.log(error);
    return [];
  }
}