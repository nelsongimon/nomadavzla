"use client";

import useCheckoutSteps from "@/hooks/useCheckoutSteps";
import PersonalInformationForm from "./PersonalInformationForm";
import ShippingInformationForm from "./ShippingInformationForm";
import PaymentInformationForm from "./PaymentInformationForm";

export default function CheckoutBody() {
  const currentStep = useCheckoutSteps(state => state.currentStep);

  if (currentStep === 1) {
    return (
      <PersonalInformationForm />
    );
  }

  if (currentStep === 2) {
    return (
      <ShippingInformationForm />
    );
  }

  return (
    <PaymentInformationForm />
  );
}
