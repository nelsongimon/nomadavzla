"use client";

import { Search as SearchIcon, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";


import SearchResults from "./SearchResults";
import { Product } from "@/types";
import toast from "react-hot-toast";
import useShowResults from "@/hooks/useShowResults";
import { api } from "@/lib/api";
import clsx from "clsx";

interface SearchProps {
  isSearchMobileOpen?: boolean;
  setIsSearchMobileOpen?: (value: boolean) => void;
  mobile?: boolean;
}

export default function Search({
  isSearchMobileOpen,
  setIsSearchMobileOpen,
  mobile = false
}: SearchProps) {

  const { showResults, setShowResults } = useShowResults();
  const [inputSearch, setInputSearch] = useState<string>("");
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [searhProducts, setSearhProducts] = useState<Product[]>([]);
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const handleInputChange = debounce(() => {
    setLoadingSearch(true);
    api.get(`/search/${inputSearch}`)
      .then((res) => {
        const products = res.data.products || [];
        setSearhProducts(products);
      }).
      catch((error) => {
        // toast.error("Algo salio mal");
        // console.log(error);
      })
      .finally(() => setLoadingSearch(false))
  }, 500);

  const handleClickSeeAllResults = () => {
    router.push(`/busqueda/${inputSearch}`);
    setSearhProducts([]);
    setInputSearch("");
    setIsHover(false);
    setIsSearchMobileOpen?.(false);
    handleHidden(true);
  }

  const handleClickSearchProduct = () => {
    setSearhProducts([]);
    setInputSearch("");
    setIsHover(false);
    setIsSearchMobileOpen?.(false);
    handleHidden(true);
  }

  const handleSuggestedQuery = (query: string) => {
    setIsHover(false);
    handleHidden(true);
    setIsSearchMobileOpen?.(false);
    router.push(`/estilo/${query}`);
  }

  const handleShow = () => {
    setShowResults(true);
  }

  const handleHidden = (hasQuery: boolean) => {
    if (mobile) {
      return;
    }
    if (hasQuery) {
      setShowResults(false);
      return;
    }
    if (isHover) {
      return;
    }
    setInputSearch("");
    setShowResults(false);
  }

  const checkOnClickOutside = () => {
    if (!isHover) {
      setShowResults(false);
    }
  }

  useEffect(() => {
    if (!inputSearch) return;
    handleInputChange();
  }, [inputSearch]);

  return (
    <div className={clsx(mobile && "w-full mx-3")}>
      <div className="w-full relative">
        <span className="absolute left-[7px] h-full flex items-center">
          <SearchIcon className="text-gray-400 stroke-[2] w-4 h-4" />
        </span>
        {showResults && (
          <span
            onClick={() => handleHidden(false)}
            className="absolute right-[7px] h-full flex items-center cursor-pointer hover:opacity-70 duration-300"
          >
            <XCircle className="text-gray-400 stroke-[1.5] w-5 h-5" />
          </span>
        )}
        {mobile && (
          <span
            onClick={() => setIsSearchMobileOpen?.(false)}
            className="absolute right-[7px] h-full flex items-center cursor-pointer hover:opacity-70 duration-300"
          >
            <XCircle className="text-gray-400 stroke-[1.5] w-5 h-5" />
          </span>
        )}
        <input
          id="search"
          type="text"
          placeholder="Estoy buscando..."
          autoComplete="off"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          onFocus={handleShow}
          onBlur={() => handleHidden(false)}
          className={clsx(`
            px-3
            py-[3px]
            pl-7
            ring-2
            ring-gray-200
            focus:ring-gray-400
            outline-none
            focus:outline-none
            duration-300
            rounded-full`,
            mobile && "w-full"
          )}
        />
      </div>
      <SearchResults
        mobile={mobile}
        loadingSearch={loadingSearch}
        inputSearch={inputSearch}
        searhProducts={searhProducts}
        showResults={showResults}
        setIsHover={setIsHover}
        handleSuggestedQuery={handleSuggestedQuery}
        checkOnClickOutside={checkOnClickOutside}
        handleClickSearchProduct={handleClickSearchProduct}
        handleClickSeeAllResults={handleClickSeeAllResults}
      />
    </div>
  );
}
