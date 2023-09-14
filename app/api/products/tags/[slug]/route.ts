import { NextResponse } from "next/server";
import { api } from "@/lib/woocommerce";
import { Tag } from "@/types";

interface IParams {
  slug: string;
}

export async function GET(
  req: Request,
  { params }: { params: IParams }
) {
  const style =  params.slug;
  try {
    const { data: tags } = await api.get(`products/tags`);
    const tag = tags.filter((tag: Tag) => tag.slug === style);

    const { data: products } = await api.get("products",
      {
        tag: tag[0].id
      }
    );

    return Response.json(products);

  } catch (error) {
    return new NextResponse("Product not found", { status: 404 });
  }
}