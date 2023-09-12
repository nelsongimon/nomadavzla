"use client";

import { Expand, ShoppingCart, Heart } from "lucide-react";
import { MouseEventHandler } from "react";
import Image from "next/image";

import usePreviewModal from "@/hooks/usePreviewModal";
import IconButton from "./IconButton";
import { Product } from "@/types";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product
}: ProductCardProps) {
  const previewModal = usePreviewModal();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(product);
  }

  return (
    <div className="space-y-4">
      {/* Image and actions */}
      <div className="
        aspect-square
        bg-gray-color
        relative
        group
        cursor-pointer
      ">
        <Link href={`/productos/${product?.slug}`}>
          <Image
            fill
            src={product.images[0].src}
            alt={product.images[0].alt}
            className="
              object-contain
            "
          />
        </Link>
        <div className="
          absolute
          bottom-5
          w-full
          px-6
          opacity-0
          group-hover:opacity-100
          transition
        ">
          <div className="
            flex
            justify-center
            gap-x-6
          ">
            <IconButton
              icon={<Expand size={25} className="text-primary-color stroke-[1.5]" />}
              onClick={onPreview}
            />
            <IconButton
              icon={<ShoppingCart size={25} className="text-primary-color stroke-[1.5]" />}
              onClick={() => { }}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-[2px]">
          <div>
            <Link href={`/productos/${product?.slug}`} className="text-primary-color hover:text-secondary-color text-base underline-offset-4 hover:underline duration-300">
              {product.name}
            </Link>
          </div>
          <div>
            <span className="text-gray-strong-color text-sm font-light">
              {product.attributes?.[5]?.options?.[0] || "Género"}
            </span>
          </div>
          <div className="mt-2">
            <span className="border border-gray-300 text-sm px-2 py-1">
              {product.attributes?.[0]?.options?.[0] || "Size"}
            </span>
          </div>
          {/* Colors */}
          {/* <div className="flex flex-col gap-y-1">
            <p className="text-sm text-primary-color font-light">
              Negro
            </p>
            <div className="flex gap-x-1">
              <button className="w-6 h-6 p-[1px] rounded-full border-gray-500 border">
                <div className="bg-black w-full h-full rounded-full"></div>
              </button>
              <button className="w-6 h-6 p-[1px] rounded-full border-gray-200 border">
                <div className="bg-gray-600 w-full h-full rounded-full"></div>
              </button>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col justify-between items-end">
          <div>
            <button>
              <Heart size={25} className="text-primary-color stroke-[1.5]" />
            </button>
          </div>
          <div>
            <span className="font-medium text-2xl">${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
