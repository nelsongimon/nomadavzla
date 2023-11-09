//DELETE LATER
import { useState, useEffect } from "react";

import { Product } from "@/types";
import axios from "axios";

export default function useSearchProducts(query: string) {  
  const [data, setData] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const searhProducts = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`/api/products/search/${query}`);
        if (res.statusText !== "OK") {
          throw new Error("Something went wrong.");
        }
        setData(res.data);
        
      } catch (error) {  
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    searhProducts();
  }, [query]);
  return {
    data,
    isLoading
  };
}
