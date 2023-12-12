"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import Image from "next/image";
import { useState } from "react";
import PagoMovilForm from "./PagoMovilForm";
import BinanceForm from "./BinanceForm";
import ZinliForm from "./ZinliForm";
import BanescoForm from "./BanescoForm";
import PaypalForm from "./PaypalForm";

export default function PaymentInformationForm() {
  const setCurrentStep = useCheckoutSteps(step => step.setCurrentStep);
  const [pagoMovilOpen, setPagoMovilOpen] = useState(false);
  const [binanceOpen, setBinanceOpen] = useState(false);
  const [zinliOpen, setZinliOpen] = useState(false);
  const [banescoOpen, setBanescoOpen] = useState(false);
  const [paypalOpen, setPaypalOpen] = useState(false);

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
          {pagoMovilOpen ? (
            <div className="mt-4 mb-4 w-full">
              <PagoMovilForm onClose={() => setPagoMovilOpen(false)} />
            </div>
          ) : (
            <button
              onClick={() => setPagoMovilOpen(true)}
              className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100"
            >
              <div className="relative h-[30px] w-full">
                <Image fill alt="" src="https://nomadavzla.store/images/pagoMovil.png"
                  className="object-contain"
                />
              </div>
            </button>
          )
          }
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          {binanceOpen ? (
            <div className="mt-4 mb-4 w-full">
              <BinanceForm onClose={() => setBinanceOpen(false)} />
            </div>
          ) : (
            <button
              onClick={() => setBinanceOpen(true)}
              className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100"
            >
              <div className="relative h-[30px] w-full">
                <Image fill alt="" src="https://nomadavzla.store/images/binance.png"
                  className="object-contain"
                />
              </div>
            </button>
          )
          }
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          {zinliOpen ? (
            <div className="mt-4 mb-4 w-full">
              <ZinliForm onClose={() => setZinliOpen(false)} />
            </div>
          ) : (
            <button
              onClick={() => setZinliOpen(true)}
              className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100"
            >
              <div className="relative h-[30px] w-full">
                <Image fill alt="" src="https://nomadavzla.store/images/zinli.png"
                  className="object-contain"
                />
              </div>
            </button>
          )
          }
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          {banescoOpen ? (
            <div className="mt-4 mb-4 w-full">
              <BanescoForm onClose={() => setBanescoOpen(false)} />
            </div>
          ) : (
            <button
              onClick={() => setBanescoOpen(true)}
              className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100"
            >
              <div className="relative h-[30px] w-full">
                <Image fill alt="" src="https://nomadavzla.store/images/banescoPanama.png"
                  className="object-contain"
                />
              </div>
            </button>
          )
          }
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          {paypalOpen ? (
            <div className="mt-4 mb-4 w-full">
              <PaypalForm onClose={() => setPaypalOpen(false)} />
            </div>
          ) : (
            <button
              onClick={() => setPaypalOpen(true)}
              className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100"
            >
              <div className="relative h-[30px] w-full">
                <Image fill alt="" src="https://nomadavzla.store/images/paypal.png"
                  className="object-contain"
                />
              </div>
            </button>
          )
          }
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
      </div>
    </div>
  );
}
