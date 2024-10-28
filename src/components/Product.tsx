"use client";

import React from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };
import Image from "next/image";
import PhoneCall from "./PhoneCall";
import Link from "next/link";
import { Button } from "./ui/button";
import { ProductProps } from "@/interfaces";

const ProductComponent: React.FC<ProductProps> = ({ id, title, description, price, linkHref, imageSrc }) => {
  const onHandlerBuyNow = () => {};
  const onHandlerAddToCart = () => {};

  return (
    <div className="min-h-[300px]  overflow-hidden hover:scale-[1.05] relative border border-[#ededed] mb-[30px] group hover:shadow-xl shadow-none transition-all duration-300 ease-in-out rounded-md">
      <Link href="/">
        <div className="product-image relative h-[300px] md:h-[320px] w-full  ">
          <Image
            placeholder="blur"
            blurDataURL={"/image_placeholder/1.png"}
            src={imageSrc}
            fill
            alt="productimage"
            quality={100}
            className="object-cover "
          ></Image>
        </div>
      </Link>

      <div className=" font-cuprum   product-info bg-[#86be4c] text-center transform  p-4 group-hover:translate-y-[0px] transition-all duration-300 ease-in-out ">
        <h3 className="uppercase text-[16px] mb-[20px]  italic ">{title}</h3>
        <div className="flex gap-4 justify-between items-end text-[12px] ">
          <div
            className="
           hover:bg-[red] transition-all duration-200 ease-in-out
            capitalize px-2 py-1 rounded-lg border border-[white] text-white text-wrap w-1/2 mx-auto cursor-pointer"
            onClick={onHandlerAddToCart}
          >
            Thêm vào giỏ hàng
          </div>
          <div
            className="
              hover:bg-[red] transition-all duration-200 ease-in-out
            capitalize px-2 py-1 rounded-lg border border-[white] text-white text-wrap w-1/2 mx-auto cursor-pointer"
            onClick={onHandlerBuyNow}
          >
            Đặt hàng ngay
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
