"use client";
import { ProductAPI } from "@/axios/api/product";

import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import PaginationComponent from "@/components/PaginationComponent";
import { ProductProps } from "@/interfaces";
import GridLayout from "@/components/GridLayout";
import ProductComponent from "@/components/Product";
const SanPhamPage = () => {
  const totalItems = 100;
  const [totalPage, setTotalPage] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<ProductProps[]>([]);
  // for example, total items you have
  const itemsPerPage = 6; // items per page
  useEffect(() => {
    fetchProductTotalCount();
    fetchProductWithPagination(currentPage);
  }, []);

  useEffect(() => {}, [products]);
  const fetchProductTotalCount = async () => {
    let response = await ProductAPI.getProductTotalCount();
    const totalPages = Math.ceil(response.data.totalCount / itemsPerPage);
    setTotalPage(totalPages);
  };
  const fetchProductWithPagination = async (pageNumber: Number) => {
    setProducts([]);
    let response = await ProductAPI.getAllProducts(pageNumber);
    setProducts(response.data.products);
  };
  return (
    <div className="container mx-auto">
      <PaginationComponent
        pageCount={totalPage}
        currentPage={currentPage}
        onChangePage={async (pageChange) => {
          if (pageChange != currentPage) {
            setCurrentPage(pageChange);
            await fetchProductWithPagination(pageChange);
          }
        }}
      ></PaginationComponent>
      <GridLayout>
        {/* <ProductComponent _id = {product}></ProductComponent> */}
        {products.map((product) => {
          return (
            <ProductComponent
              key={product._id}
              id={product.id}
              _id={product._id}
              title={product.title}
              price={product.price}
              hashtag={product.hashtag}
              categoryID={product.categoryID}
              imagesObject={product.imagesObject}
              dropshipFrom={product.dropshipFrom}
            ></ProductComponent>
          );
        })}
      </GridLayout>
    </div>
  );
};

export default SanPhamPage;
