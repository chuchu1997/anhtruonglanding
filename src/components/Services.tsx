import Link from "next/link";
import React from "react";
import { Package } from "react-feather";

const items = [
  {
    num: "01",
    title: "service",
    description: "lorem ipsum dolor sit amet",
    href: "",
  },
  {
    num: "02",
    title: "service",
    description: "lorem ipsum dolor sit amet",
    href: "",
  },
  {
    num: "03",
    title: "service",
    description: "lorem ipsum dolor sit amet",
    href: "",
  },
  {
    num: "04",
    title: "service",
    description: "lorem ipsum dolor sit amet",
    href: "",
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
              <Link
                href={item.href}
                className="bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center hover:bg-accent transition-all duration-500 hover:-rotate-45"
              >
                <Package className="text-black" />
              </Link>
            </div>

            <h2>CONTENT</h2>
            <div className="border-b border-white/20 w-full"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
