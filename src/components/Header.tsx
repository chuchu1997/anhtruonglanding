"use client";
import { useEffect, useState } from "react";
import React from "react";

import Image from "next/image";
import { Menu, X, Phone, Mail, Clock, Icon, ShoppingCart } from "react-feather";
import Link from "next/link";
import LinkComponentCustom from "./LinkCustom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import SearchComponent from "./SearchComponent";

const dataMenus = [
  {
    title: "Gio hang",
    href: "/",
  },
];
const Header = () => {
  const [showNavbarOnScroll, setShowNavbarOnScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const handleScroll = () => {
  //   if (typeof window !== "undefined") {
  //     const scrollY = window.scrollY;
  //     // setShowNavbarOnScroll(scrollY < lastScrollY || scrollY < 50);
  //     // setLastScrollY(scrollY);

  //     if (scrollY > 120) {
  //       setShowNavbarOnScroll(true);
  //       setLastScrollY(scrollY);
  //     } else {
  //       setShowNavbarOnScroll(false);
  //       setLastScrollY(scrollY);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);
  return (
    <header>
      <div className="py-2 fixed header-top-absolute left-0 top-0 right-0 z-30  text-white text-[12px] bg-[#405D72] ">
        <div className="container mx-auto py-2 hidden md:flex justify-between items-center text-[#e3e3e3]">
          <div className="header-top-left flex items-center gap-4">
            <LinkComponentCustom icon={Phone} href="#" title="0325.805.893" />
            <LinkComponentCustom icon={Mail} href="#" title="giadunghiendai1997@gmail.com" />
            <LinkComponentCustom icon={Clock} href="#" title="7h-23h" />
          </div>
          <div className="header-top-right text-[#e3e3e3]">
            <LinkComponentCustom icon={Clock} href="#" title="Nhận tư vấn" />
          </div>
        </div>
        <div className="hidden md:block border-b border-[grey]/60"></div>

        {/* HEADER BOTTOM */}
        <div className="container  mt-[20px] flex justify-between items-center">
          <Link href="/">
            <div className="flex flex-col items-center gap-2 text-white">
              <Image src="/logo.png" width={40} height={40} quality={100} alt="logo"></Image>
              <h3 className="italic text-[12px]">Gia dụng hiện đại</h3>
            </div>
          </Link>
          <SearchComponent />

          <div className="flex relative items-end gap-2 border border-white p-1 rounded-lg cursor-pointer hover:bg-[#758694] transition-color duration-200 ease-in-out">
            <ShoppingCart />
            <span className="hidden md:block">Giỏ hàng</span>
            <div className="absolute h-6 w-6 rounded-full bg-[red] top-[-15px] right-[-14px] text-center">H</div>
          </div>
          {/* <Sheet>
            <SheetTrigger asChild>
              <Menu className="block md:hidden cursor-pointer"></Menu>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-[14px]">
                {dataMenus.map((menuItem, index) => (
                  <LinkComponentCustom
                    key={index}
                    title={menuItem.title}
                    href={menuItem.href}
                    className="text-[14px] font-semibold uppercase my-2"
                  ></LinkComponentCustom>
                ))}
              </div>
            </SheetContent>
          </Sheet> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
