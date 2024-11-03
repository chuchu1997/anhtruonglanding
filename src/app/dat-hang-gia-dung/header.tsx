"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { useModal } from './context/ModalContext';

const HeaderDatHang = () => {

  const { openModal } = useModal();


  return (
    <header className="bg-[#134B70] drop-shadow-2xl z-20 fixed top-0 z-20 left-0 right-0  py-6 ">
      <div className="header-container container mx-auto flex items-end justify-between">
        <div className="flex flex-col gap-2">
       
          <p className="italic font-bold text-[white] text-[15px] md:text-[20px] border-2 border-[white] px-2 rounded-xl">Chỉ còn :189.000đ</p>
        </div>
        <Button
          className="uppercase font-bold text-[15px] md:text-[16px] text-[#EEEEEE]"
          onClick={openModal}
        >
          đặt hàng ngay
        </Button>
      </div>

      {/* {isOpen && <ModalDatHang onChange={(newV) => setIsOpen(newV)} isOpen={isOpen}></ModalDatHang>} */}
    </header>
  );
};

export default HeaderDatHang;
