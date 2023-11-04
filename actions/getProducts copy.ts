import { api } from "@/lib/woocommerce";

export async function getProducts(query: any) {
  const categories = Object.values(query).join();
  try { 
    const { data } = await api.get("products",
      {
        category: categories,
        category_operator: "AND",
        per_page: 10,
      }
    );

    return data;
  } catch (error) {
    return [];
  }
}