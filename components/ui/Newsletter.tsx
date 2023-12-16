"use client"

import { Mail } from "lucide-react";
import Container from "./Container";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Newsletter() {
  const [input, setinput] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(input);
    setinput("");
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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col lg:flex-row gap-x-4 gap-y-5">
                <div className="relative w-full">
                  <span
                    className="absolute right-[7px] h-full flex items-center"
                  >
                    <Mail size={26} className="text-gray-400 stroke-[1.5]" />
                  </span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
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
                  Suscribirme
                </motion.button>
              </div>

            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
