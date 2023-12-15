"use client";

import { useEffect, useState } from "react";
import InvoiceProduct from "./product/InvoiceProduct";
import useShoppingCart from "@/hooks/useShoppingCart";
import useGetDollarValue from "@/hooks/useGetDollarValue";
import Button from "./ui/Button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import usePersonalInformation from "@/hooks/usePersonalInformation";
import useSelectedAgency from "@/hooks/useSelectedAgency";

export default function Invoice() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const products = useShoppingCart(state => state.items);
  const totalToPay = products.reduce((acc, item) => acc + Number(item.total), 0).toFixed(2);
  const dollarValue = "35.59";
  const totalBs = Number(dollarValue) * Number(totalToPay);
  const personalInformation = usePersonalInformation(state => state.personalInformation);
  const selectedAgency = useSelectedAgency(state => state.selectedAgency);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="bg-gray-color px-3 py-7 rounded-lg sticky top-[100px]">
      <div className="px-5 border-b border-gray-200 pb-5">
        <h3 className="text-primary-color font-semibold text-xl text-center uppercase">
          Orden de Compra
        </h3>
      </div>
      {personalInformation && (
        <div className="flex flex-col gap-y-2 px-5 border-b border-gray-200 py-6">
          <h2 className="text-lg font-semibold text-left">
            Datos del Comprador
          </h2>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-strong-color font-normal text-base">
                {personalInformation.firstName} {personalInformation.lastName}
              </h3>
              <h3 className="text-gray-strong-color font-normal text-base">
                CI: {personalInformation.dni}
              </h3>
            </div>
          </div>
        </div>
      )}
      {selectedAgency && (
        <div className="flex flex-col gap-y-2 px-5 border-b border-gray-200 py-6">
          <h2 className="text-lg font-semibold text-left">
            Datos del Envío
          </h2>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-strong-color font-normal text-base">
                {selectedAgency.city}
              </h3>
              <h3 className="text-gray-strong-color font-normal text-base uppercase">
                {selectedAgency.company}
              </h3>
            </div>
            <h3 className="text-gray-strong-color font-normal text-sm">
              {selectedAgency.address}
            </h3>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-y-7 py-6">
        {products.map((product) => (
          <InvoiceProduct key={product.id} productId={product.id} />
        ))}
      </div>
      <div className="flex justify-between items-end px-5 border-t border-gray-200 pt-6">
        <div>
          <h3 className="font-semibold text-primary-color text-xl">
            Total a Pagar:
          </h3>
        </div>
        <div className="flex flex-col gap-y-1">
          <h4 className="text-2xl font-semibold text-primary-color text-right">
            Bs {totalBs.toFixed(2)}
          </h4>
          <h3 className="text-2xl font-semibold text-primary-color text-right">
            ${totalToPay}
          </h3>
        </div>
      </div>
    </div>
  );
}
