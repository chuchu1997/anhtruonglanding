import React from "react";
import Image from "next/image";

import { Button } from "./ui/button";
import Link from "next/link";
interface itemInterface {
  imageSrc: string;
  title: string;
  href?: string;
}

interface propsInterface {
  listItems: itemInterface[];
}
const RenderContentForSection = (props: propsInterface) => {
  const { listItems } = props;

  return (
    // <div>
    //   {listItems.map((item, index) => {
    //     return <div key={index}>{item.title}</div>;
    //   })}
    // </div>

    <div className="grid grd-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 mt-10 px-10 xl:px-0">
      {listItems.map((item, index) => {
        return (
          <div  key={index} className="overflow-hidden relative group p-2 border border-gray rounded-md  group w-full flex flex-col gap-4 ">
            <div className="h-[260px]  relative ">
              <Image
                src={item.imageSrc}
                alt=""
                fill
                className="object-contain"
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
              />
            </div>
       
            <Link href = "tel:0869229639" className = "absolute top-[320px] transition-all duration-500 group-hover:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Button  className="text-center justify-center  ">
              <span className = "mr-2">Nhận tư vấn </span>
              <Image src={"/phonecall.png"} alt="icon" width={20} height={20} className="group-hover:scale-125 scale-100 transition-all duration-400" />
              </Button>
            </Link>
         
          </div>
        );
      })}
    </div>
  );
};

export default RenderContentForSection;
