"use client";

import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { escape } from "lodash";
import Link from "next/link";

import Quatity from "@/components/ui/Quatity";
import Button from "@/components/ui/Button";
import { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({
  product
}: ProductInfoProps) {

  const [currentQuantity, setcurrentQuantity] = useState(1);

  const onPlusQuantity = () => {
    if (currentQuantity === product.stock_quantity) {
      return;
    }
    setcurrentQuantity((current) => current + 1);
  }

  const onMinusQuantity = () => {
    if (currentQuantity === 1) {
      return;
    }
    setcurrentQuantity((current) => current - 1);
  }
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-3">
        <h1 className="font-semibold text-2xl">
          {product.name}
        </h1>
        <div className="flex gap-x-2">
          {product.categories.map((category) => (
            <Link
              key={category?.id}
              href={category?.slug}
              className="text-gray-strong-color hover:text-secondary-color text-base underline-offset-4 hover:underline duration-300"
            >
              {category?.name}
            </Link>
          ))}
        </div>
        <div className="mt-2">
          <span className="font-medium text-4xl text-primary-color">${product.price}</span>
        </div>
      </div>
      <hr className="w-full border border-gray-200" />
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-1">
          <Check className="stroke-[1.5] text-xs text-gray-strong-color" />
          <span className="text-gray-strong-color text-md font-normal rounded-full">
            Disponible
          </span>
        </div>
        <div>
          <span className="text-base font-normal bg-gray-200 px-2 py-1">
            {product.attributes?.[0]?.name}:
          </span>
          <span className="text-base font-light bg-gray-200 px-2 py-1">
            {product.attributes?.[0]?.options?.[0]}
          </span>
        </div>
        <div className="flex gap-x-5 items-center mt-2">
          <Quatity
            currentQuantity={currentQuantity}
            maxQuantity={product.stock_quantity}
            onMinusQuantity={onMinusQuantity}
            onPlusQuantity={onPlusQuantity}
          />
          <Button
            onClick={() => { }}
            variant="default"
            size="large"
          >
            Agregar al Carrito <ShoppingCart className="text-xs stroke-[1.5]" />
          </Button>
        </div>
      </div>
    </div>
  );
}
