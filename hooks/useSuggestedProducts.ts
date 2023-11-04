"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import { api } from "@/lib/api";

export default function useSuggestedProducts() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const getSuggestedProducts = async () => {
      try {
        const res = await api.get("/featured-products/4");
        setData(res.data.products);

      } catch (error) {
        console.log(error);
        setData([]);
      }
    }
    getSuggestedProducts();
  }, []);
  return {
    data
  };
}
