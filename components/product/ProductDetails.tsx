"use client";

import { Product } from "@/types";
import Container from "../ui/Container";
import Image from "next/image";
import { addAbsolutePathImage } from "@/lib/utils";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product
}: ProductDetailsProps) {
  let attributes: { [key: string]: string | null } = {};
  product.attributeValues.forEach((item) => {
    if (item.attribute.name in attributes) {
      attributes[item.attribute.name] = attributes[item.attribute.name] + ", " + item.name;
    } else {
      attributes = {
        ...attributes,
        [item.attribute.name]: item.name
      }
    }
  });
  return (
    <Container>
      <div className="relative flex justify-center w-full items-center">
        <h3 className="text-5xl lg:text-8xl text-gray-color font-extrabold uppercase tracking-tight">
          {product.category.name}
        </h3>
        <h3 className="absolute text-2xl lg:text-4xl font-semibold text-primary-color">
          {product.name}
        </h3>
      </div>
      <div className="flex flex-col gap-y-4 lg:grid lg:grid-cols-12 gap-x-4 mt-2 lg:mt-6">
        <div className="col-span-4">
          <div className="flex flex-col">
            <ul className="mt-5 flex flex-col gap-y-1">
              {Object.entries(attributes).length > 0 && (
                Object.entries(attributes).map(([key, value], index) => (
                  <li key={index} className="flex gap-x-3 bg-gray-50 py-2 px-3">
                    <span className="text-lg font-semibold">{key}: </span>
                    <span className="text-lg font-light">{value}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="col-span-8 p-0 lg:p-5">
          <div className="h-[300px] relative">
            <Image
              fill
              src={product.specificationImage ? addAbsolutePathImage(product.specificationImage) : "https://placehold.co/1000x300.png"}
              alt="Product Detail"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
