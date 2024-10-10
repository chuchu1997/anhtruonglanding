"use client";
import React from "react";
import { Icon } from "react-feather";
import Link from "next/link";

interface IconComponentProps {
  icon?: Icon;
  href: string;
  title: string;
  className?: string;
}
const LinkComponentCustom = ({ icon: FeatherIcon, href, title, className }: IconComponentProps) => {
  return (
    <div
      onClick={() => {
        document.getElementById(href)!.scrollIntoView({ behavior: "smooth" });
      }}
      className={`${className} cursor-pointer flex items-center gap-2 hover:text-[#86be4c] transition-color duration-150 ease-in-out`}
    >
      {FeatherIcon && <FeatherIcon size={14} />}
      <span>{title}</span>
    </div>
  );
};
export default LinkComponentCustom;
