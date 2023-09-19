"use client";

import Image from "next/image";

import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import GalleryTab from "./GalleryTab";

interface GalleryProps {
  images: ImageType[];
}

export default function Gallery({
  images
}: GalleryProps) {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="
        hidden
        sm:block
        mx-auto
        mt-6
        w-full
        lg:max-w-none
      ">
        <Tab.List className="grid grid-cols-8 gap-4 content-center">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="
              aspect-video
              relative 
              h-full 
              w-full 
              sm:rounded-lg 
              overflow-hidden
            ">
              <Image
                fill
                alt={image.alt}
                src={image.src}
                className="
                  object-contain
                  object-center
                "
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
