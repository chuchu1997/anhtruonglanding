"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ModalDatHang from "./modalDatHang";
const HeaderDatHang = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#134B70] drop-shadow-2xl  p-4 fixed top-0 left-0 right-0 z-50 py-6">
      <div className="header-container container mx-auto text-center">
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
