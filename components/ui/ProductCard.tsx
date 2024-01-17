"use client";

import { Expand, ShoppingCart, Heart } from "lucide-react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { MouseEventHandler } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import usePreviewModal from "@/hooks/usePreviewModal";
import IconButton from "./IconButton";
import { Product } from "@/types";
import Link from "next/link";
import { addAbsolutePathImage, formatPrice } from "@/lib/utils";
import useFavorite from "@/hooks/useFavorite";
import useShoppingCart from "@/hooks/useShoppingCart";
import ProductFlag from "../product/ProductFlag";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product
}: ProductCardProps) {
  const previewModal = usePreviewModal();
  const addItemToCart = useShoppingCart(state => state.addItem);
  const addItemToFavorite = useFavorite(state => state.addItem);
  const removeItemToFavorite = useFavorite(state => state.removeItem);
  const products = useFavorite(state => state.items);
  const isFavorite = products.some(item => item.id === product.id);

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(product);
  }
  const addToCart = () => {
    addItemToCart({
      id: product.id,
      name: product.name,
      quantity: 1,
      price: Number(product.salePrice),
      total: parseFloat(product.salePrice).toFixed(2)
    });
  }
  const addToFavorite = () => {
    addItemToFavorite(product);
  }
  const removeToFavorite = () => {
    removeItemToFavorite(product.id);
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
        <ProductFlag product={product} />
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
              onClick={addToCart}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-0 lg:gap-y-[2px]">
          <div>
            <Link href={`/productos/${product?.slug}`} className="text-primary-color hover:text-secondary-color text-sm lg:text-base underline-offset-4 hover:underline duration-300">
              {product.name}
            </Link>
          </div>
          <div>
            <span className="text-gray-strong-color text-xs lg:text-sm font-light">
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
            {isFavorite ? (
              <motion.button onClick={removeToFavorite}
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.85
                }}
              >
                <IoMdHeart className="text-secondary-color stroke-[1] text-[27px] duration-300 hover:scale-105" />
              </motion.button>
            ) : (
              <motion.button onClick={addToFavorite}
                whileHover={{
                  scale: 1.1
                }}
                whileTap={{
                  scale: 0.85
                }}
              >
                <IoMdHeartEmpty className="text-primary-color stroke-[1] text-[27px] duration-300" />
              </motion.button>
            )}
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
