"use client";

import Image from "next/image";
import { glassesFiveInOneData } from "../data";
import Button from "./ui/Button";
import useCurrentPage from "@/hooks/useCurrentPage";
import Link from "next/link";

export default function FiveInOneGlassesSection() {
  const updatePage = useCurrentPage(state => state.updatePage);
  const handleClickLink = () => {
    updatePage(1);
  }

  return (
    <div className="grid grid-cols-12 gap-y-5 bg-gray-color rounded-lg mb-16 overflow-hidden">
      <div className="relative col-span-12 lg:col-span-8 w-full">
        <Image
          width={800}
          height={500}
          src={glassesFiveInOneData.image}
          alt="Glasses"
          className="w-full"
        />
      </div>
      <div className="col-span-12 lg:col-span-4 mb-10 lg:mb-0">
        <div className="flex flex-col w-full h-full justify-center items-center gap-y-3 lg:gap-y-5">
          <div className="relative flex w-full items-center justify-center">
            <h3 className="text-7xl font-extrabold text-white tracking-tight uppercase">
              {glassesFiveInOneData.opacityTitle}
            </h3>
            <h2 className="absolute text-primary-color tracking-widest font-light text-3xl uppercase">
              {glassesFiveInOneData.title}
            </h2>
          </div>
          <div className="flex justify-center w-full">
            <Link href={glassesFiveInOneData.action}>
              <Button
                onClick={() => handleClickLink()}
                size="default"
                variant="default"
              >
                {glassesFiveInOneData.label}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
