"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Attribute } from "@/types";
import { api } from "@/lib/api";

export default function useGetFilterWithStyle() {
  const [data, setData] = useState<Attribute[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const param = useParams();
  console.log("PARAMS", param);
  const query = Array.from(searchParams.values());
  const filter = query.join("_");
  // const url = filter ? `/styles/${style}/filter?values=${filter}` : `/styles/${style}/filter`;
  const url = "/products";

  useEffect(() => {
    const getFilter = async () => {
      try {
        setIsLoading(true);
        const res = await api.get(url);
        setData(res.data.attributes);

      } catch (error) {
        console.log(error);
        setData([]);
      }
      finally {
        setIsLoading(false);
      }
    }
    getFilter();
  }, []);

  return {
    data,
    isLoading
  }
}