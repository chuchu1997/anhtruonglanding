// "use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail, Clock, Icon, Facebook, Linkedin, Youtube } from "react-feather";
import Link from "next/link";
import LinkComponentCustom from "./LinkCustom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import RenderLogoServerSide from "./RenderLogoServerside";
import { headers } from "next/headers";
import HeaderShowWhenScroll from "./HeaderShowWhenScroll";

const dataMenus = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "giới thiệu",
    href: "/gioi-thieu",
  },
  {
    title: "sản phẩm",
    href: "/san-pham",
  },
  {
    title: "liên hệ",
    href: "/lien-he",
  },
  {
    title: "hướng dẫn",
    href: "/huong-dan",
  },
];
const Header = () => {
  const headersList = headers();
  const header_url = headersList.get("x-url") || "";

  if (header_url.includes("admin")) return;

  return (
    <header>
      <div className="header-top-absolute relative top-0 right-0 mt-[0px] text-white text-[12px]">
        <div className="header-top  bg-[#4f4f4f]">
          <div className="container mx-auto py-2 hidden md:flex justify-between items-center text-[#e3e3e3]  ">
            <div className="header-top-left flex items-center gap-4 ">
              <div className="flex items-center gap-2">
                <Clock size={18}></Clock>
                <p>Thứ Hai - Thứ Bảy 8AM-7PM</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18}></Phone>
                <p>0989.598.583</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18}></Mail>
                <p>sales@nhathuymachine.com.vn</p>
              </div>
              {/* <LinkComponentCustom icon={Phone} href="#" title="0123.456.789" />
              <LinkComponentCustom icon={Mail} href="#" title="0123.456.789" />
              <LinkComponentCustom icon={Clock} href="#" title="0123.456.789" /> */}
            </div>
            <div className="header-top-right text-[#e3e3e3] flex items-center gap-4">
              <Link href="/">
                <Facebook size={18} />
              </Link>
              <Link href="/">
                <Linkedin size={18} />
              </Link>
              <Link href="/">
                <Youtube size={18} />
              </Link>
              {/* <LinkComponentCustom icon={Clock} href="#" title="" /> */}
            </div>
          </div>
        </div>

        <div className="hidden md:block border-b border-[grey]/60"></div>

        {/* HEADER center */}
        <div className="container md:mt-[20px] flex justify-between items-center">
          <Link href="/" className="relative w-[200px] md:w-[280px] h-[60px]">
            <RenderLogoServerSide />
          </Link>
          {/* <div className="text-[black]">LANGUAGES</div> */}
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="block md:hidden cursor-pointer text-accent"></Menu>
            </SheetTrigger>
            <SheetContent side={"left"} aria-describedby="undefined">
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>

              <div className="mt-[14px]">
                {dataMenus.map((menuItem, index) => (
                  <LinkComponentCustom
                    key={index}
                    title={menuItem.title}
                    href={menuItem.href}
                    className="text-[14px]  font-semibold uppercase my-2"
                  ></LinkComponentCustom>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:block border-b border-[grey]/60 py-4 "></div>

        <div className="container hidden md:flex py-4 justify-between items-end">
          <div className="flex items-center gap-8 ">
            {dataMenus.map((menuItem, index) => (
              <LinkComponentCustom
                key={index}
                title={menuItem.title}
                href={menuItem.href}
                className="text-[14px] font-semibold uppercase"
              ></LinkComponentCustom>
            ))}
          </div>
          <div>
            <Button>Yêu cầu báo giá</Button>
          </div>
        </div>
      </div>

      <HeaderShowWhenScroll />
    </header>
  );
};

export default Header;
