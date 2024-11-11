"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 85,
    text: "Dự án",
  },
  {
    num: 15,
    text: "Nhà máy",
  },
  {
    num: 45,
    text: "khách hàng",
  },
];

const CountUpEffect = () => {
  return (
    <div className=" w-full">
      <div className="flex md:flex-row flex-col justify-between items-center gap-4 ">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-between">
            <CountUp end={item.num} duration={5} delay={1} className="text-4xl xl:text-6xl font-extrabold"></CountUp>
            <p className="text-xl xl:text-2xl font-extrabold capitalize">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountUpEffect;
