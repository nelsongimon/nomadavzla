"use client";

import { Expand, ShoppingCart, Heart } from "lucide-react";
import { MouseEventHandler } from "react";
import Image from "next/image";

import usePreviewModal from "@/hooks/usePreviewModal";
import IconButton from "./IconButton";
import { Product } from "@/types";
import Link from "next/link";
import { addAbsolutePathImage, formatPrice } from "@/lib/utils";

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
    <div className="space-y-3 lg:space-y-4">
      {/* Image and actions */}
      <div className="
        aspect-square
        bg-gray-color
        relative
        group
        cursor-pointer
        overflow-hidden
      ">
        <Link href={`/productos/${product?.slug}`}>
          <Image
            fill
            src={addAbsolutePathImage(product.images[0].image)}
            alt="Product Image"
            className="
              object-contain
              group-hover:scale-105
              duration-300
            "
          />
        </Link>
        {Boolean(Number(product.isNew)) && (
          <span className="absolute top-3 left-3 rounded-full bg-secondary-color text-light-color px-3 py-1 text-sm">
            Nuevo
          </span>
        )}
        {Number(product.quantity) === 0 && (
          <span className="absolute top-3 right-3 rounded-full bg-primary-color text-gray-100 px-3 py-1 text-sm">
            Agotado
          </span>
        )}
        <div className="
          hidden
          md:block
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
              {product.category.name ?? "Categoría"}
            </span>

          </div>
          <div className="mt-2">
            <span className="border border-gray-300 px-2 py-1 text-xs lg:text-sm">
              {product.tags[0].name ?? "Género"}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div>
            <button>
              <Heart size={25} className="text-primary-color stroke-[1.5]" />
            </button>
          </div>
          <div className="flex gap-x-1 items-start">
            <span className="font-medium text-xl lg:text-2xl">${formatPrice(product.salePrice)[0]}</span>
            <span className="font-medium text-sm lg:text-base">{formatPrice(product.salePrice)[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
