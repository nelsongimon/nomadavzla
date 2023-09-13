import { Tag } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useGetTags() {
  const [data, setData] = useState<Tag[]>([]);

  useEffect(() => {
    const getTags = async () => {
      try {
        const res = await axios.get("/api/products/tags");
        setData(res.data);

      } catch (error) {
        console.log(error);
      }
    }
    getTags();
  }, []);
  return {
    data
  };
}
