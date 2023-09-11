"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { clsx } from "clsx";

import { Image as ImageType } from "@/types";

interface GalleryTabProps {
  image: ImageType
}

export default function GalleryTab({
  image
}: GalleryTabProps) {
  return (
    <Tab className="
      relative
      flex
      aspect-square
      cursor-pointer
      items-center
      justify-center
      rounded-md
      bg-gray-color
    ">
      {({ selected }) => (
        <div>
          <span className="
            absolute
            h-full
            w-full 
            aspect-square
            inset-0
            overflow-hidden
            rounded-md
          ">
            <Image
              fill
              src={image.src}
              alt=""
              className="object-contain object-center"
            />
          </span>
          <span className={clsx(`
            absolute
            inset-0
            rounded-md
            ring-2
            ring-offset-2
          `,
            selected ? "ring-primary-color" : "ring-transparent"
          )}>

          </span>
        </div>
      )}
    </Tab>
  );
}
