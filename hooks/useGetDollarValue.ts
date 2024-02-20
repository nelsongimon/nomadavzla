import { useEffect, useState } from "react";
import { api } from "@/lib/api";

export default function useGetDollarValue() {
  const [data, setData] = useState("0.00");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDollarValue = async () => {
      try {
        setIsLoading(true);
        const res = await api.get("/value/dollar");
        setData(res.data.value);

      } catch (error) {
        setData("0.00");
      } finally {
        setIsLoading(false);
      }
    }
    getDollarValue();
  }, []);

  return {
    data,
    isLoading
  }
}
