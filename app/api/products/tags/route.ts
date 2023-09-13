import { NextResponse } from "next/server";
import { api } from "@/lib/woocommerce";

export async function GET() {
  try {
    const { data } = await api.get(`products/tags`);
    return NextResponse.json(data);

  } catch (error) {
    return new NextResponse("Something went wrong.", { status: 404 });
  }
}