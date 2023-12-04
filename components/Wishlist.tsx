"use client";

import useFavorite from "@/hooks/useFavorite";
import useFavoriteSidebar from "@/hooks/useFavoriteSidebar";
import { Heart } from "lucide-react";
import IconQuantity from "./IconQuantity";
import { useEffect, useState } from "react";


export default function Wishlist() {
  const [isMounted, setIsMounted] = useState(false);
  const onOpen = useFavoriteSidebar((state) => state.onOpen);
  const products = useFavorite((state) => state.items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-full flex items-center">
      <div
        onClick={onOpen}
        className="h-full group relative cursor-pointer flex items-center"
      >
        <div className="relative inline-block">
          <IconQuantity quantity={products.length} />
          <Heart size={28} className="text-primary-color stroke-[1.5] mx-2" />
        </div>
        <span className="group-hover:bg-primary-color absolute inset-x-0 -bottom-[2px] h-1 transition duration-300" />
      </div>
    </div>
  );
}
