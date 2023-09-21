"use client";

import { useRef } from "react";

import ProductCard from "@/components/ui/ProductCard";
import useCurrentPage from "@/hooks/useCurrentPage";
import NoResults from "@/components/ui/NoResults";
import Pagination from "./Pagination";
import { Product } from "@/types";
import { PuffLoader } from "react-spinners";

interface ProductListProps {
  products: Product[];
  className: string;
}

export default function ProductList({
  products,
  className
}: ProductListProps) {
  const counterRef = useRef(0);
  const itemsPerPage = 9;
  const currentPage = useCurrentPage();
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage.page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    if (currentPage.page < totalPages) {
      counterRef.current += 1;
      currentPage.updatePage(currentPage.page + 1);
    }
  };

  const handlePrevPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    if (currentPage.page > 1) {
      counterRef.current += 1;
      currentPage.updatePage(currentPage.page - 1);
    }
  };

  counterRef.current += 1;
  if (counterRef.current % 2 === 0) {
    return (
      <div className="flex h-screen items-top justify-center pt-28">
        <PuffLoader
          size={150}
          color="#797979"
        />
      </div>
    );
  }

  return (
    <div className="">
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
      {products.length > 0 ? (
        <div>
          <Pagination
            currentPage={currentPage.page}
            totalPages={totalPages}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </div>
      ) : (
        <NoResults />
      )}
    </div>
  );
}
