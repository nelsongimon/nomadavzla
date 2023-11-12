import { api } from "@/lib/api";

export async function getProduct(slug: string) {
  try { 
    const res = await api.get(`/products/${slug}`);
    return res.data;

  } catch (error) {
    return {
      product: null,
      relatedProducts: []
    };
  }
}