"use client";
import React from "react";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";

interface propsType {
  className?: string;
}
const DatHang = (props: propsType) => {
  const { className } = props;
  const handleOrder = () => {
    window.location.href = "https://zalo.me/0973926139";
  };
  return (
    <div
      className={`${className} text-[12px] md:text-[14px] px-4 py-2 font-semibold   bg-[red] max-w-[150px] text-center cursor-pointer rounded-lg text-white scale-100 transition-scale duration-200 ease-in-out hover:scale-[1.05]`}
      onClick={handleOrder}
    >
      Đặt hàng ngay
      {/* <Dialog>
        <DialogTrigger className="border border-[red] px-4 py-2 bg-[red] text-white font-semibold rounded-lg">Đặt hàng ngay</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="pt-8 pb-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn sản phẩm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bàn cắt gạch panapro 60 (có đệm)">Bàn cắt gạch panapro 60 (có đệm)</SelectItem>
                    <SelectItem value="Bàn cắt gạch panapro 80 (có đệm)">Bàn cắt gạch panapro 80 (có đệm)</SelectItem>
                    <SelectItem value="Bàn cắt gạch panapro 1 mét (có đệm)">Bàn cắt gạch panapro 1 mét (có đệm)</SelectItem>
                    <SelectItem value="Bàn cắt gạch panapro 1.2 mét (có đệm)">Bàn cắt gạch panapro 1.2 mét (có đệm)</SelectItem>
                    <SelectItem value="Bàn cắt gạch panapro 1.5 mét (có đệm)">Bàn cắt gạch panapro 1.5 mét (có đệm)</SelectItem>
                    <SelectItem value="Bàn cắt gạch panapro 60 (không đệm)">Bàn cắt gạch panapro 60 (không đệm)</SelectItem>
                    <SelectItem value="Bàn cắt gạch panapro 80 (không đệm)">Bàn cắt gạch panapro 80 (không đệm)</SelectItem>
                    <SelectItem value="Bàn cắt gạch panapro 1 mét (không đệm)">Bàn cắt gạch panapro 1 mét (không đệm)</SelectItem>
                    <SelectItem value="Bàn cắt gạch panapro 1.2 mét (không đệm)">Bàn cắt gạch panapro 1.2 mét (không đệm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </DialogTitle>
            <DialogDescription>
              <div className="grid items-center gap-4 w-full">
                <Input type="email" id="email" placeholder="Tên của bạn" />
                <Input type="email" id="email" placeholder="SDT của bạn" />
                <Input type="email" id="email" placeholder="Địa chỉ của bạn" />
                <Button>Đặt hàng ngay</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> */}
    </div>
  );
};

export default DatHang;
