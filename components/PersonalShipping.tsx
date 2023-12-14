"use client";

import { useEffect } from "react";

export default function PersonalShipping() {

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
      <div>
        Text
      </div>
    </div>
  );
}
