"use client";
import dynamic from "next/dynamic";

import { ProductProps } from "@/interfaces";
import ProductComponent from "@/components/Product";
import GridLayout from "@/components/GridLayout";
import CarouselForProductsMobile from "@/components/CarouselForProductsMobile";
import SectionComponent from "@/components/Section";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

export default function Home() {
  const router = useRouter();

  return <div className="page-container h-screen ">DASHBOARD</div>;
}
