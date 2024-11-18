"use client";
import { Button } from "@/components/ui/button";
import { DialogContent, Dialog, DialogHeader, DialogFooter, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Image from "next/image";
import { TrangChu_API } from "@/axios/layout_api/trang_chu_api";
import { toast } from "@/hooks/use-toast";
import { Plus } from "react-feather";

const formSchema = z.object({
  title: z.string().min(2, "Title is required").max(50, "Title must be less than 50 characters"),
  description: z.string().min(2, "Description is required").max(50, "Description must be less than 50 characters"),
  imagePicked: z.union([z.instanceof(File), z.null()]).refine((file) => file != null, { message: "Image is required " }),
});

interface propsInterface {
  onCreateSuccess: Function;
}
const CreateBanner = (props: propsInterface) => {
  const { onCreateSuccess } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      imagePicked: undefined,
    },
  });

  const resetFormDataValue = () => {
    form.reset();
    setImagePreview(null);
  };
  const onPickImage = (event: any) => {
    const file = event.target.files?.[0] ?? undefined; // Set file as undefined if no file is selected
    if (file) {
      form.setValue("imagePicked", file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TrangChu_API;
    let res = await TrangChu_API.createBanner({ title: values.title, description: values.description, file: values.imagePicked });
    console.log("RES", res);
    if (res) {
      toast({
        title: "Tạo mới banner thành công ",
      });
      onCreateSuccess();
      resetFormDataValue();
      setIsOpen(false);
    }
    // resetFormDataValue();
    // setIsOpen(false);
  }
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open: boolean) => {
        if (open === false) {
          resetFormDataValue();
        }
        setIsOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)} className="btn btn-primary">
          <span className="mr-2">Tạo mới banner</span> <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> </DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="content flex flex-col gap-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tiêu đề chính của banner</FormLabel>
                      <FormControl>
                        <Input placeholder="Tiêu đề" {...field} />
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
                      <FormLabel>Mô tả của banner</FormLabel>
                      <FormControl>
                        <Input placeholder="Mô tả" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imagePicked"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username IAMGE</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" type="file" onChange={onPickImage} accept="image/*" />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {imagePreview != null && (
                  <div className="relative h-[300px] w-full">
                    <Image src={imagePreview} alt="image" fill className=" object-contain p-4 shadow-lg rounded-md"></Image>
                  </div>
                )}

                <Button type="submit" className="w-full mt-[30px]">
                  Tạo mới banner
                </Button>
              </form>
            </Form>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBanner;
