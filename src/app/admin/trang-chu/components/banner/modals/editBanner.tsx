"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BannerItemInterface } from "@/interfaces";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { TrangChu_API } from "@/axios/layout_api/trang_chu_api";
import { IMAGE_API } from "@/axios/image_api";
interface onFallback {
  onSubmitEdit: () => void;
}
type propsInterface = BannerItemInterface & onFallback;
const EditBanner = (props: propsInterface) => {
  let { _id, id, title, description, imagePath, onSubmitEdit } = props;
  const [fileSelect, setFileSelect] = useState<FileList | null>(null);
  const [isOpenModal, setOpenModal] = useState(false);

  const onPickFile = (event: any) => {
    console.log("TEST", event.target.files[0]);
    setFileSelect(event.target.files[0]);
  };

  return (
    <Dialog
      open={isOpenModal}
      onOpenChange={(open: boolean) => {
        console.log("HERHE", open);
        if (!open) {
          setFileSelect(null);
        }
        setOpenModal(open);
      }}
    >
      <DialogTrigger asChild>
        <Button onClick={() => setOpenModal(true)} className="btn btn-primary">
          Chỉnh sửa
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div className="relative w-full h-[300px]">
          <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 text-white ">
            <Input type="file" className="bg-accent text-white" onChange={onPickFile} />
          </div>
          {fileSelect ? (
            <Image src={URL.createObjectURL(fileSelect[0])} alt="img" fill className="object-contain"></Image>
          ) : (
            <Image src={imagePath} alt="img" fill className="object-contain"></Image>
          )}
        </div>
        <div className="">
          <Label>Tiêu đề chính</Label>
          <Input
            type="text"
            placeholder="tiêu đề chính"
            defaultValue={title}
            onChange={(event) => {
              title = event.target.value;
            }}
          ></Input>
        </div>
        <div>
          <Label>Mô tả </Label>
          <Input
            type="text"
            placeholder="mô tả"
            defaultValue={description}
            onChange={(event) => {
              description = event.target.value;
            }}
          ></Input>
        </div>
        <Button
          onClick={async () => {
            console.log("TITLE", title);
            let data: BannerItemInterface = {
              _id,
              id,
              title,
              description,
              imagePath,
            };
            if (fileSelect) {
              let ss = await IMAGE_API.uploadImages({ imageFiles: fileSelect });
              console.log("SS", ss);
            }
            // await IMAGE_API.
            // await TrangChu_API.updateBanner(data);

            // onSubmitEdit();
          }}
        >
          Áp dụng chỉnh sửa
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditBanner;
