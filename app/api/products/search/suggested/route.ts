import { NextResponse } from "next/server";

import { api } from "@/lib/woocommerce";

export async function GET(req: Request) {
  try { 
    const { data } = await api.get(
      "products",
      {
        per_page: 4,
        featured: true
      }
    );

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("No results", { status: 404 });
  }
}