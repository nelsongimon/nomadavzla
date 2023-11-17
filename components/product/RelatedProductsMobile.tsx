"use client";

import { Product } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import ProductCard from "../ui/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Autoplay } from "swiper/modules";

interface RelatedProductsMobileProps {
  products: Product[];
}

export default function RelatedProductsMobile({
  products
}: RelatedProductsMobileProps) {
  return (
    <div className="relative">
      <div className="mb-5 lg:mb-10">
        <h3 className="text-2xl text-primary-color font-semibold text-center">
          Productos Relacionados
        </h3>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          reverseDirection: false,

        }}
        grabCursor={true}
        navigation={{
          enabled: true,
          nextEl: '.next',
          prevEl: '.prev',
        }}
        modules={[Navigation, Autoplay]}
        className="h-[400px]"

      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>

        ))}
      </Swiper>
      <div className="absolute flex gap-x-3 z-10 left-[35%] bottom-0 translate-y-[-120%]">
        <span className="  
            prev      
            rounded-full
            flex
            items-center
            justify-center
            bg-primary-color
            p-2
            hover:scale-110
            transition
            cursor-pointer
          ">
          <ChevronLeft size={30} className="text-white stroke-[1.5]" />
        </span>
      </div>
      <div className="absolute flex gap-x-3 z-10 right-[35%] bottom-0 translate-y-[-120%]">
        <span className=" 
            next       
            rounded-full
            flex
            items-center
            justify-center
            bg-primary-color
            p-2
            hover:scale-110
            transition
            cursor-pointer
          ">
          <ChevronRight size={30} className=" text-white stroke-[1.5]" />
        </span>
      </div>
    </div>
  );
}
