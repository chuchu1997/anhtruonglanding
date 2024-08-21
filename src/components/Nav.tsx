"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
const items = [
  {
    title: "Phao hạ thủy",
    href: "#",
  },
  {
    title: "Rubber Fender",
    href: "#",
  },
];
const Nav = () => {
  const pathName = usePathname();

  return (
    <div className="text-black font-semibold flex-1 flex justify-end gap-8">
      {items.map((item, index) => {
        return (
          <Link key={index} href={item.href} className={`hover:text-accent hover:border-b-4 border-accent capitalize transition-all duration-400`}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;
