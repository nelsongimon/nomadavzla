import { useEffect, useState } from "react";
import axios from "axios";

import { Product } from "@/types";

export default function useSuggestedProducts() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const getSuggestedProducts = async () => {
      try {
        const res = await axios.get("/api/products/search/suggested");
        if (res.status !== 200) {
          throw new Error("Error fetching suggested products");
        }
        setData(res.data);

      } catch (error) {
        console.log(error);
      }
    }
    getSuggestedProducts();
  }, []);
  return {
    data
  };
}
