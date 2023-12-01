"use client";

import useFavorite from "@/hooks/useFavorite";
import useFavoriteSidebar from "@/hooks/useFavoriteSidebar";
import { Heart } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";


export default function Wishlist() {
  const onOpen = useFavoriteSidebar((state) => state.onOpen);
  const products = useFavorite((state) => state.items);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scale: [1.3, 1, 0.9, 1] }); // Define tu animación aquí
  }, [products]);
  return (
    <div className="h-full flex items-center">
      <div
        onClick={onOpen}
        className="h-full group relative cursor-pointer flex items-center"
      >
        <span className="relative inline-block">
          {products.length > 0 && (
            <motion.span className="absolute -top-[4px] right-[3px] w-[13px] h-[13px] bg-secondary-color rounded-full text-white font-light text-[10px] p-[2px] flex items-center justify-center"
              animate={controls}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
            >
              {products.length}
            </motion.span>
          )}
          <Heart className="text-primary-color stroke-[1.5] w-6 h-6 mx-2" />
        </span>
        <span className="group-hover:bg-primary-color absolute inset-x-0 -bottom-[2px] h-1 transition duration-300" />
      </div>
    </div>
  );
}
