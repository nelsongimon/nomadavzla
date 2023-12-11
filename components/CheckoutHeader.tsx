"use client";

import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import clsx from "clsx";

export default function CheckoutHeader() {
  const currentStep = useCheckoutSteps(state => state.currentStep);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-x-2 items-center">
        <div className={clsx(`
          h-9 w-9 rounded-full flex items-center justify-center`,
          currentStep === 1 ? "bg-secondary-color" : "bg-gray-100"
        )}>
          <h5 className={clsx(`
            font-semibold text-xl`,
            currentStep === 1 ? "text-light-color" : "text-gray-400"
          )}>
            1
          </h5>
        </div>
        <h3 className={clsx(`
          text-center text-base font-light`,
          currentStep === 1 ? "text-secondary-color" : "text-primary-color"
        )}>
          Información Personal
        </h3>
      </div>
      <div className="flex gap-x-2 items-center">
        <div className={clsx(`
            h-9 w-9 rounded-full flex items-center justify-center`,
          currentStep === 2 ? "bg-secondary-color" : "bg-gray-100"
        )}>
          <h5 className={clsx(`
            font-semibold text-xl`,
            currentStep === 2 ? "text-light-color" : "text-gray-400"
          )}>
            2
          </h5>
        </div>
        <h3 className={clsx(`
          text-center text-base font-light`,
          currentStep === 2 ? "text-secondary-color" : "text-primary-color"
        )}>
          Información del envio
        </h3>
      </div>
      <div className="flex gap-x-2 items-center">
        <div className={clsx(`
          h-9 w-9 rounded-full flex items-center justify-center`,
          currentStep === 3 ? "bg-secondary-color" : "bg-gray-100"
        )}>
          <h5 className={clsx(`
            font-semibold text-xl`,
            currentStep === 3 ? "text-light-color" : "text-gray-400"
          )}>
            3
          </h5>
        </div>
        <h3 className={clsx(`
          text-center text-base font-light`,
          currentStep === 3 ? "text-secondary-color" : "text-primary-color"
        )}>
          Información del pago
        </h3>
      </div>
    </div>
  );
}
