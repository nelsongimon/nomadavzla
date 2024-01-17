"use client";

import CheckoutProcess from "./CheckoutProcess";
import Invoice from "./Invoice";
import { useEffect, useState } from "react";
import useShoppingCart from "@/hooks/useShoppingCart";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { toastStyle } from "@/lib/utils";
import Container from "./ui/Container";
import useCheckoutSteps from "@/hooks/useCheckoutSteps";

export default function CheckoutClient() {
  const router = useRouter();
  const currentStep = useCheckoutSteps(state => state.currentStep);
  const shoppingCartItems = useShoppingCart(state => state.items);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (shoppingCartItems.length === 0) {
    toast.error("No hay productos en el carrito", toastStyle);
    router.push("/carrito");
    return null;
  }

  if (shoppingCartItems.reduce((acc, item) => acc + Number(item.total), 0) === 0) {
    toast.error("Tu total a pagar es $0.00", toastStyle);
    router.push("/carrito");
    return null;
  }

  if (currentStep === 4) {
    return null;
  }

  return (
    <Container>
      <div className="w-full flex flex-col gap-y-1 mb-6 lg:mb-10">
        <h3 className="text-strong-color font-bold text-3xl lg:text-4xl text-center">
          Finalizar Compra
        </h3>
        <p className="text-gray-strong-color text-base lg:text-lg text-center font-light">
          Text here
        </p>
      </div>
      <div className="flex flex-col gap-y-16 lg:grid lg:grid-cols-12 lg:gap-x-12">
        <div className="lg:col-span-7">
          <CheckoutProcess />
        </div>
        <div className="lg:col-span-5 lg:ml-4">
          <Invoice />
        </div>
      </div>
    </Container>
  );
}
