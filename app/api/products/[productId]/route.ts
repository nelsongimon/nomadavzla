import { NextResponse } from "next/server";
import { api } from "@/lib/woocommerce";

interface IParams {
  productId: string;
}

export async function GET(
  req: Request,
  { params }: { params: IParams }
) {
  const id =  params.productId;
  try {
    const { data } = await api.get(`products/${id}`);

    return NextResponse.json(data);
  } catch (error) {
    
    return new NextResponse("Product not found", { status: 404 });
  }


}