"use client";

import { Minus, Plus } from "lucide-react";

interface QuatityProps {
  maxQuantity: number;
  currentQuantity: number;
  onPlusQuantity: () => void;
  onMinusQuantity: () => void;
}

export default function Quatity({
  currentQuantity,
  maxQuantity,
  onMinusQuantity,
  onPlusQuantity
}: QuatityProps) {
  return (
    <div className="flex gap-x-2 items-center">
      <button className="h-9 w-9 border border-gray-strong-color flex items-center justify-center rounded-md text-gray-strong-color hover:text-primary-color hover:border-primary-color duration-300 disabled:text-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed"
        onClick={onMinusQuantity}
        disabled={currentQuantity === 1}
      >
        <Minus className="stroke-[1] text-base" />
      </button>
      <span className="text-primary-color text-xl font-regular h-9 w-4 flex items-center justify-center">
        {currentQuantity}
      </span>
      <button className="h-9 w-9 border border-gray-strong-color flex items-center justify-center rounded-md text-gray-strong-color hover:text-primary-color hover:border-primary-color duration-300 disabled:text-gray-300 disabled:border-gray-300 disabled:cursor-not-allowed"
        onClick={onPlusQuantity}
        disabled={currentQuantity === maxQuantity}
      >
        <Plus className=" stroke-[1] text-base" />
      </button>
    </div>
  );
}
