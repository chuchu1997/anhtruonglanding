"use client";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import { GlobalProvider } from "@/GlobalProvider";
import React, { useEffect } from "react";
import LoginPage from "./loginLayout";

const MainLayout = ({ children }: any) => {
  let access_token = null;

  // if (access_token == null) {
  //   return <LoginPage />;
  // }
  useEffect(() => {
    access_token = window.localStorage.getItem("access_token");
  }, []);

  if (access_token == null) {
    return <LoginPage></LoginPage>;
  }
  return (
    <GlobalProvider>
      <Header />
      <div className="min-h-[500px] pt-[180px]">
        <Categories></Categories>
        {children}
      </div>
    </GlobalProvider>
  );
};

export default MainLayout;
