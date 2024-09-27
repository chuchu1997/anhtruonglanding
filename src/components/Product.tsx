import React from "react";

// const SectionComponent = ({ children }: ReactNode) => {
//   return <section className="my-[40px] container mx-auto">{children}</section>;
// };
import Image from "next/image";
import PhoneCall from "./PhoneCall";
import Link from "next/link";

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
    <Link href={linkHref} className="overflow-hidden relative group p-2 border border-gray rounded-md  group w-full flex flex-col gap-4">
      <div className="bg-gradient-to-b from-blue-500 rounded-b-md  to-cyan-400   absolute top-0 right-[20px] z-50 overflow-hidden w-[65px] h-[30px] text-[12px] text-center">
        <div className="pt-[4px] text-white font-semibold">HS</div>
      </div>
      <div className="h-[250px]  relative ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
        />
      </div>
      NGUYEN CUONG
    </Link>
  );
};

export default ProductComponent;
