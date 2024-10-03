import React from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };
import Image from "next/image";
import PhoneCall from "./PhoneCall";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  id?: string;
  title: string;
  description?: string;
  price?: string;
  linkHref: string;
  imageSrc: string;
};
const ProductComponent: React.FC<Props> = ({ id, title, description, price, linkHref, imageSrc }) => {
  return (
    // <div className="scale-100 transition-scale duration-200 ease-in-out  hover:scale-[1.05] transform-gpu  mt-[5px] relative  border border-gray rounded-lg  group w-full flex flex-col gap-4 bg-white w-[290px] mx-auto md:w-full min-h-[450px]">
    //   <div className="w-full h-[50px] bg-[#2b95f3] z-20 relative "></div>
    //   <div className="product-content mb-[30px] relative bg-white top-[-40px] rounded-tr-[35px] rounded-tl-[35px] z-30">
    //     <div className="h-[250px]  relative mx-[15px] mt-[14px]  ">
    //       <Image
    //         src={imageSrc}
    //         alt={title}
    //         className="object-cover rounded-lg "
    //         quality={100}
    //         priority
    //         fill
    //         sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
    //       />
    //     </div>
    //     <h4 className="text-[20px] mx-[15px] text-[#2b95f3] cursor-default pt-[4px] font-bold">{title}</h4>
    //     {/* <div className="mx-[15px] font-extrabold">$45</div> */}
    //   </div>
    //   <Link
    //     target="_blank"
    //     href={linkHref}
    //     className=" absolute bottom-0 left-0 right-0 bg-[#2b95f3] py-[4px] text-[14px] text-center text-white font-bold rounded-lg   "
    //   >
    //     Xem Sản Phẩm
    //   </Link>
    // </div>
    <Link
      href="/"
      className="overflow-hidden hover:scale-[1.05] relative border border-[#ededed] mb-[30px] group hover:shadow-xl shadow-none transition-all duration-300 ease-in-out rounded-md "
    >
      <div className="product-image relative h-[240px] md:h-[280px]   w-full">
        <Image
          placeholder="blur"
          blurDataURL={"/image_placeholder/1.png"}
          src={imageSrc}
          fill
          alt="productimage"
          quality={100}
          className="object-contain "
        ></Image>
      </div>

      <div className=" font-cuprum product-info bg-[#cccccc]/30 group-hover:bg-[#86be4c] text-center transform translate-y-[60px] p-4 group-hover:translate-y-[0px] transition-all duration-300 ease-in-out ">
        <h3 className="uppercase text-[16px] mb-[20px] hover:text-white transition-color duration-200 ease-in-out">
          Bút cắt gạch ryobi pro dùng cho bàn cắt gạch
        </h3>

        <div className="capitalize px-2 py-1 rounded-lg border border-[white] text-white text-wrap w-1/2 mx-auto">Xem chi tiết</div>
      </div>
    </Link>
  );
};

export default ProductComponent;
