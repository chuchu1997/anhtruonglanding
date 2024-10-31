import React from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };
import Image from "next/image";

import { ProductProps } from "@/interfaces";
const ProductComponent: React.FC<ProductProps> = ({ _id, id, title, description, price, imagesObject, dropshipFrom }) => {
  return (
    <div className="min-h-[200px]  overflow-hidden hover:scale-[1.05] relative border-2 border-[#ededed] mb-[30px] group hover:shadow-xl shadow-none transition-all duration-300 ease-in-out rounded-md">
      <div className="product-image relative h-[200px] md:h-[250px] w-full  ">
        <Image
          placeholder="blur"
          blurDataURL={"/image_placeholder/1.png"}
          src={"/mayphunxitapluccao.png"}
          fill
          alt="productimage"
          quality={100}
          className="object-cover "
        ></Image>
      </div>

      <div className=" font-cuprum   text-center transform  p-4 group-hover:translate-y-[0px] transition-all duration-300 ease-in-out ">
        <h3 className="uppercase text-[16px] mb-[20px]  italic ">{title}</h3>
        <h2 className="uppercase text-[16px] mb-[20px]  italic font-bold ">Giá: {price}</h2>
        {/* <div className="flex gap-4 justify-between items-end text-[12px] ">
          <div
            className="
           hover:bg-[red] transition-all duration-200 ease-in-out
            capitalize px-2 py-1 rounded-lg border border-[white] text-white text-wrap w-1/2 mx-auto cursor-pointer"
            onClick={onHandlerAddToCart}
          >
            Chỉnh Sửa
          </div>
          <div
            className="
              hover:bg-[red] transition-all duration-200 ease-in-out
            capitalize px-2 py-1 rounded-lg border border-[white] text-white text-wrap w-1/2 mx-auto cursor-pointer"
            onClick={onHandlerBuyNow}
          >
            Xóa Sản Phẩm
          </div> */}
        {/* </div> */}
        <h3 className="uppercase text-[14px] mb-[20px] font-bold italic ">Dropship From :{dropshipFrom}</h3>
      </div>
    </div>
  );
};

export default ProductComponent;
