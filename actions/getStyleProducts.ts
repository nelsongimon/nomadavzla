import { api } from "@/lib/woocommerce";
import { Product, Tag } from "@/types";

export async function getStyleProducts(style: string, query: Record<string, any>) {
  const categorySlugs = Object.values(query);
  try { 
    const { data: tags } = await api.get(`products/tags`);
    const tag = tags.filter((tag: Tag) => tag.slug === style)[0];

    const { data: products } = await api.get("products",
      {
        tag: tag.id
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