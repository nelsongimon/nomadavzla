"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types";

interface SuggestedProductCardProps {
  product: Product;
  handleClickSearchProduct: () => void;
}

export default function SuggestedProductCard({
  product,
  handleClickSearchProduct
}: SuggestedProductCardProps) {


  return (
    <div className="space-y-2">
      {/* Image and actions */}
      <div className="
        aspect-square
        bg-gray-color
        relative
        group
        cursor-pointer
      ">
        <Link href={`/productos/${product?.slug}`} onClick={handleClickSearchProduct}>
          <Image
            fill
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="
              object-contain
            "
          />
        </Link>
      </div>
      {/* Description */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-[1px]">
          <div>
            <Link
              href={`/productos/${product?.slug}`}
              onClick={handleClickSearchProduct}
              className="text-primary-color hover:text-secondary-color underline-offset-4 hover:underline duration-300 text-sm"
            >
              {product.name}
            </Link>
          </div>
          {/* Put here the price */}
          <div>
            <span className="font-medium text-lg">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
