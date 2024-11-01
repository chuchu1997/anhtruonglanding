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
import React, { useEffect, useState } from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { v4 as uuidv4 } from "uuid";
import { toast } from "@/hooks/use-toast";
import { ProductAPI } from "@/axios/api/product";
import { CategoryAPI } from "@/axios/api/category";
import { CategoryProps } from "@/interfaces";
import { Switch } from "@/components/ui/switch";

const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
const MAX_IMAGE_SIZE = 5242880; // 5 MB

const FormSchemaCategory = z.object({
  name: z.string().min(2, {
    message: "Vui lòng nhập tên danh mục",
  }),
  description: z.string({}),
  parentCategory: z.string({}),
  // name: z.string({
  //   required_error: "Vui lòng nhập danh mục ",
  // }),
});
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
  masanpham: z.string({}),
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
  bestSelling: z.boolean({}),
});
const TaoSanPhamMoi = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    let response = await CategoryAPI.getAllCategory();
    if (response) {
      setCategories(response.data);
    }
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      bestSelling: false,
    },
  });

  const formCategory = useForm<z.infer<typeof FormSchemaCategory>>({
    resolver: zodResolver(FormSchemaCategory),
    defaultValues: {
      name: "",
      description: "",
      parentCategory: "",
    },
  });

  async function onSubmitCreateCategory(data: z.infer<typeof FormSchemaCategory>) {
    let response = await CategoryAPI.createCategory({ name: data.name, description: data.description, parentCategory: data.parentCategory });
    if (response) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
      await fetchAllCategories();
    }
  }
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    //TODO: PLEASE ADD MA SAN PHAM !!
    console.log("DATA", data);
    let response = await ProductAPI.createNewProduct(data);
    console.log("RESPONSE", response);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="mt-[10px] p-4  border border-[#cccccc] rounded-lg container mx-auto w-full md:w-6/12 flex flex-col gap-6">
      <h2 className="text-[32px] uppercase font-semibold text-center italic">tạo mới sản phẩm</h2>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Tạo mới danh mục</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Tạo danh mục mới</DialogTitle>
              <DialogDescription>Nhập thông tin.</DialogDescription>
            </DialogHeader>
            <Form {...formCategory}>
              <form onSubmit={formCategory.handleSubmit(onSubmitCreateCategory)} className="w-full space-y-6">
                <FormField
                  control={formCategory.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tên danh mục</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={formCategory.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mô tả</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Tạo Mới Danh mục</Button>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
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
                        <SelectLabel>Danh mục</SelectLabel>
                        <div className="create-category my-4 px-4"></div>
                        {categories.map((category) => (
                          <SelectItem value={category._id} key={category._id}>
                            {category.name}
                          </SelectItem>
                        ))}
                        {/* <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem> */}
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
            name="masanpham"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mã sản phẩm</FormLabel>
                <FormControl>
                  <Input onChange={field.onChange} defaultValue={field.value} placeholder="shadcn" />
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

          <FormField
            control={form.control}
            name="bestSelling"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Sản phẩm bán chạy ?</FormLabel>
                </div>
                <FormControl>
                  <Switch checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Tạo mới sản phẩm
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TaoSanPhamMoi;
