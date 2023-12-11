"use client";

import Image from "next/image";
import ShippingCompanyForm from "./ShippingCompanyForm";

export default function NationalShipping() {
  return (
    <div className="flex flex-col gap-y-4 py-4 px-4">
      <h3 className="text-lg font-semibold text-primary-color text-center">
        Envío Nacional
      </h3>
      <div className="flex flex-col gap-y-2">
        <div className="flex justify-between gap-x-4">
          {/* Zoom */}
          <button className="relative w-full h-[60px] border-green-600 border-2 border-dashed cursor-pointer rounded-md" disabled={true}>
            <Image fill src="https://nomadavzla.store/images/zoom.png" alt="zoom image" className="object-contain" />
          </button>
          {/* MRW */}
          <div className="relative w-full h-[60px] border-gray-200 border-2 cursor-pointer rounded-md">
            <Image fill src="https://nomadavzla.store/images/mrw.png" alt="zoom image" className="object-contain opacity-50" />
          </div>
        </div>
        <div>
          <ShippingCompanyForm company="zoom" />
        </div>
      </div>
    </div>
  );
}
