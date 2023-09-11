import { api } from "@/lib/woocommerce";

export async function getProduct(slugProduct: string) {
  try { 
    const { data } = await api.get(`products`, { slug: slugProduct });
    return data[0];

  } catch (error) {
    return undefined;
  }
}