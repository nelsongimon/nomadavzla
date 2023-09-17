"use client";

import ProductCard from "../ui/ProductCard";
import { Product } from "@/types";
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react";

interface ProductListFeaturedProps {
  products: Product[];
  className: string;
}

export default function ProductListFeatured({
  products,
  className
}: ProductListFeaturedProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px"
  });

  useEffect(() => {
    console.log("VISIBLE", isInView);
  }, [isInView]);


  return (
    <div className="py-20">
      <div className="mb-8">
        <h3 className="text-strong-color font-bold text-4xl text-center">
          Every Vision of You
        </h3>
      </div>
      <div className={className}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
