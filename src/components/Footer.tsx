import React from "react";
import Image from "next/image";
import FormDatHang from "./FormDatHang";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#ffffff] text-white border-t border-red text-[black]">
      <div className="footer-top bg-red grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 container mx-auto py-10 gap-8 items-start">
        <div className="flex flex-col md:flex-row items-center gap-4 text-[14px] gap-4 text-[black]  ">
          <div>
            <Image
              src="/logobancatgach/1.png"
              width={200}
              height={200}
              alt="logo-footer"
              style={{ objectFit: "contain", width: "auto", height: "auto" }}
              quality={60}
              className="mb-4"
              priority
            ></Image>
            <div className="text-[14px] xl:text-[16px] font-semibold ">Công Ty TNHH TM Dụng Cụ Tổng Hợp</div>
            <ul className="text-[12px] xl:text-[14px] list-disc ml-4">
              <li>Trụ sở: 287 Tây Thạnh , Phường Tây Thạnh , Quận Tân Phú , TPHCM.</li>
              <li>Là nhà cung cấp bàn cắt gạch số 1 tại việt nam </li>
              <li>Là Đại Diện Phân Phối Độc Quyền Bàn cắt gạch PanaPro tại việt nam.</li>
              <li>MST: 0315791531</li>
            </ul>
          </div>
        </div>
        <div className="text-[14px] ">
          <div className="text-[black]">
            <div className="text-[14px] xl:text-[16px]">Thông tin liên hệ</div>
            <ul className="text-[12px] xl:text-[14px]  ml-4">
              <li>PGD Tại HCM: 287 Tây Thạnh, Phường Tây Thạnh, Quận Tân Phú, TP.HCM.</li>
              <li>Phone: 0973 926 139 (Zalo).</li>
              <li>Website: https://bancatgach.com</li>
              <li>
                <div className="flex items-end  gap-4 mt-[4px]  ">
                  <Link href="https://www.facebook.com/mayxaydungmoi" target="_blank">
                    <Image src="/socials/facebook.png" alt="social" width={28} height={28}></Image>
                  </Link>
                  <Link href="https://www.youtube.com/@mayxaydungmoi" target="_blank">
                    <Image src="/socials/youtube.png" alt="social" width={28} height={28}></Image>
                  </Link>
                  <Link href="https://www.tiktok.com/@mayxaydungmoi" target="_blank">
                    <Image src="/socials/tiktok.png" alt="social" width={28} height={28}></Image>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="text-[14px] text-black/80">
        <div className="text-[14px] xl:text-[18px] font-bold mb-2 uppercase">Link mạng xã hội</div>
        <div className="flex gap-4"></div>
      </div> */}
      </div>
      <div className="footer-bottom bg-[#ffffff] border-t border-red text-sm py-2  ">
        <div className="text-[12px] text-center text-[black]"> Copyright 2024 © Bàn cắt gạch.</div>
      </div>
    </div>
  );
};

export default Footer;
