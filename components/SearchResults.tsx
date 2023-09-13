"use client";

import { Transition } from "@headlessui/react";
import useGetTags from "@/hooks/useGetTags";
import useSuggestedProducts from "@/hooks/useSuggestedProducts";
import SuggestedProductCard from "./product/SuggestedProductCard";
import { Product } from "@/types";
import { PuffLoader } from "react-spinners";

interface SearchResults {
  loadingSearch: boolean;
  inputSearch: string;
  searhProducts: Product[];
  showResults: boolean;
  setIsHover: (value: boolean) => void;
  handleSuggestedQuery: (query: string) => void;
  checkOnClickOutside: () => void;
  handleClickSearchProduct: () => void;
  handleClickSeeAllResults: () => void;
}

export default function SearchResults({
  loadingSearch,
  inputSearch,
  searhProducts,
  showResults,
  setIsHover,
  handleSuggestedQuery,
  checkOnClickOutside,
  handleClickSearchProduct,
  handleClickSeeAllResults
}: SearchResults) {

  const { data: tags } = useGetTags();
  const { data: suggestedProducts } = useSuggestedProducts();

  return (
    <Transition
      show={showResults}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div onClick={checkOnClickOutside} className="fixed top-[72px] bottom-0 left-0 right-0 z-40 bg-black bg-opacity-50">
        <div className="flex justify-center">
          <div onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} className="min-w-[800px] bg-white px-8 py-8">
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-5 items-center border-b border-gray-200 pb-4">
                <h5 className="text-gray-strong-color text-base ">
                  Consultas sugeridas
                </h5>
                <div className="flex gap-x-3">
                  {tags.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => handleSuggestedQuery(tag.slug)}
                      className="
                        bg-gray-100
                        py-1
                        px-2
                        text-primary-color
                        text-sm
                        font-light
                        rounded-full
                        underline-offset-3
                        hover:underline
                        duration-300
                        hover:text-gray-strong-color
                      "
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
              </div>
              {/* PRODUCT SEARCH CONTAINER */}
              {loadingSearch ? (
                <>
                  <div className="flex h-60 items-center justify-center">
                    <PuffLoader
                      size={100}
                      color="#797979"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="mt-2">
                    <h5 className="text-gray-strong-color text-base mb-4">
                      {searhProducts.length > 0 ? (
                        <span>
                          Se han encontrado {searhProducts.length} {searhProducts.length === 1 ? "coincidencia" : "coincidencias"}
                        </span>
                      ) : (
                        <span>
                          Sugeridos para ti
                        </span>
                      )}
                    </h5>
                    <div className="grid grid-cols-4 gap-x-3 gap-y-5">
                      {searhProducts.length > 0 && inputSearch !== "" ? (
                        <>
                          {searhProducts.map((product, index) => {
                            if (index > 8) {
                              return null;
                            }
                            return (<SuggestedProductCard
                              key={product.id}
                              product={product}
                              handleClickSearchProduct={handleClickSearchProduct}
                            />)
                          }
                          )}
                        </>
                      ) : (
                        <>
                          {suggestedProducts.map((product) => (
                            <SuggestedProductCard
                              key={product.id}
                              product={product}
                              handleClickSearchProduct={handleClickSearchProduct}
                            />
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                  {searhProducts.length > 8 && (
                    <div className="flex justify-center">
                      <button
                        onClick={handleClickSeeAllResults}
                        className="
                          underline
                          underline-offset-4
                          text-primary-color
                          text-sm
                          font-light
                          hover:text-secondary-color
                          duration-300
                        "
                      >
                        Ver todos los resultados
                      </button>
                    </div>
                  )}
                  {(searhProducts.length === 0 && inputSearch !== "") && (
                    <div className="flex justify-center">
                      <span className="
                          text-primary-color
                          text-base
                          font-light
                        ">
                        No se han encontrado resultados para <span className="text-gray-strong-color">{inputSearch}</span>
                      </span>
                    </div>
                  )}
                </>

              )}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
