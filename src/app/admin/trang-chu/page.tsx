"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { PenTool, PlusCircle, Trash } from "react-feather";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TrangChuEdit = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList>();

  const onChooseNewBanner = (event: any) => {
    if (event.target.files) {
      setSelectedFiles(event.target.files);
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-[#ffffff] rounded-md shadow-md p-4 flex flex-col gap-4">
        <h3>Chỉnh sửa banner:</h3>
        {/* <div className="flex flex-wrap justify-center gap-4 overflow-hidden">
          <div className="relative h-[300px] w-[700px] group ">
            <Image src="http://localhost:5000/image/logo.webp" alt="logo" objectFit="cover" fill></Image>

            <div className="group-hover:top-1/2 absolute top-[-50px] transition-top duration-300 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
              <Button size="icon" className="w-2/5 p-4 group mx-auto">
                <PenTool size={30} className="group-hover:text-white" />
              </Button>
              <Button size="icon" className="w-2/5 p-4 group mx-auto">
                <Trash size={30} className="group-hover:text-white" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 overflow-hidden">
          <div className="relative h-[300px] w-[700px] group ">
            <Image src="http://localhost:5000/image/logo.webp" alt="logo" objectFit="cover" fill></Image>
            <div className="group-hover:top-1/2 absolute top-[-50px] transition-top duration-300 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4">
              <Button size="icon" className="w-2/5 p-4 group mx-auto">
                <PenTool size={30} className="group-hover:text-white" />
              </Button>
              <Button size="icon" className="w-2/5 p-4 group mx-auto">
                <Trash size={30} className="group-hover:text-white" />
              </Button>
            </div>
          </div>
        </div> */}
        <div className="flex items-end w-full max-w-md  gap-1.5">
          <div>
            <Label htmlFor="picture">Thêm mới banner</Label>
            <Input id="picture" type="file" accept="image/*" multiple onChange={onChooseNewBanner} />
          </div>
          <Button disabled={selectedFiles ? false : true}>Tạo mới banner</Button>
        </div>
        <div className="flex flex-col gap-4">
          <h3>Xem trước hình ảnh :</h3>
          <div className="flex flex-col items-center gap-4">
            {Array.from(selectedFiles || []).map((item, index) => (
              <Image key={index} src={URL.createObjectURL(item)} alt="img" width={500} height={100} className="cover"></Image>
            ))}
          </div>

          {/* <Image src = ""></Image> */}
        </div>
      </div>
      <div className="bg-[#ffffff] rounded-md shadow-md p-4">1</div>
      <div className="bg-[#ffffff] rounded-md shadow-md p-4">1</div>
    </div>
  );
};

export default TrangChuEdit;
