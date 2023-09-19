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
      <div className="flex flex-col gap-y-4">
        <div>
          <h2
            className="text-lg font-light text-gray-strong-color"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
          <h1 className="font-semibold text-3xl">
            {product.name}
          </h1>
        </div>
        <div className="flex gap-x-4">
          <span className="text-primary-color text-base font-light border border-gray-200 py-1 px-2">
            {product.attributes?.[5]?.options?.[0] || "Género"}
          </span>
          <span className="text-primary-color text-base font-light border border-gray-200 py-1 px-2">
            {/* {product.attributes?.[0]?.name}:  */}
            {product.attributes?.[0]?.options?.[0]}
          </span>
        </div>
        <div className="mt-2">
          <span className="font-bold text-5xl text-secondary-color">${product.price}</span>
        </div>
      </div>
      <hr className="w-full border border-gray-200" />
      <div className="flex flex-col gap-y-5">
        <div className="flex items-center gap-x-1">
          <Check className="stroke-[2] text-xs text-primary-color" />
          <span className="text-primary-color text-lg font-medium">
            Disponible
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
