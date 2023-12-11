import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";

type CheckoutSteps = 1 | 2 | 3;
interface CheckoutStepsStore {
  currentStep: CheckoutSteps;
  setCurrentStep: (step: CheckoutSteps) => void;
}

const useCheckoutSteps = create(
  persist<CheckoutStepsStore>((set) => ({
    currentStep: 1,
    setCurrentStep: (step: CheckoutSteps) => {
      set({ currentStep: step });
    }
  }), {
    name: "checkout-step-storage",
    storage: createJSONStorage(() => localStorage)
  })
);

export default useCheckoutSteps;