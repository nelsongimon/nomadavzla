import { api } from "@/lib/woocommerce";

export async function getFeaturedProducts() {

  try { 
    const { data } = await api.get("products",
      {
        per_page: 4,
        featured: true,
      }
    );

    return data;

  } catch (error) {
    return [];
  }
}