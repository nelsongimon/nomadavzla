"use client";

import useShowResults from "@/hooks/useShowResults";
import { Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import useCurrentPage from "@/hooks/useCurrentPage";

interface ItemMenuProps {
  item: any;
}

export default function ItemMenu({
  item
}: ItemMenuProps) {

  const [isVisible, setIsVisible] = useState(false);
  const { showResults } = useShowResults();
  const router = useRouter();
  const updatePage = useCurrentPage(state => state.updatePage);

  const handleHover = (value: boolean) => {
    setIsVisible(value);
  }

  const handleClickLink = (href: string) => {
    setIsVisible(false);
    updatePage(1);
    router.push(href);
  }

  return (
    <li className="
    font-normal
    text-base
    text-gray-strong-color
    hover:text-primary-color
    relative
    h-full
    group 
  ">
      <div onMouseLeave={() => handleHover(false)} onMouseEnter={() => handleHover(true)} className="h-full cursor-pointer flex items-center px-4">
        {!showResults && (
          <span className="group-hover:bg-primary-color absolute inset-x-0 -bottom-[2px] h-1 transition duration-300 z-50"></span>
        )}
        {item.href ? (
          <Link href={item.href}>
            {item.label}
          </Link>
        ) : (
          <span>
            {item.label}
          </span>
        )}
      </div>
      {item.hasMegaMenu && (
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
                      <h3 className="text-gray-strong-color text-lg">
                        {item.MenaMenu.sectionLinks.title}
                      </h3>
                      <div className="flex flex-col gap-y-5">
                        {item.MenaMenu.sectionLinks.links.map((item: Record<string, any>, index: number) => (
                          <Button
                            key={index}
                            onClick={() => handleClickLink(item.href)}
                            size="none"
                            variant="link"
                          >
                            {item.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Images */}
                  <div className="col-span-9">
                    <div className="flex gap-x-3">
                      {item.MenaMenu.sectionImages.map((item: Record<string, any>, index: number) => (
                        <div key={index} className="relative w-full h-full aspect-square overflow-hidden cursor-pointer group">
                          <Image
                            fill
                            src={item.image}
                            alt="Image"
                            className="
                                object-cover
                                object-center
                                scale-100
                                hover:scale-110
                                duration-300
                                peer
                              "
                          />
                          <div
                            className="absolute w-full bottom-7 flex justify-center items-center duration-300 opacity-40 peer-hover:opacity-100"
                          >
                            <Button
                              onClick={() => router.push(item.button.action)}
                              size="small"
                              variant="gray"
                            >
                              {item.button.label}
                            </Button>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      )}

    </li>

  );
}
