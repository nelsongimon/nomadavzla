"use client";

import useFilterSidebar from "@/hooks/useFilterSidebar";
import { SlidersHorizontal } from "lucide-react";




export default function FilterMobileButton() {
  const onOpen = useFilterSidebar(state => state.onOpen);

  return (
    <button
      onClick={() => onOpen()}
      className="
        flex 
        gap-x-2
        items-center
        justify-center
        text-base
        font-semibold
        w-full
        border-gray-300
        border
        rounded-md
        py-2
        mt-6
      "
    >
      Abrir Filtros
      <SlidersHorizontal size={18} className="stroke-[1.8]" />
    </button>
  );
}
