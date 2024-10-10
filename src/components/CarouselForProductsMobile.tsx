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
    <Carousel className="mt-[14px] w-4/6 mx-auto shadow-md rounded-lg overflow-hidden">
      <CarouselContent className="">
        {products.map((product, index) => (
          <CarouselItem key={index} className=" relative ">
            <Link href={product.linkHref}>
              <div className="relative  h-[280px]  ">
                <Image
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={product.imageSrc}
                  fill
                  alt={product.title}
                  priority
                  quality={100}
                  className="object-cover object-center"
                ></Image>
              </div>
              <div className="relative left-0 bottom-[0] right-0  font-cuprum product-info bg-[#cccccc]/30 py-[6px]    ">
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
