import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="py-2 xl:py-4 text-white border-b border-red ">
      <div className="container mx-auto flex justify-between items-center">
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

          {/* <div className="w-[80px] h-[80px] md:w-[350px] md:h-[350px] mix-blend-lighten relative">
            <Image src="/header/4.jpg" priority quality={100} fill alt="logo" className="object-contain"></Image>
          </div> */}
          <h4 className="text-black max-w-[400px] hidden md:block">Đại Diện Phân Phối Độc Quyền Shandong Longgao Rubber Tại Việt Nam</h4>
        </Link>
        <Nav />
        {/* <Button className="hidden md:block">0325805893</Button> */}
      </div>
    </header>
  );
};

export default Header;
