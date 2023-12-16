"use client";

import useGetProduct from "@/hooks/useGetProduct";
import useShoppingCart from "@/hooks/useShoppingCart";
import { addAbsolutePathImage, toastStyle } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

interface InvoiceProductProps {
  productId: string;
}

export default function InvoiceProduct({
  productId
}: InvoiceProductProps) {
  const router = useRouter();
  const { data: product } = useGetProduct(productId);
  const item = useShoppingCart(state => state.items).filter((item) => item.id === productId)[0];
  const totalPrice = parseFloat(product?.salePrice as string) * Number(item.quantity);

  useEffect(() => {
    if (item.quantity > product?.quantity!) {
      router.push("/carrito");
      toast.error("La cantidad que intentas comprar supera el stock disponible", toastStyle);
    }
  }, [product]);

  if (!product || item.quantity === 0) {
    return null;
  }

  return (
    <>
      <div className="hidden lg:block">
        <div className="flex flex-col gap-y-3 lg:flex-row justify-between items-center">
          <div className="aspect-video bg-gray-color relative w-32 overflow-hidden rounded-md items-start">
            <Image
              fill
              src={addAbsolutePathImage(product?.images?.[0].image!)}
              alt="Product Image"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h4 className="font-light text-sm lg:text-xs text-gray-strong-color">
              {product?.category?.name}
            </h4>
            <h3 className="text-lg lg:text-base font-light text-primary-color">
              {product?.name}
            </h3>
          </div>
          <div className="flex flex-col">
            <h4 className="font-light text-sm lg:text-xs text-gray-strong-color">
              x {item.quantity}
            </h4>
            <h3 className="text-xl lg:text-lg font-semibold text-primary-color">
              ${product?.salePrice}
            </h3>
          </div>
          <div className="flex flex-col">
            <h4 className="font-light text-sm lg:text-xs text-gray-strong-color">
              Total
            </h4>
            <h3 className="text-xl lg:text-lg text-primary-color font-semibold">
              ${totalPrice.toFixed(2)}
            </h3>
          </div>
        </div>

      </div>
      <div className="block lg:hidden">
        <div className="flex flex-col gap-y-3 lg:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-[300px]">
            <div className="aspect-video bg-gray-color relative w-32 overflow-hidden rounded-md items-start">
              <Image
                fill
                src={addAbsolutePathImage(product?.images?.[0].image!)}
                alt="Product Image"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-light text-sm lg:text-xs text-gray-strong-color">
                {product?.category?.name}
              </h4>
              <h3 className="text-lg lg:text-base font-light text-primary-color">
                {product?.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center justify-between w-[300px]">
            <div className="flex flex-col">
              <h4 className="font-light text-sm lg:text-xs text-gray-strong-color">
                x {item.quantity}
              </h4>
              <h3 className="text-xl lg:text-lg font-semibold text-primary-color">
                ${product?.salePrice}
              </h3>
            </div>
            <div className="flex flex-col">
              <h4 className="font-light text-sm lg:text-xs text-gray-strong-color">
                Total
              </h4>
              <h3 className="text-xl lg:text-lg text-primary-color font-semibold">
                ${totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
