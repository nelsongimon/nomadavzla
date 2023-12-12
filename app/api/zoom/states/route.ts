import { NextResponse } from "next/server";
import axios from "axios";

const url = "http://sandbox.zoom.red/baaszoom/public/canguroazul/getEstados";

export async function GET(request: Request) {

  try {
    const res = await axios.get(url);
    return NextResponse.json({
      states: res.data.entidadRespuesta
    });
  } catch (error) {
    console.log(error, "ZOOM STATES ERROR");
  }
}