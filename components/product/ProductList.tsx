"use client";

import { useRef } from "react";

import ProductCard from "@/components/ui/ProductCard";
import useCurrentPage from "@/hooks/useCurrentPage";
import NoResults from "@/components/ui/NoResults";
import Pagination from "./Pagination";
import { Product } from "@/types";
import { PuffLoader } from "react-spinners";
import LogoSVG from "../ui/LogoSVG";

interface ProductListProps {
  products: Product[];
  className: string;
}

const ITEM_PER_PAGE = 9;

export default function ProductList({
  products,
  className
}: ProductListProps) {
  const counterRef = useRef(0);
  const currentPage = useCurrentPage();
  const page = useCurrentPage(state => state.page);
  const updatePage = useCurrentPage(state => state.updatePage);
  const totalPages = Math.ceil(products.length / ITEM_PER_PAGE);

  const startIndex = (page - 1) * ITEM_PER_PAGE;
  const endIndex = startIndex + ITEM_PER_PAGE;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleNextPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    if (page < totalPages) {
      counterRef.current += 1;
      updatePage(page + 1);
    }
  };

  const handlePrevPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    if (page > 1) {
      counterRef.current += 1;
      updatePage(page - 1);
    }
  };

  counterRef.current += 1;
  if (counterRef.current % 2 === 0) {
    return (
      <div className="flex h-screen items-top justify-center pt-28">
        {/* <PuffLoader
          size={150}
          color="#797979"
        /> */}
        <div className="pt-32 w-[150px] lg:w-[170px] mt-[-200px]">
          <LogoSVG />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 lg:mt-0">
      <div className="flex justify-center lg:justify-end mb-5 lg:mb-8">
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
