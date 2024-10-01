"use client";
import React, { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";
// import Autoplay from "embla-carousel-autoplay";

interface propsType {
  listImages: string[];
}
const ImageWithPreview = (props: propsType) => {
  const { listImages } = props;

  const onHandleChangeImageDisplay = (imageChangeSRC: string) => {
    setImageSelect(imageChangeSRC);
  };
  const [imageSelect, setImageSelect] = useState(listImages[0]);

  return (
    <div>
      <div className="relative h-[300px] md:h-[500px] rounded-lg">
        <Image
          alt="bàn cắt gạch"
          src={imageSelect}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
          quality={90}
          priority
        ></Image>
      </div>

      <Carousel className="mt-[14px] ">
        <CarouselContent className="h-[100px] ">
          {listImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="relative mx-2 basis-1/2 lg:basis-1/3 cursor-pointer"
              onClick={() => {
                onHandleChangeImageDisplay(image);
              }}
            >
              <Image
                alt="bàn cắt gạch"
                src={image}
                fill
                className="object-cover rounded-lg"
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
              ></Image>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-[10px]" />
        <CarouselNext className="right-[10px]" />
      </Carousel>
    </div>
  );
};

export default ImageWithPreview;
