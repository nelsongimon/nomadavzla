"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

import IconButton from "./ui/IconButton";
// import { slides } from "@/data";
import { Slide } from "@/types";
import { addAbsolutePathImage } from "@/lib/utils";

interface SlidesProps {
  slides: Slide[];
}

export default function Slides({
  slides
}: SlidesProps) {
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
                <motion.button
                  onClick={() => router.push(slide.action)}
                  className={clsx(`
                    rounded-md
                    py-2 px-7 
                    text-lg 
                    font-light 
                    bg-primary-color 
                    hover:bg-primary-color/80
                    duration-300
                    text-white`,
                  )}
                  whileHover={{ scale: [null, 1.5, 1.1] }}
                  transition={{ duration: 0.3 }}
                // whileTap={{ scale: 0.95 }}
                >
                  {slide.label}
                </motion.button>
              </div>
            </div>
          </div>
          <Image
            fill
            src={addAbsolutePathImage(slide.desktopImage)}
            alt={slide.title}
            className="object-cover object-center"
          />

        </motion.div>
      ))}
      {/* Left Arrow */}
      <div className="absolute z-10 left-8 top-[50%] translate-y-[-50%]">
        <IconButton
          icon={<ChevronLeft size={30} className="text-primary-color stroke-[1.5]" />}
          onClick={prevSlide}
        />
      </div>
      {/* Right Arrow */}
      <div className="absolute z-10 right-8 top-[50%] translate-y-[-50%]">
        <IconButton
          icon={<ChevronRight size={30} className="text-primary-color stroke-[1.5]" />}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
