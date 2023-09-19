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
    <div className="w-full bg-secondary-color py-14">
      <Container>
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col items-center gap-y-3">
            <h2 className="text-4xl text-white font-bold">
              Join The Exclusive Club
            </h2>
            <p className="text-lg font-light text-white">
              See our latest collections & exclusive offers before the crowd!
            </p>
          </div>
          <div className="max-w-xl w-full mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-x-4">
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
                  type="submit"
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
