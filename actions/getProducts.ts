import { api } from "@/lib/api";

export async function getProducts(query: Record<string, string>) {
  const filter = Object.values(query).join("_");
  const url = filter ? `/products?filter=${filter}` : "/products";
  try {
    const res = await api.get(url);
    return res.data.products;
  } catch (error) {
    console.log(error);
    return [];
  }
}
