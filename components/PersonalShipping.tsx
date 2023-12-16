"use client";

import useGetProduct from "@/hooks/useGetProduct";
import usePersonalInformation from "@/hooks/usePersonalInformation";
import useShoppingCart from "@/hooks/useShoppingCart";
import { api } from "@/lib/api";
import _ from "lodash";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa6";

export default function PersonalShipping() {
  const personalInformation = usePersonalInformation(state => state.personalInformation);
  const shoppingCartItems = useShoppingCart(state => state.items);

  const handleClick = async () => {

    const products = await Promise.all(
      shoppingCartItems.map(async (item) => {
        const res = await api.get(`/products/id/${item.id}`);
        return res.data.product;
      })
    );

    const names = products.map((product) => {
      return product.name;
    });

    window.open(`https://wa.me/584126049272?text=Hola, soy ${personalInformation?.firstName} ${personalInformation?.lastName} y me gustaria coordinar una entrega personal en Maturín. ${names.length === 1 ? "Me interesa el siguiente producto:" : "Me interesan los siguientes productos:"} ${names.join(", ")}.`, "_blank");
  }

  useEffect(() => {
    const component = document.getElementById("personalShipping");
    const posicion = component?.offsetTop! + 230;
    window.scrollTo({
      top: posicion,
      behavior: "smooth"
    });
  }, []);

  return (
    <div id="personalShipping" className="flex flex-col gap-y-4 py-4 px-4">
      <h3 className="text-lg font-semibold text-primary-color text-center">
        Entrega Personal
      </h3>
      <div className="flex flex-col gap-y-1 items-center text-center">
        <p>
          Coordina con nosotros una entrega personal a través de Whatsapp
        </p>
        <p className="text-gray-strong-color font-light text-center">
          Solo válido para la ciudad de Maturín
        </p>
        <button
          onClick={handleClick}
          className="mt-4 px-6 py-2 rounded-full bg-green-600 flex gap-x-1 items-center duration-300 hover:bg-green-500"
        >
          <FaWhatsapp className="text-xl text-white" />
          <span className="text-white">
            Coordinar Entrega
          </span>
        </button>
      </div>
    </div>
  );
}
