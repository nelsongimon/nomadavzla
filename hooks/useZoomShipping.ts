import { useEffect, useState } from "react";
import axios from "axios";
import https from "https";

const baseUrl = "http://sandbox.zoom.red/baaszoom/public/canguroazul";

export default function useZoomShipping() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getZoomShipping = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${baseUrl}/getEstados`);
        // const res = await axios.get(`${baseUrl}/getEstados`, {
        //   httpsAgent: new https.Agent({  
        //     rejectUnauthorized: false
        //   })
        // });
        setData(res.data.entidadRespuesta);
        
      } catch (error) {
        console.log(error);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    }
    getZoomShipping();
  }, []);

  return {
    data,
    isLoading
  }
}
