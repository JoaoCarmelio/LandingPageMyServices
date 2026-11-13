"use client";

import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
    {src: "/images/img1.jpg", alt: "imagem que ilustra Montagem e Manutenção de computadores"},
    {src: "/images/img2.jpg", alt: "imagem que ilustra Otimizacao de computadores"},
    {src: "/images/img3.jpg", alt: "imagem que ilustra Formatacao e instalacao computadores"}
];

export default function HeroCarrossel() {

    return (

        <section>
    <Swiper
    className="[--swiper-navigation-size:24px]"
    modules={[Autoplay, Navigation, Pagination]}
    autoplay={{delay:4000, disableOnInteraction: false}}
    navigation
    pagination={{clickable: true}}
    loop
    >
    {slides.map((slide) => (
        <SwiperSlide key={slide.src}>
            <div className="relative h-76 w-ful">
                <Image  src={slide.src} alt={slide.alt} fill className="object-cover"/>
            </div>
            
              
         </SwiperSlide>

        ))}

    </Swiper>
        </section>
  
    )
 
}
