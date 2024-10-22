"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ModalDatHang from "./modalDatHang";
const HeaderDatHang = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#134B70] drop-shadow-2xl  fixed top-0 left-0 right-0 z-40 py-6">
      <div className="header-container container mx-auto flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-white font-semibold text-[14px]">
            Giá gốc <span className="line-through">534.000đ</span>
          </p>
          <p className="font-bold text-[white] text-[20px] border-2 border-[white] px-2 rounded-xl">Chỉ còn : 209.000đ</p>
        </div>
        <Button
          className="uppercase font-bold text-[16px] rounded-full text-[#EEEEEE]"
          onClick={() => {
            setIsOpen(!isOpen);

            document.body.style.overflow = "hidden";
          }}
        >
          đặt hàng ngay
        </Button>
      </div>

      {isOpen && <ModalDatHang onChange={(newV) => setIsOpen(newV)} isOpen={isOpen}></ModalDatHang>}
    </header>
  );
};

export default HeaderDatHang;
