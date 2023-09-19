"use client";

import { genreBillboard } from "@/data";
import Image from "next/image";
import Button from "./ui/Button";
import useCurrentPage from "@/hooks/useCurrentPage";
import { useRouter } from "next/navigation";

export default function GenreBillboards() {
  const currentPage = useCurrentPage();
  const router = useRouter();

  const handleClickLink = (href: string) => {
    currentPage.updatePage(1);
    router.push(href);
  }
  return (
    <div className="mt-14 grid grid-cols-2 gap-x-10">
      <div className="bg-gray-color rounded-xl grid grid-cols-2 px-3">
        <div className="relative aspect-squar w-full h-[300px]">
          <Image
            fill
            src={genreBillboard.gentlemen.image}
            alt="Image genre"
            className="
              object-contain
              object-bottom
            "
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-y-5">
          <div className="relative flex w-full items-center justify-center">
            <h3 className="text-7xl font-extrabold text-white tracking-tight uppercase">
              {genreBillboard.gentlemen.titleGray}
            </h3>
            <h2 className="absolute text-primary-color tracking-widest font-light text-3xl uppercase">
              {genreBillboard.gentlemen.titleBlack}
            </h2>
          </div>
          <div className="flex justify-center w-full">
            <Button
              onClick={() => handleClickLink(genreBillboard.gentlemen.action)}
              size="default"
              variant="default"
            >
              {genreBillboard.gentlemen.label}
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-gray-color rounded-xl grid grid-cols-2 px-3">
        <div className="relative aspect-squar w-full h-[300px]">
          <Image
            fill
            src={genreBillboard.ladies.image}
            alt="Image genre"
            className="
              object-contain
              object-bottom
            "
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-y-5">
          <div className="relative flex w-full items-center justify-center">
            <h3 className="text-7xl font-extrabold text-white tracking-tight uppercase">
              {genreBillboard.ladies.titleGray}
            </h3>
            <h2 className="absolute text-primary-color tracking-widest font-light text-3xl uppercase">
              {genreBillboard.ladies.titleBlack}
            </h2>
          </div>
          <div className="flex justify-center w-full">
            <Button
              onClick={() => handleClickLink(genreBillboard.ladies.action)}
              size="default"
              variant="default"
            >
              {genreBillboard.ladies.label}
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}
