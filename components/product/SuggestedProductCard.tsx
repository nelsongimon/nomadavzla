"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/types";
import { addAbsolutePathImage } from "@/lib/utils";

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
        aspect-video
        bg-gray-color
        relative
        group
        cursor-pointer
      ">
        <Link href={`/productos/${product.slug}`} onClick={handleClickSearchProduct}>
          <Image
            fill
            src={addAbsolutePathImage(product.images[0].image)}
            alt="Product Image"
            className="
              object-contain
            "
          />
        </Link>
      </div>
      {/* Description */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-0 lg:gap-y-[1px]">
          <Link
            href={`/productos/${product?.slug}`}
            onClick={handleClickSearchProduct}
            className="text-primary-color hover:text-secondary-color underline-offset-4 hover:underline duration-300 text-xs lg:text-base"
          >
            {product.name}
          </Link>
          {/* Put here the price */}
          <div>
            <span className="font-medium text-base lg:text-lg">${product.salePrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
