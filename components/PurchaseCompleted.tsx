"use client";

import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { useEffect } from "react";
import Button from "./ui/Button";
import useSelectedAgency from "@/hooks/useSelectedAgency";
import useShoppingCart from "@/hooks/useShoppingCart";
import { useRouter } from "next/navigation";

export default function PurchaseCompleted() {
  const router = useRouter();
  const setCurrentStep = useCheckoutSteps(step => step.setCurrentStep);
  const resetShoppingCart = useShoppingCart(state => state.reset);
  const setSelectedAgency = useSelectedAgency(state => state.setSelectedAgency);


  useEffect(() => {
    setCurrentStep(1);
    resetShoppingCart();
    setSelectedAgency(null);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center gap-y-7 lg:gap-y-10 mt-3 mx-auto max-w-2xl w-full pt-5 pb-10 px-3 lg:px-10"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3, type: "spring" }}
      >
        <BadgeCheck size={60} className="text-secondary-color stroke-[1.5]" />
      </motion.div>
      <div className="flex flex-col gap-y-4 lg:gap-y-6 items-center">
        <h2 className="text-2xl lg:text-3xl text-secondary-color font-bold uppercase text-center">
          ¡Compra Completada!
        </h2>
        <p className="font-light text-lg text-primary-color text-center">
          Felicidades tu compra ha sido completata, te enviaremos en mensaje y correo electronico de confirmacion.
        </p>
      </div>
      <Button
        variant="secondary"
        size="large"
        onClick={() => router.push("/productos")}
      >
        Seguir Comprando
      </Button>
    </motion.div>
  );
}
