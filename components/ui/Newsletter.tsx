"use client"

import { Mail } from "lucide-react";
import Container from "./Container";
import { useState } from "react";
import toast from "react-hot-toast";
import { toastStyle } from "@/lib/utils";
import { api } from "@/lib/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!email) {
      return toast.error("El correo no puede estar vacío", toastStyle);
    }

    const rgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!rgx.test(email)) {
      return toast.error("Ingrese un correo válido", toastStyle);
    }
    setIsLoading(true);
    api.post("/newsletter/add", {
      email
    }).then((res) => {
      if (res.data.status === "success") {
        toast.success("Ahora estas suscrito a nuestra Newsletter", toastStyle);
        setEmail("");
      }
    }).catch((err) => {
      toast.error("Algo salió mal", toastStyle);
    }).finally(() => setIsLoading(false));
  }

  return (
    <div className="w-full bg-secondary-color py-12 lg:py-14">
      <Container>
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col items-center gap-y-3">
            <h2 className="text-center text-3xl lg:text-4xl lg:text-left text-white font-bold">
              Suscríbete a nuestra Newsletter
            </h2>
            <p className="text-lg font-light text-white text-center lg:text-left">
              Mantente al tanto de nuestros últimos modelos de lentes
            </p>
          </div>
          <div className="lg:max-w-2xl w-full mx-auto">
            <form>
              <div className="flex flex-col lg:flex-row gap-x-4 gap-y-5">
                <div className="relative w-full">
                  <span
                    className="absolute right-[7px] h-full flex items-center"
                  >
                    <Mail size={26} className="text-gray-400 stroke-[1.5]" />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    placeholder="Ingresa tu email"
                    className="
                    flex-1
                    px-4
                    py-2
                    rounded-md
                    ring-2
                    ring-white
                    focus:ring-gray-200
                    outline-none
                    focus:outline-none
                    duration-300
                    w-full
                    text-lg
                  "
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="
                  bg-primary-color
                  text-white
                  font-normal
                  px-4
                  py-2
                  rounded-md
                  outline-none
                  focus:outline-none
                  text-lg
                  duration-300
                  hover:bg-gray-900
                "
                >
                  {isLoading ? "Enviando..." : "Suscribirme"}
                </button>
              </div>

            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
