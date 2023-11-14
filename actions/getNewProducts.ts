import { api } from "@/lib/api";
export async function getNewProducts() {
  try { 
    const res = await api.get("/new-products/5");
    return res.data.products;

  } catch (error) {
    return [];
  }
}
