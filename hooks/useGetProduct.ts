import { api } from "@/lib/api";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export default function useGetProduct(id: string) {
  const [data, setData] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setIsLoading(true);
        const res = await api.get(`/products/id/${id}`);
        setData(res.data.product);
      }
      catch(error) {
        console.log(error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }
    getProduct();
  }, [id]);

  return {
    data,
    isLoading
  }
}
