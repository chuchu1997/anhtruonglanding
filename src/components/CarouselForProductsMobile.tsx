import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { ProductProps } from "@/interfaces";
// import Autoplay from "embla-carousel-autoplay";

// interface propsType {
// products:Product
// }
interface propsType {
  products: ProductProps[];
}
const CarouselForProductsMobile = (props: propsType) => {
  const { products } = props;

  return (
    <Carousel className="mt-[14px]">
      <CarouselContent className=" mx-auto w-full ">
        {products.map((product, index) => (
          <CarouselItem key={index} className="border border-[#cccccc] rounded-lg ">
            <Link href={product.linkHref}>
              <div className="relative mr-4 h-[300px] ">
                <Image alt={product.title} src={product.imageSrc} fill className="contain " quality={100} priority></Image>
              </div>
              <div className="absolute left-0 bottom-[0] right-0  font-cuprum product-info bg-[#cccccc]/30    ">
                <h3 className="uppercase  text-center">{product.title}</h3>
              </div>
            </Link>
          </CarouselItem>
        ))}
        {/* {images.map((image, index) => (
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
        ))} */}
      </CarouselContent>
      <CarouselPrevious className="left-[10px]" />
      <CarouselNext className="right-[10px]" />
    </Carousel>
  );
};

export default CarouselForProductsMobile;
