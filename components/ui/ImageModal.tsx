"use client";

import { Transition, Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment } from "react";
import IconButton from "./IconButton";
import useExpandImage from "@/hooks/useExpandImage";
import Image from "next/image";

export default function ImageModal() {
  const isOpen = useExpandImage(state => state.isOpen);
  const onClose = useExpandImage(state => state.onClose);
  const image = useExpandImage(state => state.image);

  return (
    <Transition show={isOpen} appear as={Fragment} leave="duration-200">
      <Dialog
        as="div"
        className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center justify-center z-50 transform transition-all"
        onClose={onClose}
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
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Panel className="w-full max-w-3xl align-middle">
            <div className="relative flex w-full max-w-3xl items-center">
              <div className="absolute right-[-15px] top-[-15px] z-70">
                <IconButton onClick={onClose} icon={<X size={25} className="stroke-[1.5]" />} />
              </div>
              {/* Image */}
              <div className="        
                aspect-video
              bg-gray-color
                relative
                group
                cursor-pointer
                overflow-hidden
                rounded-md
                w-full
                h-[300px]
                lg:h-[500px]
              ">
                <Image
                  fill
                  alt={"Image expand"}
                  src={image}
                  className="
                  object-contain
                  object-center
                "
                />
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog >
    </Transition >
  );
}
