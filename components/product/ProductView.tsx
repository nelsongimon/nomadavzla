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
  return (
    <div className="bg-gray-color">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-7 grid grid-cols-12">
              <div className="col-span-1" />
              <div className="col-span-10">
                <Gallery images={product.images} />
              </div>
              <div className="col-span-1" />
            </div>
            <div className="col-span-5">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
