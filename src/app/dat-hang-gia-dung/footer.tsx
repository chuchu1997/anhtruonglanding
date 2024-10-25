"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ModalDatHang from "./modalDatHang";

const FooterDatHang = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="bg-[#134B70] z-10 footer fixed bottom-0 left-0 right-0 py-4   flex justify-center gap-8 items-center ">
      <h2 className="text-white font-bold border-2 border-white px-4 rounded-lg text-[22px] uppercase">Sale 50%</h2>
      <Button
        className="rounded py-0"
        onClick={() => {
          var elmntToView = document.getElementById("danhgia");
          elmntToView?.scrollIntoView();
        }}
      >
        Xem Đánh Giá
      </Button>
      {/* <Button
        className="rounded-full py-0"
        onClick={() => {
          setIsOpen(!isOpen);

          document.body.style.overflow = "hidden";
        }}
      >
        Đặt Hàng Ngay
      </Button>

      {isOpen && <ModalDatHang onChange={(newV) => setIsOpen(newV)} isOpen={isOpen}></ModalDatHang>} */}
    </footer>
  );
};

export default FooterDatHang;
