"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Attribute } from "@/types";
import { api } from "@/lib/api";

type PageOptions = "products" | "style" | "search";

export default function useGetFilter(page: PageOptions) {
  const [data, setData] = useState<Attribute[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const params = useParams();
  const query = Array.from(searchParams.values());
  const filter = query.join("_");
  let url = "";
  if (page === "products") {
    url = filter ? `/filter?values=${filter}` : "/filter";
  } else if (page === "style") {
    const style = params.style;
    url = filter ? `/styles/${style}/filter?values=${filter}` : `/styles/${style}/filter`;
  } else {
    const search = params.query;
    url = filter ? `/search/${search}/filter?values=${filter}` : `/search/${search}/filter`;
  }

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