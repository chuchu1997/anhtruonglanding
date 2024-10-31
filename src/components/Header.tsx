"use client";
import React from "react";

import Image from "next/image";
import { Menu, X, Phone, Mail, Clock } from "react-feather";
import Link from "next/link";
import LinkComponentCustom from "./LinkCustom";
import { Button } from "@/components/ui/button";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import SearchComponent from "./SearchComponent";

import { useRouter } from "next/navigation";

import { data } from "@/data/data";
import { CategoryItem } from "./Categories";
import { deleteCookie } from "cookies-next";
const Header = () => {
  const router = useRouter();
  return (
    <header>
      <div className="py-2 fixed header-top-absolute top-0 z-30 right-0 w-full text-white text-[12px] bg-[#405D72] ">
        <div className="container px-4 py-2 hidden md:flex justify-between items-center text-[#e3e3e3]">
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
        <div className="container px-[10px] mt-[20px] flex flex-col">
          <div className="flex justify-between items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Menu className="block md:hidden cursor-pointer" size={30}></Menu>
              </SheetTrigger>
              <SheetContent className=" overflow-y-auto">
                <div className="mt-[14px] ">
                  <div className="grid grid-cols-2 gap-8 ">
                    {data.categoriesData.map((category) => (
                      <CategoryItem key={category.title} title={category.title} linkHref={category.linkHref} imageSrc={category.imageSrc} />
                    ))}

                    <Button
                      onClick={() => {
                        deleteCookie("access_token");
                        router.push("/login");
                      }}
                    >
                      Đăng xuất
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/">
              <div className="flex flex-col items-center gap-2 text-white">
                <Image src="/logo.png" width={40} height={40} quality={100} alt="logo"></Image>
                <h3 className="italic text-[12px]">Gia dụng hiện đại</h3>
              </div>
            </Link>
            <SearchComponent className="md:block hidden" />
          </div>
          <SearchComponent className="mt-[10px] block md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
