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
  return (
    <div className="page-container h-screen  ">
      <SectionComponent titleSection="sản phẩm hot">
        <GridLayout className="pc-layout hidden md:grid">
          {products.map((product) => (
            <ProductComponent key={product.id} title={product.title} imageSrc={product.imageSrc} linkHref={product.linkHref}></ProductComponent>
          ))}
        </GridLayout>

        <GridLayout className="mobile block md:hidden">
          <CarouselForProductsMobile products={products}></CarouselForProductsMobile>
        </GridLayout>
      </SectionComponent>
      {/* SECTION 2 */}
      <SectionComponent titleSection="sản phẩm mới" className="mt-[50px]">
        <GridLayout className="pc-layout hidden md:grid">
          {products.map((product) => (
            <ProductComponent key={product.id} title={product.title} imageSrc={product.imageSrc} linkHref={product.linkHref}></ProductComponent>
          ))}
        </GridLayout>

        <GridLayout className="mobile block md:hidden">
          <CarouselForProductsMobile products={products}></CarouselForProductsMobile>
        </GridLayout>
      </SectionComponent>
    </div>
  );
}
