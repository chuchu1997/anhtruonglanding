"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Section01 = () => {
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      console.log("HEHE");
    }
  };
  return (
    <div className="container">
      <div className="flex justify-end ">
        <Button>Lưu chỉnh sửa (SS02)</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-[300px] w-full relative">
          <Image src="/next.svg" fill className="object-contain object-center p-8" alt="image"></Image>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <Label>Tiêu đề chính </Label>
            <Input type="text" placeholder="Tiêu đề"></Input>
          </div>
          <div>
            <Label>Tiêu đề phụ </Label>
            <Input type="text" placeholder="Tiêu đề"></Input>
          </div>
          <div>
            <Label>Mô tả </Label>
            <Input type="text" placeholder="Tiêu đề"></Input>
          </div>

          <div>
            <Label htmlFor="message">Tính năng</Label>
            <Textarea
              placeholder="Type your message here."
              id="message"
              onKeyDown={handleKeyDown}
              //   onChange={(event) => {
              //     console.log("EVENT", event);
              //   }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section01;
