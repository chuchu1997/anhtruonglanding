import React from "react";
import Image from "next/image";
import Link from "next/link";
import { data } from "@/data/data";
interface CategoryItemProps {
  title: string;
  imageSrc: string;
  linkHref: string;
  className?: string;
}

export const CategoryItem = ({ title, imageSrc, linkHref, className }: CategoryItemProps) => {
  return (
    <Link href={linkHref} className={`flex flex-col items-center  gap-2 group ${className}`}>
      <Image
        src={imageSrc}
        alt="category-image"
        width={50}
        height={50}
        quality={80}
        className="group-hover:scale-110 transition-transform duration-200 ease-in-out"
      ></Image>
      <p className="text-center group-hover:text-[blue] max-w-[120px]">{title}</p>
    </Link>
  );
};
const Categories = () => {
  return (
    <div className="container mx-auto p-2 hidden md:block  my-[20px]">
      <h2 className="mb-[15px] uppercase font-semibold italic">Danh mục (*)</h2>
      <div className="grid  md:grid-cols-4 lg:grid-cols-8 gap-4 font-normal italic text-[14px]">
        {data.categoriesData.map((category) => (
          <CategoryItem key={category.title} title={category.title} linkHref={category.linkHref} imageSrc={category.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
