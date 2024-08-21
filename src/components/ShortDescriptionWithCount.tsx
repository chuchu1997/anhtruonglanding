"use client";
import React from "react";
import CountUp from "react-countup";

const items = [
  {
    num: 20,
    text: "Năm Kinh Nghiệm",
  },
  {
    num: 10,
    text: "Kênh Bán Hàng",
  },
  {
    num: 100000,
    text: "Khách Hàng",
  },
  {
    num: 500,
    text: "Sản Phẩm",
  },
];
const ShortDescriptionWithCount = () => {
  return (
    <section className="pb-4 pt-10 xl:pt-0">
      <div className=" flex-col md:flex-row flex items-center justify-between gap-10 max-w-[80vw] mx-auto xl:max-w-none">
        {items.map((item, index) => {
          return (
            <div key={index} className="flex-1 flex gap-6 items-center justify-start  w-full">
              <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-black/80`}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShortDescriptionWithCount;
