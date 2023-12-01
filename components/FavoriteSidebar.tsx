"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "./ui/IconButton";
import { HeartOff, X } from "lucide-react";
import useFavoriteSidebar from "@/hooks/useFavoriteSidebar";
import useFavorite from "@/hooks/useFavorite";
import { Product } from "@/types";
import ProductCardFavorite from "./product/ProductCardFavorite";


export default function FavoriteSidebar() {
  const isOpen = useFavoriteSidebar(state => state.isOpen);
  const onClose = useFavoriteSidebar(state => state.onClose);
  const products: Product[] = useFavorite(state => state.items);


  return (
    <Transition show={isOpen} as={Fragment} leave="duration-200">
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 flex justify-end overflow-x-hidden overflow-y-auto z-50 transform transition-all"
        onClose={close}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-black/50" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-[100%]"
        >
          <Dialog.Panel
            as="div"
            className="bg-white h-full z-60 w-[70%] lg:w-[350px] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-color"
          >
            <div className="w-full flex justify-between items-center px-3 py-4">
              <h3 className="text-xl font-semibold">
                Mis Favoritos
              </h3>
              <IconButton onClick={() => onClose()} icon={<X size={15} />} />
            </div>
            <div className="border-gray-100 border-b-[2px]" />
            <div>
              {/* Content */}
              {products.length === 0 ? (
                <div className="px-9 py-7 h-[400px] flex items-center justify-center flex-col gap-y-5">
                  <HeartOff size={50} className="text-gray-200 stroke-[1.5]" />
                  <h3 className="text-center text-gray-200 text-2xl font-semibold">
                    No hay Productos en Favoritos
                  </h3>
                </div>
              ) : (
                <div className="px-9 py-7 flex flex-col gap-y-7">
                  {products.map((product) => (
                    <ProductCardFavorite
                      key={product.id}
                      product={product}
                    />
                  ))}
                </div>
              )}
            </div>
          </Dialog.Panel>
        </Transition.Child>


      </Dialog>
    </Transition>
  );
}
