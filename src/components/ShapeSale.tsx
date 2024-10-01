import React from "react";
import { Tag } from "react-feather";

interface props {
  saleOff: number;
  price: number;
}
const ShapeSale = (props: props) => {
  const { saleOff, price } = props;

  const formatPrice = (amount: any) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="my-4 h-[100px] w-full mx-2 lg:w-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex py-4 gap-4 px-2 ">
      <Tag color="white"></Tag>
      <div>
        <p className="text-white font-semibold text-[14px]">Chiết khấu {saleOff}%</p>
        <p className="text-[yellow] font-semibold text-[16px]">Giá chỉ còn: {formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default ShapeSale;
