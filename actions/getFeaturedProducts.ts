import { api } from "@/lib/api";
import { Product } from "@/types";
export async function getFeaturedProducts(): Promise<Product[]> {
  try { 
    const res = await api.get("/featured-products");
    return res.data.products;

  } catch (error) {
    return [];
  }
}


// Old code
// import { api } from "@/lib/woocommerce";

// export async function getFeaturedProducts() {

//   try { 
//     const { data } = await api.get("products",
//       {
//         per_page: 8,
//         featured: true,
//       }
//     );

//     return data;

//   } catch (error) {
//     return [];
//   }
// }