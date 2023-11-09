"use client";

import { Transition } from "@headlessui/react";
import { menuMobileItems } from "@/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import useCurrentPage from "@/hooks/useCurrentPage";

const variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
}

interface MobileMenuItemsProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function MobileMenuItems({
  isOpen,
  setIsOpen
}: MobileMenuItemsProps) {
  const router = useRouter();
  const updatePage = useCurrentPage(state => state.updatePage);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickLink = (href: string) => {
    setIsOpen(false);
    updatePage(1);
    router.push(href);
  }

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Transition
      show={isOpen}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-[67px] bottom-0 left-0 right-0 z-10 bg-black bg-opacity-50">
        <div className="bg-white flex w-full h-full">
          <div className="flex flex-col gap-y-3 py-4 px-4 w-full">
            <h3 className="text-lg font-semibold">
              Menú de Navegación
            </h3>
            <div>
              {menuMobileItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 py-4 overflow-hidden"
                >
                  {item.href ? (
                    <button
                      onClick={() => handleClickLink(item.href)}
                    >
                      <span
                        className="text-base duration-200 text-primary-color hover:text-secondary-color"
                      >
                        {item.label}
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex justify-between w-full"
                    >
                      <span className={clsx(
                        `text-base duration-200`,
                        index === activeIndex ? "text-secondary-color" : "text-primary-color"
                      )}>
                        {item.label}
                      </span>
                      <motion.span
                        initial={{ rotate: 0 }}
                        animate={index === activeIndex ? "open" : "closed"}
                        transition={{ duration: 0.3 }}
                        variants={variants}
                      >
                        <ChevronDown size={25} className="stroke-[1.5] text-primary-color" />
                      </motion.span>
                    </button>

                  )}

                  {item.links && (
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          className="flex flex-col gap-y-3 mt-2 ml-3"
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.2, type: "tween" }}
                        >
                          {item.links?.map((link, index) => (
                            <Button
                              key={index}
                              onClick={() => handleClickLink(link.href)}
                              size="none"
                              variant="link"
                            >
                              {link.label}
                            </Button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </Transition>
  );
}
