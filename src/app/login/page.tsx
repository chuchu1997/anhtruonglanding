"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { AuthAPI } from "@/axios/api/auth";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";

const LoginPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  //   const cookies = useCookies();
  useEffect(() => {
    if (getCookie("access_token")) {
      router.push("/");
    }
  }, []);

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
              let json = { username: "anhtruong", password: "123" };

              //   let response = await fetch("/api/authNext", {
              //     method: "POST",
              //     headers: { "Content-Type": "application/json" },
              //     body: JSON.stringify(json),
              //   });
              //   if (response.ok) {
              //     console.log("done");
              //     router.push("/");
              //   } else {
              //     window.alert("Wrong username or password");
              //   }

              let response = await AuthAPI.login({ username: "anhtruong", password: "123" });
              if (response) {
                setCookie("access_token", response.data.access_token);
                router.push("/");

                // cookies.set("access_token", response.data.access_token);
                // window.localStorage.setItem("access_token", response.data.access_token);
                // // coo
                // router.push("/");
              }
              //   window.localStorage.setItem("access_token", response.data.access_token);
              //   window.location.href = "/";
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
