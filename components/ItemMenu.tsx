"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeaderMenuItems } from "@/types";
import { Transition } from "@headlessui/react";
import useShowResults from "@/hooks/useShowResults";

interface ItemMenuProps {
  item: HeaderMenuItems;
}

export default function ItemMenu({
  item
}: ItemMenuProps) {

  const [isVisible, setIsVisible] = useState(false);
  const { showResults } = useShowResults();

  const handleHover = (value: boolean) => {
    setIsVisible(value);
  }

  return (

    <li className="
    font-normal
    text-base
    text-gray-strong-color
    hover:text-primary-color
    relative
    h-full
    px-4
    group 
  ">
      <div onMouseLeave={() => handleHover(false)} onMouseEnter={() => handleHover(true)} className="h-full cursor-pointer flex items-center">
        {!showResults && (
          <span className="group-hover:bg-primary-color absolute inset-x-0 -bottom-[2px] h-1 transition duration-300 z-50"></span>
        )}
        <span>
          {item.title}
        </span>
      </div>
      <Transition
        show={isVisible && !showResults}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed top-[72px] bottom-0 left-0 right-0 z-40 bg-black bg-opacity-50">
          <div className="flex justify-center">
            <div onMouseLeave={() => handleHover(false)} onMouseEnter={() => handleHover(true)} className="max-w-[1100px] w-full bg-white px-8 py-8">
              <div className="grid grid-cols-12">
                {/* Column */}
                <div className="col-span-3">
                  <div className="flex flex-col gap-y-4">
                    <h3 className="text-gray-strong-color text-base">
                      Género
                    </h3>
                    <div className="flex flex-col gap-y-3">
                      <Link href={"/"} className="text-primary-color font-semibold underline underline-offset-4 duration-300 hover:text-secondary-color text-lg">
                        Lentes para Caballeros
                      </Link>
                      <Link href={"/"} className="text-primary-color font-semibold underline underline-offset-4 duration-300 hover:text-secondary-color text-lg">
                        Lentes para Damas
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="col-span-3">
                  <div className="flex flex-col gap-y-4">
                    <h3 className="text-gray-strong-color text-base">
                      Estilo
                    </h3>
                    <div className="flex flex-col gap-y-3">
                      <Link href={"/"} className="text-primary-color font-semibold underline underline-offset-4 duration-300 hover:text-secondary-color text-lg">
                        Forma Agatada
                      </Link>
                      <Link href={"/"} className="text-primary-color font-semibold underline underline-offset-4 duration-300 hover:text-secondary-color text-lg">
                        Forma Ovalada
                      </Link>
                      <Link href={"/"} className="text-primary-color font-semibold underline underline-offset-4 duration-300 hover:text-secondary-color text-lg">
                        Forma Rectangular
                      </Link>
                      <Link href={"/"} className="text-primary-color font-semibold underline underline-offset-4 duration-300 hover:text-secondary-color text-lg">
                        Forma Redonda
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Images */}
                <div className="col-span-6">
                  <div className="grid grid-cols-3 gap-x-3 items-center">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        fill
                        src="https://placehold.co/400x400.png"
                        alt="Image"
                        className="
                          object-cover
                        "
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        fill
                        src="https://placehold.co/400x400.png"
                        alt="Image"
                        className="
                          object-cover
                        "
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        fill
                        src="https://placehold.co/400x400.png"
                        alt="Image"
                        className="
                          object-cover
                        "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

    </li>

  );
}
