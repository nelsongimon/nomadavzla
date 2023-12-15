"use client";

import { CheckSquare, ChevronLeft, ChevronRight } from "lucide-react";
import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import NationalShipping from "./NationalShipping";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import PersonalShipping from "./PersonalShipping";
import useSelectedAgency from "@/hooks/useSelectedAgency";
import AgencyCard from "./AgencyCard";

export default function ShippingInformationForm() {
  const setCurrentStep = useCheckoutSteps(step => step.setCurrentStep);
  const selectedAgency = useSelectedAgency(state => state.selectedAgency);
  const [shippingOptionSelected, setShippingOptionSelected] = useState("");
  const onPrevious = () => {
    setCurrentStep(1);
  }

  const onNext = () => {
    setCurrentStep(3);
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-y-10 mt-3"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: "0px", opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="flex flex-col items-center gap-y-5">
        <div className="w-full border-gray-200 border-2 rounded-md overflow-hidden">
          {shippingOptionSelected === "personalShipping" ? (
            <PersonalShipping />
          ) : (
            <div
              onClick={() => setShippingOptionSelected("personalShipping")}
              className="cursor-pointer flex flex-col items-center gap-y-1 duration-300 hover:bg-gray-50 py-3"
            >
              <h3 className="text-lg font-semibold text-primary-color">
                Entrega Personal
              </h3>
              <p className="font-light text-gray-strong-color text-sm">
                Solo para la ciudad de Maturín
              </p>
            </div>
          )}
        </div>
        <div className="w-full border-gray-200 border-2 rounded-md overflow-hidden">
          {shippingOptionSelected === "nationalShipping" ? (
            <NationalShipping />
          ) : (
            <div
              onClick={() => setShippingOptionSelected("nationalShipping")}
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
      {(selectedAgency && shippingOptionSelected === "") && (
        <AgencyCard agency={selectedAgency} />
      )}
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
        {selectedAgency && (
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
        )}
      </div>
    </motion.div>
  );
}
