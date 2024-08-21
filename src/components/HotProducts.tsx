"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const items = [{ src: "./banner1.jpg" }, { src: "./banner2.jpg" }, { src: "./banner3.png" }, { src: "./banner4.png" }, { src: "/banner5.jpg" }];
const HotProducts = () => {
  return (
    <Carousel
      className="pt-10"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent className="h-[200px] xl:h-[450px] ">
        {items.map((item, index) => {
          return (
            <CarouselItem className="relative" key={index}>
              <Image alt="s" src={item.src} fill className="object-cover" quality={100} priority></Image>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default HotProducts;
