"use client";

import { AlertCircle, CheckCircle2, ChevronRight, CreditCard, ShoppingCart } from "lucide-react";
import { useState } from "react";

import Quatity from "@/components/ui/Quatity";
import Button from "@/components/ui/Button";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import useShoppingCart from "@/hooks/useShoppingCart";
import { useRouter } from "next/navigation";

interface ProductInfoProps {
  product: Product;
  previewModal?: boolean;
}

export default function ProductInfo({
  product,
  previewModal = false,
}: ProductInfoProps) {

  const [currentQuantity, setCurrentQuantity] = useState(1);
  const addItemToCart = useShoppingCart(state => state.addItem);
  const resetCart = useShoppingCart(state => state.reset);
  const router = useRouter();

  const addToCart = () => {
    const totalAmount = parseFloat(product.salePrice as string) * currentQuantity;
    addItemToCart({
      id: product.id,
      name: product.name,
      quantity: currentQuantity,
      price: Number(product.salePrice),
      total: totalAmount.toFixed(2)
    }, true);
  }

  const buyNow = () => {
    resetCart();
    const totalAmount = parseFloat(product.salePrice as string) * currentQuantity;
    addItemToCart({
      id: product.id,
      name: product.name,
      quantity: currentQuantity,
      price: Number(product.salePrice),
      total: totalAmount.toFixed(2)
    }, false);
    router.push("/finalizar-compra");
  }

  const onPlusQuantity = () => {
    if (currentQuantity === Number(product.quantity)) {
      return;
    }
    setCurrentQuantity((current) => current + 1);
  }

  const onMinusQuantity = () => {
    if (currentQuantity === 1) {
      return;
    }
    setCurrentQuantity((current) => current - 1);
  }
  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex flex-col gap-y-4">
        <div>
          <h2 className="text-lg font-light text-gray-strong-color">
            {product.category.name}
          </h2>
          <h1 className="font-semibold text-3xl">
            {product.name}
          </h1>
        </div>
        <div className="flex gap-x-4">
          {product.tags.map((tag) => (
            <span
              key={tag.id}
              className="text-primary-color text-base font-light border border-gray-200 py-1 px-2">
              {tag.name}
            </span>
          ))}
        </div>
        <div className="mt-2 flex gap-x-1 items-start">
          <span className="font-bold text-4xl text-secondary-color">${formatPrice(product.salePrice)[0]}</span>
          <span className="font-bold text-xl text-secondary-color">{formatPrice(product.salePrice)[1]}</span>
        </div>
      </div>
      <hr className="w-full border border-gray-200" />
      <div className="flex flex-col gap-y-5">
        {Number(product.quantity) > 0 ? (
          <div className="flex items-center gap-x-1">
            <CheckCircle2 className="stroke-[1.5] text-xs text-primary-color" />
            <span className="text-primary-color text-lg font-medium">
              Disponible
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-x-1">
            <AlertCircle className="stroke-[1.5] text-xs text-primary-color" />
            <span className="text-primary-color text-lg font-medium">
              Agotado
            </span>
          </div>
        )}
        {Number(product.quantity) > 0 ? (
          <div className="max-w-[340px] flex flex-col gap-y-6">
            <div className="flex gap-x-5 items-center mt-0 lg:mt-2">
              <Quatity
                currentQuantity={currentQuantity}
                maxQuantity={product.quantity}
                onMinusQuantity={onMinusQuantity}
                onPlusQuantity={onPlusQuantity}
              />
              <Button
                onClick={addToCart}
                variant="default"
                size={previewModal ? "default" : "large"}
                className="w-full"
              >
                Agregar al Carrito <ShoppingCart size={20} className="text-xs stroke-[1.5]" />
              </Button>
            </div>
            <div>
              <Button
                onClick={buyNow}
                variant="secondary"
                size={previewModal ? "default" : "large"}
                className="w-full"
              >
                Comprar Ahora
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex gap-x-5 items-center mt-0 lg:mt-0">
            <p className="text-base font-light text-primary-color">
              Mantente informado sobre la llegada de este modelo siguiéndonos en nuestras redes sociales y suscribiéndote a nuestra Newsletter. ¡Gracias por tu paciencia y apoyo!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
