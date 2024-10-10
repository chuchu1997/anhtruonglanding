import React from "react";

import Image from "next/image";
import Link from "next/link";

import { ProductProps } from "@/interfaces";

const ProductComponent: React.FC<ProductProps> = ({ id, title, description, price, linkHref, imageSrc }) => {
  return (
    <Link
      target="_blank"
      href={linkHref}
      className="overflow-hidden hover:scale-[1.05] relative border border-[#ededed] mb-[30px] group hover:shadow-xl shadow-none transition-all duration-300 ease-in-out rounded-md "
    >
      <div className="product-image relative md:h-[320px] w-full">
        <Image
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={imageSrc}
          fill
          alt={title}
          priority
          quality={100}
          className="object-cover object-center"
        ></Image>
      </div>
      <div className="font-cuprum product-info text-center mt-[20px] bg-[#cecece]/40 p-4 overflow-hidden h-[95px] group-hover:bg-[#86be4c] transition-all duration-300 ease-in-out">
        <h3 className="uppercase text-[16px]  ">{title}</h3>
      </div>
      {/* <div className="absolute bottom-0 font-cuprum product-info bg-[#cccccc]/30 group-hover:bg-[#86be4c] text-center  p-4 transition-all duration-300 ease-in-out ">
        <h3 className="uppercase text-[16px] mb-[20px] hover:text-white transition-color duration-200 ease-in-out">{title}</h3>
      </div> */}
      {/* <div className="relative bottom-[0] left-0 right-0 font-cuprum product-info bg-[#cccccc]/30 group-hover:bg-[#86be4c] text-center   transition-all duration-300 ease-in-out ">
        <h3 className="uppercase text-[16px] mb-[20px] hover:text-white transition-color duration-200 ease-in-out">{title}</h3>
      </div> */}
    </Link>
  );
};

export default ProductComponent;
