"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

import { addAbsolutePathImage } from "@/lib/utils";
import IconButton from "./ui/IconButton";
import { Slide } from "@/types";

interface SlidesMobileProps {
  slides: Slide[];
}
export default function SlidesMobile({
  slides
}: SlidesMobileProps) {
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
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (slides.length === 0) {
    return null;
  }
  return (
    <div className="w-full h-[500px] mx-auto relative overflow-hidden">
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
          <div className="absolute top-14 w-full px-5 flex text-center z-10 justify-center">
            {/* Content */}
            <div className="flex flex-col gap-y-2 w-full">
              <motion.h2 className={clsx(`
              font-bold text-xl uppercase`,
                slide.color === "black" && "text-primary-color",
                slide.color === "white" && "text-white",
                slide.color === "light" && "text-secondary-color"
              )}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  y: index === currentIndex ? 0 : 50
                }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {slide.title}
              </motion.h2>
              <motion.p className={clsx(`
                font-normal text-base`,
                slide.color === "black" && "text-primary-color",
                slide.color === "white" && "text-white",
                slide.color === "light" && "text-secondary-color"
              )}
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  y: index === currentIndex ? 0 : 50
                }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                {slide.description}
              </motion.p>
              <motion.div className="w-full flex justify-center mt-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  y: index === currentIndex ? 0 : 50
                }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <button
                  onClick={() => router.push(slide.action)}
                  className={clsx(`
                    rounded-md
                    py-2 px-5
                    text-base
                    font-light 
                    duration-300`,
                    slide.color === "black" && "bg-primary-color hover:bg-primary-color/80 text-white",
                    slide.color === "white" && "bg-white hover:bg-white/80 text-primary-color",
                    slide.color === "light" && "bg-light-color hover:bg-light-color/80 text-secondary-color",
                  )}
                >
                  {slide.label}
                </button>
              </motion.div>
            </div>
          </div>
          <Image
            fill
            src={addAbsolutePathImage(slide.mobileImage)}
            alt={slide.title}
            className="object-cover object-center"
          />

        </motion.div>
      ))}
      {/* Left Arrow */}
      <div className="absolute z-10 left-3 top-[50%] translate-y-[-100%]">
        <IconButton
          icon={<ChevronLeft size={30} className="text-primary-color stroke-[1.5]" />}
          onClick={prevSlide}
        />
      </div>
      {/* Right Arrow */}
      <div className="absolute z-10 right-3 top-[50%] translate-y-[-100%]">
        <IconButton
          icon={<ChevronRight size={30} className="text-primary-color stroke-[1.5]" />}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
