"use client";
import { useEffect, useState } from "react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu, X, Phone, Mail, Clock, Icon } from "react-feather";
import Link from "next/link";
import LinkComponentCustom from "./LinkCustom";

const dataMenus = [
  {
    title: "Trang chủ",
    href: "#",
  },
  {
    title: "giới thiệu",
    href: "#",
  },
  {
    title: "sản phẩm",
    href: "#",
  },
  {
    title: "liên hệ",
    href: "#",
  },
  {
    title: "hướng dẫn",
    href: "#",
  },
];
const Header = () => {
  return (
    <header>
      <div className="header-top-absolute absolute left-0 top-0 right-0 z-30  text-white text-[12px]">
        <div className="container mx-auto py-2 flex justify-between items-center text-[#e3e3e3]">
          <div className="header-top-left flex items-center gap-4">
            <LinkComponentCustom icon={Phone} href="#" title="0123.456.789" />
            <LinkComponentCustom icon={Mail} href="#" title="0123.456.789" />
            <LinkComponentCustom icon={Clock} href="#" title="0123.456.789" />
          </div>
          <div className="header-top-right text-[#e3e3e3]">
            <LinkComponentCustom icon={Clock} href="#" title="Nhận tư vấn" />
          </div>
        </div>
        <div className="border-b border-[grey]/60"></div>

        {/* HEADER BOTTOM */}
        <div className="container  mt-[20px] flex justify-between items-center">
          <Link href="/">
            <Image src="/landingpage1source/logo/logo.png" width={120} height={120} quality={100} alt="logo"></Image>
          </Link>
          <div className="gap-4 hidden md:flex">
            {dataMenus.map((menuItem, index) => (
              <LinkComponentCustom
                key={index}
                title={menuItem.title}
                href={menuItem.href}
                className="text-[14px] font-semibold uppercase"
              ></LinkComponentCustom>
            ))}
          </div>
        </div>
      </div>

      <div></div>
      <div className="header-onscroll hidden"></div>
    </header>
  );
};

export default Header;
