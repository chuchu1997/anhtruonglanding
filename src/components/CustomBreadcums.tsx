"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "./ui/button";

const CustomBreadcums = () => {
  const paths = usePathname();
  const pathNames = paths?.split("/").filter((path) => path);

  return (
    <div className="container mx-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {pathNames?.map((path) => (
            <div key={path} className="flex items-center gap-2">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href={`/${path}`}>{path}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </div>
          ))}

          {/* ... */}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default CustomBreadcums;
