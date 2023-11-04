import { api } from "@/lib/api";

export async function getFilterWithSearch(search: string, query: Record<string, string>) {
  const filter = Object.values(query).join("_");
  const url = filter ? `/search/${search}/filter?values=${filter}` : `/search/${search}/filter`;  
  try {
    const res = await api.get(url);
    return res.data.attributes;
  } catch (error) {
    console.log(error);
    return [];
  }
}