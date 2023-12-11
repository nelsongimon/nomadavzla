"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import NationalShipping from "./NationalShipping";
import { useState } from "react";
import Button from "./ui/Button";

export default function ShippingInformationForm() {
  const setCurrentStep = useCheckoutSteps(step => step.setCurrentStep);
  const [nationalShippingOpen, setNationalShippingOpen] = useState(false);
  const onPrevious = () => {
    setCurrentStep(1);
  }
  const onNext = () => {
    setCurrentStep(3);
  }
  return (
    <div className="flex flex-col gap-y-10 mt-3">
      <div className="flex flex-col items-center gap-y-5">
        <div className="w-full border-gray-200 border-2 rounded-md overflow-hidden">
          <div className="cursor-pointer flex flex-col items-center gap-y-1 duration-300 hover:bg-gray-50 py-3">
            <h3 className="text-lg font-semibold text-primary-color">
              Entrega Personal
            </h3>
            <p className="font-light text-gray-strong-color text-sm">
              Solo para la ciudad de Maturín
            </p>
          </div>
        </div>
        <div className="w-full border-gray-200 border-2 rounded-md overflow-hidden">
          {nationalShippingOpen ? (
            <NationalShipping />
          ) : (
            <div
              onClick={() => setNationalShippingOpen(true)}
              className="cursor-pointer flex flex-col items-center gap-y-1 duration-300 hover:bg-gray-50 py-3"
            >
              <h3 className="text-lg font-semibold text-primary-color">
                Envío Nacional
              </h3>
              <p className="font-light text-gray-strong-color text-sm">
                Envíos  por Zoom o MRW
              </p>
            </div>
          )}
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
          Siguiente
          <ChevronRight size={20} className="stroke-[1.5]" />
        </Button>
      </div>
    </div>
  );
}
