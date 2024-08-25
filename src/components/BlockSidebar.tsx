"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AlignLeft, AlignRight } from "react-feather";

const items = [
  {
    title: "Báo giá",
    icon: "/baogia.png",
    fallback: () => {
      console.log("THIS IS ISI S");
    },
  },
  { title: "Chat Zalo", icon: "/zalo.png" },
  { title: "Gọi điện", icon: "/phonecall.png" },
  { title: "Messager", icon: "/messager.jpg" },
];
const BlockSidebar = () => {
  const [width, setWidth] = useState("100px");
  const [sort, setSort] = useState(false);

  return (
    <div
      className={`sort-dock bg-red fixed right-0 top-40 ${
        sort ? "w-[60px]" : "w-[120px]"
      } px-2 pt-10 pb-4 z-50 bg-[#cccccc] rounded-md flex flex-col gap-4 text-black transition-width duration-500 overflow-hidden`}
    >
      <div
        className="absolute top-2 left-2 text-white cursor-pointer "
        onClick={() => {
          setSort(!sort);
        }}
      >
        {sort ? <AlignRight /> : <AlignLeft />}
      </div>
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="bg-white p-2 flex flex-col justify-center items-center gap-4 rounded-md cursor-pointer group transition-all duration-400"
            onClick={item.fallback}
          >
            <Image src={item.icon} alt="icon" width={40} height={40} className="group-hover:scale-125 scale-100 transition-all duration-400" />
            <p className={`${sort ? "hidden" : "text-black/80 text-center text-sm group-hover:text-accent "}`}> {item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlockSidebar;
