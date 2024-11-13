"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "react-feather";
import LinkComponentCustom from "./LinkCustom";
import { Logo_API } from "@/axios/layout_api/logo";
import Image from "next/image";
const HeaderShowWhenScroll = () => {
  const [showNavbarOnScroll, setShowNavbarOnScroll] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [logo, setLogo] = useState("");

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
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const scrollY = window.scrollY;
      // setShowNavbarOnScroll(scrollY < lastScrollY || scrollY < 50);
      // setLastScrollY(scrollY);

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
  useEffect(() => {
    fetchLogo();
  }, []);
  const fetchLogo = async () => {
    let response = await Logo_API.getLogo();
    setLogo(response.data);
  };
  return (
    <div
      className={`fixed z-50 top-0 left-0 w-full bg-[white] shadow-md transition-transform duration-300 ${
        showNavbarOnScroll ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto p-2 flex justify-between items-center">
        {logo && (
          <Link href="/" className="relative w-[200px] md:w-[280px] h-[60px]">
            <Image src={logo} fill objectFit="contain" quality={100} priority alt="logo" />
          </Link>
        )}

        <Sheet>
          <SheetTrigger asChild>
            <Menu className="cursor-pointer text-accent"></Menu>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>

            <div className="mt-[14px] ">
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
  {
    /* THIS IS NAVBAR ONSCROLLL  */
  }
};

export default HeaderShowWhenScroll;
