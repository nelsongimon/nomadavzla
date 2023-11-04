import { api } from "@/lib/api";

export async function getSearchProducts(search: string, query: Record<string, any>) {
  const filter = Object.values(query).join("_");
  const url = filter ? `/search/${search}?filter=${filter}` : `/search/${search}`;

  try {
    const res = await api.get(url);
    return res.data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
}