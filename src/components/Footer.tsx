import React from "react";
import Image from "next/image";
import FormDatHang from "./FormDatHang";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#45526E] text-white">
      <div className="footer-top bg-red grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 container mx-auto py-4 gap-4">
        <div className="flex  flex-col justify-start item-stat gap-4 text-[14px]   ">
          <Image src="/logotuikhi.png" width={120} height={120} alt="logo-footer" quality={60} priority></Image>
          <div className="text-[14px] xl:text-[16px]">Công ty TNHH TM XNK Biển Đông</div>
        </div>
        <div className="order-first xl:order-none text-[14px] ">
          <div className="font-bold text-[14px] xl:text-[18px] mb-2 uppercase">Liên hệ bán hàng</div>
          <ul className="text-[12px] xl:text-[14px]">
            <li>- Trụ sở: 625/31 Trần Xuân Soạn, Phường Tân Hưng Quận 7, TP.HCM..</li>
            <li>- Văn phòng: 287 Tây Thạnh, Phường Tây Thạnh, Quận Tân Phú, TP.HCM. </li>
            <li>- Phone: 086 9229 639 .</li>
            <li>- Website: https://phaohathuy.com</li>
            <li>- Email: phaohathuy@gmail.com. </li>
          </ul>
        </div>
        {/* <div className="text-[14px] text-black/80">
          <div className="text-[14px] xl:text-[18px] font-bold mb-2 uppercase">Link mạng xã hội</div>
          <div className="flex gap-4"></div>
        </div> */}
      </div>
      <div className="footer-bottom bg-[#45526E] text-sm py-2 border-t border-[#cccc]  ">
        <div className="container mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-between gap-2">
          <div className="text-[12px]"> Copyright 2024 © Công ty Máy Xây Dựng Mới.</div>
          <div className="flex items-center gap-4">
            <Link href="https://www.facebook.com/phaohathuybiendong">
              <Image src="/socials/facebook.png" alt="social" width={28} height={28}></Image>
            </Link>
            <Link href="">
              <Image src="/socials/youtube.png" alt="social" width={28} height={28}></Image>
            </Link>
            <Link href="">
              <Image src="/socials/tiktok.png" alt="social" width={28} height={28}></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
