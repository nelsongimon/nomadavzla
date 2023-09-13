import { NextResponse } from "next/server";
import { api } from "@/lib/woocommerce";

interface IParams {
  query: string;
}

export async function GET(
  req: Request,
  { params }: { params: IParams }
) {
  const query =  params.query;
  try {
    const { data } = await api.get(`products/`, {
      search: query
    });
    return NextResponse.json(data);

  } catch (error) {
    return new NextResponse("No results", { status: 404 });
  }
}