"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu, X } from "react-feather";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbarWhenScrolling, setShowNavbarWhenScrolling] = useState(false);
  const [showMobileNavbarOne, setShowMobileNavbarOne] = useState(false);
  const [showMobileNavbarSecond, setShowMobileNavbarSecond] = useState(false);

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

  const handleSetShowNavBarOne = () => {
    setShowMobileNavbarOne(!showMobileNavbarOne);
    if (!showMobileNavbarOne) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };
  const handleSetShowNavBarSecond = () => {
    setShowMobileNavbarSecond(!showMobileNavbarSecond);
    if (!showMobileNavbarSecond) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  };

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
          <div className=" hidden md:flex items-center gap-6 text-[14px] font-semibold">
            {navResponsive.map((item, index) => {
              return (
                <Link target="_blank" key={index} href={item.href} className="hover:text-accent transition-all duration-200">
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:block">
            <Button>Nhận Tư Vấn</Button>
          </div>

          <div
            className="cursor-pointer block md:hidden"
            onClick={() => {
              handleSetShowNavBarOne();
            }}
          >
            {showMobileNavbarOne ? <X></X> : <Menu />}
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
          <div className="hidden md:flex  items-center gap-6 text-[14px] font-semibold">
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
          <div className="hidden md:block">
            <Button>Nhận Tư Vấn</Button>
          </div>
          <div
            className="cursor-pointer block md:hidden"
            onClick={() => {
              handleSetShowNavBarSecond();
            }}
          >
            {showMobileNavbarSecond ? <X></X> : <Menu />}
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 fixed  bg-white border-t border-[#ccc] shadow-md mobile-navbar-1 ${
          showMobileNavbarOne ? "left-0 right-0 h-screen " : "left-[-200px] "
        } p-4 flex flex-col gap-2`}
      >
        {navResponsive.map((item, index) => {
          return (
            <Link target="_blank" key={index} href={item.href} className="hover:text-accent transition-all duration-200">
              {item.title}
            </Link>
          );
        })}

        <Button>Nhận Tư Vấn</Button>
      </div>

      <div
        className={`transition-all duration-500 fixed  bg-white border-t border-[#ccc] shadow-md mobile-navbar-1 ${
          showMobileNavbarSecond ? "left-0 right-0 h-screen " : "left-[-300px] "
        } p-4 flex flex-col gap-2`}
      >
        {navFixed.map((item, index) => {
          return (
            <div
              key={index}
              className="hover:text-accent transition-all duration-200 cursor-pointer"
              onClick={() => {
                handleSetShowNavBarSecond();

                document.getElementById(item.scrollTargetID)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {item.title}
            </div>
          );
        })}
        <Button>Nhận Tư Vấn</Button>
      </div>

      {/* <div
        className={`transition-all duration-500 absolute  bg-white shadow-md mobile-navbar-1 ${
          showMobileNavbarSecond ? "left-0 right-0" : "left-[-300px] "
        } p-4 flex flex-col`}
      >
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
      </div> */}
    </header>
  );
};

export default Header;
