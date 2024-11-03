
'use client';
import React ,{useEffect , useState, CSSProperties} from 'react';
import { useModal } from '../context/ModalContext';
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { X } from "react-feather";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import MoonLoader from "react-spinners/MoonLoader";
  import { Button } from "@/components/ui/button";
import Image from 'next/image';
  interface props {
    className?: string;
    isOpen: boolean;
    onChange: (isOpen: boolean) => void;
  }
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const FormSchema = z.object({
    username: z.string().min(2, {
      message: "Vui lòng nhập tên của bạn .",
    }),
    address: z.string().min(2, {
      message: "Vui lòng nhập địa chỉ của bạn .",
    }),
    phonenumber: z.string().min(2, {
      message: "Vui lòng nhập số điện thoại của bạn .",
    }),
    amount:z.string().min(1,{
      message:"Vui lòng nhập số lượng "
    })
  });
const ModalPage: React.FC = () => {
    const form = useForm<z.infer<typeof FormSchema>>({

        resolver: zodResolver(FormSchema),
        defaultValues: {
          username: "",
          address: "",
          phonenumber: "",
        },
      });
    
      let [loading, setLoading] = useState(false);
      useEffect(() => {
      }, []);
    
  const { isVisible, closeModal } = useModal();
    
  if (!isVisible) return null;
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();

    formData.append("address", data.address);
    formData.append("phoneNumber", data.phonenumber);
    formData.append("username", data.username);
    formData.append("amount",data.amount);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      window.alert(result.message);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      window.alert("Xảy ra lỗi không thể đặt hàng");
    }
  }

  return (
    <div
    className={`fixed  top-0 bottom-0 left-0 right-0 h-screen z-50 overflow-hidden   flex items-center justify-center  bg-gray-900 bg-opacity-50  `}
  >
    <div className="bg-white  shadow-lg p-6 max-w-md w-full relative h-full overflow-y-auto ">
      <div
        className="absolute right-[12px] top-[5px] bg-[grey] rounded-md p-1 cursor-pointer"
        onClick={closeModal}
      >
        <X color={"white"} size={20}></X>
      </div>
      <h2 className="text-xl font-bold text-center mb-2 text-[24px] uppercase italic">
        Thuốc trị hôi nách{" "}
      </h2>
      <h2 className="text-xl font-bold text-center mb-4 text-[14px] uppercase italic">
       Khi mua 1 sản phẩm phí ship 20k  {" "}
      </h2>
      <h2 className="text-xl font-bold text-center mb-4 text-[14px] uppercase italic">
        Miễn phí giao hàng khi mua từ 2 sản phẩm  {" "}
      </h2>
      {/* <div className= "relative h-[200px]" >
      <Image src = "/thuoctrihoinach/1.jpg" alt = "image" objectFit='cover' className = "object-center" fill quality={80}/>
      </div> */}
     
      <Form {...form} >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tên của bạn</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                    placeholder="Vui lòng nhập tên của bạn"
               
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Số điện thoại</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập số điện thoại" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nhập địa chỉ</FormLabel>
                <FormControl>
                  <Input placeholder="Nhập địa chỉ nhận hàng" {...field} />
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
                  <Input type='number' placeholder="Nhập Số lượng" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Đặt hàng ngay
          </Button>
        </form>
      </Form>
  
    </div>

    {loading && (
      <div className="fixed z-50 h-screen left-0 right-0 bg-[#eeeeee]/70 flex items-center">
        <MoonLoader
          loading={loading}
          cssOverride={override}
          size={100}
          color="#134B70"
        />
      </div>
    )}
  </div>
  );
};

export default ModalPage;