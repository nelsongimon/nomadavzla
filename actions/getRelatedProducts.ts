import { api } from "@/lib/woocommerce";

export async function getRelatedProducts(relatedProducts: number[]) {

  try { 
    const { data } = await api.get("products",
      {
        include: relatedProducts,
        per_page: 8,
      }
    );

    return data;

  } catch (error) {
    return [];
  }
}