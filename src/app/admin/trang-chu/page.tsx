"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { PenTool, PlusCircle, Trash } from "react-feather";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { TrangChu_API } from "@/axios/layout_api/trang_chu_api";
import { BannerItemInterface } from "@/interfaces";
import { v4 as uuidv4 } from "uuid";
import { IMAGE_API } from "@/axios/image_api";
import AdminBanner from "./components/banner/banner";
import EditBanner from "./components/banner/modals/editBanner";

const TrangChuEdit = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>();
  const [imageListDescription, setImageListDescription] = useState<BannerItemInterface[]>([]);
  const onChooseNewBanner = (event: any) => {
    if (event.target.files) {
      let fileL: FileList = event.target.files;
      // setImageListDescription([]);
      setSelectedFiles(null);
      Array.from(fileL).forEach((file, index) => {
        setImageListDescription((prevItem) => [
          ...prevItem,
          {
            id: uuidv4(),
            title: "",
            description: "",
            imagePath: URL.createObjectURL(file),
          },
        ]);
      });
      setSelectedFiles(event.target.files);
    }
  };
  const fetchBanners = async () => {
    setImageListDescription([]);
    setSelectedFiles(null);
    let res = await TrangChu_API.getBanners();
    setImageListDescription(res.data);
    console.log("RES", res);
  };
  // useEffect(() => {
  //   fetchBanners();
  // }, []);
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-[#ffffff] rounded-md shadow-md p-4 flex flex-col gap-4">
        <AdminBanner />

        {/* <div className="flex items-end w-full max-w-md  gap-1.5">
          <div>
            <Label htmlFor="picture">Thêm mới banner</Label>
            <Input id="picture" type="file" accept="image/*" multiple onChange={(event) => onChooseNewBanner(event)} />
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-4">
          <h3>Xem trước hình ảnh :</h3>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 w-full   mx-auto">
            {imageListDescription.map((item, index) => (
              <div className="flex flex-col items-center gap-4 shadow-md p-4  relative " key={index}>
                <Image key={index} src={item.imagePath} alt="img" width={300} height={100} className="cover"></Image>
                <div>
                  <Label>Tiêu đề chính</Label>
                  <Input
                    type="text"
                    disabled
                    placeholder="tiêu đề chính"
                    defaultValue={imageListDescription[index].title}
                    onChange={(event) => {
                      imageListDescription[index].title = event.target.value;
                    }}
                  ></Input>
                </div>
                <div>
                  <Label>Mô tả </Label>
                  <Input
                    disabled
                    type="text"
                    placeholder="mô tả"
                    defaultValue={imageListDescription[index].description}
                    onChange={(event) => {
                      imageListDescription[index].description = event.target.value;
                    }}
                  ></Input>
                </div>
              </div>
            ))}
          </div>
          <Button
            className="w-full md:w-2/6 mx-auto"
            disabled={selectedFiles || imageListDescription.length > 0 ? false : true}
            onClick={async () => {
              if (selectedFiles) {
                console.log("SELECTED FILE", selectedFiles);
                let res = await IMAGE_API.uploadImages({ imageFiles: selectedFiles });
                if (res) {
                  res.data.map((image: any, index: number) => {
                    imageListDescription[index].imagePath = image.path;
                  });
                }
                let res2 = await TrangChu_API.createBanner({ imageListDescription: imageListDescription });
                console.log("RES 2 ", res2);
              } else {
                console.log("CALL THIS", imageListDescription);
                //UPDATE DATA BANNER
              }
              await fetchBanners();
            }}
          >
            Áp dụng chỉnh sửa
          </Button>
       
        </div> */}
      </div>
      <div className="bg-[#ffffff] rounded-md shadow-md p-4">1</div>
      <div className="bg-[#ffffff] rounded-md shadow-md p-4">1</div>
    </div>
  );
};

export default TrangChuEdit;
