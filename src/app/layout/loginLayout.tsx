"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import { AuthAPI } from "@/axios/api/auth";

const LoginPage = () => {
  const { toast } = useToast();
  return (
    <div className="max-h-screen  bg-gradient-to-r from-cyan-500 to-blue-500 h-screen ">
      <div className="container mx-auto bg-[white] w-4/12 h-screen pt-[200px] flex flex-col gap-4">
        <div>
          <Label>Tên tài khoản</Label>
          <Input placeholder="Nhập tên tài khoản" type="text"></Input>
        </div>

        <div>
          <Label>Mật Khẩu</Label>
          <Input placeholder="Nhập mật khẩu" type="password"></Input>
        </div>

        <Button
          onClick={async () => {
            try {
              let response = await AuthAPI.login({ username: "anhtruong", password: "123" });

              window.localStorage.setItem("access_token", response.data.access_token);
              window.location.href = "/";
            } catch (e) {
              toast({
                variant: "destructive",
                title: "Sai thông tin đăng nhập !!!",
                // description: "Friday, February 10, 2023 at 5:57 PM",
              });
            }
          }}
        >
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
