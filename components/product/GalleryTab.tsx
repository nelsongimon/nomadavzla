"use client";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { clsx } from "clsx";

import { Image as ImageType } from "@/types";
import { addAbsolutePathImage } from "@/lib/utils";

interface GalleryTabProps {
  image: ImageType;
  previewModal?: boolean;
}

export default function GalleryTab({
  image,
  previewModal = false,
}: GalleryTabProps) {
  return (
    <Tab className={clsx(`
      relative
      flex
      aspect-square
      cursor-pointer
      items-center
      justify-center
      rounded-md
      bg-gray-color
      outline-none
      ring-0`,
      previewModal ? "h-10 w-10" : "h-14 w-14"
    )}>
      {({ selected }) => (
        <>
          <span className="
            absolute
            h-full
            w-full 
            aspect-square
            inset-0
            overflow-hidden
            rounded-md
            outline-none
          ">
            <Image
              fill
              src={addAbsolutePathImage(image.image)}
              alt={image.image}
              className="object-contain object-center"
            />
          </span>
          <span className={clsx(`
            absolute
            inset-0
            rounded-md
            outline-none
            ring-2
            ring-offset-2
          `,
            selected ? "ring-strong-color" : "ring-transparent"
          )}>
          </span>
        </>
      )}
    </Tab>
  );
}
