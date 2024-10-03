// "use client";

import React from "react";
import { Carousel, CarouselContent, CarouselDots, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";

interface propsInterface {
  listImages: string[];
  className?: string;
}

const CarouselBanner = ({ listImages, className }: propsInterface) => {
  const items = [
    { image: "https://via.placeholder.com/600x300?text=Slide+1", alt: "Slide 1" },
    { image: "https://via.placeholder.com/600x300?text=Slide+2", alt: "Slide 2" },
    { image: "https://via.placeholder.com/600x300?text=Slide+3", alt: "Slide 3" },
  ];
  return (
    <Carousel className="relative">
      <CarouselContent className={`${className}`}>
        {listImages.map((item, index) => {
          return (
            <CarouselItem className="relative" key={index}>
              <div className="hidden md:block  text-banner absolute text-center text-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="main-title mb-[15px] font-accent h2 text-[60px] tracking-wide">Thực phẩm hữu cơ {index + 1}</div>
                <div className="sub-title text-[22px] uppercase tracking-wide ">tốt cho sức khỏe , tốt cho cuộc sống</div>
              </div>
              <Image alt="bannerImage" src={item} fill className="object-cover object-bottom " quality={100} priority></Image>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselDots />

      {/* <CarouselPrevious className="left-[10px]" />
      <CarouselNext className="right-[10px]" /> */}
    </Carousel>
  );
};

export default CarouselBanner;
