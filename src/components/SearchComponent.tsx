"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

import React, { useState } from "react";
import { ProductProps } from "@/interfaces";
import { Label } from "./ui/label";
import { Search } from "react-feather";
import { SearchAPI } from "@/axios/api/search";

interface searchInterface {
  className?: string;
}
const SearchComponent = ({ className }: searchInterface) => {
  const [productsSearch, setProductsSearch] = useState<ProductProps[]>([]);
  const onSearchFieldChange = async (searchContent: any) => {
    let response = await SearchAPI.searchWithText(searchContent);
    console.log("RES", response);
    if (response) {
      setProductsSearch(response.data.searchResults);
    }
  };

  return (
    <>
      <div className={`w-full md:w-2/4  text-white relative  ${className}`}>
        <Input
          placeholder="Tìm kiếm sản phẩm"
          className="text-black"
          onChange={(e) => {
            if (e.target.value === "") {
              setProductsSearch([]);
            } else {
              onSearchFieldChange(e.target.value);

              // setProductsSearch(productsSearch);
            }
          }}
        />

        <div className="cursor-pointer px-2 absolute top-1/2 right-[5px] transform  -translate-y-1/2">
          <Search color="black" />
        </div>

        {productsSearch.length > 0 && (
          <div className="absolute rounded-md border border-[#cccccc] bg-[white] text-[black] bottom-[-185px] h-[180px] overflow-y-auto left-0 right-0 p-2 ">
            <div className="wrapper divide-y flex flex-col gap-4 justify-center">
              {productsSearch.map((product) => {
                return (
                  <div key={product._id} className="content flex justify-between items-center p-2 cursor-pointer group">
                    <Image
                      className="group-hover:scale-110 transition-transform duration-200 ease-in-out"
                      src="/logo.png"
                      alt="product image"
                      width={50}
                      height={50}
                      quality={80}
                    ></Image>
                    <div>{product.title}</div>
                    <div className="text-[red] font-bold">{product.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* <div></div> */}
    </>
  );
};

export default SearchComponent;
