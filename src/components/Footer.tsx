import React from "react";
import Image from "next/image";
import FormDatHang from "./FormDatHang";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#cccccc]/40">
      <div className="footer-top bg-red grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto py-10 gap-8">
        <div className="flex  flex-col   xl:items-start gap-4 text-[14px] text-black/80 ">
          {/* <Image
            src="/logotuikhi.png"
            width={120}
            height={120}
            alt="logo-footer"
            quality={100}
            priority
          ></Image> */}
          <div className="font-bold text-[14px] xl:text-[18px] mb-2 uppercase">
            Về công ty
          </div>
          <div>
            Công ty TNHH TM XNK Biển Đông – Nhà cung cấp giải pháp Phao túi khí
            hạ thuỷ – Đệm chống va (Fender) – Đệm chống va cầu cảng cho ngành
            Đóng tàu và Hàng hải Việt Nam. Túi khí Biển Đông là Đại Diện Phân
            Phối Độc Quyền Túi Khí Hạ Thuỷ và Đệm chống va của Shandong Longao
            Rubber tại Việt Nam, đã đạt chứng nhận loại nhà máy xã hội phân loại
            DNVGL…có các đối tác Indonesia, Ý, Mỹ, Nga, Abu Dhabi, và APEC. Túi
            khí Biển Đông mong muốn đưa các sản phẩm chất lượng tốt nhất, độ bền
            cao nhất, tạo ra sự khác biệt giữa các sản phẩm tại thị trường Việt
            Nam.
          </div>
          <ul>
            <li>- Địa chỉ: 287 Tây Thạnh, P.Tây Thạnh, Quận.Tân Phú.</li>
            <li>- MST: 0316.806.043 </li>
            <li>- ĐT: 086 9229 639</li>
          </ul>
        </div>
        <div className="order-first xl:order-none text-[14px] text-black/80">
          <div className="font-bold text-[14px] xl:text-[18px] mb-2 uppercase">
            Liên hệ bán hàng
          </div>
          <ul>
            <li>
              - Trụ sở: 625/31 Trần Xuân Soạn, Phường Tân Hưng Quận 7, TP.HCM..
            </li>
            <li>
              - Văn phòng: 287 Tây Thạnh, Phường Tây Thạnh, Quận Tân Phú,
              TP.HCM.{" "}
            </li>
            <li>- Phone: 086 9229 639 .</li>
            <li>- Website: https://phaohathuy.com</li>
            <li>- Email: phaohathuy@gmail.com. </li>
          </ul>
        </div>
        <div className="text-[14px] text-black/80">
          <div className="text-[14px] xl:text-[18px] font-bold mb-2 uppercase">
            Link mạng xã hội
          </div>
          <div className = "flex gap-4">
            <Link href="https://www.facebook.com/phaohathuybiendong">
              <Image
                src="/socials/facebook.png"
                alt="social"
                width={40}
                height={40}
              ></Image>
            </Link>
            <Link href="">
              <Image
                src="/socials/youtube.png"
                alt="social"
                width={40}
                height={40}
              ></Image>
            </Link>
            <Link href="">
              <Image
                src="/socials/tiktok.png"
                alt="social"
                width={40}
                height={40}
              ></Image>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom bg-white text-center text-sm py-4 ">
        Copyright 2024 © Công ty Máy Xây Dựng Mới.
      </div>
    </div>
  );
};

export default Footer;
