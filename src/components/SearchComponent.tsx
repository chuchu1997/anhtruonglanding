"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

import React, { useState } from "react";
import { ProductProps } from "@/interfaces";
import { Label } from "./ui/label";
import { Search } from "react-feather";

interface searchInterface {
  className?: string;
}
const SearchComponent = ({ className }: searchInterface) => {
  const [productsSearch, setProductsSearch] = useState<ProductProps[]>([]);
  const onSearchFieldChange = (searchContent: any) => {};

  return (
    <>
      <div className={`w-full md:w-2/4  text-white relative ${className}`}>
        <Input
          placeholder="Tìm kiếm sản phẩm"
          className="text-black"
          onChange={(e) => {
            console.log("E", e.target.value);
            console.log("HEHE");
            if (e.target.value === "") {
              setProductsSearch([]);
            } else {
              setProductsSearch([
                ...productsSearch,
                {
                  title: "ss",
                  linkHref: "",
                  imageSrc: "",
                },
              ]);
            }
          }}
        />

        <div className="cursor-pointer px-2 absolute top-1/2 right-[5px] transform  -translate-y-1/2">
          <Search color="black" />
        </div>

        {productsSearch.length > 0 && (
          <div className="absolute rounded-md border border-[#cccccc] bg-[white] text-[black] bottom-[-185px] h-[180px] overflow-y-auto left-0 right-0 p-2 ">
            <div className="wrapper divide-y flex flex-col gap-4 justify-center">
              <div className="content flex justify-between items-center p-2 cursor-pointer group">
                <Image
                  className="group-hover:scale-110 transition-transform duration-200 ease-in-out"
                  src="/logo.png"
                  alt="product image"
                  width={50}
                  height={50}
                  quality={80}
                ></Image>
                <div>PRODUCT TITLE</div>
                <div>PRICE</div>
              </div>
              <div className="content flex justify-between items-center p-2 cursor-pointer group">
                <Image
                  className="group-hover:scale-110 transition-transform duration-200 ease-in-out"
                  src="/logo.png"
                  alt="product image"
                  width={50}
                  height={50}
                  quality={80}
                ></Image>
                <div>PRODUCT TITLE</div>
                <div className="text-[red] font-bold">PRICE</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div></div> */}
    </>
  );
};

export default SearchComponent;
