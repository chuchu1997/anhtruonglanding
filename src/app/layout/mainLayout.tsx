"use client";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import { GlobalProvider } from "@/GlobalProvider";
import React, { useEffect, useState } from "react";
import LoginPage from "./loginLayout";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const MainLayout = ({ children }: any) => {
  const [accessToken, setAccessToken] = useState("");

  // if (access_token == null) {
  //   return <LoginPage />;
  // }
  useEffect(() => {
    setAccessToken(window.localStorage.getItem("access_token") ?? "");
  }, [accessToken]);

  if (accessToken == "") {
    return <LoginPage></LoginPage>;
  } else {
    return (
      <SidebarProvider>
        <AppSidebar />
        <main>
          <Header />
        </main>
        <div className="mt-[170px] w-full ">
          <SidebarTrigger />
          {children}
        </div>
      </SidebarProvider>
      // <GlobalProvider>
      //   <Header />
      //   <div className="min-h-[500px] pt-[180px]">
      //     {/* <Categories></Categories> */}
      //     {children}
      //   </div>
      // </GlobalProvider>
    );
  }
};

export default MainLayout;
