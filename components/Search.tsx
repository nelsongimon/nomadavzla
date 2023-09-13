"use client";

import { Search as SearchIcon, XCircle } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";


import SearchResults from "./SearchResults";
import useSearchProducts from "@/hooks/useSearchProducts";
import axios from "axios";
import { Product } from "@/types";
import toast from "react-hot-toast";

export default function Search() {

  const [inputSearch, setInputSearch] = useState<string>("");
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [searhProducts, setSearhProducts] = useState<Product[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const router = useRouter();

  const handleInputChange = debounce(() => {
    // const query = event.target.value;
    // setInputSearch(query);
    // console.log("REQUEST:", inputSearch);
    setLoadingSearch(true);
    axios.get(`/api/products/search/${inputSearch}`)
      .then((res) => {
        console.log(res.data);
        const products = res.data || [];
        setSearhProducts(products);
      }).
      catch((error) => {
        toast.error("Algo salio mal");
      })
      .finally(() => setLoadingSearch(false))
  }, 500);

  const handleClickSeeAllResults = () => {
    router.push(`/busqueda/${inputSearch}`);
    setSearhProducts([]);
    setInputSearch("");
    setIsHover(false);
    handleHidden(true);
  }

  const handleClickSearchProduct = () => {
    console.log("CLICK");
    setSearhProducts([]);
    setInputSearch("");
    setIsHover(false);
    handleHidden(true);
  }

  const handleSuggestedQuery = (query: string) => {
    setIsHover(false);
    handleHidden(true);
    router.push(`/busqueda/${query}`);
  }

  const handleShow = () => {
    setShowResults(true);
  }

  const handleHidden = (hasQuery: boolean) => {
    setInputSearch("");
    if (hasQuery) {
      setShowResults(false);
      return;
    }
    if (isHover) {
      return;
    }
    setShowResults(false);
  }

  const checkOnClickOutside = () => {
    if (!isHover) {
      setShowResults(false);
    }
  }

  useEffect(() => {
    handleInputChange();
  }, [inputSearch]);

  return (
    <div>
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
        <input
          id="search"
          type="text"
          placeholder="Estoy buscando..."
          autoComplete="off"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          onFocus={handleShow}
          onBlur={() => handleHidden(false)}
          className="
            px-3
            py-[3px]
            pl-7
            ring-2
            ring-gray-200
            focus:ring-gray-400
            outline-none
            focus:outline-none
            duration-300
            rounded-full
          "
        />
      </div>
      <SearchResults
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
