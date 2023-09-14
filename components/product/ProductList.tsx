"use client";

import { useEffect, useRef, useState } from "react";

import useCurrentPage from "@/hooks/useCurrentPage";
import Pagination from "./Pagination";
import ProductCard from "../ui/ProductCard";
import { Product } from "@/types";
import { usePathname, useSearchParams } from "next/navigation";

interface ProductListProps {
  products: Product[];
  className: string;
}

export default function ProductList({
  products,
  className
}: ProductListProps) {
  const counterRef = useRef(0);
  const itemsPerPage = 3;
  const currentPage = useCurrentPage();
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage.page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage.page < totalPages) {
      counterRef.current += 1;
      currentPage.updatePage(currentPage.page + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage.page > 1) {
      counterRef.current += 1;
      currentPage.updatePage(currentPage.page - 1);
    }
  };

  counterRef.current += 1;
  if (counterRef.current % 2 === 0) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <div>
      <div className="flex justify-end mb-8">
        <span className="text-gray-strong-color font-light text-base bg-gray-100 rounded-full px-2 py-1">
          {products.length} {products.length === 1 ? "resultado encontrado" : "resultados encontrados"}
        </span>
      </div>
      <div className={className}>
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {products.length > 0 && (
        <div>
          <Pagination
            currentPage={currentPage.page}
            totalPages={totalPages}
            startIndex={startIndex + 1}
            endIndex={endIndex - 1}
            total={products.length}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </div>
      )}
    </div>
  );
}
