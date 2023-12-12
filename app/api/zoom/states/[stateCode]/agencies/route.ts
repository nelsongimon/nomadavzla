import { NextResponse } from "next/server";
import axios from "axios";

const baseUrl = "http://sandbox.zoom.red/baaszoom/public/canguroazul";

interface IParams {
  params: {
    stateCode: string
  }
}

export async function GET(request: Request, { params }: IParams) {
  const { stateCode } = params;
  try {
    const res = await axios.get(`${baseUrl}/getOficinaEstadoWs?codestado=${stateCode}`);
    return NextResponse.json({
      agencies: res.data.entidadRespuesta
    });
  } catch (error) {
    console.log(error, "ZOOM AGENCIES ERROR");
  }
}