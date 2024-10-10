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
      <div className="product-image relative h-[240px] md:h-[280px]   w-full">
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

      <div className=" font-cuprum product-info bg-[#cccccc]/30 group-hover:bg-[#86be4c] text-center transform translate-y-[60px] p-4 group-hover:translate-y-[0px] transition-all duration-300 ease-in-out ">
        <h3 className="uppercase text-[16px] mb-[20px] hover:text-white transition-color duration-200 ease-in-out">{title}</h3>
        <div className="capitalize px-2 py-1 rounded-lg border border-[white] text-white text-wrap w-1/2 mx-auto">Xem chi tiết</div>
      </div>
    </Link>
  );
};

export default ProductComponent;
