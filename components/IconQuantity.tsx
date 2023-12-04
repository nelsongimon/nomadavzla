"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface IconQuantityProps {
  quantity: number;
}

export default function IconQuantity({
  quantity
}: IconQuantityProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ scale: [1.3, 1, 0.9, 1] });
  }, [quantity]);

  if (quantity === 0) {
    return null;
  }

  return (
    <motion.span className="absolute -top-[4px] right-[3px] w-[14px] h-[14px] bg-secondary-color rounded-full text-white font-light text-[10px] p-[2px] flex items-center justify-center"
      animate={controls}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
    >
      {quantity}
    </motion.span>
  );
}
