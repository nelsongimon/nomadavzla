import { NextResponse } from "next/server";
import { api } from "@/lib/woocommerce";

interface IParams {
  categoryId: number;
}

export async function GET(
  req: Request,
  { params }: { params: IParams }
) {
  const id =  params.categoryId;
  try {
    const { data } = await api.get(`products/categories`, {
      parent: id
    });
    return NextResponse.json(data);

  } catch (error) {
    return new NextResponse("Category not found", { status: 404 });
  }
}