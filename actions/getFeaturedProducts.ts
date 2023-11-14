import { api } from "@/lib/api";
import { Product } from "@/types";
export async function getFeaturedProducts() {
  try { 
    const res = await api.get("/featured-products/8");
    return res.data.products;

  } catch (error) {
    return [];
  }
}
