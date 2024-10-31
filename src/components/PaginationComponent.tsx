"use client";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
interface propsType {
  className?: string;
  pageCount: number;
  currentPage: number;
  onChangePage: (pageChange: number) => void;
}
const PaginationComponent = ({ className, pageCount, currentPage, onChangePage }: propsType) => {
  return (
    <Pagination className={`${className} flex items-end justify-end `}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/" />
        </PaginationItem>
        {Array.from({ length: pageCount }).map((_, index) => (
          <PaginationItem key={index}>
            {/* <PaginationLink >{index + 1}</PaginationLink> */}
            <PaginationLink
              className="cursor-pointer"
              isActive={currentPage == index + 1 ? true : false}
              onClick={() => {
                onChangePage(index + 1);
              }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        {/* <PaginationItem>
          <PaginationLink isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem> */}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComponent;
