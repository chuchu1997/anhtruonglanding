// "use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import dynamic from "next/dynamic";
// import Autoplay from "embla-carousel-autoplay";
const DynamicProduct = dynamic(() => import("@/components/Product"));

interface propsInterface {
  listProduct: any[];
}

const CarouselProducts = (props: propsInterface) => {
  const { listProduct } = props;

  return (
    <Carousel className="mt-[14px] overflow-auto">
      <CarouselContent className="w-full">
        {listProduct.map((item, index) => {
          return (
            <CarouselItem className="" key={index}>
              <DynamicProduct key={index} title={item.title} imageSrc={item.imageSrc} linkHref={item.href}></DynamicProduct>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselProducts;
