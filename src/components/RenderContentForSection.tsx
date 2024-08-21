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
          <Link target="_blank" href={item.href ?? ""} key={index} className="p-2 border border-gray rounded-md  group w-full flex flex-col gap-4">
            <div className="h-[260px]  relative ">
              <Image
                src={item.imageSrc}
                alt=""
                fill
                className="object-cover"
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
              />
            </div>
            <div className="text-center min-h-[60px]"> {item.title}</div>
            {/* <div className="text-center"> {item.title}</div> */}
            <Button className="text-center justify-center ">Đọc tiếp</Button>
          </Link>
        );
      })}
    </div>
  );
};

export default RenderContentForSection;
