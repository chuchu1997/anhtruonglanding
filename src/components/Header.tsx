"use client";
import { useEffect, useState } from "react";
import React from "react";

import Image from "next/image";
import { Menu, X, Phone, Mail, Clock, Icon } from "react-feather";
import Link from "next/link";
import LinkComponentCustom from "./LinkCustom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const dataMenus = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "giới thiệu",
    href: "/",
  },
  {
    title: "sản phẩm",
    href: "/",
  },
  {
    title: "liên hệ",
    href: "/",
  },
  {
    title: "hướng dẫn",
    href: "/",
  },
];
const Header = () => {
  const [showNavbarOnScroll, setShowNavbarOnScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      // setShowNavbarOnScroll(scrollY < lastScrollY || scrollY < 50);
      // setLastScrollY(scrollY);
      console.log("SCROLL Y ", scrollY);
      if (scrollY > 120) {
        setShowNavbarOnScroll(true);
        setLastScrollY(scrollY);
      } else {
        setShowNavbarOnScroll(false);
        setLastScrollY(scrollY);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    // <header>
    //   <div className="header-top-absolute absolute left-0 top-0 right-0 z-30  text-white text-[12px]">
    //     <div className="container mx-auto py-2 hidden md:flex justify-between items-center text-[#e3e3e3]">
    //       <div className="header-top-left flex items-center gap-4">
    //         <LinkComponentCustom icon={Phone} href="#" title="0123.456.789" />
    //         <LinkComponentCustom icon={Mail} href="#" title="0123.456.789" />
    //         <LinkComponentCustom icon={Clock} href="#" title="0123.456.789" />
    //       </div>
    //       <div className="header-top-right text-[#e3e3e3]">
    //         <LinkComponentCustom icon={Clock} href="#" title="Nhận tư vấn" />
    //       </div>
    //     </div>
    //     <div className="hidden md:block border-b border-[grey]/60"></div>

    //     {/* HEADER BOTTOM */}
    //     <div className="container  mt-[20px] flex justify-between items-center">
    //       <Link href="/">
    //         <Image src="/landingpage1source/logo/logo.png" width={120} height={120} quality={100} alt="logo"></Image>
    //       </Link>
    //       <div className="gap-4 hidden md:flex">
    //         {dataMenus.map((menuItem, index) => (
    //           <LinkComponentCustom
    //             key={index}
    //             title={menuItem.title}
    //             href={menuItem.href}
    //             className="text-[14px] font-semibold uppercase"
    //           ></LinkComponentCustom>
    //         ))}
    //       </div>
    //       <Sheet>
    //         <SheetTrigger asChild>
    //           <Menu className="block md:hidden cursor-pointer"></Menu>
    //         </SheetTrigger>
    //         <SheetContent>
    //           <div className="mt-[14px]">
    //             {dataMenus.map((menuItem, index) => (
    //               <LinkComponentCustom
    //                 key={index}
    //                 title={menuItem.title}
    //                 href={menuItem.href}
    //                 className="text-[14px] font-semibold uppercase my-2"
    //               ></LinkComponentCustom>
    //             ))}
    //           </div>
    //         </SheetContent>
    //       </Sheet>
    //     </div>
    //   </div>
    //   {/* THIS IS NAVBAR ONSCROLLL  */}
    //   {/* THIS IS NAVBAR ONSCROLLL  */}
    //   <div
    //     className={`fixed z-50 top-0 left-0 w-full bg-[#333333] shadow-md transition-transform duration-300 ${
    //       showNavbarOnScroll ? "translate-y-0" : "-translate-y-full"
    //     }`}
    //   >
    //     <div className="container mx-auto p-2 flex justify-between items-center">
    //       <Link href="/">
    //         <Image src="/landingpage1source/logo/logo.png" width={120} height={120} quality={100} alt="logo"></Image>
    //       </Link>
    //       <div className="gap-4 hidden md:flex">
    //         {dataMenus.map((menuItem, index) => (
    //           <LinkComponentCustom
    //             key={index}
    //             title={menuItem.title}
    //             href={menuItem.href}
    //             className="text-[14px] font-semibold uppercase text-white"
    //           ></LinkComponentCustom>
    //         ))}
    //       </div>
    //       <Sheet>
    //         <SheetTrigger asChild>
    //           <Menu className="block md:hidden cursor-pointer text-white"></Menu>
    //         </SheetTrigger>
    //         <SheetContent>
    //           <div className="mt-[14px]">
    //             {dataMenus.map((menuItem, index) => (
    //               <LinkComponentCustom
    //                 key={index}
    //                 title={menuItem.title}
    //                 href={menuItem.href}
    //                 className="text-[14px] font-semibold uppercase my-2"
    //               ></LinkComponentCustom>
    //             ))}
    //           </div>
    //         </SheetContent>
    //       </Sheet>
    //     </div>
    //   </div>
    //   {/* THIS IS NAVBAR ONSCROLLL  */}
    //   {/* THIS IS NAVBAR ONSCROLLL  */}
    // </header>

    <div
      className={`fixed z-50 top-0 left-0 w-full bg-[#333333] shadow-md transition-transform duration-300 
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/">
          <Image src="/bancatgach/logo/logo.png" width={120} height={120} quality={100} alt="logo"></Image>
        </Link>
        <div className="gap-4 hidden md:flex">
          {dataMenus.map((menuItem, index) => (
            <LinkComponentCustom
              key={index}
              title={menuItem.title}
              href={menuItem.href}
              className="text-[14px] font-semibold uppercase text-white"
            ></LinkComponentCustom>
          ))}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="block md:hidden cursor-pointer text-white"></Menu>
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
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
