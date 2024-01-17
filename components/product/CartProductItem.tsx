"use client";

import { addAbsolutePathImage } from "@/lib/utils";
import Image from "next/image";
import Quatity from "../ui/Quatity";
import { useEffect, useState } from "react";
import useGetProduct from "@/hooks/useGetProduct";
import Button from "../ui/Button";
import { Trash2 } from "lucide-react";
import useShoppingCart from "@/hooks/useShoppingCart";

interface CartProductItemProps {
  productId: string;
}

export default function CartProductItem({
  productId
}: CartProductItemProps) {
  const removeToCart = useShoppingCart((state) => state.removeItem);
  const { data: product } = useGetProduct(productId);
  const item = useShoppingCart(state => state.items).filter((item) => item.id === productId)[0];
  const updateCartItem = useShoppingCart(state => state.updateItem);
  const totalPrice = parseFloat(product?.salePrice as string) * Number(item.quantity);

  const onPlusQuantity = () => {
    if (item.quantity === Number(product?.quantity)) {
      return;
    }
    const totalAmount = parseFloat(product?.salePrice as string) * Number(item.quantity + 1);
    updateCartItem({
      id: product?.id!,
      name: product?.name!,
      quantity: item.quantity + 1,
      price: parseFloat(product?.salePrice as string),
      total: totalAmount.toFixed(2)
    });
  }
  const onMinusQuantity = () => {
    if (item.quantity === 1) {
      return;
    }
    const totalAmount = parseFloat(product?.salePrice as string) * Number(item.quantity - 1);
    updateCartItem({
      id: product?.id!,
      name: product?.name!,
      quantity: item.quantity - 1,
      price: parseFloat(product?.salePrice as string),
      total: totalAmount.toFixed(2)
    });
  }

  useEffect(() => {
    if (item.quantity > product?.quantity!) {
      const totalAmount = parseFloat(product?.salePrice as string) * Number(product?.quantity!);
      updateCartItem({
        id: product?.id!,
        name: product?.name!,
        quantity: Number(product?.quantity!),
        price: parseFloat(product?.salePrice as string),
        total: totalAmount.toFixed(2)
      });
    }
  }, [product]);

  if (!product) {
    return null;
  }

  return (
    <div className="w-full flex flex-col gap-y-10 lg:flex-row lg:gap-y-0 justify-between items-center px-4 py-4 rounded-md border-2 border-gray-200 border-dotted">
      <div className="w-full lg:w-[70%] flex flex-row justify-between lg:justify-start items-center lg:gap-x-20">
        <div className="flex flex-col gap-y-4 lg:flex-row gap-x-20 items-center">
          <div className="flex flex-col gap-y-2 items-start">
            <Button
              variant="gray"
              size="default"
              onClick={() => removeToCart(productId)}
              className="flex gap-x-2 items-center"
            >
              <Trash2 size={20} className="stroke-[1.5]" />
              Remover
            </Button>
          </div>
          <div className="aspect-video bg-gray-color relative w-32 overflow-hidden rounded-md items-start">
            <Image
              fill
              src={addAbsolutePathImage(product?.images?.[0].image!)}
              alt="Product Image"
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row gap-x-20">
          <div className="flex flex-col gap-y-2 items-end lg:items-start">
            <h4 className="font-light text-sm text-gray-strong-color">
              {product?.category.name}
            </h4>
            <h3 className="text-xl font-normal text-primary-color">
              {product?.name}
            </h3>
          </div>
          <div className="flex flex-col gap-y-2 items-end lg:items-start">
            <h4 className="font-light text-sm text-gray-strong-color">
              Precio
            </h4>
            <h3 className="text-2xl text-secondary-color font-semibold">
              ${product?.salePrice}
            </h3>
          </div>
        </div>
      </div>
      {Number(product?.quantity!) === 0 ? (
        <div className="w-full lg:w-[30%] flex flex-col gap-y-1 items-center lg:items-start">
          <h4 className="font-light text-base lg:text-sm text-gray-strong-color">
            ¡Lo sentimos!
          </h4>
          <h3 className="text-lg text-gray-strong-color font-regular text-center lg:text-left">
            Este producto se encuentra agotado
          </h3>
          <h4 className="font-light text-sm text-gray-strong-color text-center lg:text-left">
            Suscríbete a nuestra newsletter para enterarte cuando este de regreso
          </h4>
        </div>
      ) : (
        <div className="w-full lg:w-[30%] flex items-center justify-between lg:justify-end lg:gap-x-20">
          <div className="flex flex-col gap-y-2">
            <h4 className="font-light text-sm text-gray-strong-color text-center">
              Cantidad
            </h4>
            <Quatity
              currentQuantity={item.quantity > product?.quantity! ? product?.quantity! : item.quantity}
              maxQuantity={product?.quantity!}
              onMinusQuantity={onMinusQuantity}
              onPlusQuantity={onPlusQuantity}
            />
          </div>
          <div className="flex flex-col gap-y-2 items-end w-20">
            <h4 className="font-light text-sm text-gray-strong-color">
              Total
            </h4>
            <h3 className="text-2xl text-secondary-color font-semibold">
              ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
}
