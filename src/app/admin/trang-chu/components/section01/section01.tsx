"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus, PlusCircle, Trash, X } from "react-feather";
import { TrangChu_API } from "@/axios/layout_api/trang_chu_api";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section01Interface } from "@/interfaces";
import { Tag, TagInput } from "emblor";
import { ChevronsUpDown } from "lucide-react";

const Section01 = () => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    description: "",
    features: ["99"],
    imagePath: "",
    tagFieldGenerate: "",
  });

  const [imageChoose, setImageChoose] = useState<File | null>(null);
  const onChooseImage = (event: any) => {
    setImageChoose(event.target.files[0]);
  };
  useEffect(() => {
    fetchSection01();
  }, []);
  const fetchSection01 = async () => {
    let res = await TrangChu_API.getSection01();
    if (res) {
      setFormData((prev) => ({
        ...prev,
        title: res.data.title,
        description: res.data.description,
        subTitle: res.data.subTitle,
        features: res.data.features,
        imagePath: res.data.imagePath,
      }));
    }
  };
  const handleChangeFormField = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const deleteTag = (tag: any) => {
    console.log("tag", tag);
    let update = formData.features.filter((feature) => feature != tag);
    console.log("ii", update);
    setFormData((prev) => ({
      ...prev,
      features: update,
    }));
  };
  const onAddNewTag = (e: any) => {
    if (e.code == "Enter" && formData.tagFieldGenerate.trim() != "" && !formData.features.find((form) => form === formData.tagFieldGenerate)) {
      // setFormData((prev) => ({
      //   ...prev,
      //   features: [...prev.features, formData.tagFieldGenerate],
      // }));
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, formData.tagFieldGenerate],
      }));
      setFormData((prev) => ({
        ...prev,
        tagFieldGenerate: "",
      }));
    }
  };
  // Initial badges
  const handleSubmitEdit = async () => {
    console.log("kkk", formData);
    let res = await TrangChu_API.updateSection01(formData, imageChoose ?? imageChoose);
  };
  // Function to handle removing a badge by its id

  return (
    <div className="container">
      <div className="flex justify-end ">
        <Button onClick={handleSubmitEdit}>Lưu chỉnh sửa (SS01)</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          className="h-[300px] w-full relative shadow-lg cursor-pointer transform hover:scale-105 duration-200 ease-in-out"
          onClick={() => {
            document.getElementById("file-choosen")?.click();
          }}
        >
          {imageChoose ? (
            <Image src={URL.createObjectURL(imageChoose)} fill className="object-contain object-center p-8" alt="image"></Image>
          ) : (
            formData.imagePath != "" && <Image src={formData.imagePath} fill className="object-contain object-center p-8" alt="image"></Image>
          )}
        </div>
        <Input type="file" className="hidden" id="file-choosen" accept="image/*" onChange={onChooseImage}></Input>
        <div className="flex flex-col gap-4">
          <div>
            <Label>Tiêu đề chính </Label>
            <Input type="text" placeholder="Tiêu đề" value={formData.title} name="title" onChange={handleChangeFormField}></Input>
          </div>
          <div>
            <Label>Tiêu đề phụ </Label>
            <Input type="text" placeholder="Tiêu đề" value={formData.subTitle} name="subTitle" onChange={handleChangeFormField}></Input>
          </div>
          <div>
            <Label>Mô tả </Label>
            <Input type="text" placeholder="Tiêu đề" value={formData.description} name="description" onChange={handleChangeFormField}></Input>
          </div>

          <div>
            <Label>Tính năng </Label>
            <Input
              type="text"
              onKeyDown={(e) => onAddNewTag(e)}
              placeholder="Tiêu đề"
              value={formData.tagFieldGenerate}
              name="tagFieldGenerate"
              onChange={handleChangeFormField}
            ></Input>
          </div>

          {formData.features.map((tag) => {
            return (
              <div key={tag} className="flex  items-center gap-2">
                <div>{tag}</div>
                <Trash
                  className="cursor-pointer"
                  color="red"
                  onClick={() => {
                    deleteTag(tag);
                  }}
                ></Trash>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section01;
