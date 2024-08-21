import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Nav from "./Nav";
const Header = () => {
  return (
    <header className="py-2 xl:py-4 text-white border-b border-red">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] mix-blend-lighten relative">
            <Image src="./logotuikhi.png" priority quality={100} fill alt="logo" className="object-contain"></Image>
          </div>
        </Link>
        <Nav />
        {/* <Button className="hidden md:block">0325805893</Button> */}
      </div>
    </header>
  );
};

export default Header;
