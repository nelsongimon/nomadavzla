"use client";

import { useEffect, useState } from "react";
import ZoomSelectAgency from "./ZoomSelectAgency";
import Image from "next/image";
import clsx from "clsx";
import MrwSelectAgency from "./MrwSelectAgency";
import { motion } from "framer-motion";

export default function NationalShipping() {
  const [selectedShippingAgency, setSelectedShippingAgency] = useState<"zoom" | "mrw">("zoom");

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
          <motion.button className={clsx(`
            relative w-full h-[50px] lg:h-[60px]  border-2 cursor-pointer rounded-md`,
            selectedShippingAgency === "zoom" ? "border-primary-color" : "border-gray-200"
          )}
            onClick={() => setSelectedShippingAgency("zoom")}
            whileTap={{ scale: 0.9 }}
          >
            <Image fill src={process.env.NEXT_PUBLIC_IMAGE_PATH + "images/zoom.png"} alt="zoom logo" className="object-contain" />
          </motion.button>
          {/* MRW */}
          <motion.button className={clsx(`
            relative w-full h-[50px] lg:h-[60px]  border-2 cursor-pointer rounded-md`,
            selectedShippingAgency === "mrw" ? "border-primary-color" : "border-gray-200"
          )}
            onClick={() => setSelectedShippingAgency("mrw")}
            whileTap={{ scale: 0.9 }}
          >
            <Image fill src={process.env.NEXT_PUBLIC_IMAGE_PATH + "images/mrw.png"} alt="mrw logo" className="object-contain" />
          </motion.button>
        </div>
        <div>
          {selectedShippingAgency === "zoom" && <ZoomSelectAgency />}
          {selectedShippingAgency === "mrw" && <MrwSelectAgency />}
        </div>
      </div>
    </div>
  );
}
