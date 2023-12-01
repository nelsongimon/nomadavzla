"use client";

import useFavorite from "@/hooks/useFavorite";
import useFavoriteSidebar from "@/hooks/useFavoriteSidebar";
import { addAbsolutePathImage } from "@/lib/utils";
import { Product } from "@/types";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardFavoriteProps {
  product: Product;
}
export default function ProductCardFavorite({
  product
}: ProductCardFavoriteProps) {
  const removeItem = useFavorite((state) => state.removeItem);
  const onClose = useFavoriteSidebar((state) => state.onClose);
  const handleLink = () => {
    onClose();
  }
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
        <Link href={`/productos/${product.slug}`} onClick={handleLink}>
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
      <div className="flex flex-col gap-y-0 lg:gap-y-[1px]">
        <Link
          href={`/productos/${product?.slug}`}
          onClick={handleLink}
          className="text-primary-color hover:text-secondary-color underline-offset-4 hover:underline duration-300 text-base"
        >
          {product.name}
        </Link>
        <div className="w-full flex justify-between items-center">
          <div>
            <span className="font-medium text-base lg:text-lg">${product.salePrice}</span>
          </div>
          <button
            onClick={() => removeItem(product.id)}
            className="p-2 rounded-full duration-300 hover:bg-gray-100"
          >
            <Trash2 size={20} className="cursor-pointer stroke-[1.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
