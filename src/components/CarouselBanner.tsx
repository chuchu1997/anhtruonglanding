// "use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";

interface propsInterface {
  listImages: string[];
}

const CarouselBanner = (props: propsInterface) => {
  const { listImages } = props;

  return (
    <Carousel className="mx-2">
      <CarouselContent className="h-[220px] md:h-[350px] lg:h-[500px] xl:h-[650px]  w-screen  ">
        {listImages.map((item, index) => {
          return (
            <CarouselItem className="relative" key={index}>
              <Image alt="bannerImage" src={item} fill className="lg:object-fill md:object-contain object-cover" quality={100} priority></Image>
            </CarouselItem>
          );
        })}
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </CarouselContent>

      <CarouselPrevious className="left-[10px]" />
      <CarouselNext className="right-[10px]" />
    </Carousel>
  );
};

export default CarouselBanner;
