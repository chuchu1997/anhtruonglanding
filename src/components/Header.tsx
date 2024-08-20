import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12  text-white bg-[#22222a]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] mix-blend-lighten relative">
            <Image src="/logo.png" priority quality={100} fill alt="logo" className="object-contain"></Image>
          </div>
        </Link>
        <Button className="hidden md:block">0325805893</Button>
      </div>
    </header>
  );
};

export default Header;
