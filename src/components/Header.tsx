"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbarWhenScrolling, setShowNavbarWhenScrolling] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && !showNavbarWhenScrolling) {
      // if scroll down hide the navbar
      setShowNavbarWhenScrolling(true);
      console.log("CALL TIME");
    } else if (window.scrollY == 0) {
      setShowNavbarWhenScrolling(false);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navResponsive = [
    {
      title: "Giới Thiệu",
      href: "https://mayxaydungmoi.com",
    },
    {
      title: "Bàn Cắt Gạch",
      href: "https://mayxaydungmoi.com/ban-cat-gach/",
    },
    {
      title: "Khuyến Mãi",
      href: "https://mayxaydungmoi.com/khuyen-mai/",
    },
  ];
  const navFixed = [
    {
      title: "Giá Bán",
      scrollTargetID: "giaban",
    },
    {
      title: "Giới Thiệu",
      scrollTargetID: "gioithieu",
    },
    {
      title: "Thông Số Kỹ Thuật",
      scrollTargetID: "thongsokythuat",
    },
    {
      title: "Các Sản Phẩm Panapro Khác",
      scrollTargetID: "panaprokhac",
    },
  ];
  return (
    <header className=" bg-[#fff] z-50 relative left-0 top-0 right-0 ">
      <div className={`px-4 py-4 header-without-scroll relative ${showNavbarWhenScrolling ? "top-[-150px]" : "top-0"} transition-all duration-500`}>
        <div className="content flex justify-between items-center">
          <Link href={"/"}>
            <Image src="/logobancatgach/1.png" alt="logo" width={160} height={160} quality={100} priority></Image>
          </Link>
          <div className="flex items-center gap-6 text-[14px] font-semibold">
            {navResponsive.map((item, index) => {
              return (
                <Link key={index} href={item.href} className="hover:text-accent transition-all duration-200">
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div>
            <Button>Nhận Tư Vấn</Button>
          </div>
        </div>
      </div>

      <div
        className={`px-4 py-4 header-scroll transition-all duration-500 fixed left-0 right-0  bg-[#fff] ${
          showNavbarWhenScrolling ? "top-0" : "top-[-150px]"
        }`}
      >
        <div className="content flex justify-between items-center">
          <Link href={"/"}>
            <Image src="/logobancatgach/1.png" alt="logo" width={160} height={160} quality={100} priority></Image>
          </Link>
          <div className="flex items-center gap-6 text-[14px] font-semibold">
            {navFixed.map((item, index) => {
              return (
                <div
                  key={index}
                  className="hover:text-accent transition-all duration-200 cursor-pointer"
                  onClick={() => {
                    document.getElementById(item.scrollTargetID)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div>
            <Button>Nhận Tư Vấn</Button>
          </div>
        </div>
      </div>
      {/* <div
        className={`shape1 text-black relative ${showNavbarWhenScrolling ? "h-0" : "h-auto"} ${showNavbarWhenScrolling ? "top-[-200px]" : "top-0"}`}
      >
        SHAPE1
      </div>
      <div className={`shape2 text-black `}>SHAPE2</div> */}
      {/* <Link href="/" className="flex flex-col justify-center  gap-4 bg-white">
        <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]  relative">
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
      </Link> */}
      {/* <div className={`container mx-auto flex justify-between items-center gap-10 py-4 }`}>
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
          <h1 className="font-bold  leading-8 text-[16px] xl:text-[18px] ">Đại Diện Độc Quyền Shandong Longao Rubber Tại Việt Nam</h1>
        </div>
        <Nav />
      </div> */}
    </header>
  );
};

export default Header;
