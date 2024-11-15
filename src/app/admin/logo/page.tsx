"use client";
import { Logo_API } from "@/axios/layout_api/logo";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import EditBanner from "../trang-chu/components/banner/modals/editBanner";
const LogoPageEdit = () => {
  const [logo, setLogo] = useState("");
  const [file, setFile] = useState<File>();

  useEffect(() => {
    fetchLogo();
  }, []);
  const fetchLogo = async () => {
    let response = await Logo_API.getLogo();
    setLogo(response.data);
  };
  const getOutputFile = (event: any) => {
    let fileTemp = event.target.files[0];
    if (fileTemp) {
      setFile(event.target.files[0]);
      const imageURL = URL.createObjectURL(fileTemp);
      setLogo(imageURL);
    }
  };
  const onChangeLogo = async () => {
    if (file) {
      try {
        let response = await Logo_API.changeLogo(file);
        if (response) {
          console.log("OK");
        }
      } catch (e) {
        console.log("ERROR", e);
      }
    }
  };
  return (
    <div className="bg-[#ffffff] rounded-md shadow-md p-4 flex flex-col gap-8">
      <h3 className="border-b border-[#cccccc]">Hình ảnh Logo</h3>
      <div>{logo && <Image src={logo} alt="logo" width={400} height={400} quality={100}></Image>}</div>
      <div className="flex gap-4 items-end">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Chọn hình ảnh</Label>
          <Input id="picture" type="file" accept="image/*" onChange={getOutputFile} />
        </div>
        <Button onClick={onChangeLogo} disabled={file ? false : true}>
          Lưu thay đổi
        </Button>
      </div>

      <p>( Nếu chưa thấy logo update thì anh/chị tắt trình duyệt rồi mở lại vì trình duyệt lưu logo vào cache )</p>
    </div>
  );
};

export default LogoPageEdit;
