"use client";

import useShowResults from "@/hooks/useShowResults";
import { Transition } from "@headlessui/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";
import useCurrentPage from "@/hooks/useCurrentPage";
import clsx from "clsx";

interface ItemMenuProps {
  item: any;
}

export default function ItemMenu({
  item
}: ItemMenuProps) {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { showResults } = useShowResults();
  const router = useRouter();
  const updatePage = useCurrentPage(state => state.updatePage);
  const pathname = usePathname();
  const searhParams = useSearchParams();

  const handleHover = (value: boolean) => {
    setIsVisible(value);
  }

  const handleClickLink = (href: string) => {
    setIsVisible(false);
    const query = searhParams.toString();
    const currentPath = pathname + (query ? `?${query}` : "");
    if (href === currentPath) return false;
    updatePage(1);
  }

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY < 36) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <li className="font-normal text-base text-gray-strong-color hover:text-primary-color relative h-full group">
      <div onMouseLeave={() => handleHover(false)} onMouseEnter={() => handleHover(true)} className="h-full cursor-pointer flex items-center px-4">
        {!showResults && (
          <span className="group-hover:bg-primary-color absolute inset-x-0 -bottom-[2px] h-1 transition duration-300 z-50"></span>
        )}
        {item.href ? (
          <Link href={item.href} onClick={() => handleClickLink(item.href)}>
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
          <div className={clsx(`
            fixed bottom-0 left-0 right-0 z-40 bg-black bg-opacity-50`,
            isAtTop ? "top-[107px]" : "top-[72px]"
          )}>
            <div className="flex justify-center">
              <div onMouseLeave={() => handleHover(false)} onMouseEnter={() => handleHover(true)} className="max-w-[1100px] w-full bg-white px-8 py-8">
                <div className="grid grid-cols-12">
                  {/* Column */}
                  <div className="col-span-3">
                    <div className="flex flex-col gap-y-4">
                      <h3 className="text-secondary-color text-lg">
                        {item.MegaMenu.sectionLinks.title}
                      </h3>
                      <div className="flex flex-col gap-y-4">
                        {item.MegaMenu.sectionLinks.links.map((item: Record<string, any>, index: number) => (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={() => handleClickLink(item.href)}
                            className="text-primary-color underline-offset-4 underline hover:text-secondary-color font-light text-base duration-300"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Images */}
                  <div className="col-span-9 h-full">
                    <div className="flex gap-x-3 h-full">
                      {item.MegaMenu.sectionImages.map((item: Record<string, any>, index: number) => (
                        <div key={index} className="relative w-full h-full overflow-hidden cursor-pointer group">
                          <Image
                            fill
                            src={item.image}
                            alt="Image"
                            className="
                              opacity-40
                              grayscale
                              saturate-150
                              brightness-125
                              object-cover
                              hover:scale-110
                              duration-300
                            "
                          />
                          <div
                            className="absolute w-full bottom-7 flex justify-center items-center duration-300"
                          >
                            <Button
                              onClick={() => router.push(item.button.action)}
                              size="small"
                              variant="default"
                              className="px-3 hover:opacity-70"
                            >
                              <span className="text-sm">
                                {item.button.label}
                              </span>
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
