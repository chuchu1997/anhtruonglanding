import React from "react";
import Image from "next/image";
import FormDatHang from "./FormDatHang";

const Footer = () => {
  return (
    <div className="bg-[#cccccc]/40">
      <div className="footer-top bg-red grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto py-10 gap-8">
        <div className="flex  flex-col items-center xl:items-start gap-4 text-[14px] text-black/80 ">
          <Image src="/logotuikhi.png" width={120} height={120} alt="logo-footer" quality={100} priority></Image>
          <div>
            Công ty TNHH Máy Xây Dựng Mới - Nhà cung cấp giải pháp Phao túi khí hạ thuỷ - Đệm chống va (Fender) - Đệm chống va cầu cảng cho ngành Đóng
            tàu và Hàng hải Việt Nam.
          </div>
          <ul>
            <li>- Địa chỉ: 287 Tây Thạnh, P.Tây Thạnh, Quận.Tân Phú.</li>
            <li>- MST: 0316.806.043 </li>
            <li>- ĐT: 086 9229 639</li>
          </ul>
        </div>
        <div className="order-first xl:order-none">
          <FormDatHang />
        </div>
        <div>3 THIS IS PLACE FOR SOCIALS MEDIA</div>
      </div>
      <div className="footer-bottom bg-white text-center text-sm py-4">Copyright 2024 © Công ty Máy Xây Dựng Mới.</div>
    </div>
  );
};

export default Footer;
