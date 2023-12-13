"use client";

import { ChevronLeft } from "lucide-react";
import Button from "./ui/Button";
import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import Image from "next/image";
import { useEffect, useState } from "react";
import PagoMovilForm from "./PagoMovilForm";
import BinanceForm from "./BinanceForm";
import ZinliForm from "./ZinliForm";
import BanescoForm from "./BanescoForm";
import PaypalForm from "./PaypalForm";
import { motion } from "framer-motion";

export default function PaymentInformationForm() {
  const setCurrentStep = useCheckoutSteps(step => step.setCurrentStep);
  const [paymentSelected, setPaymentSelected] = useState("");

  const onPrevious = () => {
    setCurrentStep(2);
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
      <div className="flex flex-col items-center gap-y-4">
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          {paymentSelected === "pagoMovil" ? (
            <div className="mt-4 mb-4 w-full">
              <PagoMovilForm />
            </div>
          ) : (
            <button
              onClick={() => setPaymentSelected("pagoMovil")}
              className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100"
            >
              <div className="relative h-[30px] w-full">
                <Image fill alt="" src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}images/pagoMovil.png`}
                  className="object-contain"
                />
              </div>
            </button>
          )
          }
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          {paymentSelected === "binance" ? (
            <div className="mt-4 mb-4 w-full">
              <BinanceForm />
            </div>
          ) : (
            <button
              onClick={() => setPaymentSelected("binance")}
              className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100"
            >
              <div className="relative h-[30px] w-full">
                <Image fill alt="" src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}images/binance.png`}
                  className="object-contain"
                />
              </div>
            </button>
          )
          }
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          {paymentSelected === "zinli" ? (
            <div className="mt-4 mb-4 w-full">
              <ZinliForm />
            </div>
          ) : (
            <button
              onClick={() => setPaymentSelected("zinli")}
              className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100"
            >
              <div className="relative h-[30px] w-full">
                <Image fill alt="" src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}images/zinli.png`}
                  className="object-contain"
                />
              </div>
            </button>
          )
          }
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          {paymentSelected === "banesco" ? (
            <div className="mt-4 mb-4 w-full">
              <BanescoForm />
            </div>
          ) : (
            <button
              onClick={() => setPaymentSelected("banesco")}
              className="w-full py-3 cursor-pointer duration-300 hover:bg-gray-100"
            >
              <div className="relative h-[30px] w-full">
                <Image fill alt="" src={`${process.env.NEXT_PUBLIC_IMAGE_PATH}images/banescoPanama.png`}
                  className="object-contain"
                />
              </div>
            </button>
          )
          }
        </div>
        {/* Item */}
        <div className="w-full flex items-center justify-center border-gray-200 border-2 rounded-md overflow-hidden">
          {paymentSelected === "paypal" ? (
            <div className="mt-4 mb-4 w-full">
              <PaypalForm />
            </div>
          ) : (
            <button
              onClick={() => setPaymentSelected("paypal")}
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
    </motion.div>
  );
}
