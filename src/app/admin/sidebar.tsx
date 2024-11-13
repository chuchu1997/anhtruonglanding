import React from "react";
import { menuData } from "./menuData";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="fixed w-[250px] bg-[#ffffff] h-[100vh] overflow-y-auto shadow-xl hidden md:flex flex-col container ">
      <div className="text-center mt-[20px] font-bold text-2xl text-accent mb-[10px]">LOGO</div>
      {menuData.map((menu, index) => (
        <div className="my-[5px]" key={index}>
          <Label className="text-accent">{menu.label}</Label>
          {menu.items.map((item, index2) => (
            // <LinkComponentCustom href={item.link} title={item.title} key={index2} />
            <div className="w-full group capitalize font-normal my-2 hover:text-accent hover:bg-[#cccccc]/20 p-2" key={index2}>
              <Link href={item.link} key={index2} className=" block">
                {item.title}{" "}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
