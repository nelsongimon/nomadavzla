import { api } from "@/lib/woocommerce";
import { Category } from "@/types";

export async function getCategories() {
  try {
    const { data: parent } = await api.get("products/categories", {
      orderby: "id",
      per_page: 100,
      parent: 0
    });

    const categories = await Promise.all(parent.map(async (category: Category) => {
      const { data: children } = await api.get(`products/categories`, {
        parent: category.id
      });

      return {
        parent: category,
        children
      }
    }));

    const filteredCategories = categories.filter((category) => category.children.length > 0);
      
    return filteredCategories;
    
  } catch (error) {
    return [];
  }
}