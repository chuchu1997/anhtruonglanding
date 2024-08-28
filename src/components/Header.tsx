import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="py-2 xl:py-4 text-white border-b border-red bg-gradient-to-r from-black to-blue-500">
      <div className="container mx-auto flex justify-between items-center gap-10">
        <Link href="/" className="flex flex-col justify-center  gap-4 ">
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mix-blend-lighten relative">
            <Image
              src="/logotuikhi.png"
              priority
              quality={100}
              fill
              alt="logo"
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
            ></Image>
          </div>
        </Link>
        <div className="hidden lg:block text-white text-center  p-4 ">
          <h4 className="h3 mb-2 font-bold  lg:w-[400px] xl:w-[550px] leading-8">Đại Diện Phân Phối Độc Quyền Shandong Longao Rubber Tại Việt Nam</h4>
          {/* <p className="text-[12px] md:text-[14px]">Đại Diện Phân Phối Độc Quyền Shandong Longao Rubber Tại Việt Nam</p> */}
        </div>
        <Nav />
        {/* <Button className="hidden md:block">0325805893</Button> */}
      </div>
    </header>
  );
};

export default Header;
