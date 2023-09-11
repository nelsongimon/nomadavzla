import { api } from "@/lib/woocommerce";
import { Product } from "@/types";

export async function getProducts(query: Record<string, any>) {
  const categorySlugs = Object.values(query);

  try { 
    const { data } = await api.get("products",
      {
        per_page: 100,
      }
    );

    const filteredProducts = data.filter((product: Product) => {
      const productCategories = product.categories.map((category) => category.slug);
      return categorySlugs.every((slug) => productCategories.includes(String(slug)));
    });

    return filteredProducts;

  } catch (error) {
    return [];
  }
}