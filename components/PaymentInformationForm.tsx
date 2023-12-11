"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import Image from "next/image";

export default function PaymentInformationForm() {
  const setCurrentStep = useCheckoutSteps(step => step.setCurrentStep);
  const onPrevious = () => {
    setCurrentStep(2);
  }
  const onNext = () => {
    setCurrentStep(3);
  }
  return (
    <div className="flex flex-col gap-y-10 mt-3">
      <div className="flex flex-col items-center gap-y-4">
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          <div className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100">
            <div className="relative h-[35px] w-full">
              <Image fill alt="" src="https://nomadavzla.store/images/pagoMovil.png"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          <div className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100">
            <div className="relative h-[35px] w-full">
              <Image fill alt="" src="https://nomadavzla.store/images/binance.png"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          <div className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100">
            <div className="relative h-[35px] w-full">
              <Image fill alt="" src="https://nomadavzla.store/images/zinli.png"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          <div className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100">
            <div className="relative h-[35px] w-full">
              <Image fill alt="" src="https://nomadavzla.store/images/banescoPanama.png"
                className="object-contain"
              />
            </div>
          </div>
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          <div className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100">
            <div className="relative h-[35px] w-full">
              <Image fill alt="" src="https://nomadavzla.store/images/paypal.png"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          size="default"
          onClick={onPrevious}
          className="flex gap-x-1 items-center"
          type="button"
        >
          <ChevronLeft size={20} className="stroke-[1.5]" />
          Volver
        </Button>
        <Button
          variant="default"
          size="default"
          onClick={onNext}
          type="submit"
          className="flex gap-x-1 items-center"
        >
          Finalizar
          <ChevronRight size={20} className="stroke-[1.5]" />
        </Button>
      </div>
    </div>
  );
}
