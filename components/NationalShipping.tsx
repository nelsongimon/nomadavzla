"use client";

import { useEffect } from "react";
import ZoomSelectAgency from "./ZoomSelectAgency";
import Image from "next/image";

export default function NationalShipping() {

  useEffect(() => {
    const component = document.getElementById("nationalShipping");
    const posicion = component?.offsetTop! + 265;
    window.scrollTo({
      top: posicion,
      behavior: "smooth"
    });
  }, []);

  return (
    <div id="nationalShipping" className="flex flex-col gap-y-4 py-4 px-4">
      <h3 className="text-lg font-semibold text-primary-color text-center">
        Envío Nacional
      </h3>
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between gap-x-2 lg:gap-x-4">
          {/* Zoom */}
          <button className="relative w-full h-[50px] lg:h-[60px] border-primary-color border-2 cursor-pointer rounded-md" disabled={true}>
            <Image fill src="https://nomadavzla.store/images/zoom.png" alt="zoom image" className="object-contain" />
          </button>
          {/* MRW */}
          <div className="relative w-full h-[50px] lg:h-[60px] border-gray-200 border-2 cursor-pointer rounded-md">
            <Image fill src="https://nomadavzla.store/images/mrw.png" alt="zoom image" className="object-contain opacity-50" />
          </div>
        </div>
        <div>
          <ZoomSelectAgency />
        </div>
      </div>
    </div>
  );
}
