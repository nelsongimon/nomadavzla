import { useState, useEffect } from "react";
import axios from "axios";

import { Category } from "@/types";

export function useGetChildrenCategories(id: number) {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    const getCategories = () => {
      axios.get(`/api/products/categories/${id}/children`)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        } );
    }
    getCategories();
  }, [id]);

  return {
    data
  }
}