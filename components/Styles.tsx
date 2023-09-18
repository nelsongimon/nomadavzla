"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { styles } from "@/data";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

export default function Styles() {
  return (
    <div className="mt-5">
      <div className="mb-8">
        <h3 className="text-strong-color font-bold text-4xl text-center">
          Pick a style, any style
        </h3>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 1.7,
          slideShadows: false,

        }}
        navigation={{
          enabled: true,
          nextEl: '.next',
          prevEl: '.prev',

        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative max-w-4xl h-[400px]"
      >
        {styles.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[300px]">
              <Image
                fill
                src={item.image}
                alt="styles"
                className="
                  object-contain
                  rounded-2xl
                "
              />
              <div className="absolute w-full h-full flex flex-col items-center justify-end gap-y-2 mt-5">
                <h3 className="text-xl font-bold uppercase text-primary-color">
                  {item.title}
                </h3>
                <Button
                  onClick={() => { }}
                  variant="ghost"
                  size="default"
                >
                  Ver Modelos
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute flex gap-x-3 z-10 left-[50%] translate-x-[-50%] top-[85%]">
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
      </Swiper>
    </div>
  );


  // return (
  //   <div className="mt-5">
  //     <div className="mb-8">
  //       <h3 className="text-strong-color font-bold text-4xl text-center">
  //         Pick a style, any style
  //       </h3>
  //     </div>
  //     <Swiper
  //       effect={"coverflow"}
  //       grabCursor={true}
  //       centeredSlides={true}
  //       loop={true}
  //       slidesPerView={3}
  //       coverflowEffect={{
  //         rotate: 0,
  //         stretch: 0,
  //         depth: 100,
  //         modifier: 2.5,
  //         slideShadows: false
  //       }}
  //       navigation={{
  //         enabled: true,
  //         nextEl: '.next',
  //         prevEl: '.prev',

  //       }}
  //       modules={[EffectCoverflow, Pagination, Navigation]}
  //       className="relative max-w-4xl"
  //     >
  //       {styles.map((item, index) => (
  //         <SwiperSlide key={index}>
  //           <div className="relative h-[400px] w-[300]">
  //             <Image
  //               fill
  //               src={item.image}
  //               alt="styles"
  //               className="
  //                 object-cover
  //                 rounded-2xl
  //               "
  //             />
  //             <div className="absolute w-full h-full flex flex-col items-center justify-center gap-y-9">
  //               <h3 className="text-2xl font-bold uppercase text-white text-shadow">
  //                 {item.title}
  //               </h3>
  //               <Button
  //                 onClick={() => { }}
  //                 variant="white"
  //                 size="default"
  //               >
  //                 Ver Modelos
  //               </Button>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //       <div className="absolute z-10 left-8 top-[50%] translate-y-[-50%]">
  //         <span className="  
  //           prev      
  //           rounded-full
  //           flex
  //           items-center
  //           justify-center
  //           bg-white
  //           shadow-md
  //           p-2
  //           hover:scale-110
  //           transition
  //           cursor-pointer
  //         ">
  //           <ChevronLeft size={30} className="text-primary-color stroke-[1.5]" />
  //         </span>
  //       </div>
  //       <div className="absolute z-10 right-8 top-[50%] translate-y-[-50%]">
  //         <span className=" 
  //           next       
  //           rounded-full
  //           flex
  //           items-center
  //           justify-center
  //           bg-white
  //           shadow-md
  //           p-2
  //           hover:scale-110
  //           transition
  //           cursor-pointer
  //         ">
  //           <ChevronRight size={30} className=" text-primary-color stroke-[1.5]" />
  //         </span>
  //       </div>
  //     </Swiper>
  //   </div>
  // );
}
