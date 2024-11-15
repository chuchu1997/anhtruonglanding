"use client";
import { TrangChu_API } from "@/axios/layout_api/trang_chu_api";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BannerItemInterface } from "@/interfaces";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import EditBanner from "./modals/editBanner";

const AdminBanner = () => {
  // ****  Functions *****
  const fetchBanners = async () => {
    // setImageListDescription([]);
    // setSelectedFiles(null);
    setBanners([]);

    let response = await TrangChu_API.getBanners();
    console.log("RES 12", response);
    if (response) {
      setBanners(response.data);
    }

    // setImageListDescription(res.data);
    // console.log("RES", res);
  };
  // ****  Functions *****
  useEffect(() => {
    fetchBanners();
  }, []);
  const [banners, setBanners] = useState<BannerItemInterface[]>([]);
  return (
    <div className="flex flex-col gap-4">
      <h3>Hình ảnh banner hiện tại</h3>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4 w-full   mx-auto">
        {banners.map((item, index) => (
          <div className="flex flex-col items-center gap-4 shadow-md p-4  relative  " key={index}>
            <div className="absolute right-0 top-0 z-50">
              <EditBanner
                onSubmitEdit={() => {
                  console.log("HEHEH");
                }}
                _id={item._id}
                id={item.id}
                title={item.title}
                description={item.description}
                imagePath={item.imagePath}
              />
            </div>

            <div className="relative w-full h-[300px]">
              <Image key={index} src={item.imagePath} alt="img" fill className="object-contain"></Image>
            </div>
            <div className="">
              <Label>Tiêu đề chính</Label>
              <Input type="text" disabled placeholder="tiêu đề chính" defaultValue={item.title}></Input>
            </div>
            <div>
              <Label>Mô tả </Label>
              <Input disabled type="text" placeholder="mô tả" defaultValue={item.description}></Input>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBanner;
