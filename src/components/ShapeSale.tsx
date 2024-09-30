import React from "react";
import { Tag } from "react-feather";

interface props {
  saleOff: number;
  price: number;
}
const ShapeSale = (props: props) => {
  const { saleOff, price } = props;

  return (
    <div className="my-4 h-[100px] w-full mx-2 lg:w-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex py-4 gap-4 px-2 ">
      <Tag color="white"></Tag>
      <div>
        <p className="text-white font-semibold text-[14px]">Chiết khấu 10%</p>
        <p className="text-[yellow] font-semibold text-[16px]">Giá chỉ còn: 2.199.000</p>
      </div>
    </div>
  );
};

export default ShapeSale;
