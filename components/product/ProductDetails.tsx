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
      <div className="grid grid-cols-12 gap-x-4 py-14">
        <div className="col-span-4">
          <div className="flex flex-col">
            <div className="flex gap-x-4">
              <h3
                className="font-semibold text-2xl text-primary-color"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <span className="font-semibold text-2xl text-primary-color">
                |
              </span>
              <h3 className="font-semibold text-2xl text-primary-color">
                {product.name}
              </h3>
            </div>
            <ul className="mt-5 flex flex-col gap-y-1">
              {product.attributes.map((item) => (
                <li key={item.id} className="flex gap-x-3 bg-gray-color py-2 px-3">
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
