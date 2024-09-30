import React from "react";
import Image from "next/image";
import FormDatHang from "./FormDatHang";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#2584d6] text-white">
      <div className="footer-top bg-red grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 container mx-auto py-10 gap-8 items-start">
        <div className="flex flex-col md:flex-row items-center gap-4 text-[14px] gap-4  ">
          <div>
            <Image
              src="/logobancatgach/1.png"
              width={200}
              height={200}
              alt="logo-footer"
              style={{ objectFit: "contain" }}
              quality={60}
              className="mb-4"
              priority
            ></Image>
            <div className="text-[14px] xl:text-[16px] font-semibold">CÔNG TY TNHH Máy Xây Dựng Mới</div>
            <ul className="text-[12px] xl:text-[14px] list-disc ml-4">
              <li>Trụ sở: 287 Tây Thạnh , Phường Tây Thạnh , Quận Tân Phú , TPHCM.</li>
              <li>Là nhà cung cấp bàn cắt gạch số 1 tại việt nam </li>
              <li>Là Đại Diện Phân Phối Độc Quyền Bàn cắt gạch PanaPro tại việt nam.</li>
              <li>MST: 0315791531</li>
            </ul>
          </div>
        </div>
        <div className="text-[14px] ">
          <div>
            <div className="text-[14px] xl:text-[16px]">Thông tin liên hệ</div>
            <ul className="text-[12px] xl:text-[14px] list-disc ml-4">
              <li>PGD Tại HCM: 287 Tây Thạnh, Phường Tây Thạnh, Quận Tân Phú, TP.HCM.</li>
              <li>Phone: 0973 926 139 (Zalo).</li>
              <li>Website: https://bancatgach.com</li>
            </ul>
          </div>
        </div>
        {/* <div className="text-[14px] text-black/80">
        <div className="text-[14px] xl:text-[18px] font-bold mb-2 uppercase">Link mạng xã hội</div>
        <div className="flex gap-4"></div>
      </div> */}
      </div>
      <div className="footer-bottom bg-[#2b72af] text-sm py-2 border-t border-[#cccc]  ">
        <div className="container mx-auto flex flex-col xl:flex-row items-start xl:items-center  gap-2">
          <div className="text-[12px]"> Copyright 2024 © Bàn cắt gạch.</div>
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
