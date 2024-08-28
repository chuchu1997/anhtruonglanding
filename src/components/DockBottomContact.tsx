"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
const DockBottomContact = () => {
  return (
    <div className="bg-transparent fixed bottom-0 left-0 right-0 z-50  block sm:hidden ">
      <div className="container mx-auto p-2 flex justify-between items-center gap-8">
        <Button
          className="flex-1 uppercase font-bold"
          onClick={() => {
            window.location.href = "tel://0869229639";
          }}
        >
          <Image src="/phonecall.png" alt="phone" width={30} height={30} quality={40} priority />
          <span className="ml-4"> 0869 229 639</span>
        </Button>
        <Button
          className="flex-1 uppercase font-bold"
          onClick={() => {
            window.location.href = "http://zalo.me/0869229639";
          }}
        >
          <Image src="/zalo.png" alt="zalo" width={30} height={30} quality={40} priority />

          <span className="ml-4"> zalo tư vấn</span>
        </Button>
      </div>
    </div>
  );
};

export default DockBottomContact;
