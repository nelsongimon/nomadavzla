"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import IconButton from "./ui/IconButton";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";

const slides = [
  {
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Sliders3.jpg",
    title: "70% de descuento en todos nuestros lentes",
    description: "Descubre lo mejor en lentes 5 en 1 para damas y cabellaros",
    label: "Comprar Ahora",
    action: "/productos",
    position: "right"
  },
  {
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Sliders2.jpg",
    title: "70% de descuento en todos nuestros lentes",
    description: "Descubre lo mejor en lentes 5 en 1 para damas y cabellaros",
    label: "Comprar Ahora",
    action: "/productos",
    position: "left"
  },
]

export default function Slides() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className="w-full h-[450px] mx-auto relative overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
          }}
          transition={{ duration: 1 }}
        >
          <div className={
            clsx("absolute w-full h-full flex items-center text-center z-10",
              slide.position === "left" && "justify-start",
              slide.position === "right" && "justify-end",
              slide.position === "center" && "justify-center",
            )}>
            <div className="flex flex-col gap-y-3 max-w-xl w-full mx-[150px]">
              <h2 className="font-bold text-primary-color text-4xl uppercase">
                {slide.title}
              </h2>
              <p className="font-normal text-primary-color text-xl">
                {slide.description}
              </p>
              <div className="w-full flex justify-center mt-5">
                <Button
                  size="large"
                  variant="default"
                  onClick={() => router.push(slide.action)}
                >
                  {slide.label}
                </Button>
              </div>
            </div>
          </div>
          <Image
            fill
            src={slide.image}
            alt="Image slider"
            className="object-cover object-center"
          />
        </motion.div>
      ))}
      {/* Left Arrow */}
      <div className="absolute left-8 top-[50%] translate-y-[-50%]">
        <IconButton
          icon={<ChevronLeft size={30} className="text-primary-color stroke-[1.5]" />}
          onClick={prevSlide}
        />
      </div>
      {/* Right Arrow */}
      <div className="absolute right-8 top-[50%] translate-y-[-50%]">
        <IconButton
          icon={<ChevronRight size={30} className="text-primary-color stroke-[1.5]" />}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
