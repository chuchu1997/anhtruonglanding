import React from "react";
import { TrangChu_API } from "@/axios/layout_api/trang_chu_api";
import { BannerItemInterface } from "@/interfaces";
import Image from "next/image";
import CarouselComponent from "@/components/CarouselComponent";
export default async function BannerMaster() {
  let banner: BannerItemInterface[] = [];
  const fetchBanner = async () => {
    let response = await TrangChu_API.getBanners();
    banner = response.data;
  };
  await fetchBanner();
  if (banner.length === 0) return;
  return (
    <CarouselComponent
      isShowControlNextAndPrev
      isShowDot
      className="h-[300px] md:h-[700px]"
      listJSXCarouselItem={banner.map((bannerItem, index) => (
        <div>
          <div className="hidden md:block  text-banner absolute text-center text-white z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="main-title mb-[15px] font-accent h2 text-[60px] tracking-wide">{bannerItem.title}</div>
            <div className="sub-title text-[22px] uppercase tracking-wide ">{bannerItem.description}</div>
          </div>
          <Image
            alt="bannerImage"
            src={bannerItem.imagePath}
            fill
            className="object-cover object-right md:object-center"
            quality={100}
            priority
          ></Image>
        </div>
      ))}
      responsiveTaiwindForItem=""
    ></CarouselComponent>
  );
}
