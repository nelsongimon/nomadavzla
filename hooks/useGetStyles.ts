import { api } from "@/lib/api";
import { Style } from "@/types";
import { useEffect, useState } from "react";

export default function useGetStyles() {
  const [data, setData] = useState<Style[]>([]);

  useEffect(() => {
    const getStyles = async () => {
      try {
        const res = await api.get("/styles");
        setData(res.data.styles);

      } catch (error) {
        setData([]);
        console.log(error);
      }
    }
    getStyles();
  }, []);
  return {
    data
  };
}
