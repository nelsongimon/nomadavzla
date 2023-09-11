"use client";

import { Check, ShoppingCart } from "lucide-react";
import { useState } from "react";
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
          <span className="text-primary-color text-lg font-light">
            {product.attributes?.[5]?.options?.[0] || "Género"}
          </span>
        </div>
        <div className="mt-2">
          <span className="font-medium text-4xl text-primary-color">${product.price}</span>
        </div>
      </div>
      <hr className="w-full border border-gray-200" />
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-1">
          <Check className="stroke-[2] text-xs text-green-500" />
          <span className="text-green-500 text-lg font-medium rounded-full">
            Disponible
          </span>
        </div>
        <div>
          <span className="text-base font-light bg-gray-200 px-2 py-1 rounded-md">
            {product.attributes?.[0]?.name}: {product.attributes?.[0]?.options?.[0]}
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
