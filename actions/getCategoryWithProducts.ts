import { api } from "@/lib/api";

export async function getCategoryWithProducts(category: string, query: Record<string, any>) {
  const filter = Object.values(query).join("_");
  const url = filter ? `/categories/${category}?filter=${filter}` : `/categories/${category}`;
  try {
    const res = await api.get(url);
    return res.data.category;
  } catch (error) {
    console.log("CATEGORY WITH PRODUCTS ERROR", error);
    return [];
  }
}