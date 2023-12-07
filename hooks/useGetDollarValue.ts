import { useEffect, useState } from "react";
import axios from "axios";

export default function useGetDollarValue() {
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDollarValue = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://exchange.vcoud.com/coins/latest");
        const dollarValue = res.data.find((item: any) => item._id === "5d5e08bb639f395c7fd11da9").price;
        setData(dollarValue);
        
      } catch (error) {
        console.log(error);
        setData(0);
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
