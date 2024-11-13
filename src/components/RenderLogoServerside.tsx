import React from "react";
import Image from "next/image";
import { Logo_API } from "@/axios/layout_api/logo";
export default async function RenderLogoServerSide() {
  let logo = "";
  const fetchLogo = async () => {
    let response = await Logo_API.getLogo();
    logo = response.data;
  };
  await fetchLogo();

  return <Image src={logo} fill objectFit="contain" quality={100} priority alt="logo" />;
}
