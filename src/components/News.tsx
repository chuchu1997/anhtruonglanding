import Link from "next/link";
import React from "react";
import Image from "next/image";

import { Button } from "./ui/button";
const items = [
  {
    title: "Phao túi khí hạ thủy và quy trình sử dụng",
    date: "05/04/2023",
    description: "Phao túi khí hạ thủy Phương pháp hạ thủy bằng phao túi khí hạ thủy mới được phát minh ra. Và đã được ứng dụng rộng ...					",
    href: "",
    imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2023/04/22.jpg",
  },
  {
    title: "Sà lan và 3 loại chở hàng phổ biến nhất hiện nay",
    date: "28/03/2023",
    description: "Ngày nay, khi nhắc đến phương tiện trong vận tải đường thủy, thì không thể không nhắc đến sà lan. Vận tải hàng hóa bằng sà ...",
    href: "",
    imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2023/03/cargo-ship-miami-harbor-with-crane-blue-sky-sea.jpg",
  },
  {
    title: "Phương pháp Hạ thủy tàu có những ưu điểm gì?",
    date: "28/03/2023",
    description: "Những phương pháp hạ thủy tàu hiện nay Phương pháp hạ thủy tàu chính là việc đưa tàu xuống nước. Trên thực tế có rất nhiều ...",
    href: "",
    imageSrc: "https://tuikhibiendong.com/wp-content/uploads/2021/07/aerial-view-cargo-ship-cargo-container-harbor-scaled.jpg",
  },
];
const News = () => {
  return (
    <div className="grid grd-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 px-10 xl:px-0">
      {items.map((item, index) => {
        return (
          <Link target="_blank" href={item.href} key={index} className="p-2 border border-gray rounded-md  group w-full flex flex-col gap-4">
            <div className="h-[260px]  relative ">
              <Image
                src={item.imageSrc}
                alt=""
                fill
                className="object-cover"
                quality={100}
                priority
                sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
              />
            </div>
            <div className=" font-bold text-md min-h-[60px]"> {item.title}</div>

            <div className="  text-sm text-black/80 max-h-[50px]"> {item.description}</div>
            {/* <div className="text-center"> {item.title}</div> */}
            <Button className="text-center justify-center ">Xem thêm</Button>
          </Link>
          //   <Link target="_blank" href={item.href ?? ""} key={index} className="p-2 border border-gray rounded-md  group w-full flex flex-col gap-4">
          //     <div className="h-[260px]  relative ">
          //       <Image
          //         src={item.imageSrc}
          //         alt=""
          //         fill
          //         className="object-cover"
          //         quality={100}
          //         priority
          //         sizes="(max-width: 768px) 100vw,(max-width:1200px) 50vw,33vw"
          //       />
          //     </div>
          //     <div className="text-center min-h-[60px]"> {item.title}</div>
          //     {/* <div className="text-center"> {item.title}</div> */}
          //     <Button className="text-center justify-center ">Đọc tiếp</Button>
          //   </Link>
        );
      })}
    </div>
  );
};

export default News;
