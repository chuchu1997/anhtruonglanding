import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";
// import Autoplay from "embla-carousel-autoplay";

interface propsType {
  images: string[];
}
const CarouselDisplay2Items = (props: propsType) => {
  const { images } = props;

  return (
    <Carousel className="mt-[14px]">
      <CarouselContent className="h-[100px] xl:h-[150px] w-full  ">
        {images.map((image, index) => (
          <CarouselItem className="relative basis-1/2 lg:basis-1/3 mr-4" key={index}>
            <Image
              alt="sub_banner"
              src={image}
              fill
              className="contain"
              quality={100}
              priority
              // sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
            ></Image>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[10px]" />
      <CarouselNext className="right-[10px]" />
    </Carousel>
  );
};

export default CarouselDisplay2Items;
