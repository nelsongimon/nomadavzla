"use client";

import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import { useRouter } from "next/navigation";


export default function CheckPurchaseCompleted() {
  const currentStep = useCheckoutSteps(step => step.currentStep);
  const router = useRouter();

  if (currentStep !== 4) {
    router.push("/carrito");
  }

  return null;
}
