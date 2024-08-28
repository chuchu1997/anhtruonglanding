"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const PhoneCall = () => {
  return (
    <div
      onClick={() => {
        window.location.href = "tel://0869229639";
      }}
      className="absolute top-[320px] transition-all duration-500 group-hover:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Button className="text-center justify-center  ">
        <span className="mr-2">Nhận tư vấn </span>
        <Image src="/phonecallred.jpg" alt="icon" width={20} height={20} className="group-hover:scale-125 scale-100 transition-all duration-400" />
      </Button>
    </div>
  );
};
export default PhoneCall;
