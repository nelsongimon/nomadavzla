"use client";

import useShoppingCart from "@/hooks/useShoppingCart";
import CartProductItem from "./CartProductItem";
import { useEffect, useState } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import Button from "../ui/Button";
import useCurrentPage from "@/hooks/useCurrentPage";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ShoppingCartProducts() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const products = useShoppingCart(state => state.items);
  const updatePage = useCurrentPage(state => state.updatePage);
  const totalToPay = products.reduce((acc, item) => acc + Number(item.total), 0).toFixed(2);

  const handleClickLink = () => {
    updatePage(1);
  }

  useEffect(() => {
    setIsMounted(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex flex-col gap-y-14 lg:gap-y-10">
      {products.length > 0 ? (
        <div className="flex flex-col gap-y-3">
          {products.map((product) => (
            <CartProductItem key={product.id} productId={product.id} />
          ))}
        </div>
      ) : (
        <div className="h-[300px] flex flex-col items-center justify-center gap-y-3">
          <MdRemoveShoppingCart className="text-7xl text-gray-300" />
          <h3 className="text-3xl font-semibold text-gray-300 mb-6">
            No tienes productos en el carrito
          </h3>
          <Link href="/productos">
            <Button
              size="large"
              variant="gray"
              onClick={handleClickLink}
            >
              Seguir comprando
            </Button>
          </Link>
        </div>
      )}
      {products.length > 0 && (
        <div className="flex flex-col gap-y-7 lg:flex-row justify-between">
          <div className="flex justify-center">
            <Link href="/productos">
              <Button
                variant="outline"
                size="default"
                onClick={handleClickLink}
                className="flex gap-x-1 items-center"
              >
                <ChevronLeft size={20} className="stroke-[1.5]" />
                Seguir Comprando
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-y-7 lg:flex-row gap-x-5 items-center">
            <div className="flex justify-between gap-x-2">
              <h4 className="text-2xl font-semibold">
                Monto a Pagar:
              </h4>
              <h4 className="text-2xl font-semibold text-secondary-color w-28 text-right">
                ${totalToPay}
              </h4>
            </div>
            <Button
              variant="secondary"
              size="default"
              onClick={() => router.push("/finalizar-compra")}
              className="flex gap-x-1 items-center"
            >
              Finalizar Compra <ChevronRight size={20} className="stroke-[1.5]" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
