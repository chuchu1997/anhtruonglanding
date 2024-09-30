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
    // <div id={id} className="overflow-hidden relative group p-2 border border-gray rounded-md  group w-full flex flex-col gap-4 ">
    //   <div className="h-[260px]  relative ">
    //     {/* <Image
    //       src={item.imageSrc}
    //       alt={item.title}
    //       fill
    //       className="object-contain"
    //       quality={100}
    //       priority
    //       sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
    //     /> */}
    //   </div>

    //   {/* <PhoneCall /> */}
    // </div>
    <div className="relative group  border border-gray rounded-lg  group w-full flex flex-col gap-4 bg-white">
      {/* <div className="bg-gradient-to-b from-blue-500 rounded-b-md  to-cyan-400   absolute top-0 right-[20px] z-50 overflow-hidden w-[65px] h-[30px] text-[12px] text-center">
        <div className="pt-[4px] text-white font-semibold">HS</div>
      </div> */}
      <div className="w-full h-[50px] bg-[#2b95f3] z-20 relative "></div>
      <div className="product-content mb-[30px] relative bg-white top-[-40px] rounded-tr-[35px] rounded-tl-[35px] z-30">
        <div className="h-[250px]  relative mx-[15px] mt-[14px] ">
          <Image
            src={imageSrc}
            alt={title}
            className="object-cover rounded-lg "
            quality={100}
            priority
            fill
            sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
          />
        </div>
        <h4 className="text-[20px] mx-[15px] text-[#2b95f3] cursor-default pt-[4px] font-bold">{title}</h4>
        {/* <div className="mx-[15px] font-extrabold">$45</div> */}
      </div>
      <Link href="/" className=" absolute bottom-0 left-0 right-0 bg-[#2b95f3] py-[4px] text-[14px] text-center text-white font-bold rounded-lg   ">
        Xem Sản Phẩm
      </Link>
      {/* <div className="h-[50px] w-full bg-[#ddc01b] text-center flex justify-center items-center text-[14px] font-semibold">Xem sản phẩm</div> */}
    </div>
  );
};

export default ProductComponent;
