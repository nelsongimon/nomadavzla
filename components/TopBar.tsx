"use client";

import { Truck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-light-color w-full h-[35px] flex items-center justify-center">
      <div className="flex items-center gap-x-2">
        <Truck size={18} className="text-secondary-color stroke-[2] hidden lg:block" />
        <Truck size={17} className="text-secondary-color stroke-[2] block lg:hidden" />
        <h2 className="text-[11px] lg:text-xs text-secondary-color font-semibold uppercase">
          Envío gratuito para pedidos superiores a $25
        </h2>
      </div>
    </div>
  );
}
