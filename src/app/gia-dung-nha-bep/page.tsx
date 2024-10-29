import GridLayout from "@/components/GridLayout";
import PaginationComponent from "@/components/PaginationComponent";
import ProductComponent from "@/components/Product";
import { Button } from "@/components/ui/button";
import { ProductProps } from "@/interfaces";

import React from "react";

const GiaDungNhaBep = () => {
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
    <div className="container mx-auto">
      {/* <h1 className="font-semibold italic">Gia dụng nhà bếp :</h1> */}
      <PaginationComponent />

      <GridLayout className="pc-layout hidden md:grid">
        {products.map((product) => (
          <ProductComponent key={product.id} title={product.title} imageSrc={product.imageSrc} linkHref={product.linkHref}></ProductComponent>
        ))}
      </GridLayout>
    </div>
  );
};

export default GiaDungNhaBep;
