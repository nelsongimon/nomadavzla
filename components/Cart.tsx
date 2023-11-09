"use client";

import { ShoppingBag } from "lucide-react";

export default function Cart() {
  return (
    <div className="h-full flex items-center">
      <button className="h-full group relative">
        <ShoppingBag className="text-primary-color stroke-[1.5] w-6 h-6 mx-2" />
        <span className="group-hover:bg-primary-color absolute inset-x-0 -bottom-[2px] h-1 transition duration-300"></span>
      </button>
    </div>
  );
}
