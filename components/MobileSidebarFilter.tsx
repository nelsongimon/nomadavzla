"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "./ui/IconButton";
import { X } from "lucide-react";
import useFilterSidebar from "@/hooks/useFilterSidebar";
import Filter from "./Filter";
import useGetFilter from "@/hooks/useGetFilter";
import { useParams } from "next/navigation";

type PageOptions = "products" | "style" | "search";

export default function MobileSidebarFilter() {

  const isOpen = useFilterSidebar(state => state.isOpen);
  const onClose = useFilterSidebar(state => state.onClose);
  const params = useParams();
  const value = Object.keys(params)[0];
  let page: PageOptions = "products";
  if (value === "style") {
    page = "style"
  } else if (value === "query") {
    page = "search"
  } else {
    page = "products"
  }

  const { data: attributes } = useGetFilter(page);

  return (
    <Transition show={isOpen} as={Fragment} leave="duration-200">
      <Dialog
        as="div"
        id="modal"
        className="fixed inset-0 flex overflow-y-auto z-50 transform transition-all"
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
          enterFrom="translate-x-[-100%]"
          enterTo="translate-x-0"
          leave="ease-in duration-200"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-[-100%]"
        >
          <Dialog.Panel
            as="div"
            className="bg-white h-full z-60 w-[75%] relative"
          >
            <div className="w-full flex justify-between items-center px-3 py-4">
              <h3 className="text-xl font-semibold">
                Filtros
              </h3>
              <IconButton onClick={() => onClose()} icon={<X size={15} />} />
            </div>
            <div className="border-gray-100 border-b-[2px]" />
            <div className="pl-4 mt-2 flex flex-col gap-y-1">
              <Filter
                attributes={attributes}
                mobile
              />
            </div>
          </Dialog.Panel>
        </Transition.Child>


      </Dialog>
    </Transition>
  );
}
