"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
import React, { useState } from "react";
import { ProductProps } from "@/interfaces";
import { Label } from "./ui/label";

const SearchComponent = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  const [productsSearch, setProductsSearch] = useState<ProductProps[]>([
    // {
    //   title: "ss",
    //   linkHref: "",
    //   imageSrc: "",
    // },
  ]);
  return (
    <>
      {/* <Form {...form}>
        <form className="w-2/4 space-y-6 text-white relative">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tìm kiếm</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} className="text-black" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form> */}
      <div className="w-2/4 space-y-6 text-white relative">
        <Label>Tìm kiếm</Label>
        <Input
          placeholder="shadcn"
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
        {productsSearch.length > 0 && (
          <div className="absolute rounded-md border border-[#cccccc] bg-[white] text-[black] bottom-[-185px] h-[180px] overflow-y-auto left-0 right-0 p-2 ">
            <div className="wrapper divide-y flex flex-col gap-4 justify-center">
              <div className="content flex justify-between items-center p-2 ">
                <Image src="/logo.png" alt="product image" width={50} height={50} quality={80}></Image>
                <div>PRODUCT TITLE</div>
                <div>PRICE</div>
              </div>
              <div className="content flex justify-between items-center p-2 ">
                <Image src="/logo.png" alt="product image" width={50} height={50} quality={80}></Image>
                <div>PRODUCT TITLE</div>
                <div>PRICE</div>
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
