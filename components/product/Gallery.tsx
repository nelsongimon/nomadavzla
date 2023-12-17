"use client";

import Image from "next/image";

import { Image as ImageType } from "@/types";
import { Tab } from "@headlessui/react";
import GalleryTab from "./GalleryTab";
import { addAbsolutePathImage } from "@/lib/utils";
import useExpandImage from "@/hooks/useExpandImage";

interface GalleryProps {
  images: ImageType[];
  previewModal?: boolean;
}

export default function Gallery({
  images,
  previewModal = false,
}: GalleryProps) {
  const onOpen = useExpandImage(state => state.onOpen);

  const handleExpandImage = (image: string) => {
    if (previewModal) return;
    onOpen(image);
  }
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="
        mx-auto
        mt-4
        lg:mt-6
        w-full
        lg:max-w-none
      ">
        <Tab.List className="flex flex-wrap gap-3 justify-center">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} previewModal={previewModal} />
          ))}
        </Tab.List>
      </div>
      <Tab.Panels>
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div
              onClick={() => handleExpandImage(addAbsolutePathImage(image.image))}
              className="
                aspect-video
                relative 
                h-full 
                w-full 
                sm:rounded-lg 
                overflow-hidden
                cursor-pointer
              "
            >
              <Image
                fill
                alt={image.image}
                src={addAbsolutePathImage(image.image)}
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
