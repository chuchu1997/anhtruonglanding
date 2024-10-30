import dynamic from "next/dynamic";

import { ProductProps } from "@/interfaces";
import ProductComponent from "@/components/Product";
import GridLayout from "@/components/GridLayout";
import CarouselForProductsMobile from "@/components/CarouselForProductsMobile";
import SectionComponent from "@/components/Section";

export default function Home() {
  const products: ProductProps[] = [
    {
      id: "zz",
      title: "test",
      description: "sdqd",
      price: "1",
      linkHref: "/",
      imageSrc: "/mayphunxitapluccao.png",
    },
    {
      id: "zz1",
      title: "test",
      description: "sdqd",
      price: "1",
      linkHref: "/",
      imageSrc: "/mayphunxitapluccao.png",
    },
    {
      id: "zz2",
      title: "test",
      description: "sdqd",
      price: "1",
      linkHref: "/",
      imageSrc: "/mayphunxitapluccao.png",
    },
    {
      id: "zz4",
      title: "test",
      description: "sdqd",
      price: "1",
      linkHref: "/",
      imageSrc: "/mayphunxitapluccao.png",
    },
    {
      id: "zzb",
      title: "test",
      description: "sdqd",
      price: "1",
      linkHref: "/",
      imageSrc: "/mayphunxitapluccao.png",
    },
    {
      id: "zz1zg",
      title: "test",
      description: "sdqd",
      price: "1",
      linkHref: "/",
      imageSrc: "/mayphunxitapluccao.png",
    },
  ];
  return <div className="page-container h-screen ">THIS IS TEXT</div>;
}
