"use client";

import useShoppingCart from "@/hooks/useShoppingCart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import IconQuantity from "./IconQuantity";
import { useEffect, useState } from "react";

export default function Cart() {
  const [isMounted, setIsMounted] = useState(false);
  const products = useShoppingCart((state) => state.items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-full flex items-center">
      <Link
        href="/carrito"
        onClick={() => { }}
        className="h-full group relative cursor-pointer flex items-center"
      >
        <div className="relative inline-block">
          <IconQuantity quantity={products.length} />
          <ShoppingBag size={28} className="text-primary-color stroke-[1.5] mx-2" />
        </div>
        <span className="group-hover:bg-primary-color absolute inset-x-0 -bottom-[2px] h-1 transition duration-300"></span>
      </Link>
    </div>
  );
}
