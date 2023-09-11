"use client";

import { useEffect, useRef, useState } from "react";

import useCurrentPage from "@/hooks/useCurrentPage";
import Pagination from "./Pagination";
import ProductCard from "../ui/ProductCard";
import { Product } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";

interface ProductListFeaturedProps {
  products: Product[];
  className: string;
}

export default function ProductListFeatured({
  products,
  className
}: ProductListFeaturedProps) {

  return (
    <div>
      <div>
        <h3>
          Productos destacados
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
