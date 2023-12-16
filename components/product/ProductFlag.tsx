"use client";

import { Product } from "@/types";

interface ProductFlagProps {
  product: Product
}
export default function ProductFlag({
  product
}: ProductFlagProps) {

  if (Number(product.quantity) === 0) {
    return (
      <span className="absolute top-0 left-0 bg-primary-color text-white px-1 lg:px-2 py-0.5 text-xs lg:text-base font-light">
        Agotado
      </span>
    );
  }

  if (Boolean(Number(product.isNew))) {
    return (
      <span className="absolute top-0 left-0 bg-secondary-color text-light-color px-1 lg:px-2 py-0.5 text-xs lg:text-base font-light">
        Nuevo
      </span>
    )
  }

  return null;
}
