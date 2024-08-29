import React from "react";
import Image from "next/image";
import FormDatHang from "./FormDatHang";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#45526E] text-white">
      <div className="footer-top bg-red grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 container mx-auto py-10 gap-8 items-start">
        <div className="flex flex-col md:flex-row items-center gap-4 text-[14px] gap-4  ">
          <Image src="/logotuikhi.png" width={140} height={140} alt="logo-footer" style={{ objectFit: "contain" }} quality={60} priority></Image>
          <div>
            <div className="text-[14px] xl:text-[16px]">CÔNG TY TNHH TM XNK BIỂN ĐÔNG</div>
            <ul className="text-[12px] xl:text-[14px] list-disc ml-4">
              <li>Trụ sở: 625/31 Trần Xuân Soạn, Phường Tân Hưng Quận 7, TP.HCM.</li>
              <li>Là nhà cung cấp phao túi khí hạ thuỷ – Đệm chống va (Fender) – Đệm chống va cầu cảng </li>
              <li>Là Đại Diện Phân Phối Độc Quyền Túi Khí Hạ Thuỷ và Đệm chống va của Shandong Longao Rubber tại Việt Nam.</li>
              <li>MST: 0315791531</li>
            </ul>
          </div>
        </div>
        <div className="text-[14px] ">
          <div>
            <div className="text-[14px] xl:text-[16px]">LIÊN HỆ PHAO HẠ THỦY BIỂN ĐÔNG</div>
            <ul className="text-[12px] xl:text-[14px] list-disc ml-4">
              <li>PGD Tại HCM: 287 Tây Thạnh, Phường Tây Thạnh, Quận Tân Phú, TP.HCM.</li>
              <li>PGD Tại Hà Nội: 55 Nguyễn An Ninh Quận Hoàng Hai TP. Hà Nội.</li>
              <li>Phone: 086 9229 639 (Zalo).</li>
              <li>Website: https://phaohathuy.com</li>
              <li>Email: phaohathuy@gmail.com</li>
            </ul>
          </div>
        </div>
        {/* <div className="text-[14px] text-black/80">
          <div className="text-[14px] xl:text-[18px] font-bold mb-2 uppercase">Link mạng xã hội</div>
          <div className="flex gap-4"></div>
        </div> */}
      </div>
      <div className="footer-bottom bg-[#45526E] text-sm py-2 border-t border-[#cccc]  ">
        <div className="container mx-auto flex flex-col xl:flex-row items-start xl:items-center  gap-2">
          <div className="text-[12px]"> Copyright 2024 © Phao Hạ Thủy.</div>
          <div className="flex-1  flex items-center gap-4 justify-center ">
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
