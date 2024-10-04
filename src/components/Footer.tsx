import React from "react";
import Image from "next/image";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#333333] mt-[50px] pt-[100px]">
      <div className="container mx-auto text-white font-cuprum italic flex flex-col">
        <div className="footer-top">
          <Link href="/">
            <Image src="/landingpage1source/logo/logo.png" width={140} height={140} quality={100} alt="logo"></Image>
          </Link>
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div className="footer-center">AA</div>
        <div className="footer-bottom"></div>
      </div>
    </div>
  );
};

export default Footer;
