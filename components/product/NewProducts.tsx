"use client";

import { Product } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import ProductCard from "../ui/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation } from "swiper/modules";

interface NewProductsProps {
  products: Product[];
}

export default function NewProducts({
  products
}: NewProductsProps) {
  return (
    <div className="relative px-3">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          reverseDirection: false,

        }}
        navigation={{
          enabled: true,
          nextEl: '.next',
          prevEl: '.prev',
        }}
        modules={[Navigation]}
        className="h-[400px]"

      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>

        ))}
      </Swiper>
      <div className="absolute flex gap-x-3 z-10 left-0 translate-x-[-100%] top-[50%] translate-y-[-200%]">
        <span className="  
            prev      
            rounded-full
            flex
            items-center
            justify-center
            bg-primary-color
            p-[6px]
            hover:scale-110
            transition
            cursor-pointer
          ">
          <ChevronLeft size={27} className="text-white stroke-[1.5]" />
        </span>
      </div>
      <div className="absolute flex gap-x-3 z-10 right-0 top-[50%] translate-x-[100%] translate-y-[-200%]">
        <span className=" 
            next       
            rounded-full
            flex
            items-center
            justify-center
            bg-primary-color
            p-[6px]
            hover:scale-110
            transition
            cursor-pointer
          ">
          <ChevronRight size={27} className=" text-white stroke-[1.5]" />
        </span>
      </div>
    </div>
  );
}
