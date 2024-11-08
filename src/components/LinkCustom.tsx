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
    <Link
      href={href}
      className={`${className} text-[16px] font-bold flex items-center uppercase text-[black] gap-2 hover:text-[#A50000] transition-color duration-150 ease-in-out`}
    >
      {FeatherIcon && <FeatherIcon size={14} />}
      <span>{title}</span>
    </Link>
  );
};
export default LinkComponentCustom;
