"use client";

import Container from "../ui/Container";
import ProductInfo from "./ProductInfo";
import Gallery from "./Gallery";
import { Product } from "@/types";

interface ProductViewProps {
  product: Product;
}

export default function ProductView({
  product
}: ProductViewProps) {
  console.log(product);
  return (
    <div className="bg-gray-color">
      <Container>
        <div className="px-2 pt-5 pb-12 lg:pt-10 lg:pb-10 lg:px-8">
          <div className="flex flex-col gap-y-10 lg:grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 lg:grid lg:grid-cols-12">
              <div className="block lg:hidden col-span-1" />
              <div className="lg:col-span-10">
                <Gallery images={product.images} />
              </div>
              <div className="block lg:hidden col-span-1" />
            </div>
            <div className="flex flex-col gap-y-4 lg:col-span-5">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
