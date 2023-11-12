import { api } from "@/lib/api";

export async function getFilterWithCategory(category: string, query: Record<string, string>) {
  const filter = Object.values(query).join("_");
  const url = filter ? `/categories/${category}/filter?values=${filter}` : `/categories/${category}/filter`;
  try {
    const res = await api.get(url);
    return res.data.attributes;
  } catch (error) {
    console.log("CATEGORY WITH FILTER ERROR", error);
    return [];
  }
}