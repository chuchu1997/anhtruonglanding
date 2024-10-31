"use client";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import { GlobalProvider } from "@/GlobalProvider";
import React, { useEffect, useState } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }: any) => {
  const pathname = usePathname();
  // if (access_token == null) {
  //   return <LoginPage />;
  // }
  if (pathname == "/login") {
    return <div>{children}</div>;
  }

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
};

export default MainLayout;
