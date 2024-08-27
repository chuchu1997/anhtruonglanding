"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const items = [
  {
    title: "Phao hạ thủy",
    idTarget: "phaohathuy",
  },
  {
    title: "Rubber Fender",
    idTarget: "rubberfender",
  },
];
const Nav = () => {
  const pathName = usePathname();
  return (
    <div className="text-black font-semibold flex-1 flex justify-end gap-8 text-[14px] xl:text-[16px]">
      {items.map((item, index) => {
        return (
          <div
            onClick={() => {
              document.getElementById(item.idTarget)!.scrollIntoView({ behavior: "smooth" });
            }}
            key={index}
            className={`cursor-pointer hover:text-accent hover:border-b-4 border-accent capitalize transition-all duration-400`}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Nav;
