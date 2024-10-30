"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { randomUUID } from "crypto";
import React from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { v4 as uuidv4 } from "uuid";
import { toast } from "@/hooks/use-toast";
import { ProductAPI } from "@/axios/api/product";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
const MAX_IMAGE_SIZE = 5242880; // 5 MB
const FormSchema = z.object({
  images: z
    .custom<FileList>((val) => val instanceof FileList, "Required")
    .refine((files) => files.length > 0, `Required`)
    .refine((files) => files.length <= 5, `Maximum of 5 images are allowed.`)
    .refine((files) => Array.from(files).every((file) => file.size <= MAX_IMAGE_SIZE), `Each file size should be less than 5 MB.`)
    .refine(
      (files) => Array.from(files).every((file) => ALLOWED_IMAGE_TYPES.includes(file.type)),
      "Only these types are allowed .jpg, .jpeg, .png and .webp"
    ),
  title: z.string({
    required_error: "Vui lòng chọn danh mục ",
  }),
  category: z.string({
    required_error: "Vui lòng chọn danh mục ",
  }),
  description: z.string({
    required_error: "Vui lòng nhập mô tả sản phẩm ",
  }),

  price: z.string({
    required_error: "Vui lòng nhập giá sản phẩm ",
  }),
  amount: z.string({
    required_error: "Vui lòng nhập số lượng sản phẩm ",
  }),
  hashtag: z.string({
    required_error: "Vui lòng nhập hashtag ",
  }),
  dropshipFrom: z.string({}),
});
const TaoSanPhamMoi = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      dropshipFrom: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    //TODO: PLEASE ADD MA SAN PHAM !!
    let response = await ProductAPI.createNewProduct(data);
    console.log("RESPONSE", response);
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <div className="mt-[10px] p-4  border border-[#cccccc] rounded-lg container mx-auto w-full md:w-6/12 flex flex-col gap-6">
      <h2 className="text-[32px] uppercase font-semibold text-center italic">tạo mới sản phẩm</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Danh mục sản phẩm</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Chọn loại danh mục" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên sản phẩm</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} defaultValue={field.value} placeholder="shadcn" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mô tả sản phẩm</FormLabel>
                <FormControl>
                  <Textarea onChange={field.onChange} defaultValue={field.value} placeholder="Mô tả sản phẩm" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="images"
            render={({ field: { value, onChange, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Hình ảnh sản phẩm</FormLabel>
                <FormControl>
                  <Input
                    {...fieldProps}
                    placeholder="Picture"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(event) => onChange(event.target.files)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Giá sản phẩm</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} defaultValue={field.value} type="number" placeholder="Mô tả sản phẩm" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số lượng</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Mô tả sản phẩm" onChange={field.onChange} defaultValue={field.value} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="hashtag"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hashtag</FormLabel>
                <FormControl>
                  <Textarea placeholder="Hashtag" onChange={field.onChange} defaultValue={field.value} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="dropshipFrom"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dropship Link</FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder="Mô tả sản phẩm" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Tạo mới sản phẩm
          </Button>
        </form>
      </Form>
      {/* <h2 className="text-[32px] uppercase font-semibold text-center italic">tạo mới sản phẩm</h2>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Chọn loại danh mục" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input type="text" placeholder="Tên sản phẩm" />

      <Textarea placeholder="Mô tả sản phẩm" />

      <Input type="text" placeholder="Giá sản phẩm " />
      <Input type="number" placeholder="Số lượng" />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Chọn hình ảnh </Label>
        <Input id="picture" type="file" multiple accept="image/png, image/gif, image/jpeg, image/webp" />
      </div>

      <Input required type="text" placeholder="hashtag" /> */}
    </div>
  );
};

export default TaoSanPhamMoi;
