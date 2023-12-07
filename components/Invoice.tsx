"use client";

import { useEffect, useState } from "react";
import InvoiceProduct from "./product/InvoiceProduct";
import useShoppingCart from "@/hooks/useShoppingCart";
import useGetDollarValue from "@/hooks/useGetDollarValue";
import Button from "./ui/Button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Invoice() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const products = useShoppingCart(state => state.items);
  const totalToPay = products.reduce((acc, item) => acc + Number(item.total), 0).toFixed(2);
  const dollarValue = "35.59";
  const totalBs = Number(dollarValue) * Number(totalToPay);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-gray-color px-3 py-7 rounded-lg">
      <div className="flex items-center justify-between mb-10 px-5 border-b border-gray-200 pb-5">
        <h3 className="text-primary-color font-semibold text-xl lg:text-2xl text-center">
          Orden de Compra
        </h3>
        <Button
          variant="outline"
          size="default"
          onClick={() => router.push("/carrito")}
          className="flex gap-x-1 items-center"
        >
          <ChevronLeft size={20} className="stroke-[1.5]" />
          Volver al carrito
        </Button>
      </div>
      <div className="flex flex-col gap-y-7">
        {products.map((product) => (
          <InvoiceProduct key={product.id} productId={product.id} />
        ))}
      </div>
      <div className="flex justify-between items-end px-5 mt-12 border-t border-gray-200 pt-5">
        <div>
          <h3 className="font-semibold text-primary-color text-2xl">
            Total a Pagar:
          </h3>
        </div>
        <div className="flex flex-col gap-y-1">
          <h4 className="text-2xl font-semibold text-primary-color text-right">
            Bs {totalBs.toFixed(2)}
          </h4>
          <h3 className="text-2xl font-semibold text-primary-color text-right">
            ${totalToPay}
          </h3>
        </div>
      </div>
    </div>
  );
}
