"use client";

import { useEffect, useState } from "react";
import CheckoutBody from "./CheckoutBody";
import CheckoutHeader from "./CheckoutHeader";

export default function CheckoutProcess() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-4 lg:gap-y-7">
      <CheckoutHeader />
      <CheckoutBody />
    </div>
  );
}
