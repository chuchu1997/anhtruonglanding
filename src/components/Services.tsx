"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowDownRight } from "react-feather";

const items = [
  {
    num: "01",
    title: "Phao túi khí hạ thủy",
    description: "lorem ipsum dolor sit amet",
    image: "/sanphamchudao/sanphamnoibat1.png",
    href: "",
    idTarget: "phaohathuy",
  },
  {
    num: "02",
    title: "Đệm chống va tàu",
    description: "lorem ipsum dolor sit amet",
    image: "/sanphamchudao/sanphamnoibat2.png",
    href: "",
    idTarget: "rubberfender",
  },
  {
    num: "03",
    title: "Đệm chống va cầu cảng",
    description: "lorem ipsum dolor sit amet",
    image: "/sanphamchudao/sanphamnoibat3.png",
    href: "",
    idTarget: "demchongvacau",
  },
  {
    num: "04",
    title: "Máy phun xịt áp lực cao",
    description: "lorem ipsum dolor sit amet",
    image: "/sanphamchudao/sanphamnoibat4.png",
    href: "",
    idTarget: "mayphunxitapluccao",
  },

  {
    num: "05",
    title: "Neo và xích neo tàu thủy",
    description: "lorem ipsum dolor sit amet",
    image: "/sanphamchudao/sanphamnoibat6.png",
    href: "",
    idTarget: "neo",
  },
  {
    num: "06",
    title: "Cho thuê phao hạ thủy ",
    description: "lorem ipsum dolor sit amet",
    image: "/dichvuchothuetuikhi/7.png",
    href: "",
    idTarget: "dichvuchothue",
  },
];
const Services = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2  gap-8 py-[50px]">
      {items.map((item, index) => {
        return (
          <div key={index} className="flex-1 flex-col justify-center gap-6 group">
            <div className="w-full flex justify-between items-center ">
              <div className="text-5xl font-extrabold text-transparent text-outline group-hover:text-outline-hover  ">{item.num}</div>
              <div className="wrapper-image relative w-[80px] h-[80px] xl:w-[100px] xl:h-[100px]">
                <Image
                  src={item.image}
                  alt="ss"
                  fill={true}
                  className="rounded-md object-contain"
                  // objectFit={"cover"}
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
                />
              </div>

              <div
                onClick={() => {
                  document.getElementById(item.idTarget)!.scrollIntoView({ behavior: "smooth" });
                }}
                className="cursor-pointer bg-accent/20 w-[60px] h-[60px] rounded-full flex justify-center items-center hover:bg-accent transition-all duration-500 hover:-rotate-45"
              >
                <ArrowDownRight className="text-black" />
              </div>
            </div>

            <h2 className="h4">{item.title}</h2>
            <div className="border-b border-black/20 w-full pt-2"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
