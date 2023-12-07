"use client";

import useGetProduct from "@/hooks/useGetProduct";
import useShoppingCart from "@/hooks/useShoppingCart";
import { addAbsolutePathImage } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";

interface InvoiceProductProps {
  productId: string;
}

export default function InvoiceProduct({
  productId
}: InvoiceProductProps) {
  const { data: product } = useGetProduct(productId);
  const item = useShoppingCart(state => state.items).filter((item) => item.id === productId)[0];
  const totalPrice = parseFloat(product?.salePrice as string) * Number(item.quantity);

  useEffect(() => {
    if (item.quantity > product?.quantity!) {
      // TODO: redirect to cart page
    }
  }, [product]);

  if (!product) {
    return null;
  }
  return (
    <div className="flex justify-between items-center">
      <div className="aspect-video bg-gray-color relative w-32 overflow-hidden rounded-md items-start">
        <Image
          fill
          src={addAbsolutePathImage(product?.images?.[0].image!)}
          alt="Product Image"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="font-light text-xs text-gray-strong-color">
          {product?.category?.name}
        </h4>
        <h3 className="text-base font-light text-primary-color">
          {product?.name}
        </h3>
      </div>
      <div className="flex flex-col">
        <h4 className="font-light text-xs text-gray-strong-color">
          x {item.quantity}
        </h4>
        <h3 className="text-lg font-semibold text-primary-color">
          ${product?.salePrice}
        </h3>
      </div>
      <div className="flex flex-col">
        <h4 className="font-light text-xs text-gray-strong-color">
          Total
        </h4>
        <h3 className="text-lg text-primary-color font-semibold">
          ${totalPrice.toFixed(2)}
        </h3>
      </div>
      <div>

      </div>
    </div>
  );
}
