import { api } from "@/lib/woocommerce";
import { Product } from "@/types";

export async function getSearchProducts(query: string, searchParams: Record<string, any>) {
  const categorySlugs = Object.values(searchParams);
  try { 
    const { data: products } = await api.get("products",
      {
        search: query
      }
    );

    const filteredProducts = products.filter((product: Product) => {
      const productCategories = product.categories.map((category) => category.slug);
      return categorySlugs.every((slug) => productCategories.includes(String(slug)));
    });

    return filteredProducts;

  } catch (error) {
    return [];
  }
}