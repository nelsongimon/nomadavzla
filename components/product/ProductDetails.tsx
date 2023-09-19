"use client";

import { Product } from "@/types";
import Container from "../ui/Container";
import Image from "next/image";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product
}: ProductDetailsProps) {
  return (
    <Container>
      <div className="relative flex justify-center w-full items-center mt-12">
        <h3 className="text-8xl text-gray-color font-extrabold uppercase tracking-tight" dangerouslySetInnerHTML={{ __html: product.description }} />
        <h3 className="absolute text-4xl font-semibold text-primary-color">
          {product.name}
        </h3>
      </div>
      <div className="grid grid-cols-12 gap-x-4 mt-6">
        <div className="col-span-4">
          <div className="flex flex-col">
            <ul className="mt-5 flex flex-col gap-y-1">
              {product.attributes.map((item) => (
                <li key={item.id} className="flex gap-x-3 bg-gray-50 py-2 px-3">
                  <span className="text-lg font-semibold">{item.name}: </span>
                  <span className="text-lg font-light">{item.options?.[0]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-8 p-5">
          <div className="aspect-video relative">
            <Image
              fill
              src={product.sku}
              alt="Product Detail"
              className="
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
