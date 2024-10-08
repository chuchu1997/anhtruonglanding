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
    <Carousel
      className=""
      // plugins={[
      //   Autoplay({
      //     delay: 4000,
      //   }),
      // ]}
    >
      <CarouselContent className="h-[260px] md:h-[780px] ">
        {listImages.map((item, index) => {
          return (
            <CarouselItem className="relative" key={index}>
              <Image alt="bannerImage" src={item} fill className="object-contain" quality={50} priority></Image>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselBanner;
