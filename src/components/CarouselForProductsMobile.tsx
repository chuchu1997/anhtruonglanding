"use client";
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
      <CarouselContent className=" mx-auto w-full">
        {products.map((product, index) => (
          <CarouselItem key={index} className="rounded-lg ">
            <div className="min-h-[300px]  overflow-hidden  relative border border-[#ededed] mb-[30px] group hover:shadow-xl shadow-none transition-all duration-300 ease-in-out rounded-md">
              <Link href="/">
                <div className="product-image relative h-[300px] md:h-[320px] w-full  ">
                  <Image
                    placeholder="blur"
                    blurDataURL={"/image_placeholder/1.png"}
                    src={product.imageSrc}
                    fill
                    alt="productimage"
                    quality={100}
                    className="object-cover hover:scale-105 transition-transform duration 200 ease-in-out"
                  ></Image>
                </div>
              </Link>

              <div className=" font-cuprum   product-info bg-[#86be4c] text-center transform  p-4 group-hover:translate-y-[0px] transition-all duration-300 ease-in-out ">
                <h3 className="uppercase text-[16px] mb-[20px]  italic ">{product.title}</h3>
                <div className="flex gap-4 justify-between items-end text-[12px] ">
                  <div
                    className="
           hover:bg-[red] transition-all duration-200 ease-in-out
            capitalize px-2 py-1 rounded-lg border border-[white] text-white text-wrap w-1/2 mx-auto cursor-pointer"
                    // onClick={}
                  >
                    Thêm vào giỏ hàng
                  </div>
                  <div
                    className="
              hover:bg-[red] transition-all duration-200 ease-in-out
            capitalize px-2 py-1 rounded-lg border border-[white] text-white text-wrap w-1/2 mx-auto cursor-pointer"
                    // onClick={}
                  >
                    Đặt hàng ngay
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-[24px]" />
      <CarouselNext className="right-[10px]" />
    </Carousel>
  );
};

export default CarouselForProductsMobile;
