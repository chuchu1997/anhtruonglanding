import React from "react";
import Image from "next/image";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, Icon, MapPin, Phone, Mail } from "react-feather";
import { link } from "fs";

const socials = [
  {
    href: "https://www.facebook.com/mayxaydungmoi",
    icon: Facebook,
  },
  {
    href: "",
    icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@mayxaydungmoi",
    icon: Youtube,
  },
  {
    href: "",
    icon: Twitter,
  },
];

interface Description {
  link?: string;
  icon?: Icon;
  content?: string;
}

interface footerDescriptionProps {
  title: string;
  description: Description[];
}
const footerCenterItems: footerDescriptionProps[] = [
  {
    title: "liên hệ",
    description: [
      {
        link: "",
        icon: MapPin,
        content: "Số 123 Nguyễn Văn Quá , Quận 12, TPHCM",
      },
      {
        link: "",
        icon: Phone,
        content: "0123.456.789",
      },
      {
        link: "",
        icon: Mail,
        content: "ffgcuong@gmail.com",
      },
    ],
  },
  {
    title: "hỗ trợ khách hàng",
    description: [
      {
        link: "",

        content: "Kinh nghiệm mua hàng",
      },
      {
        link: "",

        content: "Hướng dẫn mua hàng",
      },
      {
        link: "",

        content: "Chính sách đổi trả",
      },
      {
        link: "",

        content: "Hình thức thanh toán",
      },
    ],
  },

  {
    title: "hình ảnh",
    description: [
      {
        link: "",
        icon: Facebook,
        content: "Hee",
      },
      {
        link: "",
        icon: Facebook,
        content: "Hee",
      },
      {
        link: "",
        icon: Facebook,
        content: "Hee",
      },
    ],
  },
  {
    title: "hình ảnh",
    description: [
      {
        link: "",
        icon: Facebook,
        content: "Hee",
      },
      {
        link: "",
        icon: Facebook,
        content: "Hee",
      },
      {
        link: "",
        icon: Facebook,
        content: "Hee",
      },
    ],
  },
];
const footerCenterItems2: footerDescriptionProps[] = [
  {
    title: "Công Ty TNHH TM Dụng Cụ Tổng Hợp",
    description: [
      {
        content: "Giấy chứng nhận đăng ký doanh nghiệp: Mã số thuế: 0316806043 do sở KH & ĐT TP.HCM cấp ngày 14/04/2021",
      },
      {
        content: "Website bancatgach.com thuộc quyền sở hữu của Công Ty TNHH TM Dụng Cụ Tổng Hợp và được phát triển bởi Cường Dev.",
      },
    ],
  },

  {
    title: "Thông tin liên hệ",
    description: [
      {
        content: "Địa chỉ trụ sở chính : Showroom: 287 Tây Thạnh, P.Tây Thạnh, Q.Tân Phú ",
      },
      {
        content: "Mua hàng : 0973 926 139",
      },
      {
        content: "Sửa chữa : 0869 757 585",
      },
      {
        content: "Bảo hành : 0973 926 139",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-[#333333] mt-[50px] pt-[100px] pb-[40px]">
      <div className="container mx-auto text-white font-cuprum italic flex flex-col">
        <div className="footer-top flex flex-col justify-center items-center gap-6 ">
          <Link href="/">
            <Image src="/bancatgach/logo/logo.png" width={180} height={180} quality={100} alt="logo"></Image>
          </Link>
          <div className="social-media flex gap-6 mb-[40px]">
            {/* {Array.from({ length: 4 }, (_, i) => (
              <Link href="#" key={i}>
                <Facebook />
              </Link>
            ))} */}
            {socials.map((item, i) => (
              <Link href={item.href} key={i} target="_blank">
                <item.icon size={18} className="text-white hover:text-[red] transition-all duration-200 ease-in-out"></item.icon>
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-center grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {footerCenterItems2.map((item, index) => (
            <ul key={index} className=" ">
              <h3 className="uppercase font-semibold mb-[20px]"> {item.title}</h3>
              {item.description.map((descriptionItem, index2) => (
                <li key={index2} className="mb-[2px] ">
                  <div className="text-[16px] flex items-center gap-4 justify-between text-[#ccccc] hover:text-white ">
                    {descriptionItem.icon && <descriptionItem.icon size={16} />}
                    <span> {descriptionItem.content}</span>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="footer-bottom border-t border-[#cccccc] mt-[20px] pt-[20px] flex flex-col justify-center items-center gap-4 text-none md:text-center">
          <ul>
            <li>© 2024 Máy Xây Dựng Mới Bản quyền thuộc về Công Ty TNHH TM Dụng Cụ Tổng Hợp</li>
            <li>GPDKKD: Mã số thuế: 0316806043 do sở KH & ĐT TP.HCM cấp ngày 14/04/2021</li>
            <li>Showroom: 287 Tây Thạnh, P.Tây Thạnh, Q.Tân Phú, TP.Hồ Chí Minh. Điện thoại: 0973 926 139. Email: mayxaydungmoi.co@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
