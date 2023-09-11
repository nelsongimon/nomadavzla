import { NextResponse } from "next/server";
import { api } from "@/lib/woocommerce";

interface IParams {
  attributeId: number;
}

export async function GET(
  req: Request,
  { params }: { params: IParams }
) {
  const id =  params.attributeId;
  try {
    const { data } = await api.get(`products/attributes/${id}/terms`);
    return NextResponse.json(data);

  } catch (error) {
    return new NextResponse("Terms not found", { status: 404 });
  }
}